<template>
  <div class="c-fl">
    <div ref="listRef"
         :style="{ marginRight: `${-(itemSpace || 0)}px` }"
         class="c-fl-list">
      <!-- 前置卡片列表 -->
      <div v-for="(item, index) in preList"
           :key="item.id || index"
           :style="getCardStyle">
        <slot name="preList"
              :item="item"
              :itemIndex="index"
              :cardWidth="cardWidth"></slot>
      </div>

      <!-- 卡片列表 -->
      <div v-for="(item, index) in list"
           :key="item.id || index"
           :style="getCardStyle">
        <slot :item="item"
              :itemIndex="index"
              :cardWidth="cardWidth"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-flex-list',
  props: {
    // 主卡片列表
    list: {
      type: Array,
      default: () => [],
    },
    // 前置卡片列表
    preList: {
      type: Array,
      default: () => [],
    },
    // 卡片最小宽度
    itemMinWidth: {
      type: Number,
      default: 204,
    },
    // 卡片间距
    itemSpace: {
      type: Number,
      default: 24,
    },
  },
  data() {
    return { cardWidth: 0 };
  },
  computed: {
    getCardStyle() {
      return {
        width: `${this.cardWidth}px`,
        marginRight: `${this.itemSpace}px`,
      };
    },
  },
  mounted() {
    this.calculateCardWidth();
    window.addEventListener('resize', this.subscribeWindowResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.subscribeWindowResize);
  },
  methods: {
    /**
     * 计算自适应卡片宽度
     */
    calculateCardWidth() {
      this.$nextTick(() => {
        const minWidth = this.itemMinWidth;
        const space = this.itemSpace;
        const wholeCardWidth = minWidth + space;
        const listOffsetWidth =
          this.$refs.listRef && this.$refs.listRef.offsetWidth;
        const remainderNum = listOffsetWidth % wholeCardWidth;
        const columns = Math.floor(listOffsetWidth / wholeCardWidth);
        const piece = (remainderNum / columns).toFixed(6);

        this.cardWidth = minWidth + +piece;
      });
    },
    /**
     * 监听window resize
     */
    subscribeWindowResize() {
      this.calculateCardWidth();
    },
  },
};
</script>

<style lang="scss" scoped>
.c-fl {
    overflow: hidden;

	&-list {
		display: flex;
		flex-wrap: wrap;
	}
}
</style>
