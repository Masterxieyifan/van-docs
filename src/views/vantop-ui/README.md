## Vantop FE 组件库
此文档用来解释目前项目中拥有的组件库


### 安装
```shell
$ npm config set registry http://npm.nextop.cc
$ npm i --save @vantop/vantop-ui
```
### 使用
```js
//入口文件加载iconfont
import {loadIconFont} from '@vantop/vantop-ui'
loadIconFont()

//使用组件
import { InputNumber } from '@vantop/vantop-ui'
//...
```

### 组件列表
| 组件名称 | 说明 | 类型 |是否二次封装|使用场景|
|  ----  | ----  |------- | --- | --- |
| vantop-table | 列表页组件（包含了表格、分页） |全局组件| 是 |适用于列表页的表格|
| basic-box | 容器组件 |按需导入| 否 |一般用于外部的包裹|
| vantop-popover | 省略文字气泡弹框 |全局组件| 是 |一般用于表格描述等|
| btn-wrapper | 文字按钮组件(目前已实现审核、删除、启用、导入、导出) |按需导入|否|适用于文字按钮 |
| collapse | 详情页面折叠信息面板 |按需导入|否|适用于详情、编辑页面 |
| advanced-filter | 高级筛选组件 |按需导入| 是 |适用于列表页的高级筛选|
| search-tree | 搜索树 |按需导入| 是 |适用于树状结构的数据展示搜索|
| van-tree | 搜索树2.0|按需导入| 是 |适用于树状结构的数据展示搜索（包含增删改查以及拖拽功能）|
| select-tree | 下拉搜索树 |按需导入| 是 |适用于树状结构的数据下拉框展示搜索|
| select-search-input | 下拉搜索框 |按需导入| 是 |适用于拥有下拉框的input文本框|
| sticky | 底部操作栏 |按需导入| 否 |适用于新增、编辑页面底部吸附的操作栏|
| increasement | 加减操作按钮 |按需导入| 否 |适用于表格的新增与删除|
| search-list | 搜索列表 |按需导入| 是 |适用于列表的搜索|
| tree-transfer | 树穿梭框 |按需导入| 是 |适用于树形穿梭框|
| img-previewer | 图片预览器 |按需导入| 是 |适用于表格图片预览|