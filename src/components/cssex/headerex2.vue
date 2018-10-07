<template>
<<<<<<< HEAD
  <nav>
    <ul>
      <li class="sub-menu-parent" tab-index="0">
        <a href="http://google.com">Menu Item 1</a>
        <ul class="sub-menu">
          <li><a href="#">Sub Item 1</a></li>
          <li><a href="#">Sub Item 2</a></li>
          <li><a href="#">Sub Item 3</a></li>
          <li><a href="#">Sub Item 4</a></li>
        </ul>
      </li>
      <li class="sub-menu-parent" tab-index="0">
        <a href="#">Menu Item 2</a>
        <ul class="sub-menu">
          <li><a href="#">Sub Item 1</a></li>
          <li><a href="#">Sub Item 2</a></li>
          <li><a href="#">Sub Item 3</a></li>
          <li><a href="#">Sub Item 4</a></li>
          <li><a href="#">Sub Item 5</a></li>
          <li><a href="#">Sub Item 6</a></li>
        </ul>
      </li>
      <li class="sub-menu-parent" tab-index="0">
        <a href="#">Menu Item 3</a>
        <ul class="sub-menu">
          <li><a href="#">Sub Item 1</a></li>
          <li><a href="#">Sub Item 2</a></li>
        </ul></li>
    </ul>
  </nav>
=======
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
>>>>>>> 8a0b532b9c9ba2258ebe55673ac2f2f3f85e327b
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
<<<<<<< HEAD
.sub-menu-parent { position: relative; }

.sub-menu { 
  visibility: none; /* hides sub-menu */
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  transform: translateY(-2em);
  z-index: -1;
  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
}

.sub-menu-parent:focus .sub-menu,
.sub-menu-parent:focus-within .sub-menu,
.sub-menu-parent:hover .sub-menu {
  visibility: visible; /* shows sub-menu */
  opacity: 1;
  z-index: 1;
  transform: translateY(0%);
  transition-delay: 0s, 0s, 0.3s; /* this removes the transition delay so the menu will be visible while the other styles transition */
}

/* presentational */
body { padding: 2%; font: 18px/1.4 sans-serif; }

nav a { color: #E00; display: block; padding: 0.5em 1em; text-decoration: none; }
nav a:hover { color: #F55; }
nav ul,
nav ul li { list-style-type: none; padding: 0; margin: 0; }

nav > ul { background: #EEE; text-align: center; }
nav > ul > li { display: inline-block; border-left: solid 1px #aaa; }
nav > ul > li:first-child { border-left: none; }

.sub-menu {
  background: #DDD;
}


=======
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
>>>>>>> 8a0b532b9c9ba2258ebe55673ac2f2f3f85e327b
</style>
