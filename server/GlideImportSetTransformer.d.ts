import { GlideImportLog } from "./GlideImportLog";
import { GlideImportSetRun } from "./GlideImportSetRun";

declare class GlideImportSetTransformer {
    getImportSetRun(): GlideImportSetRun;
    isError(): boolean;
    setImportSetID(id: string): void;
    setImportSetRun(importSetRun: GlideImportSetRun): void;
    setLogger(log: GlideImportLog): void;
    setMapID(mapID: string): void;
}

export { GlideImportSetTransformer }