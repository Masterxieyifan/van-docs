# `SelectDatePicker`、`SelectTimerPicker`、`SelectTimeSelect`

> 3个组件都是由两部分组成，下拉部分基于 el-select 实现。时间部分基于 element 时间选择组件
> - SelectDatePicker -> el-date-picker
> - SelectTimerPicker -> el-time-picker
> - SelectTimeSelect -> el-time-select
>
> 时间部分使用$attrs,$listener进行了透明传参，所以时间部分的参数参考element的官方文档: [date-picker](https://element.eleme.io/#/zh-CN/component/date-picker#attributes)、[datetime-picker](https://element.eleme.io/#/zh-CN/component/datetime-picker#attributes)、[time-picker](https://element.eleme.io/#/zh-CN/component/time-picker#attributes)


#### 基础用法

:::demo
```html
<template>
  <div class="container">
    <div style="margin-top: 20px;">
        <span>SelectDatePicker:</span>
        <select-date-picker
            v-model="dateValue1"
            :selectValue="selectValue1"
            :selectOptions="selectOptions"
            :selectProps="{ clearable: true }"
            @selectChange="(val) => selectValue1 = val"
        />
        <el-divider direction="vertical" content-position="left"></el-divider>
        <el-button type="primary" size="mini" @click="changeValue('selectValue1','value2')">改变下拉值</el-button>
    </div>
    <div style="margin-top: 20px;">
        <span>SelectTimePicker:</span>
        <select-time-picker
            v-model="dateValue2"
            :selectValue="selectValue2"
            :selectOptions="selectOptions"
            :selectProps="{ clearable: true }"
            @selectChange="(val) => selectValue2 = val"
        />
        <el-divider direction="vertical" content-position="left"></el-divider>
        <el-button type="primary" size="mini" @click="changeValue('selectValue2','value3')">改变下拉值</el-button>
    </div>
    <div style="margin-top: 20px;">
        <span>SelectTimeSelect:</span>
        <select-time-select
            v-model="dateValue3"
            :selectValue="selectValue3"
            :selectOptions="selectOptions"
            :selectProps="{ clearable: true }"
            @selectChange="(val) => selectValue3 = val"
        />
        <el-divider direction="vertical" content-position="left"></el-divider>
        <el-button type="primary" size="mini" @click="changeValue('selectValue3', 'value4')">改变下拉值</el-button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            dateValue1: '',
            dateValue2: '',
            dateValue3: '',
            selectValue1: '',
            selectValue2: '',
            selectValue3: '',
            selectOptions: [
                {
                    label: '标题名称1',
                    value: 'value1'
                },
                {
                    label: '标题名称2',
                    value: 'value2'
                },
                {
                    label: '标题名称3',
                    value: 'value3'
                },
                {
                    label: '标题名称4',
                    value: 'value4'
                }
            ]
        };
    },
    methods: {
        changeValue(key, value) {
            this[key] = value;
        }
    }
};
</script>
```
:::

#### 下拉部分参数列表

| 参数名称 | 说明 | 类型 | 可选值 | 默认值 |
| -------- | ---------------------------| --- |-------- |-------- |
| hasSelect | 是否显示下拉选择 | Boolean | true/false | true  |
| selectOptions | 下拉选择列表 | Array | - | [] |
| selectValue | 下拉选型初始值 | String/Number | -  | '' |
| selectProps | 下拉选择框的属性，兼容 el-select 的 [Attributes](https://element.eleme.io/#/zh-CN/component/select#select-attributes) 和 [Events](https://element.eleme.io/#/zh-CN/component/select#select-events) | Obejct | -  | {} |
| selectWidth | 下拉选择框的宽度 | Number | -  | - |
