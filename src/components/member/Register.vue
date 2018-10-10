<template>
  <div>
    <form>
      <input-component ref="email" :conf="conf.email" />
      <input-component ref="password" :conf="conf.password" />
    </form>
    <button @click="check">체크</button>
    <button @click="test">테스트</button>
    <button @click="test2">테스트2</button>
    <button @click="logout">logout</button>
  </div>
</template>
<script>
import InputComponent from "../common/InputComponent"
import validation from "../member/validation.js"
import Constant from "../../js/member/MemberConstant.js"

export default {
  name: "register",
  components: {
    InputComponent,
  },
  data: function () {
    return { conf: validation };
  },
  methods: {
    check: function (e) {
      console.log(this.$refs.email.value, this.$refs.password.value);
      this.$store.dispatch(Constant.LOGIN, {username: this.$refs.email.value, password: this.$refs.password.value});
    },
    test: function (e) {
      // console.log(this.$http);
      this.$store.dispatch("test", { username: this.$refs.email.value, password: this.$refs.password.value} );
    },
    logout: function (e) {
      this.$store.dispatch('logout');
    },
    test2: function (e) {
      this.$store.dispatch('test2');
    }
  }
}
</script>
<style>
#router-view{
  padding: 20px;
}
</style>
