---
title: Button 按钮
---

# 按钮

- 使用type、plain、round和circle属性来定义 Button 的样式。
- 使用disabled表示图标禁用状态

## 所有按钮

#

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 代码

```html
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
```