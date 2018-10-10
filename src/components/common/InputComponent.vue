<template>
  <div>
    <label ref="label" class="input-label">
      {{conf.props.label.innerText}}
    </label>
    <input ref="input" v-model="value" class="input"/>
    <span id="err" v-if="error">{{errormsg}}</span>
  </div>
</template>
<script>
export default {
  name: "inputComponent",
  props: ['conf'],
  data: function () {
    return { error: false, errormsg: '', value: ''}
  },
  methods: {
    check: function (e) {
      // console.log(this.conf.validation.required.method);
      // console.log(this.conf.validation.reqiured.method(e.target.value));
      this.conf.validation.forEach(element => {
        console.log(element);
        return false;
      });
      // this.error = !this.conf.validation.reqiured.method(e.target.value);
      this.errormsg = this.conf.validation.reqiured.error;
    },
    test: function (e) {
      console.log(e);
    }
  },
  mounted() {
    let props = this.conf.props, el, key, prop;
    // this.$refs.input.addEventListener("keyup", this.conf.validation.reqiured.method);
    for( key in props ) {
      el = this.$refs[key];
      for ( prop in props[key]) {
        console.log(el);
        console.log(`key: ${key}, prop: ${prop}, value: ${props[key][prop]}`);
        //el[prop] = props[key][prop];
         el.setAttribute(prop, props[key][prop]);
      }
    }
  },
}
</script>
<style scoped>
.input {
  width: 50%;
  font-size: 1.5rem;
}
.input-label {
  display: block;
  color: red;
}
#err {
  display: block;
  font-size: 1.5rem;
  color: red;
}
</style>
