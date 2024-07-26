<template>
    <div>
        <h2>{{ postElementModel.title }}</h2>
        <p>{{ postElementModel.content }}</p>
    </div>
</template>
<script setup>
import { reactive, defineProps } from 'vue';
import PostElementModel from './model/postElementModel';

const props = defineProps({
    postValue: {
        type: Object,
        required: true
    }
});

const postElementModel = reactive(PostElementModel.of(props.postValue));
</script>