## PageListTemplate 列表页模版


### 基础用法
:::demo

```html
<template>
    <div class="page-list-template-example">
        <page-list-template
            :pageConfig="pageConfig"
        >
            <!-- 页面模版 table 插槽 -->
            <template slot="table">
                <vantop-table
                    :columns="columns"
                    :data="data"
                >
                </vantop-table>
            </template>
        </page-list-template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageConfig: {
                    pageTitle: '页面标题', // 页面 title
                    pageUpdateTime: '2021-07-15 10:00:01', // 页面 更新时间
                },
                // table
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
                ]
            };
        },
    }
</script>
```
:::

### 搜索 + 状态筛选 + 页面按钮
:::demo

```html
<template>
    <div class="page-list-template-example">
        <page-list-template
            :pageConfig="pageConfig"
            @handleFilterStatus="handleFilterStatus"
        >
            <!-- 页面模版 搜索 插槽 -->
            <template slot="search">
                <select-search-input select :options="options" style="margin-right: 8px"/>
                <advanced-filter @search="handleSearch" @reset="handleReset">
                    <el-form :model="searchForm">
                        <el-form-item label="名称:">
                            <el-input v-model="searchForm.name" placeholder="请输入名称" size="small"></el-input>
                        </el-form-item>
                        <el-form-item label="状态：">
                            <el-select v-model="searchForm.status" size="small" clearable>
                                <template v-for="status in options">
                                    <el-option
                                        :label="status.label"
                                        :value="status.value"
                                        :key="status.value"
                                    ></el-option>
                                </template>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </advanced-filter>
            </template>
            <!-- 页面模版 table 插槽 -->
            <template slot="table">
                <vantop-table
                    :columns="columns"
                    :data="data"
                >
                </vantop-table>
            </template>
        </page-list-template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageConfig: {
                    pageTitle: '页面标题', // 页面 title
                    pageUpdateTime: '2021-07-15 10:00:01', // 页面 更新时间
                    // 页面 状态 筛选
                    filterStatus: [
                        {
                            label: '全部',
                            value: 0,
                        },
                        {
                            label: '待审核',
                            value: 1,
                            count: 6,
                        },
                        {
                            label: '已审核',
                            value: 2,
                        },
                    ],
                    // 页面 操作 按钮
                    operationBtns: [
                        {
                            icon: 'el-icon-plus',
                            text: '新增',
                            handler: item => this.handle(item),
                        },
                        {
                            icon: 'el-icon-check',
                            text: '审核',
                            handler: item => this.handle(item),
                        },
                        {
                            icon: 'el-icon-close',
                            text: '作废',
                            disabled: true,
                            handler: item => this.handle(item),
                        },
                        {
                            icon: 'el-icon-close',
                            text: '导出筛选数据',
                            handler: item => this.handle(item),
                        },
                    ],
                },
                // search
                searchForm: {
                    name: '',
                    status: '',
                },
                options: [
                    {
                        label: 'Aasdasdas',
                        value: 'a',
                    },
                    {
                        label: 'Basdasdas',
                        value: 'b',
                    },
                ],
                // table
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
                ]
            };
        },
        methods: {
            handleSearch(){
                console.log('search btn has clicked');
            },
            handleReset(){
                console.log('reset btn has clicked');
            },
            handle(item){
                console.log(item);
            },
            handleFilterStatus(item){
                console.log(item);
            },
        }
    }
</script>
```
:::

### 侧边栏
:::demo
```html
<template>
    <div class="page-list-template-example">
        <page-list-template
            :pageConfig="pageConfig"
            @handlePageTab="handlePageTab"
        >
            <!-- 页面模版 侧边栏 插槽 -->
            <template slot="aside">
                <div style="padding-top: 16px">
                    <van-tree
                        :data="trees"
                        draggable
                        :treeProps="treeProps"
                        @append="handleAppend"
                        @modify="handleModify"
                        @remove="handleRemove"
                        @node-click="handleClick"
                        @drag="handleDrag"
                    >
                        <template slot="append">
                            <i class="el-icon-folder-add"></i>
                        </template>
                        <template slot="modify">
                            <i class="el-icon-edit-outline"></i>
                        </template>
                        <template slot="remove">
                            <i class="el-icon-delete"></i>
                        </template>
                    </van-tree>
                </div>
            </template>
        </page-list-template>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageConfig: {
                    asideWidth: 260, // 默认值 240
                    pageTab: [
                        {
                            label: 'Tab1',
                            value: 1,
                        },
                        {
                            label: 'Tab2',
                            value: 2,
                        },
                    ]
                },
                treeProps : {
                    label: 'name', // 标签显示
                    children: 'children', // 子级
                    count: 'countNumber' // 显示个数
                },
                trees: [
                    {
                        "id": 1,
                        "name": "商品",
                        "children": [
                            {
                                "id": 270226,
                                "name": "品牌管理",
                                "children": null,
                            },
                            {
                                "id": 270227,
                                "name": "SKU认领",
                                "children": null,
                            },
                            {
                                "id": 270228,
                                "name": "分类管理",
                                "children": null,
                            },
                        ],
                    },
                ]
            }
        },
        methods: {
            handlePageTab(item){
                console.log(item);
            },
            handleAppend(node) {
                this.$message.info('append btn has clicked', node);
            },
            handleModify(node) {
                this.$message.info('modify btn has clicked', node);
            },
            handleRemove(node) {
                this.$message.info('remove btn has clicked', node);
            },
            handleClick(node) {
                this.$message.info('node has clicked', node);
            },
            handleDrag(draggingNode, drag, type) {
                this.$message.info('drag btn has clicked', draggingNode, drag, type);
            },
        }
    }
</script>
:::


### 多个table
:::demo

```html
<template>
    <div class="page-list-template-example">
        <page-list-template>
            <!-- 页面模版 table 插槽 -->
            <template slot="table">
                <div style="display: flex;height: 100%;">
                    <vantop-table
                        :columns="columns"
                        :data="data"
                        style="margin-right: 20px;"
                    >
                    </vantop-table>
                    <vantop-table
                        :columns="columns"
                        :data="data"
                    >
                    </vantop-table>
                </div>
            </template>
        </page-list-template>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // table
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
                ]
            }
        },
    }
</script>
```
:::


### PageListTemplate Attributes
> 所有配置参数，都在 pageConfig 对象里

| 参数名称        | 描述           | 类型     |是否必须 |默认值  |
| ---------------| --------------| --------| -------| ------|
| asideWidth     | 侧边栏宽度      | Number  |否      |240    |
| pageTitle      | 页面 头部标题   | String  |否      |''     |
| pageTab        | 页面 头部Tab   | Array   |否      |[]     |
| pageUpdateTime | 页面 更新时间   | String  |否      |''     |
| filterStatus   | 页面 状态过滤   | Array   |否      |[]     |
| operationBtns  | 页面 操作按钮   | Array   |否      |[]     |

### option Attributes
| 参数名称 | 说明        |类型             | 默认值 |
| --------| -----------| ---------------|-------|
| label   | 选项名      | string         | -     |
| value   | 选项值      | string｜number | -     |
| count   | 状态筛选数值 | number         | -     |

### PageListTemplate Events

| 事件名称            | 说明                   | 回调参数                                                           |
| ------------------ | ----------------------| ----------------------------------------------------------------- |
| handlePageTab      | 页面 头部Tab 切换时触发  | 当前点击的 tab：{ label: string, value: number }                    |
| handleFilterStatus | 点击 页面 状态过滤 时触发 | 当前点击的 status：{ label: string, value: number, count?: number } |