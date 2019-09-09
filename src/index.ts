import { getAPIHierarchy } from "./SNClient";
import { generateFiles } from "./TSGenerator";

const RELEASE = "madrid";
const API = "server";
const TYPE = "scoped";
main();
async function main() {
  let hierarchy = await getAPIHierarchy({ release: RELEASE, api: API, type: TYPE });
  generateFiles({ hierarchy, release: RELEASE, api: API, type: TYPE });
}
