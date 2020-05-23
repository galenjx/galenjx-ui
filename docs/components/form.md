---
title: Form 表单域
---

# Form

可以把表单元素整合到form

## 效果预览

#

<ClientOnly>
<form-demo></form-demo>
</ClientOnly>

#### 代码
```html
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
    </div>
```

