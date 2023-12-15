import {
  combineProtos,
  generateInterfaces,
  generateServiceProtos,
} from '@appstack-io/proto';
import { exec } from 'child_process';

combineProtos([`${__dirname}/src`], `${__dirname}/src/combined.proto`);
exec(
  `protoc --plugin=$(pwd)/node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=snakeToCamel=true,outputClientImpl=false -I=./src --ts_proto_out=./src combined.proto`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    generateInterfaces(
      `${__dirname}/src/combined.ts`,
      `${__dirname}/src/combined.interfaces.ts`,
    );
    exec(
      `node_modules/.bin/grpc_tools_node_protoc --plugin=protoc-gen-ts_proto=node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false --proto_path=. src/combined.proto`,
    );
  },
);
generateServiceProtos(`${__dirname}/src/login/tests/components`);
