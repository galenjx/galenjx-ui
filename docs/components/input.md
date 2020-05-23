---
title: Input 输入框
---

# Input

支持placeholder，type，name，disabled，数据绑定功能，下面分别为type为text，disabled，type为password，v-model演示

## 效果预览

#

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

#### 代码
```html
    <div class="row">
     <jx-input placeholder="请输入用户名" name='username'></jx-input>
     <jx-input placeholder="请输入密码"  name='username' disabled></jx-input>
     <jx-input placeholder="请输入密码" type='password' name='password'></jx-input>
     <jx-input placeholder="请输入用户名" v-model="username"></jx-input>
    </div>
```

