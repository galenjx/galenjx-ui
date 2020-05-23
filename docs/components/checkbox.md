---
title: Checkbox 复选框
---

# Checkbox

用于在一组备选项中进行多选，支持Checkbox组写法

## 效果预览

#

<ClientOnly>
<checkbox-demo01></checkbox-demo01>
</ClientOnly>

#### 代码
```html
 <div class="row">
     <jx-checkbox v-model="checked">男</jx-checkbox>
     <hr>
     <jx-checkbox-group v-model="checkList">
      <jx-checkbox label = 'A' ></jx-checkbox>
      <jx-checkbox label = 'B' ></jx-checkbox>
      <jx-checkbox label = 'C' ></jx-checkbox>
      <jx-checkbox label = 'D' ></jx-checkbox>
     </jx-checkbox-group>
    </div>
```
