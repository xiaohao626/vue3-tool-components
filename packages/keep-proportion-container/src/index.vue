<template>
  <div class="c-kpc">
    <div :style="supportsEleStyle"
         class="c-kpc-supports"></div>
    <div class="c-kpc-container">
      <slot :aspectRatioPercent="aspectRatioPercent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-keep-proportion-container',
  props: {
    aspectRatioPercent: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    supportsEleStyle() {
      return { paddingBottom: `${this.aspectRatioPercent}%` };
    },
  },
};
</script>

<style lang="scss" scoped>
.c-kpc {
  width: 100%;
  position: relative;

  &-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
}
</style>
