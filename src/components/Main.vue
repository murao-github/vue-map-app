<template>
  <div class="container">
    <Sidebar/>
    <router-view name="mainContents"></router-view>
  </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.container{
    display: flex;
    height: 100%;
}
</style>