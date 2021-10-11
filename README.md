# vue3-tool-components
vue3版本的工具组件库

*目前只支持pc端*
### 安装
```
npm install --save vue3-tool-components
```

### 使用
#### 在入口文件中引入并注册使用
``` javascript
import { createApp } from 'vue';
import App from './App.vue';
import vue3ToolComponents from 'vue3-tool-components';

createApp(App).use(vue3ToolComponents).mount('#app');
```

#### 在单文件模板中使用(具体不同功能组件用法见下方说明)
``` html
<template>
  <z-xxx></z-xxx>
</template>
```

``` javascript
export default {
  name: 'flex-list-demo'
};
```
### 组件说明文档
#### z-flex-list
自适应宽度的列表

##### 使用示例
``` html
<template>
  <div class="p-edfl">
    <z-flex-list :pre-list="preList"
              :list="list">
      <!-- 前置列表 -->
      <template #preList="slotProps">
        <div class="p-edfl-preitem">{{slotProps.item.name}}</div>
      </template>
      <!-- 主显示列表 -->
      <template #default="slotProps">
        <div class="p-edfl-item">{{slotProps.item.name}}</div>
      </template>
    </z-flex-list>
  </div>
</template>
```

``` javascript
export default {
  name: 'flex-list-demo',
  data() {
    return {
      preList: [
        {
          id: 0,
          name: '我是前置item0',
        },
      ],
      list: [
        {
          id: 0,
          name: '我是item0',
        },
        {
          id: 1,
          name: '我是item1',
        },
        {
          id: 2,
          name: '我是item2',
        },
        {
          id: 3,
          name: '我是item3',
        },
        {
          id: 4,
          name: '我是item4',
        },
        {
          id: 5,
          name: '我是item5',
        },
      ],
    };
  }
};
```

``` css
<style lang="scss" scoped>
.p-edfl {
  &-preitem {
    background-color: lightblue;
    padding-bottom: 150%;
  }
  &-item {
    background-color: #eee;
    margin-bottom: 24px;
    padding-bottom: 150%;
  }
}
</style>
```
##### 参数说明
参数|说明|类型|默认值|版本
---|----|---|-----|---
list|主体列表|any[]|[]|
pre-list|前置列表(在主体列表前展示)|any[]|[]|
item-min-width|列表项最小宽度(px)|number|204|
item-space|列表项之间间隔(px)|number|24|
#### z-water-fall-list
支持多列显示的瀑布流列表

##### 使用示例
``` html
<template>
  <z-water-fall-list :list="list">
    <template #default="{ item }">
      <z-keep-proportion-container :style="{ marginBottom: '24px' }" :aspectRatioPercent="item.paddingBottom" />
    </template>
  </z-water-fall-list>
</template>
```

``` javascript
export default {
  name: 'waterfall-list-demo',
  data() {
    return {
      list: [
        {
          id: 0,
          title: '我是瀑布流Item0',
          paddingBottom: 100,
          backgroundColor: 'lightblue'
        },
        {
          id: 1,
          title: '我是瀑布流Item1',
          paddingBottom: 120,
          backgroundColor: 'lightblue'
        },
        {
          id: 2,
          title: '我是瀑布流Item2',
          paddingBottom: 80,
          backgroundColor: 'lightblue'
        },
        {
          id: 3,
          title: '我是瀑布流Item3',
          paddingBottom: 10,
          backgroundColor: 'lightblue'
        },
        {
          id: 4,
          title: '我是瀑布流Item4',
          paddingBottom: 150,
          backgroundColor: 'lightblue'
        },
        {
          id: 5,
          title: '我是瀑布流Item5',
          paddingBottom: 60,
          backgroundColor: 'lightblue'
        },
        {
          id: 6,
          title: '我是瀑布流Item6',
          paddingBottom: 100,
          backgroundColor: 'lightblue'
        },
        {
          id: 7,
          title: '我是瀑布流Item7',
          paddingBottom: 90,
          backgroundColor: 'lightblue'
        },
      ]
    }
  }
}
```
##### 参数说明
参数|说明|类型|默认值|版本
---|----|---|-----|---
list|主体列表|object[]|[]|
column-num|列数|number|4|
column-space|列间距|number|24|

#### z-keep-proportion-container
保持长宽比的容器
*该容器会支持传入一个高宽比(百分比)，容器会根据容器自身宽度进行等比例缩放，容器默认宽度为100%*
##### 使用示例
``` html
<template>
  <div class="p-edkpcd">
    <div class="p-edkpcd-container">
      <z-keep-proportion-container :aspectRatioPercent="200">
        <div class="p-edkpcd-demo"></div>
      </z-keep-proportion-container>
    </div>
  </div>
</template>
```

``` javascript
export default {
  name: 'keep-proportion-container-demo'
};
```

``` css
.p-edkpcd {
  &-container {
    width: 200px;
  }

  &-demo {
    background-color: lightblue;
  }
}
```
##### 参数说明
参数|说明|类型|默认值|版本
---|----|---|-----|---
aspect-ratio-percent|高宽比百分比(例如：150)|number|100|
