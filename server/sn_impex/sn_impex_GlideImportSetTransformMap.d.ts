declare class sn_impex_GlideImportSetTransformMap {
    constructor(transformMapName: string, importSetTableName: string, targetTableName: string);
    addDateTimeTransformEntry(sourceColumn: string, targetColumn: string, coalesce: boolean, dateTimeFormat: string): void;
    addTransformEntry(sourceColumn: string, targetColumn: string, coalesce: boolean): void;
    create(): string;
}

export { sn_impex_GlideImportSetTransformMap }