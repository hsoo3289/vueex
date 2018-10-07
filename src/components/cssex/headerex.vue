<template>
  <div>
    <div class="header-wrapper">
      <div class="logo">LOGO</div>
      <div class="title">Header with float</div>
      <div class="menu-group">
        <div class="menu-wrapper">
          <a href="/" class="btn">메뉴3</a>
          <ul>
            <li class="subitems" @click="menuclick">sub-menu1</li>
            <li class="subitems" @click="menuclick">sub-menu2</li>
            <li class="subitems" @click="menuclick">sub-menu3</li>
            <li class="subitems" @click="menuclick">sub-menu4</li>
          </ul>
        </div>
        <a href="/" class="btn">메뉴2</a>
        <a href="/" class="btn">메뉴1</a>
      </div>
    </div>
    <div class="body-content">
      <p>
      플로트를 이용해서 정렬하기 어려움..<br />
      좌우는 left, right 를 이용해서 하지만,<br />
      가운데 타이틀을 주기가 어렵다.<br />
      </p>
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
.header-wrapper {
  padding: 10px;
}
.body-content {
  padding: 20px;
}
.logo {
  margin-top: 20px;
  float: left;
}
.title {
  float: left;
  margin-top: 20px;
  margin-left: 30%;
}
.menu-group > * {
  float: right;
}
.header-wrapper {
  height: 100px;
  background: aqua;
}
.menu-wrapper {
  display: block;
  position: relative;
}
.menu-wrapper ul {
  display: block;
  background-color: white;
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 200%;
  right: 0;
  border: gray;
  margin-top: 0px;
  padding: 10px;
  list-style-type: none;
  text-align: center;
  border-radius: 5px;
}
.menu-wrapper ul li {
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}
.menu-wrapper ul li:hover {
  box-shadow: 0px 0px 4px gray;
  transition: 0.3s ease-in-out;
}

.menu-wrapper:hover ul {
  display: block;
  z-index: 1;
  opacity: 1;
  box-shadow: 4px 4px 4px gray;
  transition: all 0.5s;
}

</style>
