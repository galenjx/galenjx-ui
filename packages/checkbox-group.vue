<template>
  <div class="jx-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JxCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
