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
  import { postToUnary } from './utils';
  import { Metadata } from 'nice-grpc';
 
  export class LoginService {
    private readonly serviceName: string = "LoginService";
    
    constructor(private opts?: {port?: string, host?: string}){}
    
    
    async createOne(data: Partial<LoginCreateOneInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'createOne', data, metadata, this.opts);
    }
  
    async findOne(data: Partial<LoginFindOneInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'findOne', data, metadata, this.opts);
    }
  
    async findWhere(data: Partial<LoginFindWhereInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'findWhere', data, metadata, this.opts);
    }
  
    async findByPlatformId(data: Partial<LoginFindByPlatformIdInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'findByPlatformId', data, metadata, this.opts);
    }
  
    async updateOne(data: Partial<LoginUpdateOneInput>, metadata: Metadata=new Metadata()): Promise<Login> {
      return postToUnary<Login>(this.serviceName, 'updateOne', data, metadata, this.opts);
    }
  
    async removeOne(data: Partial<LoginRemoveOneInput>, metadata: Metadata=new Metadata()): Promise<Empty> {
      return postToUnary<Empty>(this.serviceName, 'removeOne', data, metadata, this.opts);
    }
  
  }
