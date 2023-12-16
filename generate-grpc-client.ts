import * as fs from 'fs';
import { exec } from 'child_process';

(async () => {
  exec(
    `node_modules/.bin/grpc_tools_node_protoc --plugin=protoc-gen-ts_proto=node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false --proto_path=. src/combined.proto && mv ./src/src/combined.ts ./src/combined.client.ts && rm -rf ./src/src`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Execution error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
      }
      const combined = fs.readFileSync(
        `${__dirname}/src/combined.client.ts`,
        'utf8',
      );
      const cleaned = combined.replace(
        '../google/protobuf/empty',
        './google/protobuf/empty',
      );
      fs.writeFileSync(`${__dirname}/src/combined.client.ts`, cleaned);
    },
  );

  exec(`rm -rf ${__dirname}/temp`);
})();
