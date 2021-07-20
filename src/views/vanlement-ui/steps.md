<!--
 * @Author: hongdong.liao
 * @Date: 2021-05-25 12:25:58
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-06-04 14:47:29
 * @FilePath: /vanlement/examples/docs/zh-CN/steps.md
-->
## Steps 步骤条
引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 基础用法
简单的步骤条，文本默认居中显示。系统主色表示为当前状态；灰色表示为默认状态；绿色表示为成功状态；红色表示为错误状态；橙色表示为警示状态。

:::demo
```html
<el-steps :active="active" finish-status="success" :align-center="align" v-if="show">
  <el-step title="步骤 1"></el-step>
  <el-step :title="title2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

<el-button style="margin-top: 12px;" @click="next">点击下一步体验 steps 的变化</el-button>
<el-button style="margin-top: 12px;" @click="center">点击居中显示</el-button>

<script>
  export default {
    data() {
      return {
        active: 0,
        align: false,
        show: true,
        title2: "步骤 2步骤 2步骤 2",
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      center() {
        this.show = false;
        this.align = !this.align;
        setTimeout(() => {
          this.show = true;
        }, 100);
      },
    }
  }
</script>
```
:::

非数字步骤条，默认的 `icon`

:::demo
```html
<el-steps :active="active" finish-status="success" align-center>
  <el-step title="步骤 1" useDefaultIcon></el-step>
  <el-step title="步骤 2" useDefaultIcon></el-step>
  <el-step title="步骤 3" useDefaultIcon></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next">点击下一步体验 steps 的变化</el-button>
<script>
  export default {
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::

### popover 式的描述条

:::demo 要显示带 `popover` 的参数参考 `popover` 组件 `:xxx` 输入的值优先给 `step` 使用. 例如：在 `el-step` 上面设置了 `:title` `popover` 里面的 `title` 不会生效
```html
<el-steps :active="active">
  <el-step title="步骤 1" :disabled="false" :content="'步骤1'" icon="el-icon-edit"></el-step>
  <el-step title="步骤 2步骤 2" :disabled="true" icon="el-icon-upload"></el-step>
  <el-step title="步骤 3" icon="el-icon-picture" :iconClass="'icon-class'" :description="'步骤3'" :content="'步骤3'"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next">点击下一步体验 steps 的变化</el-button>
<script>
  export default {
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::


### 带图标的步骤条
步骤条内可以启用各种自定义的图标。

:::demo 通过`icon`属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名`slot`来使用自定义的图标。
```html

<el-steps :active="active">
  <el-step title="步骤 1" icon="el-icon-edit"></el-step>
  <el-step title="步骤 2步骤 2" icon="el-icon-upload"></el-step>
  <el-step title="步骤 3" icon="el-icon-picture"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next">点击下一步体验 steps 的变化</el-button>
<script>
  export default {
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::

### 竖式步骤条

竖直方向的步骤条

:::demo 只需要在`el-steps`元素中设置`direction`属性为`vertical`即可。
```html
<div style="height: 200px;">
  <el-steps direction="vertical" :active="active">
    <el-step title="步骤 1"></el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
  </el-steps>
</div>
<el-button style="margin-top: 12px;" @click="next">点击下一步体验 steps 的变化</el-button>
<script>
  export default {
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::

非数字垂直步骤条，默认的 `icon`

:::demo
```html
<div style="height: 200px;">
  <el-steps direction="vertical" :active="active">
    <el-step title="步骤 1" useDefaultIcon></el-step>
    <el-step title="步骤 2" useDefaultIcon></el-step>
    <el-step title="步骤 3" useDefaultIcon description="这是一段很长很长很长的描述性文字"></el-step>
  </el-steps>
</div>
<el-button style="margin-top: 12px;" @click="next">点击下一步体验 steps 的变化</el-button>
<script>
  export default {
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::

自定义图标的垂直步骤条

:::demo
```html
<div style="height: 200px;">
  <el-steps direction="vertical" :active="active">
    <el-step title="步骤 1" icon="el-icon-edit"></el-step>
    <el-step title="步骤 2" icon="el-icon-upload"></el-step>
    <el-step title="步骤 3" icon="el-icon-picture" description="这是一段很长很长很长的描述性文字"></el-step>
  </el-steps>
</div>
<el-button style="margin-top: 12px;" @click="next">点击下一步体验 steps 的变化</el-button>
<script>
  export default {
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    }
  }
</script>
```
:::

### 简洁风格的步骤条
设置 `simple` 可应用简洁风格，该条件下 `align-center` / `description` / `direction` / `space` 都将失效。

:::demo
```html

<el-steps :active="active1" simple>
  <el-step title="步骤 1" icon="el-icon-edit"></el-step>
  <el-step title="步骤 2" icon="el-icon-upload"></el-step>
  <el-step title="步骤 3" icon="el-icon-picture"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next1">点击下一步体验 steps 的变化</el-button>

<el-steps :active="active2" finish-status="success" simple style="margin-top: 20px">
  <el-step title="步骤 1" ></el-step>
  <el-step title="步骤 2" ></el-step>
  <el-step title="步骤 3" ></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next2">点击下一步体验 steps 的变化</el-button>
<script>
  export default {
    data() {
      return {
        active1: 1,
        active2: 1,
      };
    },
    methods: {
      next1() {
        if (this.active1++ > 2) this.active1 = 0;
      },
      next2() {
        if (this.active2++ > 2) this.active2 = 0;
      },
    }
  }
</script>
```
:::

### Steps Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| space | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | — | — |
| direction | 显示方向 | string | vertical/horizontal | horizontal |
| active | 设置当前激活步骤  | number | — | 0 |
| process-status | 设置当前步骤的状态 | string | wait / process / finish / error / success | process |
| finish-status | 设置结束步骤的状态 | string | wait / process / finish / error / success | finish |
| align-center | 进行居中对齐 | boolean | - | false |
| simple | 是否应用简洁风格 | boolean | - | false |

### Step Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 标题 | string | — | — |
| description | 描述性文字 | string | — | — |
| useDefaultIcon | 使用图标 | boolean | — | false |
| icon | 图标 | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | — |
| status | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success | — |
| disabled | popover 是否禁用，默认禁用 | boolean | — | true |
| iconClass | icon 的类名显式传入 | string | — |

### Step Slot
| name | 说明  |
|----|----|
| icon | 自定义图标 |
| title | 自定义标题 |
| description | 自定义描述性文字 |
