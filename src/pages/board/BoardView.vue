<template>
    <div>
        <h1>BoardView</h1>
        <PostElement 
            v-for="(post, index) in posts"
            :key="index"
            :postValue="post"
            ></PostElement>
    </div>
</template>
<script setup>
import {reactive, defineProps} from 'vue';
import PostElement from '@/features/post/PostElement.vue';
import BoardModel from '@/entities/board/model/boardModel';
import postApi from '@/entities/post/api/postApi';

const props = defineProps({
    boardValue: {
        type: Object,
        required: true
    },
});

const board = reactive(BoardModel.of(props.boardValue));
const posts = postApi.findAllPosts(board.id);
</script>