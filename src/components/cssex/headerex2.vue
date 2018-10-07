<template>
  <div>
    <div class="header-wrapper flex-box">
      <div class="logo flex-item">LOGO</div>
      <div class="title flex-item">Header with float</div>
      <a href="/" class="btn">메뉴1</a>
      <a href="/" class="btn">메뉴2</a>
      <div class="title menu-group">
        <a href="/" class="btn">메뉴3</a>
        <ul>
          <li class="sub-item" @click="menuclick">sub-menu1</li>
          <li class="sub-item" @click="menuclick">sub-menu2</li>
          <li class="sub-item" @click="menuclick">sub-menu3</li>
          <li class="sub-item" @click="menuclick">sub-menu4</li>
        </ul>
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
  methods: {
    menuclick: function (e) {
      console.log(e.target.innerText);
    }
  }
}
</script>
<style scoped>
.flex-box {
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
}
.flex-item {
  margin-left: auto;
}
.logo.flex-item{
  margin-left: 0px;
}
.title.flex-item {
  margin-left: auto;
  margin-right: auto;
}
.menu-group {
  position: relative;
}
.menu-group ul {
  position: absolute;
  margin-top: 0px;
  width: 200%;
  right: 0px;
  background: white;
  z-index: -1;
  opacity: 0;
  transition: all 0.1s ease-in-out;
  list-style: none;
  align-items: center;
  padding: 10px;
  border: solid 1px gray;
  border-radius: 8px;
}
.menu-group:hover ul {
  z-index: 1;
  opacity: 1;
  transition: all 0.3s ease-in-out;
}
.menu-group .sub-item {
  margin: 5px;
  padding: 10px;
  background: white;
}
.menu-group .sub-item:hover {
  box-shadow: 0px 0px 4px skyblue;
  transition: all 0.3s ease-in-out;
}
.body-content {
  padding: 10px;
}
</style>
