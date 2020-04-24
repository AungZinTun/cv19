<template>

<div class="post">
    <div class="user-info">

        <a href="#" class="user-name"> {{user.name}} </a>
        <a href="">
            <img :src="user.avatar" alt="" class="avatar-large">
        </a>
    </div>
    <div class="post-content">
        <div>
            {{post.text}}
        </div>
    </div>

</div>

</template>

<script>
import datasource from "@/data.json"
export default {
   props: {
       post : {
           required : true , 
           type : Object
       }
   },
   computed : {
       user (){
           return datasource.users[this.post.userId]
       }
   }
}
</script>

<style>

</style>