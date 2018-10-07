<template>
  <div>
    <label :for="id">
      {{labelText}}
    </label>
    <input :id="id" :placeholder="placeholder" :name="name">
  </div>
</template>
<script>
export default {
  name: "inputComponent",
  props: ['id', 'labelText', 'placeholder', 'name'],
  data: function () {
    return { val: ''}
  }
}
</script>
<style scoped>
</style>
