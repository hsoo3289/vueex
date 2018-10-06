<template>
  <div>
    <div class="header-wrapper">
      <div class="logo">LOGO</div>
      <div class="menu-group">
        <a href="/" class="btn">메뉴1</a>
        <a href="/" class="btn">메뉴2</a>
        <a href="/" class="btn">메뉴3</a>
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

</style>
