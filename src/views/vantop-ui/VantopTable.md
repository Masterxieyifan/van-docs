## VantopTable 多项文本输入框
基于[vxe-table3.x](https://xuliangzhan_admin.gitee.io/vxe-table/#/table/api)二次封装，适用于**vantop-fe**大部分列表页使用
- 支持多选框 hasSelection
- 支持分页 hasPagination
- 支持行的操作下拉列表 operations
- 支持列的显隐操作 hasToolbar
- 支持列的拖拽排序 sortable
- 支持底部按钮操作列 `footer-btn`(slot)

### 基础用法
:::demo

```html
<template>
    <vantop-table 
        :columns="columns"
        :data="data"/>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                data: [
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                ],
            };
        }
    }
</script>
```
:::

### 表格配置
:::demo 设置`hasSelection`为`false`，隐藏多选；设置`hasToolbar`为`false`，隐藏显隐列；设置`hasPagination`为`false`，隐藏分页；设置`padding`为`false`，去除边距。

```html
<template>
    <p>隐藏多选</p>
    <vantop-table 
        :columns="columns"
        :data="data"
        :hasSelection="false"/>
    <p>隐藏显隐列</p>
    <vantop-table 
        :columns="columns"
        :data="data"
        :hasToolbar="false"/>
    <p>隐藏分页</p>
    <vantop-table 
        :columns="columns"
        :data="data"
        :hasPagination="false"/>
    <p>去除边距</p>
    <vantop-table 
        :columns="columns"
        :data="data"
        :padding="false"/>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                data: [
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                ],
            };
        }
    }
</script>
```
:::


### 自定义渲染（render函数渲染）
> 当采用自定义渲染时，本质上是破坏了组件内部的构造，所以会导致组件的功能部分失效，需要手动处理
:::demo 可以使用`render`函数或者`JSX`单独某列渲染。

```html
<template>
    <vantop-table 
        :columns="columns"
        :data="data"/>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                        // JSX
                        renderHeader: h => {
                            return (<div onClick={() => alert('abced')}>自定义渲染头</div>);
                        },
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                        // Render函数
                        render: (h, {row, column}) => {
                            return h('a', {
                                on: {
                                    click: () => alert('abced'),
                                },
                            }, row.name)
                        },
                    },
                ],
                data: [
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                ],
            };
        }
    }
</script>
```
:::

### 自定义渲染（外部渲染）
> 此种情况下，部分组件功能失效
- 显隐列功能将会失效，需要手动监听`columns-change`维护columns的变化

- columns的`hoverable`属性失效，需要外部实现`popover`的功能
:::demo

```html
<template>
    <vantop-table 
        :columns="columns"
        @columns-change="handleColumnsChange"
        :data="data">
        <vxe-table-column
            v-for="{ label, prop} in showColumns"
            :field="prop"
            :title="label"
            :key="prop">
            <template #default="{row}">{{row[prop]}}</template>
        </vxe-table-column>
    </vantop-table>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        prop: 'name',
                        label: '名称',
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                showColumns: [
                    {
                        prop: 'name',
                        label: '名称',
                    },
                    {
                        prop: 'age',
                        label: '年龄',
                    },
                    {
                        prop: 'sex',
                        label: '性别',
                    },
                ],
                data: [
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                    {
                        name: '123',
                        age: 12,
                        sex: 1,
                    },
                ],
            };
        },
        methods: {
            handleColumnsChange(columns) {
                this.showColumns = columns;
            }
        }
    }
</script>
```
:::

### 远程存储
当需要记录用户行为时，可以使用`storage`开启表格的用户行为记忆功能
```html
<template>
// ref建议直接使用tableInstance或者将tableRefKey重写为你自己的值
    <vantop-table
        :data="data"
        :columns="columns"
        :ref="tableRefKey"
        :storage="true"
        storageKey="your-own-unique-key"
        :storageColumnProps="storageColumnProps"
        @storage-columns-change="storageHandleColumns"/>
</template>
<script>
// 从全局mixins中导入需要的mixin
import { tableStorage } from '@/mixins';
// 使用mixin
{
    ...
    mixins: [tableStorage],
    ...
}
</script>
```




### VantopTable Attributes
使用了attr, listener 进行透明传参,更多参数及实现请参考[vxe-table](https://xuliangzhan_admin.gitee.io/vxe-table/#/table/base/basic)，支持直接通过`ref`操作`vxe-table`(**tableInstance**)原生实例

| 参数 | 说明 | 类型 | 是否必须 | 默认值 |
| -------- | ----------- |------ | ---- | ---|
| data | 表格显示的列表 | Array | 是 | - |
| columns | 表格要显示的列   | Array | 是 | - |
| total | 表格数据总数   | Number | 是 | - |
| loading | 表格的加载状态   | Boolean | 否 | - |
| hasSelection | 表格是否能够被多选   | Boolean | 否 | true |
| isFixedSelection | 表格多选框是否固定在左列   | Boolean | 否 | false |
| hasPagination | 是否有分页 | Boolean | 否 | true |
| hasToolbar | 是否有显隐列按钮 | Boolean | 否 | true |
| hasRefreshBtn | 是否有刷新按钮 | Boolean | 否 | false |
| sortable | 列是否可拖拽 | Boolean | 否 | true |
| storage | 是否采用远程存储记录用户列行为 | Boolean | 否 | false |
| storageKey | 存储在远程仓库的键值，租户唯一 | String | 是(当storage为true时) | - |
| padding | 表格是否有边距 | Boolean | 否 | true |
| cellClassName | 表格单元格类名 | String | 否 | - |
| operations | 行的操作列表  | Array | 否 | [] |
| operationWidth | 操作列的宽度  | [String, Number] | 否 | 140 |
| moreMutipleOperations | 更多批量操作按钮  | Array | 否 | [] |
| highlightHoverRow | 鼠标悬浮行时，是否要高亮显示  | Boolean | 否 | true |
| highlightCurrentRow | 鼠标点击行时，是否要高亮显示  | Boolean | 否 | true |
| showHeaderOverFlow | 设置表头所有内容过长时显示为省略号  | Boolean | 否 | true |
| pageSizes | 设置每页显示条目个数  | Array | 否 | [20,50,100,200] |


### operations

| 字段名称   | 说明                                                  | 类型 |是否必须     |默认值     |
| ---------- | ----------------------------------------------------- | ------------ |------------ |----|
| text      | 操作项名称                                      | String  | 是 |             - |
| key       | 操作项key值，唯一                                   | String   | 是 |-|
| icon       | 操作项图标icon类名                                 | String     | 否 |-|
| validator       | 是否隐藏操作项                      | Function(row)   | 否 | -|
| disableHandler       | 是否禁用操作项，函数                      | Function(row)   | 否 | () => false|
| handler       | 点击该操作时触发的函数                      | Function(row)   | 否 |-|



### moreMutipleOperations
同`operations`在于函数的参数为**selections**

| 字段名称   | 说明                                                  | 类型 |是否必须     |默认值     |
| ---------- | ----------------------------------------------------- | ------------ |------------ |----|
| text      | 操作项名称                                      | String  | 是 |             - |
| key       | 操作项key值，唯一                                   | String   | 是 |-|
| icon       | 操作项图标icon类名                                 | String     | 否 |-|
| validator       | 是否隐藏操作项                      | Function(selections)   | 否 | -|
| disableHandler       | 是否禁用操作项，函数                      | Function(selections)   | 否 | () => false|
| handler       | 点击该操作时触发的函数                      | Function(selections)   | 否 |-|



### Columns
> render函数可采用JSX语法

| 字段名称   | 说明        | 类型 |是否必须     |默认值     |
| ---------- | ----------------- | ------------ |------------ |----------
| label      | 列名称                                      | String  | 是 | - |
| cancellable      | 是否可以取消显示                                      | Boolean  | 否 |  true |
| prop       | 列对应的key名称                                    | String   | 是 |-|
| minWidth       | 最小宽度                                 | Number     | 否 |-|
| width       | 列宽                                 | Number     | 否 |-|
| hoverable       | 是否采用悬浮框                                 | Boolean     | 否 |-|
| render       | 内容渲染函数                                 | Function(h, { row, column, rowIndex, columnIndex })     | 否 |-|
| renderHeader       | 头部渲染函数                                 | Function(h, { column, rowIndex, columnIndex })     | 否 |-|


### VantopTable Events

| 事件名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| refresh      | 表格配置发生改变时触发                                 | pagination: { current, size, total } |
| select       | 表格选择项发生改变时触发                              | selections (所有被选中的行) |
| size-change       | 分页大小发生改变时触发                              | pagination: { current, size, total } |
| current-page-change       | 分页下标发生改变时触发                              | pagination: { current, size, total } |
| column-change       | 显示列发生改变时                              | columns |


### VantopTable Methods

| 方法名称   | 说明                                                  | 回调参数     |
| ---------- | ----------------------------------------------------- | ------------ |
| getSelectedRow       | 获取表格选中的行                              | - |
| clearSelection      | 清除表格的选择项                                 | - |
| setPaginationSize       | 设置分页的大小                              | - |
| setCheckboxRow(selections, checked)       | 设置选中的行              | - |
| setPaginationCurrent       | 设置分页的下标                            | - |
| resetPagination       | 重置分页的配置                              | - |
| resetPaginationSize       | 重置分页的大小                            | - |
| resetPaginationCurrent       | 重置分页的下标                              | - |