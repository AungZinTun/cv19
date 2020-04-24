<template>
   <div class="container">
        <div class="col-large push-top">
      <h1>{{thread.title}}  </h1>
      <div class="post-list">
          <PostList :Posts="Posts" />
      </div>
       
        </div>
      </div>
    </div>
   </div>
</template>

<script>
import DataSource from "@/data.json"
import PostList from "@/Components/PostList"
export default {
    components : {
        PostList
    }
,
    name : 'ThreadShow', 
    props :{
        id: {
            required : true,
            type : String
        }
    },
    data () {
        return {
            thread : DataSource.threads[this.id]         
        }
    },
    computed : {
       Posts() {
            const postIDs = Object.values(this.thread.posts)
            return Object.values(DataSource.posts)
            .filter(post=>postIDs.includes(post['.key']))
       }
    }

}
</script>

<style>

</style>