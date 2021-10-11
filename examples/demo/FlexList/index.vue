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

<script>
import ZFlexList from '../../../packages/flex-list/src/index.vue';

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
  },
  components: {
    ZFlexList,
  },
};
</script>

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
