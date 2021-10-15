# vue3-tool-components

vue3版本的工具组件库

## 说明

- 该组件库提供一般组件库不包含的组件。
- 该组件库会不断进行维护。

### 适用平台

- PC

## 安装

``` bash
npm install --save vue3-tool-components
```

## 使用

### 在入口文件中引入并注册使用

``` javascript
import { createApp } from 'vue';
import App from './App.vue';
import vue3ToolComponents from 'vue3-tool-components';

createApp(App).use(vue3ToolComponents).mount('#app');
```

### 在单文件模板中使用(具体不同功能组件用法见下方说明)

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

## 组件说明文档

### z-flex-list

自适应宽度的列表

#### 演示

![自适应宽度列表演示图](https://user-images.githubusercontent.com/30918066/137444118-f868a580-8a7a-47c4-a908-fcfac1566700.gif "自适应宽度列表演示图")

#### 使用示例

``` html
<template>
  <div class="p-edfl">
    <z-flex-list :pre-list="preList" :list="list">
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

#### 参数说明

|参数|说明|类型|默认值|版本|
|---|----|---|-----|---|
|list|主体列表|any[]|[]||
|pre-list|前置列表(在主体列表前展示)|any[]|[]||
|item-min-width|列表项最小宽度(px)|number|204||
|item-space|列表项之间间隔(px)|number|24||

### z-water-fall-list

支持多列显示的瀑布流列表

#### 演示

![支持多列显示的瀑布流列表](https://user-images.githubusercontent.com/30918066/137450450-53d1a077-c3ce-4dd2-a15b-a402662e31f9.png "支持多列显示的瀑布流列表")

#### 使用示例

``` html
<template>
  <z-water-fall-list :list="list">
    <template #default="{ item }">
      <z-keep-proportion-container
        :style="{ marginBottom: '24px' }"
        :aspectRatioPercent="item.paddingBottom"
      />
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

#### 参数说明

|参数|说明|类型|默认值|版本|
|---|----|---|-----|---|
|list|主体列表|object[]|[]||
|column-num|列数|number|4||
|column-space|列间距|number|24||

### z-keep-proportion-container

保持长宽比的容器
*该容器会支持传入一个高宽比(百分比)，容器会根据容器自身宽度进行等比例缩放，容器默认宽度为100%*

#### 演示

![保持长宽比的容器](https://user-images.githubusercontent.com/30918066/137452023-bed416a4-d294-469c-b68f-bca676f82a5e.gif "保持长宽比的容器")

#### 使用示例

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

#### 参数说明

|参数|说明|类型|默认值|版本|
|---|----|---|-----|---|
|aspect-ratio-percent|高宽比百分比(例如：150)|number|100||

### z-virtual-list

虚拟滚动列表

#### 演示

![虚拟滚动列表](https://user-images.githubusercontent.com/30918066/137451046-8be1a31f-28a3-48ef-84cc-9dd47f1a2394.gif "虚拟滚动列表")

#### 使用示例

``` html
<template>
  <div class="p-dvl">
    <div class="p-dvl-container">
      <z-virtual-list :list="list"
                    :item-height="itemHeight"
                    :pre-list-buffer="preListBuffer"
                    :later-list-buffer="laterListBuffer"
                    @onScrollToBottom="onScrollToBottom">
        <template #default="{ item, itemIndex }">
          {{ item.name }}{{itemIndex}}
        </template>
      </z-virtual-list>
    </div>
  </div>
</template>
```

``` javascript
export default {
  name: 'z-virtual-list-demo',
  data() {
    return {
      list: [],
      itemHeight: 40,
      preListBuffer: 2,
      laterListBuffer: 4,
    };
  },
  mounted() {
    this.list = this.mock();
  },
  methods: {
    // 列表触底回调
    onScrollToBottom() {
      // FIXME:
      console.log('虚拟滚动列表触底');
    },
    // 模拟长列表数据
    mock(length = 100000) {
      return Array.from({ length }, () => {
        return {
          id: this.guid(),
          name: '可以使用faker进行mock',
          // name: faker.name.findName(),
          // img: faker.image.imageUrl(),
        };
      });
    },
    // 生成uid
    guid() {
      const S4 = this.S4;
      return (
        S4() +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        '-' +
        S4() +
        S4() +
        S4()
      );
    },
    S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    },
  },
};
```

``` css
<style lang="scss" scoped>
.p-dvl {
  &-container {
    width: 500px;
    height: 400px;
    border: 1px solid blue;
  }
}
</style>
```

#### 参数说明

|参数|说明|类型|默认值|版本|
|---|----|---|-----|---|
|list|列表数据|object[]|[]||
|item-height|列表项高度|number|50px||
|pre-list-buffer|前缓冲列表长度|number|10||
|later-list-buffer|后缓冲列表长度|number|30||
|onScrollToBottom|列表滑动触底回调|function|||

### 懒加载图片 TODO

#### 使用示例

#### 参数说明

|参数|说明|类型|默认值|版本|
|---|----|---|-----|---|

### 上拉加载列表 TODO

#### 使用示例

#### 参数说明

|参数|说明|类型|默认值|版本|
|---|----|---|-----|---|

## 联系方式

### email

h719849712@outlook.com

### wx

zh719849712
