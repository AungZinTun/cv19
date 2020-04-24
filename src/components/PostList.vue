<template>

<div class="post-list">

    <PostListItem 
    v-for="post in Posts"
    :post="post"
    :key="post['.key'] "
    />

    </div>

</template>

<script>

import DataSource from "@/data.json"
import PostListItem from "./PostListItem"
export default {

components : {
    PostListItem
},
props : {
    Posts : {
        required : true,
        type: Array
    }
}
}
</script>

<style>

</style>