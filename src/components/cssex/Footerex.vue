<template>
  <!-- <div> -->
    <ul id="footer-logos">
      <li><router-link to="/"><img src="../../assets/left.png" /></router-link></li>
      <li><router-link to="/"><img src="../../assets/record.png" /></router-link></li>
      <li><router-link to="/"><img src="../../assets/right.png" /></router-link></li>
    </ul>
  <!-- </div> -->
</template>
<style scoped>
#router-view {
  text-align: center;
}
#router-view li {
  list-style: none;
  display: inline;
}
#router-view a img {
  border: none;
  opacity: 0.25;
  transition: all 0.2s ease-in-out;
}
#router-view a:hover img, #router-view a:focus img {
  opacity: 0.6;
  transform: scale(1.2) rotate(-10deg) translateY(-20px);
  background-color:red;
  box-shadow: 4px 4px 10px #000;
}
</style>
