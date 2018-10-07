<template>
  <div>
    <div id="login-page">
      "login page 입니다."
      <input-component 
        id="name"
        label-text="name:"
        name="name"
        placeholder="이름을 입력 하시오"
      ></input-component>
    </div>
  </div>
</template>
<script>
import InputComponent from "./common/InputComponent"
export default {
  namme: 'loginComponent',
  components: {
    InputComponent
  }

}
</script>
<style scoped>
#login-page {
  height: 80vh;
}
</style>

