import dotenv from 'dotenv';
dotenv.config({
  path: '../.env'
});
import { getAPIHierarchy } from './SNClient';
import { generateFiles } from './TSGenerator';
import { SNC } from './common';
const release = 'madrid';
const configurations: SNC.HierarchyOpts[] = [
  { release, api: 'server', type: 'scoped' },
  { release, api: 'client', type: 'all' }
  // { release, api: "server_legacy", type: "global" }
];
main();
async function main() {
  for (let conf of configurations) {
    console.log(`Loading ${conf.api}...`);
    let hierarchy = await getAPIHierarchy(conf);
    console.log(`Generating files for ${conf.api}...`);
    await generateFiles({ ...conf, hierarchy });
  }
}
