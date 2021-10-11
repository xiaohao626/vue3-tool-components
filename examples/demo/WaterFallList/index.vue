<template>
  <div class="p-edwfl">
    <h1>基本使用</h1>
    <WaterFallList :list="list">
      <template #default="{ item }">
        <KeepProportionContainer :style="{ marginBottom: '24px' }" :aspectRatioPercent="item.paddingBottom" />
      </template>
    </WaterFallList>
  </div>
</template>

<script>
import WaterFallList from '../../../packages/water-fall-list/src/index.vue';
import KeepProportionContainer from '../../../packages/keep-proportion-container/src/index.vue';

export default {
  name: 'waterfall-list-demo',
  components: { WaterFallList, KeepProportionContainer },
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
</script>

<style lang="scss" scoped>
.p-edwfl {}
</style>
