<template>
   <div class="container">
        <div class="col-large push-top">
      <h1>{{thread.title}}  </h1>
      <div class="post-list">
        <div v-for="postId in thread.posts" class="post">
          <div class="user-info">
            <a
              href="profile.html#profile-details"
              class="user-name"
               >{{users[posts[postId].userId].name}}</a>

            <a href="">
              <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt />
            </a>

            <p class="desktop-only text-small">107 posts</p>
          </div>

          <div class="post-content">
            <div>
              <p> {{posts[postId].text}} </p>
            </div>
          </div>

          <div class="post-date text-faded">{{ posts[postId].publishedAt }}</div>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
import DataSource from "@/data.json"
export default {
    name : 'ThreadShow', 
    props :{
        id: {
            required : true,
            type : String
        }
    },
    data () {
        return {
            thread : DataSource.threads[this.$route.params.id], 
            posts: DataSource.posts,
            users : DataSource.users
        }
    }

}
</script>

<style>

</style>