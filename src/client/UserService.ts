import { Empty } from './google/protobuf/empty';

  export interface UserCreateOneInput {
  name: string;
  email: string;
  photo: string;
  onboardingFlags: UserOnboardingFlags | undefined;
}

export interface UserOnboardingFlags {
  initial: boolean;
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

export interface UserSearchInput {
  filter: UserSearchFilter | undefined;
  opts: UserSearchOpts | undefined;
}

export interface UserSearchFilter {
  name: string;
}

export interface UserSearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface UserSearchResult {
  meta: UserSearchResultMeta | undefined;
  users: User[];
}

export interface UserSearchResultMeta {
  offset: number;
}
  import { postToUnary, postToUnaryPublic } from './utils';
  import { Metadata } from 'nice-grpc';
 
  export class UserService {
    private readonly serviceName: string = "UserService";
    
    
    async createOne(data: Partial<UserCreateOneInput>, metadata: Metadata=new Metadata()): Promise<User> {
      return postToUnary<User>(this.serviceName, 'createOne', data, metadata);
    }
    
    async createOnePublic(data: Partial<UserCreateOneInput>, metadata: Metadata=new Metadata()): Promise<User> {
      return postToUnaryPublic<User>(this.serviceName, 'createOne', data, metadata);
    }
  
    async updateOne(data: Partial<UserUpdateOneInput>, metadata: Metadata=new Metadata()): Promise<User> {
      return postToUnary<User>(this.serviceName, 'updateOne', data, metadata);
    }
    
    async updateOnePublic(data: Partial<UserUpdateOneInput>, metadata: Metadata=new Metadata()): Promise<User> {
      return postToUnaryPublic<User>(this.serviceName, 'updateOne', data, metadata);
    }
  
    async findOne(data: Partial<UserFindOneInput>, metadata: Metadata=new Metadata()): Promise<User> {
      return postToUnary<User>(this.serviceName, 'findOne', data, metadata);
    }
    
    async findOnePublic(data: Partial<UserFindOneInput>, metadata: Metadata=new Metadata()): Promise<User> {
      return postToUnaryPublic<User>(this.serviceName, 'findOne', data, metadata);
    }
  
    async findMe(data: Partial<Empty>, metadata: Metadata=new Metadata()): Promise<User> {
      return postToUnary<User>(this.serviceName, 'findMe', data, metadata);
    }
    
    async findMePublic(data: Partial<Empty>, metadata: Metadata=new Metadata()): Promise<User> {
      return postToUnaryPublic<User>(this.serviceName, 'findMe', data, metadata);
    }
  
    async removeOne(data: Partial<UserRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeOne', data, metadata);
    }
    
    async removeOnePublic(data: Partial<UserRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnaryPublic<Empty>(this.serviceName, 'removeOne', data, metadata);
    }
  
    async search(data: Partial<UserSearchInput>, metadata: Metadata=new Metadata()): Promise<UserSearchResult> {
      return postToUnary<UserSearchResult>(this.serviceName, 'search', data, metadata);
    }
    
    async searchPublic(data: Partial<UserSearchInput>, metadata: Metadata=new Metadata()): Promise<UserSearchResult> {
      return postToUnaryPublic<UserSearchResult>(this.serviceName, 'search', data, metadata);
    }
  
  }
