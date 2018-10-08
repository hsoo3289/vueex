<template>
  <div>
    <div id="login-page">
      <label for="id">ID</label>
      <input class="common-input" v-model="member.id" />
      <label for="id">PASSWORD</label>
      <input class="common-input" v-model.lazy.trim="member.password" @keyup.enter="submitLoginForm"/>
      <button @click="testActions">ActionTest</button>
      <button @click="testMutations">MutationTest</button>
      <button @click="submitLoginForm">Submit</button>
    </div>
  </div>
</template>
<script>
import InputComponent from "../common/InputComponent"
import MemberConstant from "../../js/member/MemberConstant.js"
// import { mapState } from 'vuex'

export default {
  namme: 'loginComponent',
  components: {
    InputComponent
  },
  data: function () {
    return { member: this.$store.getters.member };
  },
  // props: {
  //   ...mapState('member')
  // },
  methods: {
    testActions: function (e) {
      this.$store.dispatch(MemberConstant.LOGIN, e);
    },
    testMutations: function (e) {
      this.$store.commit(MemberConstant.LOGIN, e);
    },
    showMapState: function () {
    },
    submitLoginForm: function () {
      this.$store.dispatch(MemberConstant.LOGIN);
    }
  }

}
</script>
<style scoped>
#login-page {
  padding: 2em;
  height: 90vh;
}
.common-input {
  display: block;
  margin: 1em 0 1em 0;
}
</style>

