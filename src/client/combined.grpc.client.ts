/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google//protobuf/empty";
import Long = require("long");

export const protobufPackage = "main";

export interface Login {
  id: string;
  createdAt: number;
  updatedAt: number;
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  isNew: boolean;
  credentials: Credentials | undefined;
}

export interface Credentials {
  local?: LocalCredentials | undefined;
  google?: GoogleCredentials | undefined;
}

export interface LocalCredentials {
  username: string;
  password: string;
}

export interface GoogleCredentials {
  id: string;
}

export interface LoginCreateOneInput {
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  credentials: Credentials | undefined;
}

export interface LoginUpdateOneInput {
  id: string;
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  credentials: Credentials | undefined;
}

export interface LoginFindOneInput {
  id: string;
}

export interface LoginFindWhereInput {
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
}

export interface LoginFindByPlatformIdInput {
  platform: string;
  platformLoginId: string;
}

export interface LoginRemoveOneInput {
  id: string;
}

export interface User {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  email: string;
  photo: string;
  onboardingFlags: UserOnboardingFlags | undefined;
}

export interface UserOnboardingFlags {
  initial: boolean;
}

export interface UserCreateOneInput {
  name: string;
  email: string;
  photo: string;
  onboardingFlags: UserOnboardingFlags | undefined;
}

export interface UserUpdateOneInput {
  id: string;
  name: string;
  email: string;
  photo: string;
  onboardingFlags: UserOnboardingFlags | undefined;
}

export interface UserFindOneInput {
  id: string;
}

export interface UserRemoveOneInput {
  id: string;
}

export interface UserSearchFilter {
  name: string;
}

export interface UserSearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface UserSearchInput {
  filter: UserSearchFilter | undefined;
  opts: UserSearchOpts | undefined;
}

export interface UserSearchResultMeta {
  offset: number;
}

export interface UserSearchResult {
  meta: UserSearchResultMeta | undefined;
  users: User[];
}

function createBaseLogin(): Login {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    platform: "",
    platformLoginId: "",
    platformLoginSecret: "",
    userId: "",
    isNew: false,
    credentials: undefined,
  };
}

