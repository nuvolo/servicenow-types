export interface sn_impex_GlideImportSetTableCreateResult {
    tableName: string;
    tableLabel: string;
    columns: Record<string, string>;
}


declare class sn_impex_GlideImportSetTable {
    constructor(tableLabel: string);
    addDateTimeColumn(columnLabel: string) : void;
    addStringColumn(columnLabel: string, length: number): void;
    create(): sn_impex_GlideImportSetTableCreateResult;
}

export { sn_impex_GlideImportSetTable }