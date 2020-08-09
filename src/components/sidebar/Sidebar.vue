<template>
  <div id="sidebar">
    <h2>SIDEBAR</h2>
    <router-view name="sidebar"></router-view>
  </div>
</template>

<style scoped>
#sidebar {
  padding: 10px;
  width: 180px;
  background-color: lightgray;
}
</style>