import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { createChannel, createClient, Metadata } from 'nice-grpc';
import {
  LoginServiceClient,
  LoginServiceDefinition,
  UserServiceClient,
  UserServiceDefinition,
} from '@appstack-io/client';
import { isE2E, runMain, useHost, usePorts } from '@appstack-io/tests';
import { MainMicroservicesModule } from './tests/components/main.microservices.module';
import { MainHttpModule } from './tests/components/main.http.module';

describe('Auth: Local', () => {
  let ports: {
    protoInternal: number;
    proto: number;
    http: number;
    httpInternal: number;
    workers: number;
    ws: number;
  };
  let userClient: UserServiceClient;
  let loginClient: LoginServiceClient;
  const metadata = new Metadata();
  metadata.set(
    'jwt',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pF3q46_CLIyP_1QZPpeccbs-hC4n9YW2VMBjKrSO6Wg',
  );

  beforeAll(async () => {
    ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    const channelInternal = createChannel(`${host}:${ports.protoInternal}`);
    userClient = createClient(UserServiceDefinition, channelInternal);
    loginClient = createClient(LoginServiceDefinition, channel);
    if (!isE2E())
      await runMain({
        publicMicroservicesModule: MainMicroservicesModule,
        privateMicroservicesModule: MainMicroservicesModule,
        publicHttpModule: MainHttpModule,
        privateHttpModule: MainHttpModule,
      });
  });

  test('Login: Fail external', async () => {
    // Arrange
    const user = await userClient.createOne({ name: uuid() });
    const loginInput = {
      platform: 'local',
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      userId: user.id,
    };
    await loginClient.createOne(loginInput, { metadata });

    const input = {
      username: loginInput.platformLoginId,
      password: loginInput.platformLoginSecret,
    };

    // Act
    const p = axios.post(
      `http://localhost:${ports.http}/auth/local/login`,
      input,
    );

    // Assert
    await expect(p).rejects.toThrow('Request failed with status code 403');
  });

  test('Login: exists', async () => {
    // Arrange
    const user = await userClient.createOne({ name: uuid() });
    const loginInput = {
      platform: 'local',
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      userId: user.id,
    };
    await loginClient.createOne(loginInput, { metadata });

    const input = {
      username: loginInput.platformLoginId,
      password: loginInput.platformLoginSecret,
    };

    // Act
    const response = await axios.post(
      `http://localhost:${ports.httpInternal}/auth/local/login`,
      input,
    );

    // Assert
    expect(response.data).toEqual({
      userId: loginInput.userId,
      accessToken: expect.any(String),
    });
  });

  test('Login: new', async () => {
    // Arrange
    const input = {
      username: uuid(),
      password: uuid(),
    };

    // Act
    const response = await axios.post(
      `http://localhost:${ports.httpInternal}/auth/local/login`,
      input,
    );

    // Assert
    expect(response.data).toEqual({
      userId: expect.any(String),
      isNew: true,
      accessToken: expect.any(String),
    });
  });

  test('Login: 401', async () => {
    // Arrange
    const loginInput = {
      platform: 'local',
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      userId: uuid(),
    };
    await loginClient.createOne(loginInput, { metadata });

    const input = {
      username: loginInput.platformLoginId,
      password: uuid(),
    };

    // Act
    const p = axios.post(
      `http://localhost:${ports.http}/auth/local/login`,
      input,
    );

    // Assert
    await expect(p).rejects.toThrow('Request failed with status code 401');
  });
});
