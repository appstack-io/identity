import { Empty } from './google/protobuf/empty';

import { Observable } from 'rxjs';

import type { CallContext, CallOptions } from "nice-grpc-common";

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
      : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
      : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
      : Partial<T>;
    

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