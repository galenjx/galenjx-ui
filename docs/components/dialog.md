---
title: Dialog 对话框
---

# Dialog

常用于主动操作后的反馈提示，可以自由配置dialog的大小，头部内容，主体内容和底部内容。

## 仅配置头部和宽高

#

<ClientOnly>
<dialog-demo01></dialog-demo01>
</ClientOnly>

#### 代码
```html
<div class="row">
    <jx-button  type="primary" @click="visible1 = true">显示dialog</jx-button>
    <jx-dialog :visible1.sync = "visible1" title="警告！" width='500px' height='100px'>
    </jx-dialog>
</div>
```

## 配置头部,宽高,主体内容

#

<ClientOnly>
<dialog-demo02></dialog-demo02>
</ClientOnly>

#### 代码
```html
<div class="row">
      <jx-button  type="primary" @click="visible = true">显示dialog</jx-button>
      <jx-dialog :visible.sync = "visible">
        <span>操作成功</span>
      </jx-dialog>
</div>
```

## 配置头部,宽高,主体内容，底部按钮

#

<ClientOnly>
<dialog-demo></dialog-demo>
</ClientOnly>

#### 代码
```html
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
```