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
@font-face {
  font-family: 'Noto Sans KR';
  src: url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
}
#app {
  background: lightgray;
  font-family: 'Noto Sans KR', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
}
#router-view {
  background-color: yellowgreen;
  height: 90vh;
  max-width: 1080px;
  margin-left: 10%;
  margin-right: 10%;
}
.btn {
  display: inline-block;
  background-color: white;
  border: gray solid 1px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
}
.btn:hover {
  box-shadow: 2px 2px 4px gray;
  transition: all 0.2s;
}

</style>
