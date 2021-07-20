## BtnWrapper


### 基础用法
:::demo 可以通过设置`text`和`icon`来决定按钮的文本信息和图标信息

```html
<template>
    <btn-wrapper :text="'文字按钮'" icon="icon-table-help"/>
</template>
```
:::

### 图标位置

:::demo 可以通过`iconPosition`设置按钮的位置(`left` || `right`)

```html
<template>
    <btn-wrapper iconPosition="right" icon="icon-table-help"/>
</template>
```
:::

### 禁用状态

:::demo 可以通过`disabled`设置按钮禁用状态

```html
<template>
    <btn-wrapper :disabled="true" icon="icon-table-help"/>
</template>
```
:::

### loading状态

:::demo 可以通过`loading`设置按钮加载状态

```html
<template>
    <btn-wrapper :loading="true" icon="icon-table-help"/>
</template>
```
:::


### BtnWrapper Attributes
| 参数 | 说明 | 类型 |是否必须| 默认值 |
|  ----  | ----  |---- | ---| ---- |
| text | 显示的文字 |String|是 | '按钮'|
| icon | 显示的图标 |String | 是|- |
| disabled | 按钮是否被禁用 |Boolean|否 | false |
| iconPosition | 图标显示的位置 |'left'/'right'|否 | 'left' |
| hasIcon | 是否显示图标 |Boolean|否 | true |


### BtnWrapper Events

| 事件名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| click      | 点击事件                                 | - |


### BtnWrapper Slots

| slot名称   | 说明                                                  | 参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| default      | 按钮的渲染                                 | - |



#### 使用示例

```html
<BtnWrapper text="高级筛选" icon="iconfont icon-list-filter" @click="handleTriggerClick" />
```

