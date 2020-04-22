
<template>
  <div class="hello">
    <h1 v-for="thread in threads">
       {{ thread.title }}
      <p v-for="postID in thread.posts"> 
        {{ posts[postID].userID}}
         {{posts[postID].text}}
        </p>   
    </h1>
    
  </div>

</template>

<script>
import datasource from '@/data.json'

export default {
  name: 'home',
  data () {
    return {
      threads: datasource.threads,
      posts: datasource.posts,
      users : datasource.users
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
