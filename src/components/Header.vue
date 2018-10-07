<template>
  <div id="header">
    <router-link to="/" class="btn flex1">Home</router-link>
    <router-link to="/login" class="btn flex2">Login</router-link>
    <router-link to="/css" class="btn">CSS ex</router-link>
    <router-link to="/footer" class="btn">FOOTER ex</router-link>
    <router-link to="/header" class="btn">Header ex</router-link>
    <router-link to="/header2" class="btn">Header ex2</router-link>
  </div>
</template>
<script>
export default {
  name: "headerComponent"
}
</script>
<style scoped>
#header {
  display: flex;
  background-color: aquamarine;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
}
.flex1 {
}
.flex2 {
}
.flex3 {
}
</style>
