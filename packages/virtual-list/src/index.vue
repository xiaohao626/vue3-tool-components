<template>
  <div class="c-vl"
       ref="root">
    <div class="c-vl-container"
         ref="container"
         @scroll.passive="onScrollContainer">
      <div class="c-vl-scroll"
           :style="{ height: `${scrollHeight}px`, paddingTop: `${containerPaddingTop}px` }">
        <div v-for="item in shownList"
             :key="item.id"
             :style="{ height: `${itemHeight}px` }"
             class="c-vl-item">
          <slot :item="item"
                :item-index="item.$index"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-virtual-list',
  isScrolling: false,
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    itemHeight: {
      type: Number,
      default: 50,
    },
    preListBuffer: {
      type: Number,
      default: 10,
    },
    laterListBuffer: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      shownList: [],
      containerPaddingTop: 0,
    };
  },
  computed: {
    scrollHeight() {
      return this.list.length * this.itemHeight;
    },
  },
  mounted() {
    this.renderShownList();
  },
  methods: {
    onScrollContainer() {
      this.renderShownList();
    },
    renderShownList() {
      if (this.isScrolling) {
        return;
      }

      this.isScrolling = true;

      requestAnimationFrame(() => {
        this.isScrolling = false;

        const rootRef = this.$refs.root;
        const containerRef = this.$refs.container;

        if (!containerRef || !rootRef) {
          return;
        }

        const { scrollTop, scrollHeight } = containerRef;
        const { clientHeight } = rootRef;
        const { list, itemHeight, preListBuffer, laterListBuffer } = this;

        const range = [];

        range[0] = Math.floor(scrollTop / itemHeight) - preListBuffer;
        range[0] = Math.max(range[0], 0);

        range[1] =
          range[0] + Math.floor(clientHeight / itemHeight) + laterListBuffer;
        range[1] = Math.min(range[1], list.length);

        this.shownList = list
          .slice(range[0], range[1])
          .map((item, index) => ({ ...item, $index: range[0] + index }));
        this.containerPaddingTop = range[0] * itemHeight;

        const isTouchBottom = scrollTop + clientHeight >= scrollHeight;

        if (isTouchBottom) {
          this.$emit('onScrollToBottom');
        }
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.c-vl {
  width: 100%;
  height: 100%;

  &-container {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  &-scroll {
    box-sizing: border-box;
  }
}
</style>
