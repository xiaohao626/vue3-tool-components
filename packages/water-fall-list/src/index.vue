<template>
  <div class="c-wfl">
    <div ref="container"
         class="c-wfl-container">
      <template v-if="waterFall && waterFall.length">
        <!-- 瀑布流列表 -->
        <div v-for="(column, columnIndex) in waterFall"
             :ref="'listItem' + columnIndex"
             :key="columnIndex"
             :style="{ width: `calc((100% - ${columnSpacing * (waterFall.length - 1)}px) / ${waterFall.length})` }"
             class="c-wfl-column">
          <!-- 瀑布流单流列表 -->
          <div v-for="(item, index) in column"
               :key="index">
            <slot :item="item"
                  :itemIndex="index"
                  :currentColumnList="column"
                  :waterFallList="waterFall"></slot>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-water-fall-list',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    // 列数 默认2列
    columnNum: {
      type: Number,
      default: 4,
    },
    columnSpace: {
      type: Number,
      default: 24,
    },
  },
  data() {
    return {
      waterFall: [],
      waterFallIndexMark: 0, // 计算传入列表转换瀑布流时下标
      waterFallColumnNum: 0, // 瀑布流列数
    };
  },
  mounted() {
    this.initialWaterFall = this.list;

    this.addResizeEventListener();
    this.calculateWaterFall();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.calculateWaterFall);
  },

  methods: {
    /**
     * 添加窗口尺寸变化监听
     */
    addResizeEventListener() {
      window.addEventListener('resize', this.calculateWaterFall);
    },
    /**
     * 获取瀑布流容器宽
     */
    getContainerOffsetWidth() {
      return this.$refs.container && this.$refs.container.offsetWidth;
    },
    /**
     * 计算瀑布流列表
     */
    calculateWaterFall() {
      // 计算列数 TODO:
      // const containerWidth = this.getContainerOffsetWidth();
      const columns = this.columnNum;
      const waterFall = new Array(columns).fill(null).map(() => []);

      this.waterFallIndexMark = 0;
      this.waterFall = waterFall;
      this.waterFallColumnNum = columns;

      this.generateWaterFall();
    },
    /**
     * 生成瀑布流列表
     */
    generateWaterFall() {
      this.$nextTick(() => {
        const { waterFallIndexMark, initialWaterFall, waterFallColumnNum } =
          this;

        if (waterFallIndexMark > initialWaterFall.length) {
          return;
        }

        const nextItem = initialWaterFall[waterFallIndexMark];

        if (nextItem) {
          if (waterFallIndexMark < waterFallColumnNum) {
            this.waterFall[waterFallIndexMark].push(nextItem);
          } else {
            let minColumnHeight = 0;
            let minColumnIndex = 0;

            this.waterFall.forEach((item, index) => {
              const currColumnHeight =
                this.$refs[`listItem${index}`].offsetHeight;

              if (!minColumnHeight || currColumnHeight < minColumnHeight) {
                minColumnHeight = currColumnHeight;
                minColumnIndex = index;
              }
            });

            this.waterFall[minColumnIndex].push(nextItem);
          }

          this.generateWaterFall();
        }

        this.waterFallIndexMark++;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.c-wfl {
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
  }
}
</style>
