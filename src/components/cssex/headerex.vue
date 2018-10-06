<template>
  <div>
    <div class="header-wrapper">
      <div class="logo">LOGO</div>
      <div class="menu-group">
        <a href="/" class="btn">메뉴1</a>
        <a href="/" class="btn">메뉴2</a>
        <div class="menu-wrapper">
          <a href="/" class="btn">메뉴3</a>
          <transition name="fade">
            <ul>
              <li class="subitems" @click="menuclick">sub-menu1</li>
              <li class="subitems" @click="menuclick">sub-menu2</li>
              <li class="subitems" @click="menuclick">sub-menu3</li>
              <li class="subitems" @click="menuclick">sub-menu4</li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TestComponent from './vuetest'

export default {
  name: 'headerExample',
  components: {
    TestComponent
  },
  methods: {
    menuclick: function (e) {
      console.log(e.target.innerText);
    }
  }
}
</script>
<style scoped>
.logo {
  float: left;
}
.menu-group {
  float: right;
}
.header-wrapper {
  height: 100px;
  background: aqua;
}
.menu-wrapper {
  display: inline-block;
}
.menu-wrapper > ul {
  display: none;
  background-color: tomato;
  padding-top: 40px;
  transition: all 0.5s;
}
.menu-wrapper:hover ul {
  display: block;
  position: absolute;
  top: 100px;
}


</style>
