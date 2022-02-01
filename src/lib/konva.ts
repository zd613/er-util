import Konva from "konva";
import { Table } from "./table";

type TableShapeProps = {
    table: Table;
};

/**
 * KonvaでERテーブルの形を作成する
 * @param props
 * @returns tableShape
 */
export function createTableShape(props: TableShapeProps) {
    const width = 100;
    const height = 100;

    const group = new Konva.Group({
        draggable: true,
        x: 0,
        y: 0,
    });
    // 外枠
    const rect = new Konva.Rect({
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "pink",
        stroke: "gray",
        strokeWidth: 2,
    });

    group.add(rect);

    // テーブル名
    const tableName = new Konva.Text({
        x: width / 2,
        y: 5,
        text: props.table.name,
    });
    tableName.offsetX(tableName.width() / 2);
    group.add(tableName);

    // テーブル名とカラムを区切る線

    const splitLine = new Konva.Line({
        // x1,y1,x2,y2
        // yはテーブル名の高さ + 少し間をあけるために+10
        points: [
            0,
            tableName.height() + 10,
            rect.width(),
            tableName.height() + 10,
        ],
        stroke: "gray",
        strokeWidth: 3,
    });
    group.add(splitLine);

    return group;
}
