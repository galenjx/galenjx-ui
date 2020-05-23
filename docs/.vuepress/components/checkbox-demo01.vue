<template>
  <div>
    <div class="row">
     <jx-checkbox v-model="checked">男</jx-checkbox>
     <hr>
     <jx-checkbox-group v-model="checkList">
      <jx-checkbox label = 'A' ></jx-checkbox>
      <jx-checkbox label = 'B' ></jx-checkbox>
      <jx-checkbox label = 'C' ></jx-checkbox>
      <jx-checkbox label = 'D' ></jx-checkbox>
     </jx-checkbox-group>
      <span class="message-show">checked:{{checked}}----checkList：{{checkList}}</span>
    </div>
  </div>
</template>
A
<script>
import JxCheckbox from "../../../packages/checkbox";
import JxCheckboxGroup from "../../../packages/checkbox-group";

export default {
  components: {
    "jx-checkbox": JxCheckbox,
    "jx-checkbox-group": JxCheckboxGroup
  },
  data () {
    return {
      checked: true,
      checkList: ['A','B']
    }
  }
};
</script>
<style lang="scss">
.row {
  margin: 5px 10px;
   .jx-button {
    margin: 10px 10px;
  }
}
</style>