export const Login = {
  encode(message: Login, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.isNew === true) {
      writer.uint32(64).bool(message.isNew);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Login {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isNew = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Login {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
      platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? globalThis.String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? globalThis.String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      isNew: isSet(object.isNew) ? globalThis.Boolean(object.isNew) : false,
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: Login): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.isNew === true) {
      obj.isNew = message.isNew;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create(base?: DeepPartial<Login>): Login {
    return Login.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Login>): Login {
    const message = createBaseLogin();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.isNew = object.isNew ?? false;
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseCredentials(): Credentials {
  return { local: undefined, google: undefined };
}

export const Credentials = {
  encode(message: Credentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.local !== undefined) {
      LocalCredentials.encode(message.local, writer.uint32(10).fork()).ldelim();
    }
    if (message.google !== undefined) {
      GoogleCredentials.encode(message.google, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Credentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.local = LocalCredentials.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.google = GoogleCredentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Credentials {
    return {
      local: isSet(object.local) ? LocalCredentials.fromJSON(object.local) : undefined,
      google: isSet(object.google) ? GoogleCredentials.fromJSON(object.google) : undefined,
    };
  },

  toJSON(message: Credentials): unknown {
    const obj: any = {};
    if (message.local !== undefined) {
      obj.local = LocalCredentials.toJSON(message.local);
    }
    if (message.google !== undefined) {
      obj.google = GoogleCredentials.toJSON(message.google);
    }
    return obj;
  },

  create(base?: DeepPartial<Credentials>): Credentials {
    return Credentials.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Credentials>): Credentials {
    const message = createBaseCredentials();
    message.local = (object.local !== undefined && object.local !== null)
      ? LocalCredentials.fromPartial(object.local)
      : undefined;
    message.google = (object.google !== undefined && object.google !== null)
      ? GoogleCredentials.fromPartial(object.google)
      : undefined;
    return message;
  },
};

function createBaseLocalCredentials(): LocalCredentials {
  return { username: "", password: "" };
}

export const LocalCredentials = {
  encode(message: LocalCredentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalCredentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocalCredentials {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: LocalCredentials): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create(base?: DeepPartial<LocalCredentials>): LocalCredentials {
    return LocalCredentials.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LocalCredentials>): LocalCredentials {
    const message = createBaseLocalCredentials();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseGoogleCredentials(): GoogleCredentials {
  return { id: "" };
}

export const GoogleCredentials = {
  encode(message: GoogleCredentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleCredentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GoogleCredentials {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GoogleCredentials): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<GoogleCredentials>): GoogleCredentials {
    return GoogleCredentials.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GoogleCredentials>): GoogleCredentials {
    const message = createBaseGoogleCredentials();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseLoginCreateOneInput(): LoginCreateOneInput {
  return { platform: "", platformLoginId: "", platformLoginSecret: "", userId: "", credentials: undefined };
}

export const LoginCreateOneInput = {
  encode(message: LoginCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginCreateOneInput {
    return {
      platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? globalThis.String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? globalThis.String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: LoginCreateOneInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create(base?: DeepPartial<LoginCreateOneInput>): LoginCreateOneInput {
    return LoginCreateOneInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginCreateOneInput>): LoginCreateOneInput {
    const message = createBaseLoginCreateOneInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseLoginUpdateOneInput(): LoginUpdateOneInput {
  return { id: "", platform: "", platformLoginId: "", platformLoginSecret: "", userId: "", credentials: undefined };
}

export const LoginUpdateOneInput = {
  encode(message: LoginUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginUpdateOneInput {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? globalThis.String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? globalThis.String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: LoginUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create(base?: DeepPartial<LoginUpdateOneInput>): LoginUpdateOneInput {
    return LoginUpdateOneInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginUpdateOneInput>): LoginUpdateOneInput {
    const message = createBaseLoginUpdateOneInput();
    message.id = object.id ?? "";
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseLoginFindOneInput(): LoginFindOneInput {
  return { id: "" };
}

export const LoginFindOneInput = {
  encode(message: LoginFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindOneInput {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: LoginFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginFindOneInput>): LoginFindOneInput {
    return LoginFindOneInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginFindOneInput>): LoginFindOneInput {
    const message = createBaseLoginFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseLoginFindWhereInput(): LoginFindWhereInput {
  return { platform: "", platformLoginId: "", platformLoginSecret: "" };
}

export const LoginFindWhereInput = {
  encode(message: LoginFindWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(18).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(26).string(message.platformLoginSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindWhereInput {
    return {
      platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? globalThis.String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? globalThis.String(object.platformLoginSecret) : "",
    };
  },

  toJSON(message: LoginFindWhereInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginFindWhereInput>): LoginFindWhereInput {
    return LoginFindWhereInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginFindWhereInput>): LoginFindWhereInput {
    const message = createBaseLoginFindWhereInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    return message;
  },
};

function createBaseLoginFindByPlatformIdInput(): LoginFindByPlatformIdInput {
  return { platform: "", platformLoginId: "" };
}

export const LoginFindByPlatformIdInput = {
  encode(message: LoginFindByPlatformIdInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(18).string(message.platformLoginId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindByPlatformIdInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindByPlatformIdInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindByPlatformIdInput {
    return {
      platform: isSet(object.platform) ? globalThis.String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? globalThis.String(object.platformLoginId) : "",
    };
  },

  toJSON(message: LoginFindByPlatformIdInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginFindByPlatformIdInput>): LoginFindByPlatformIdInput {
    return LoginFindByPlatformIdInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginFindByPlatformIdInput>): LoginFindByPlatformIdInput {
    const message = createBaseLoginFindByPlatformIdInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    return message;
  },
};

function createBaseLoginRemoveOneInput(): LoginRemoveOneInput {
  return { id: "" };
}

export const LoginRemoveOneInput = {
  encode(message: LoginRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRemoveOneInput {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: LoginRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<LoginRemoveOneInput>): LoginRemoveOneInput {
    return LoginRemoveOneInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LoginRemoveOneInput>): LoginRemoveOneInput {
    const message = createBaseLoginRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return { id: "", createdAt: 0, updatedAt: 0, name: "", email: "", photo: "", onboardingFlags: undefined };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.onboardingFlags = UserOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      createdAt: isSet(object.createdAt) ? globalThis.Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      photo: isSet(object.photo) ? globalThis.String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags) ? UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = UserOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? UserOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseUserOnboardingFlags(): UserOnboardingFlags {
  return { initial: false };
}

export const UserOnboardingFlags = {
  encode(message: UserOnboardingFlags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initial === true) {
      writer.uint32(8).bool(message.initial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserOnboardingFlags {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserOnboardingFlags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.initial = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserOnboardingFlags {
    return { initial: isSet(object.initial) ? globalThis.Boolean(object.initial) : false };
  },

  toJSON(message: UserOnboardingFlags): unknown {
    const obj: any = {};
    if (message.initial === true) {
      obj.initial = message.initial;
    }
    return obj;
  },

  create(base?: DeepPartial<UserOnboardingFlags>): UserOnboardingFlags {
    return UserOnboardingFlags.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserOnboardingFlags>): UserOnboardingFlags {
    const message = createBaseUserOnboardingFlags();
    message.initial = object.initial ?? false;
    return message;
  },
};

function createBaseUserCreateOneInput(): UserCreateOneInput {
  return { name: "", email: "", photo: "", onboardingFlags: undefined };
}

export const UserCreateOneInput = {
  encode(message: UserCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.onboardingFlags = UserOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserCreateOneInput {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      photo: isSet(object.photo) ? globalThis.String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags) ? UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
    };
  },

  toJSON(message: UserCreateOneInput): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = UserOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create(base?: DeepPartial<UserCreateOneInput>): UserCreateOneInput {
    return UserCreateOneInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserCreateOneInput>): UserCreateOneInput {
    const message = createBaseUserCreateOneInput();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? UserOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseUserUpdateOneInput(): UserUpdateOneInput {
  return { id: "", name: "", email: "", photo: "", onboardingFlags: undefined };
}

export const UserUpdateOneInput = {
  encode(message: UserUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.onboardingFlags = UserOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserUpdateOneInput {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      photo: isSet(object.photo) ? globalThis.String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags) ? UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
    };
  },

  toJSON(message: UserUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = UserOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create(base?: DeepPartial<UserUpdateOneInput>): UserUpdateOneInput {
    return UserUpdateOneInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserUpdateOneInput>): UserUpdateOneInput {
    const message = createBaseUserUpdateOneInput();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? UserOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseUserFindOneInput(): UserFindOneInput {
  return { id: "" };
}

export const UserFindOneInput = {
  encode(message: UserFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindOneInput {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: UserFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<UserFindOneInput>): UserFindOneInput {
    return UserFindOneInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserFindOneInput>): UserFindOneInput {
    const message = createBaseUserFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserRemoveOneInput(): UserRemoveOneInput {
  return { id: "" };
}

export const UserRemoveOneInput = {
  encode(message: UserRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserRemoveOneInput {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: UserRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<UserRemoveOneInput>): UserRemoveOneInput {
    return UserRemoveOneInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserRemoveOneInput>): UserRemoveOneInput {
    const message = createBaseUserRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserSearchFilter(): UserSearchFilter {
  return { name: "" };
}

export const UserSearchFilter = {
  encode(message: UserSearchFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchFilter {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: UserSearchFilter): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<UserSearchFilter>): UserSearchFilter {
    return UserSearchFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserSearchFilter>): UserSearchFilter {
    const message = createBaseUserSearchFilter();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUserSearchOpts(): UserSearchOpts {
  return { limit: 0, offset: 0, waitForSync: false };
}

export const UserSearchOpts = {
  encode(message: UserSearchOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.waitForSync === true) {
      writer.uint32(24).bool(message.waitForSync);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.waitForSync = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchOpts {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      waitForSync: isSet(object.waitForSync) ? globalThis.Boolean(object.waitForSync) : false,
    };
  },

  toJSON(message: UserSearchOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.waitForSync === true) {
      obj.waitForSync = message.waitForSync;
    }
    return obj;
  },

  create(base?: DeepPartial<UserSearchOpts>): UserSearchOpts {
    return UserSearchOpts.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserSearchOpts>): UserSearchOpts {
    const message = createBaseUserSearchOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.waitForSync = object.waitForSync ?? false;
    return message;
  },
};

function createBaseUserSearchInput(): UserSearchInput {
  return { filter: undefined, opts: undefined };
}

export const UserSearchInput = {
  encode(message: UserSearchInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserSearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserSearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserSearchFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserSearchOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchInput {
    return {
      filter: isSet(object.filter) ? UserSearchFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserSearchOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserSearchInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserSearchFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserSearchOpts.toJSON(message.opts);
    }
    return obj;
  },

  create(base?: DeepPartial<UserSearchInput>): UserSearchInput {
    return UserSearchInput.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserSearchInput>): UserSearchInput {
    const message = createBaseUserSearchInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserSearchFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserSearchOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserSearchResultMeta(): UserSearchResultMeta {
  return { offset: 0 };
}

export const UserSearchResultMeta = {
  encode(message: UserSearchResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchResultMeta {
    return { offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0 };
  },

  toJSON(message: UserSearchResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create(base?: DeepPartial<UserSearchResultMeta>): UserSearchResultMeta {
    return UserSearchResultMeta.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserSearchResultMeta>): UserSearchResultMeta {
    const message = createBaseUserSearchResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserSearchResult(): UserSearchResult {
  return { meta: undefined, users: [] };
}

export const UserSearchResult = {
  encode(message: UserSearchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserSearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserSearchResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchResult {
    return {
      meta: isSet(object.meta) ? UserSearchResultMeta.fromJSON(object.meta) : undefined,
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserSearchResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserSearchResultMeta.toJSON(message.meta);
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UserSearchResult>): UserSearchResult {
    return UserSearchResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserSearchResult>): UserSearchResult {
    const message = createBaseUserSearchResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserSearchResultMeta.fromPartial(object.meta)
      : undefined;
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

export type LoginServiceDefinition = typeof LoginServiceDefinition;
export const LoginServiceDefinition = {
  name: "LoginService",
  fullName: "main.LoginService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: LoginCreateOneInput,
      requestStream: false,
      responseType: Login,
      responseStream: false,
      options: {},
    },
    findOne: {
      name: "FindOne",
      requestType: LoginFindOneInput,
      requestStream: false,
      responseType: Login,
      responseStream: false,
      options: {},
    },
    findWhere: {
      name: "FindWhere",
      requestType: LoginFindWhereInput,
      requestStream: false,
      responseType: Login,
      responseStream: false,
      options: {},
    },
    findByPlatformId: {
      name: "FindByPlatformId",
      requestType: LoginFindByPlatformIdInput,
      requestStream: false,
      responseType: Login,
      responseStream: false,
      options: {},
    },
    updateOne: {
      name: "UpdateOne",
      requestType: LoginUpdateOneInput,
      requestStream: false,
      responseType: Login,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: LoginRemoveOneInput,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface LoginServiceImplementation<CallContextExt = {}> {
  createOne(request: LoginCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  findOne(request: LoginFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  findWhere(request: LoginFindWhereInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  findByPlatformId(
    request: LoginFindByPlatformIdInput,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Login>>;
  updateOne(request: LoginUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Login>>;
  removeOne(request: LoginRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}

export interface LoginServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<LoginCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  findOne(request: DeepPartial<LoginFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  findWhere(request: DeepPartial<LoginFindWhereInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  findByPlatformId(
    request: DeepPartial<LoginFindByPlatformIdInput>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Login>;
  updateOne(request: DeepPartial<LoginUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<Login>;
  removeOne(request: DeepPartial<LoginRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}

export type UserServiceDefinition = typeof UserServiceDefinition;
export const UserServiceDefinition = {
  name: "UserService",
  fullName: "main.UserService",
  methods: {
    createOne: {
      name: "CreateOne",
      requestType: UserCreateOneInput,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    updateOne: {
      name: "UpdateOne",
      requestType: UserUpdateOneInput,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    findOne: {
      name: "FindOne",
      requestType: UserFindOneInput,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    findMe: {
      name: "FindMe",
      requestType: Empty,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {},
    },
    removeOne: {
      name: "RemoveOne",
      requestType: UserRemoveOneInput,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    search: {
      name: "Search",
      requestType: UserSearchInput,
      requestStream: false,
      responseType: UserSearchResult,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface UserServiceImplementation<CallContextExt = {}> {
  createOne(request: UserCreateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  updateOne(request: UserUpdateOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  findOne(request: UserFindOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  findMe(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  removeOne(request: UserRemoveOneInput, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  search(request: UserSearchInput, context: CallContext & CallContextExt): Promise<DeepPartial<UserSearchResult>>;
}

export interface UserServiceClient<CallOptionsExt = {}> {
  createOne(request: DeepPartial<UserCreateOneInput>, options?: CallOptions & CallOptionsExt): Promise<User>;
  updateOne(request: DeepPartial<UserUpdateOneInput>, options?: CallOptions & CallOptionsExt): Promise<User>;
  findOne(request: DeepPartial<UserFindOneInput>, options?: CallOptions & CallOptionsExt): Promise<User>;
  findMe(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<User>;
  removeOne(request: DeepPartial<UserRemoveOneInput>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  search(request: DeepPartial<UserSearchInput>, options?: CallOptions & CallOptionsExt): Promise<UserSearchResult>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
