import { Metadata, UserService } from '../../client';

import { shutdownComponents } from '@appstack-io/main';
import { v4 as uuid } from 'uuid';
import {
  isE2E,
  login,
  runMain,
  setupArangoDb,
  usePorts,
} from '@appstack-io/tests';
import { MainMicroservicesModule } from './components/main.microservices.module';
import { MainHttpModule } from './components/main.http.module';

describe('User', () => {
  let client: UserService;
  let clientInternal: UserService;
  let ports: {
    protoInternal: number;
    proto: number;
    http: number;
    httpInternal: number;
    ws: number;
    workers: number;
  };

  beforeAll(async () => {
    await setupArangoDb();
    ports = await usePorts();
    client = new UserService({ port: `${ports.proto}` });
    clientInternal = new UserService({ port: `${ports.protoInternal}` });
    if (!isE2E())
      await runMain({
        publicMicroservicesModule: MainMicroservicesModule,
        privateMicroservicesModule: MainMicroservicesModule,
        publicHttpModule: MainHttpModule,
        privateHttpModule: MainHttpModule,
      });
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne with self ownership', async () => {
    // Arrange
    const metadata = new Metadata();
    const { accessToken, userId } = await login(ports);
    metadata.set('jwt', accessToken);

    const update = { name: uuid() };

    // Act + Assert
    await expect(
      client.updateOne({ id: userId, ...update }, metadata),
    ).resolves.toBeDefined();
    await expect(
      client.findOne({ id: userId }, metadata),
    ).resolves.toBeDefined();
    await expect(client.removeOne({ id: userId }, metadata)).rejects.toThrow(
      'permission denied',
    );
  });

  test('CreateOne + FindOne', async () => {
    // Arrange
    const input = { name: uuid() };

    // Act
    const created = await clientInternal.createOne(input);
    const found = await clientInternal.findOne({ id: created.id });

    // Assert
    expect(found).toEqual(created);
  });

  test('FindMe', async () => {
    // Arrange
    const metadata = new Metadata();
    const { accessToken, userId } = await login(ports);
    metadata.set('jwt', accessToken);

    // Act
    const found = await client.findMe({}, metadata);

    // Assert
    expect(found.id).toEqual(userId);
  });

  test('UpdateOne', async () => {
    // Arrange
    const input = { name: uuid() };
    const update = { name: uuid() };
    const created = await clientInternal.createOne(input);

    // Act
    const updated = await clientInternal.updateOne({
      id: created.id,
      ...update,
    });

    // Assert
    expect(updated).toEqual({ ...created, ...updated });
  });

  test('RemoveOne', async () => {
    // Arrange
    const input = { name: uuid() };
    const created = await clientInternal.createOne(input);

    // Act
    await clientInternal.removeOne({ id: created.id });

    // Assert
    await expect(clientInternal.findOne({ id: created.id })).rejects.toThrow(
      'not found',
    );
  });

  test('Search', async () => {
    // Arrange
    const input = { name: uuid().replace(/-/g, ' ') };
    const token = input.name.split(' ')[0];
    for (let i = 0; i < 7; i++) {
      await clientInternal.createOne({ ...input, name: `${input.name} ${i}` });
    }

    // Act
    const all = await clientInternal.search({
      filter: { name: token },
      opts: { limit: 10, offset: 0, waitForSync: true },
    });
    const page1 = await clientInternal.search({
      filter: { name: token },
      opts: { limit: 3, offset: 0, waitForSync: true },
    });
    const lastOffset = page1.meta.offset;
    const page2 = await clientInternal.search({
      filter: { name: token },
      opts: { limit: 3, offset: lastOffset, waitForSync: true },
    });

    // Assert
    expect(all.users.length).toEqual(7);
    expect(page1.users).toEqual(all.users.slice(0, 3));
    expect(page2.users).toEqual(all.users.slice(3, 6));
  });
});
