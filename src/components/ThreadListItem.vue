<template>
  <div class="thread-list">

              <div class="thread">
                  <div>
                      <p>
                        
                          <router-link :to=" { name : 'ThreadShow' , params :{id : thread['.key']} } "> {{thread.title}} </router-link>
                      </p>
                      <p class="text-faded text-xsmall">
                          By <a href="profile.html">{{user.name}}</a>, {{thread.publishedAt}}.
                      </p>
                  </div>

                  <div class="activity">
                      <p class="replies-count">
                          {{postCount}}Replies
                      </p>

                  </div>
              </div>


          </div>
</template>

<script>
import datasource from '@/data';
export default {

    props : {
        thread :{
            require : true , 
            type : Object
        }
        },
    computed: {
    postCount(){
        return Object.keys(this.thread.posts).length -1
    },
    user() {
      return datasource.users[this.thread.userId]
    }
  }
}

</script>

<style>

</style>