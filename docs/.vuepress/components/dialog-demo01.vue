<template>
  <div>
     <div class="row">
      <jx-button  type="primary" @click="visible = true">显示dialog</jx-button>
      <jx-dialog :visible.sync = "visible" title="警告！" width='500px' height='100px'>
      </jx-dialog>
    </div>
  </div>
</template>

<script>
import Button from "../../../packages/button";
import Dialog from "../../../packages/dialog";

export default {
  components: {
    "jx-button": Button,
    "jx-dialog": Dialog
  },
  data () {
    return {
      visible: false,
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
