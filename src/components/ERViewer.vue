<script setup lang="ts">
import Konva from "konva";
import { onMounted } from "vue";
import { createTableShape } from "../lib/konva";
import { Table } from "../lib/table";

onMounted(() => {
    const stage = new Konva.Stage({
        container: "container",
        width: 400,
        height: 400,
    });

    const layer = new Konva.Layer();

    const text = new Konva.Text({
        x: stage.width() / 2,
        y: 15,
        text: "Test Text",
        fontSize: 30,
        fill: "green",
    });

    layer.add(text);

    const tableShape = createTableShape({
        table: new Table("test-table"),
    });
    layer.add(tableShape);

    stage.add(layer);
});
</script>

<template>
    <div>
        <h1>ER</h1>

        <div
            id="container"
            class="border-2 border-gray-400 bg-white flex justify-center items-center"
        ></div>
    </div>
</template>
