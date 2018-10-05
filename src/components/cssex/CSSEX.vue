<template>
  <div>
    <div class="wrapper">
      <nav id="nav">
        <li><a href="/login">News</a></li>
        <li><a href="/login">Things</a></li>
        <li><a href="/login">Stuff</a></li>
        <li><a href="/login">Junk</a></li>
        <li><a href="/login">About</a></li>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cssExComponent'
}
</script>
<style scoped>
.wrapper {
  background-color: darkkhaki;
  height: 80vh;
}
#nav {
  float: right;
  padding: 42px 0 0 30px;
  background: purple;
}
#nav li {
  list-style: none;
  float: left;
  margin: 0 0 0 5px;
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

