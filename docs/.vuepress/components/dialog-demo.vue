<template>
  <div>
    <div class="row">
      <jx-button  type="primary" @click="visible = true">显示dialog</jx-button>
      <jx-dialog :visible.sync = "visible">
        <span>确定要删除该信息吗</span>
        <template v-slot:footer>
          <jx-button type = "primary" @click="visible = false">确定</jx-button>
          <jx-button  @click="visible = false">取消</jx-button>
        </template>
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
