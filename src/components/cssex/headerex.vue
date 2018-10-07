<template>
  <div>
    <div class="header-wrapper">
      <div class="logo">LOGO</div>
      <div class="menu-group">
        <button class="btn" @click="showSubmenu">메뉴1</button>
        <a href="/" class="btn">메뉴2</a>
        <div class="menu-wrapper" @mouseenter="showSubmenu" @mouseleave="hideSubmenu">
          <a href="/" class="btn">메뉴3</a>
          <transition name="fade">
            <ul ref="ul" v-if="submenu">
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
  data: function () {
    return {submenu: false};
  },
  methods: {
    menuclick: function (e) {
      console.log(e.target.innerText);
    },
    showSubmenu: function (e) {
      console.log(e);
      this.submenu = true;
      
    },
    hideSubmenu: function (e) {
      console.log(e);
      this.submenu = false;
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
  position: absolute;
  padding-top: 40px;
  transition: all 0.5s ease-in-out;
}
.fade-enter-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter {
  transition: all 0.5s ease-in-out;
}

</style>
