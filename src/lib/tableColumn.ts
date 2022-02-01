export class TableColumn {
    /**
     * カラム名
     */
    public name: string;

    // TODO: 型どうするか
    // public type: string;

    /**
     * コメント
     */
    public comment = "";

    /**
     *
     */
    constructor(name: string) {
        this.name = name;
    }

    public toJson() {
        return {
            name: this.name,
            comment: this.comment,
        };
    }
}
