<template>
    <div>
        <h2>{{ boardItemModel.title }}</h2>
        <p>{{ boardItemModel.content }}</p>
    </div>
</template>
<script setup>
import { reactive, defineProps } from 'vue';
import BoardItemModel from './model/boardItemModel';

const props = defineProps({
    boardEntity: {
        type: Object,
        required: true
    },
    postEntity: {
        type: Object,
        required: true
    }
});

const boardItemModel = reactive(BoardItemModel.of(props.postEntity));

</script>