
<template>
  <div class="container">
    <div  class="thread-list">
            <ThreadList  :threads="threads" />
          </div>
  </div>
</template>

<script>
import datasource from "@/data.json";
import ThreadList from "@/components/ThreadList"

export default {
  components: {
    ThreadList
  },
   
  name: "home",
  data() {
    return {
      threads: Object.values(datasource.threads),
      posts: datasource.posts,
      users: datasource.users
    };
  },
 
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
