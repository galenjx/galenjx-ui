<template>
  <div>
    <div class="row">
     <jx-switch v-model="active" activeColor='green' inactiveColor='black' name = 'aa'></jx-switch>
     <jx-switch v-model="active1" ></jx-switch>
     <span class="message-show">active:{{active}}----active1：{{active1}}</span>
    </div>
  </div>
</template>

<script>
import Switch from "../../../packages/switch";

export default {
  components: {
    "jx-switch": Switch
  },
  data () {
    return {
      active: false,
      active1: false,
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
