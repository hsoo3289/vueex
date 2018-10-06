<template>
  <div>
    <div id="logo">Logo</div>
    <div class="menu-wrapper">
      <span class="menu">menu1</span>
      <span class="menu">menu2</span>
      <span class="menu">menu3
        <transition name="fade"> 
          <div class="sub-menu">sub1</div>
          <div class="sub-menu">sub2</div>
          <div class="sub-menu">sub3</div>
        </transition>
      </span>
    </div>
  </div>
</template>
<style scoped>
#logo {
  float: left;
}
.menu-wrapper {
  float: right;
}
.menu {
  display: relative;
}
.sub-menu {
  display: none;
}
.menu:hover .sub-menu {
  display: block;
  background-color: #50505050;
}
.fade-enter .fade-enter-active {
  
}
</style>
