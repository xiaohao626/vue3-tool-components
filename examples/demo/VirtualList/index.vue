<template>
  <div class="p-dvl">
    <h1>基本使用</h1>
    <div>
      <label for="">列表项高度</label>
      <input v-model="itemHeight"
             type="number" />
    </div>

    <div>
      <label for="">列表前缓冲列表长度</label>
      <input v-model="preListBuffer"
             type="number" />
    </div>

    <div>
      <label for="">列表后缓冲列表长度</label>
      <input v-model="laterListBuffer"
             type="number" />
    </div>

    <div class="p-dvl-container">
      <virtual-list :list="list"
                    :item-height="itemHeight"
                    :pre-list-buffer="preListBuffer"
                    :later-list-buffer="laterListBuffer"
                    @onScrollToBottom="onScrollToBottom">
        <template #default="{ item, itemIndex }">
          {{ item.name }}{{itemIndex}}
        </template>
      </virtual-list>
    </div>
  </div>
</template>

<script>
// import faker from 'faker';
import virtualList from '../../../packages/virtual-list/src/index.vue';

export default {
  name: 'virtual-list-demo',
  components: { virtualList },
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
    onScrollToBottom() {
      // FIXME:
      console.log('虚拟滚动列表触底');
    },
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
    S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    },
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
  },
};
</script>

<style lang="scss" scoped>
.p-dvl {
  &-container {
    width: 500px;
    height: 400px;
    border: 1px solid blue;
  }
}
</style>
