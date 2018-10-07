<template>
  <div>
    <div class="wrapper">
      <div class="submenu-wrapper">
        <button >hover</button>
        <ul v-if="visible">
          <li>submenu1</li>
          <li>submenu2</li>
          <li>submenu3</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cssExComponent',
  data: function () {
    return { visible: false };
  },
  methods: {
    changeVisible: function(e) {
      console.log(e);
      this.visible = !this.visible;
    },
    setVisible: function (flag) {
      console.log("flag", flag);
      this.visible = flag;
    }
  }
}
</script>
<style scoped>
.submenu-wrapper {
  display: inline-block;
  position: relative;
}
.submenu-wrapper ul {
  display: block;
  position: absolute;
  /* opacity: 0; */
  z-index: 1;
  background-color: bisque;
  margin-top:0px;
}

.submenu-wrapper:hover ul {
  /* opacity: 1; */
  z-index: 1;
}

.fade-enter, fade-leave-active {
  opacity: 0;
}
.fade-enter-active, fade-leve {
  transition: opacity 0.5s;
}

#nav li a {
  padding: 5px 15px;
  font-weight: bold;
  color: #ccc;
  color: rgba(255,255,255,0.7);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 14px;
}
#nav li a:hover, #nav li a:focus {
  color: #fff;
  background: rgba(255, 255, 255, .15);
  transition: all 0.5s ease-in-out;
}

</style>

