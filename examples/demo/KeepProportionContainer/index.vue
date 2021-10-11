<template>
  <div class="p-edkpcd">
    <h1>基本使用</h1>
    <h2>
      <div>宽：<input v-model="width" />px</div>
      <div>高宽百分比：<input v-model="aspectRatioPercent" /></div>
    </h2>

    <div :style="{ width: `${width}px` }"
         class="p-edkpcd-container">
      <z-keep-proportion-container :aspect-ratio-percent="aspectRatioPercent"
                                   :style="{ backgroundColor: 'lightblue' }">
        <div class="p-edkpcd-demo"></div>
      </z-keep-proportion-container>
    </div>
  </div>
</template>

<script>
import ZKeepProportionContainer from '../../../packages/keep-proportion-container/src/index.vue';

export default {
  name: 'keep-proportion-container-demo',
  components: { ZKeepProportionContainer },
  data() {
    return {
      width: 200,
      aspectRatioPercent: 150,
    };
  },
};
</script>

<style lang="scss" scoped>
.p-edkpcd {
  &-container {
    width: 200px;
  }
}
</style>
