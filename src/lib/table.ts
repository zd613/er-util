import { TableColumn } from "./tableColumn";

export class Table {
    /**
     * テーブル名
     */
    public name: string;

    /**
     * カラム配列
     */
    public colums: TableColumn[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public toJson() {
        return {
            name: this.name,
            columns: this.colums.map((column) => column.toJson()),
        };
    }
}
