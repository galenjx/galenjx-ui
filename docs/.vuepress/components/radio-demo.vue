<template>
  <div>
    <div class="row">
     <jx-radio label = '1' v-model="gender">男</jx-radio>
     <jx-radio label = '0' v-model="gender">女</jx-radio>
     <hr>
     <jx-radio-group v-model="age">
      <jx-radio label = '1' >old</jx-radio>
      <jx-radio label = '0' >young</jx-radio>
     </jx-radio-group>
     <span class="message-show">gender:{{gender}}----age：{{age}}</span>
    </div>
  </div>
</template>

<script>
import JxRadio from "../../../packages/radio";
import JxRadioGroup from "../../../packages/radio-group";

export default {
  components: {
    "jx-radio": JxRadio,
    "jx-radio-group": JxRadioGroup
  },
  data () {
    return {
      gender: '1',
      age:'1'
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
