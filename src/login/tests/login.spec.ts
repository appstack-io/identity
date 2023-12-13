import { createChannel, createClient, Metadata } from 'nice-grpc';
import {
  LoginServiceClient,
  LoginServiceDefinition,
} from '@appstack-io/client';
import { shutdownComponents } from '@appstack-io/main';
import { v4 as uuid } from 'uuid';
import { LoginCreateOneInput } from '../../combined.interfaces';
import {
  isE2E,
  login,
  runMain,
  setupArangoDb,
  useHost,
  usePorts,
} from '@appstack-io/tests';
import { MainMicroservicesModule } from './components/main.microservices.module';
import { MainHttpModule } from './components/main.http.module';

describe('Login', () => {
  let client: LoginServiceClient;
  const metadata = new Metadata();

  beforeAll(async () => {
    await setupArangoDb();
    const ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    client = createClient(LoginServiceDefinition, channel);
    if (!isE2E())
      await runMain({
        publicMicroservicesModule: MainMicroservicesModule,
        privateMicroservicesModule: MainMicroservicesModule,
        publicHttpModule: MainHttpModule,
        privateHttpModule: MainHttpModule,
      });
    const { accessToken } = await login(ports);
    metadata.set('jwt', accessToken);
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('CreateOne + FindWhere', async () => {
    // Arrange
    const input: Partial<LoginCreateOneInput> = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };

    // Act
    const created = await client.createOne(input, { metadata });
    const found = await client.findWhere(input, { metadata });

    // Assert
    expect(found).toEqual(created);
  });

  test('FindWhere: ByPlatformId', async () => {
    // Arrange
    const input = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const created = await client.createOne(input, { metadata });

    // Act
    const found = await client.findByPlatformId(input, { metadata });

    // Assert
    expect(found).toEqual(created);
  });

  test('UpdateOne', async () => {
    // Arrange
    const input = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const update = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const created = await client.createOne(input, { metadata });

    // Act
    const updated = await client.updateOne(
      { id: created.id, ...update },
      { metadata },
    );

    // Assert
    expect(updated).toEqual({ ...created, ...updated });
  });

  test('RemoveOne', async () => {
    // Arrange
    const input = {
      platform: uuid(),
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      credentials: { local: { username: uuid(), password: uuid() } },
    };
    const created = await client.createOne(input, { metadata });

    // Act
    await client.removeOne({ id: created.id }, { metadata });

    // Assert
    await expect(client.findWhere(input, { metadata })).rejects.toThrow(
      'not found',
    );
  });
});
