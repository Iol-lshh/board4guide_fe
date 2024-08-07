<template>
    <div>
        <h1>BoardView</h1>
        <BoardItem 
            v-for="(post, index) in posts"
            :key="index"
            :postValue="post"
            ></BoardItem>
    </div>
</template>
<script setup>
import {reactive, defineProps} from 'vue';
import boardApi from '@/entities/board/api/boardApi';
import BoardModel from '@/entities/board/model/board';
import BoardItem from '@/features/board/BoardItem.vue';

const props = defineProps({
    boardValue: {
        type: Object,
        required: true
    },
});

const board = reactive(BoardModel.of(props.boardValue));
const posts = boardApi.findAllPosts(board.id);
</script>