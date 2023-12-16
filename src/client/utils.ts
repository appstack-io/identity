import * as clientLib from './combined';
import { createChannel, createClient, Metadata } from 'nice-grpc';

export async function postToUnary<T>(
  serviceName: string,
  methodName: string,
  data: any,
  metadata: Metadata,
): Promise<T> {
  const definition = clientLib[`${serviceName}Definition`];
  const host = serviceName.toLowerCase().replace('service', '');
  const channel = createChannel(`${host}:${process.env.ASIO_MS_PRIVATE_PORT}`);
  const client = createClient(definition, channel);
  const result = await client[methodName](data, { metadata });
  return result;
}

export async function postToUnaryPublic<T>(
  serviceName: string,
  methodName: string,
  data: any,
  metadata: Metadata,
): Promise<T> {
  const definition = clientLib[`${serviceName}Definition`];
  const host = serviceName.toLowerCase().replace('service', '');
  const channel = createChannel(`${host}:${process.env.ASIO_MS_PUBLIC_PORT}`);
  const client = createClient(definition, channel);
  const result = await client[methodName](data, { metadata });
  return result;
}
