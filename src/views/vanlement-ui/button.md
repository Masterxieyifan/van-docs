## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>

<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</el-row>

<el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row>

```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<el-row>
  <el-button disabled>默认按钮</el-button>
  <el-button type="primary" disabled>主要按钮</el-button>
  <el-button type="success" disabled>成功按钮</el-button>
  <el-button type="info" disabled>信息按钮</el-button>
  <el-button type="warning" disabled>警告按钮</el-button>
  <el-button type="danger" disabled>危险按钮</el-button>
</el-row>

<el-row>
  <el-button plain disabled>朴素按钮</el-button>
  <el-button type="primary" plain disabled>主要按钮</el-button>
  <el-button type="success" plain disabled>成功按钮</el-button>
  <el-button type="info" plain disabled>信息按钮</el-button>
  <el-button type="warning" plain disabled>警告按钮</el-button>
  <el-button type="danger" plain disabled>危险按钮</el-button>
</el-row>
```
:::

### 文字按钮

没有边框和背景色的按钮。

:::demo
```html
<el-button type="text">文字按钮</el-button>
<el-button type="text" disabled>文字按钮</el-button>
```
:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<el-row>
    <el-button iconed icon="van-icon van-nav-channel-sku" hint="通道"></el-button>
    <el-button iconed type="info" icon="van-icon van-nav-attribute" hint="属性"></el-button>
    <el-button iconed type="info" icon="van-icon van-nav-help-center" hint="帮助"></el-button>
    <el-button type="primary" icon="van-icon van-search-16">搜索</el-button>
    <el-button type="primary" iconRight icon="van-icon van-upload-16">上传</el-button>
</el-row>

<el-row>
    <el-button iconed icon="van-icon van-delete-16" size="small" hint="删除"></el-button>
    <el-button iconed icon="van-icon van-delete-16" size="small" type="danger" hint="删除"></el-button>
    <el-button iconed type="info" size="small" icon="van-icon van-delete-16" hint="删除" ></el-button>
    <el-button iconed type="info" size="small" icon="van-icon van-edit-16" hint="编辑"></el-button>
    <el-button iconed disabled type="info" size="small" icon="van-icon van-edit-16" hint="编辑"></el-button>
</el-row>

<el-row>
  <el-button icon="van-icon van-search-16" circle></el-button>
  <el-button plain icon="van-icon van-search-16" circle></el-button>
  <el-button type="success" icon="van-icon van-search-16" circle></el-button>
  <el-button type="info" icon="van-icon van-search-16" circle></el-button>
  <el-button type="warning" icon="van-icon van-search-16" circle></el-button>
  <el-button type="danger" icon="van-icon van-search-16" circle></el-button>
</el-row>
  
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<el-button-group>`标签来嵌套你的按钮。

```html
<el-row>
<el-button-group>
  <el-button type="primary" icon="van-icon van-arrow-left-bold-16">上一页</el-button>
  <el-button type="primary" icon="van-icon van-arrow-right-bold-16" iconRight>下一页</el-button>
</el-button-group>
</el-row>

<el-row>
  <el-button-group>
  <el-button icon="van-icon van-arrow-left-bold-16">上一页</el-button>
  <el-button icon="van-icon van-arrow-right-bold-16" iconRight>下一页</el-button>
</el-button-group>
</el-row>
<el-row>

<el-button-group>
  <el-button iconed icon="van-icon van-nav-channel-sku" hint="通道"></el-button>
  <el-button iconed icon="van-icon van-nav-attribute" hint="属性"></el-button>
  <el-button iconed icon="van-icon van-nav-help-center" hint="帮助"></el-button>
</el-button-group>
</el-row>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<el-button type="primary" :loading="true">加载中</el-button>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<el-row>
  <el-button size="medium">中等按钮</el-button>
  <el-button>默认按钮</el-button>
  <el-button size="mini">超小按钮</el-button>
</el-row>
<el-row>
  <el-button size="medium" round>中等按钮</el-button>
  <el-button round>默认按钮</el-button>
  <el-button size="mini" round>超小按钮</el-button>
</el-row>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| iconRight  | 图标位置 | Boolean   |  —  |  -  |
| iconed  | 是否为纯图标按钮 | boolean   |  —  |  false  |
| hint  | 图标提示文字(只有在iconed为true时生效) | string   |  —  | ''  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
