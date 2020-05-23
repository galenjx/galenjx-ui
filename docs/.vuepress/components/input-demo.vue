<template>
  <div>
    <div class="row">
     <jx-input placeholder="请输入用户名" name='username'></jx-input>
     <jx-input placeholder="请输入密码"  name='username' disabled></jx-input>
     <jx-input placeholder="请输入密码" type='password' name='password'></jx-input>
     <jx-input placeholder="请输入用户名" v-model="username"></jx-input>
     <span class="message-show">username:{{username}}</span>
    </div>
  </div>
</template>

<script>

import JxInput from "../../../packages/input";

export default {
  components: {
    "jx-input": JxInput
  },
  data () {
    return {
        username:'galenjx',
    }
  }
};
</script>
<style lang="scss">
.row {
  margin: 5px 10px;
   .jx-input {
    margin: 10px 10px;
  }
  .message-show {
    margin: 10px;
  }
}
</style>
