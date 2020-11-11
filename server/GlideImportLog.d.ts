import { GlideImportSetRun } from "./GlideImportSetRun";

declare class GlideImportLog {
    constructor(importSetRun?: GlideImportSetRun, source?: string);
    constructor();
    error(message: string, source: string): void;
    getImportRunHistory(): string;
    info(message: string, source?: string): void;
    warn(message: string, source?: string): void;
    
}