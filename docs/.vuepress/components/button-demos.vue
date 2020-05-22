<template>
  <div>
<div class="row">
      <jx-button type="primary">primary</jx-button>
      <jx-button type="success">success</jx-button>
      <jx-button type="info">info</jx-button>
      <jx-button type="warning">warning</jx-button>
      <jx-button type="danger">danger</jx-button>
      <jx-button>按钮</jx-button>
    </div>
    <div class="row">
      <jx-button plain type="primary">primary</jx-button>
      <jx-button plain type="success">success</jx-button>
      <jx-button plain type="info">info</jx-button>
      <jx-button plain type="warning">warning</jx-button>
      <jx-button plain type="danger">danger</jx-button>
      <jx-button plain>按钮</jx-button>
    </div>

    <div class="row">
      <jx-button plain disabled type="primary">primary</jx-button>
      <jx-button plain disabled type="success">success</jx-button>
      <jx-button plain disabled type="info">info</jx-button>
      <jx-button plain disabled type="warning">warning</jx-button>
      <jx-button plain disabled type="danger">danger</jx-button>
      <jx-button plain disabled>按钮</jx-button>
    </div>

    <div class="row">
      <jx-button plain round type="primary">primary</jx-button>
      <jx-button plain round type="success">success</jx-button>
      <jx-button plain round type="info">info</jx-button>
      <jx-button plain round type="warning">warning</jx-button>
      <jx-button plain round type="danger">danger</jx-button>
      <jx-button plain round>按钮</jx-button>
    </div>
    <div class="row">
      <jx-button plain circle type="primary">primary</jx-button>
      <jx-button plain circle type="success">success</jx-button>
      <jx-button plain circle type="info">info</jx-button>
      <jx-button plain circle type="warning">warning</jx-button>
      <jx-button plain circle type="danger">danger</jx-button>
      <jx-button plain circle>按钮</jx-button>
    </div>
  </div>
</template>

<script>
import Button from "../../../packages/button";

export default {
  components: {
    "jx-button": Button
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
