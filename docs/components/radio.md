---
title: Radio 单选框
---

# Radio

用于在一组备选项中进行单选，支持radio组写法

## 效果预览

#

<ClientOnly>
<radio-demo></radio-demo>
</ClientOnly>

#### 代码
```html
<div class="row">
     <jx-radio label = '1' v-model="gender">男</jx-radio>
     <jx-radio label = '0' v-model="gender">女</jx-radio>
     <hr>
     <jx-radio-group v-model="age">
      <jx-radio label = '1' >old</jx-radio>
      <jx-radio label = '0' >young</jx-radio>
     </jx-radio-group>
</div>
```
