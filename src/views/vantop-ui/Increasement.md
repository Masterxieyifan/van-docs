## Increasement 增删按钮

### 基础用法
:::demo 抛出两个事件，`add`和`subtract`

```html
<template>
    <increasement @add="onAdd" @subtract="onSubtract"/>
</template>

<script>
    export default {
        methods: {
            onAdd() {
                this.$message.success('Clicked the add button!');
            },
            onSubtract() {
                this.$message.info('Clicked the subtract button!');
            },
        }
    }
</script>
```
:::

### 禁用状态
:::demo 设置`add`或`subtract`为`false`

```html
<template>
    <increasement :add="false" :subtract="false"/>
</template>
```
:::



### Increasement Attributes

| 参数名称 | 说明               |类型               | 默认值 |
| -------- | ------------------ | -------- |-------- |
| size | 组件尺寸 | ['medium', 'large']       |'medium'    |
| add      | 是否启用添加按钮 | Boolean        |true      |
| subtract | 是否启用删减按钮 | Boolean       |true    |


### Increasement Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| add      | 点击增加按钮时触发 | -        |
| subtract | 点击删减按钮时触发 | -        |


