<template>
  <div id="app">
    <header-component></header-component>
    <router-view id="router-view"></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
import router from './js/router.js'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent
  },
  router
}
</script>

<style>
#router-view {
  background-color: yellowgreen;
  height: 80vh;
  width: 80%;
}
.btn {
  display: inline-block;
  background-color: white;
  border: gray solid 1px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}

.btn:hover {
  
}

</style>
