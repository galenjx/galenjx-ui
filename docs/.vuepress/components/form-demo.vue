<template>
  <div>
    <div class="row">
     <jx-form :model = 'model'>
       <jx-form-item label='选择性别'>
         <jx-radio label = '1' v-model="model.gender">男</jx-radio>
          <jx-radio label = '0' v-model="model.gender">女</jx-radio>
       </jx-form-item>
       <jx-form-item label='选择'>
         <jx-switch v-model="model.active"></jx-switch>
       </jx-form-item>
     </jx-form>
     <span class="message-show">gender:{{model.gender}}----active：{{model.active}}</span>
    </div>
  </div>
</template>

<script>

import Switch from "../../../packages/switch";
import JxRadio from "../../../packages/radio";
import JxForm from "../../../packages/form";
import JxFormGroup from "../../../packages/form-item";

export default {
  components: {
    "jx-switch": Switch,
    "jx-radio": JxRadio,
    "jx-form": JxForm,
    "jx-form-item": JxFormGroup
  },
  data () {
    return {
      model:{
        gender:'1',
        active:true
      }
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
