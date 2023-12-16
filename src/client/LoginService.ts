import { Empty } from './google/protobuf/empty';

  export interface LoginCreateOneInput {
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
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

export interface LoginUpdateOneInput {
  id: string;
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  credentials: Credentials | undefined;
}

export interface LoginRemoveOneInput {
  id: string;
}
  import { postToUnary, postToUnaryPublic } from './utils';
  import { Metadata } from 'nice-grpc';
 
  export class LoginService {
    private readonly serviceName: string = "LoginService";
    
    
    async createOne(data: Partial<LoginCreateOneInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'createOne', data, metadata);
    }
    
    async createOnePublic(data: Partial<LoginCreateOneInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnaryPublic<Login>(this.serviceName, 'createOne', data, metadata);
    }
  
    async findOne(data: Partial<LoginFindOneInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'findOne', data, metadata);
    }
    
    async findOnePublic(data: Partial<LoginFindOneInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnaryPublic<Login>(this.serviceName, 'findOne', data, metadata);
    }
  
    async findWhere(data: Partial<LoginFindWhereInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'findWhere', data, metadata);
    }
    
    async findWherePublic(data: Partial<LoginFindWhereInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnaryPublic<Login>(this.serviceName, 'findWhere', data, metadata);
    }
  
    async findByPlatformId(data: Partial<LoginFindByPlatformIdInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'findByPlatformId', data, metadata);
    }
    
    async findByPlatformIdPublic(data: Partial<LoginFindByPlatformIdInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnaryPublic<Login>(this.serviceName, 'findByPlatformId', data, metadata);
    }
  
    async updateOne(data: Partial<LoginUpdateOneInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'updateOne', data, metadata);
    }
    
    async updateOnePublic(data: Partial<LoginUpdateOneInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnaryPublic<Login>(this.serviceName, 'updateOne', data, metadata);
    }
  
    async removeOne(data: Partial<LoginRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeOne', data, metadata);
    }
    
    async removeOnePublic(data: Partial<LoginRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnaryPublic<Empty>(this.serviceName, 'removeOne', data, metadata);
    }
  
  }
