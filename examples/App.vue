<template>
  <div class="p-app">
    <div class="p-app-nav">导航</div>
    <div class="p-app-container">
      <!-- 菜单区 -->
      <div class="p-app-menu">
        <!-- 一级菜单 -->
        <div v-for="level1 in menus" :key="level1.id" class="p-app-menu__level1">
          <div class="p-app-menu__level1-title">{{level1.title}}</div>
          <!-- 二级菜单 TODO: 优化 -->
          <div
            v-for="level2 in level1.children"
            :key="level2.id"
            :class="['p-app-menu__level2', currRoutePath === level2.route ? 'p-app-menu__level2--active' : '']"
          >
            <router-link :to="level2.route" class="p-app-menu__level2-title">{{level2.title}}</router-link>
          </div>
        </div>
      </div>

      <!-- 内容区 -->
      <div class="p-app-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { menus } from './config/menus';

export default {
    name: 'App',
    data() {
      return {
        menus
      }
    },
    computed: {
      currRoutePath() {
        return this.$route.path;
      }
      // routerKey() {
      //   return this.$route.path + Math.random();
      // }
    }
}
</script>

<style lang='scss'>
* {
    padding: 0;
    margin: 0;
}

.p-app {
  max-height: 100vh;

  &-nav {
    min-height: 60px;
    box-shadow: 0 2px 8px #f0f1f2;
    display: flex;
    align-items: center;
    padding: 12px 24px;
    box-sizing: border-box;
  }

  &-container {
      height: 100%;
      display: flex;
      align-items: flex-start;
  }

  &-menu {
    padding: 12px;
    box-sizing: border-box;
    max-height: 100vh;
    overflow-y: auto;
    flex-shrink: 0;
    border-right: 1px solid #eee;
    $one_level_padding: 12px;

    &__level1 {
      padding-left: $one_level_padding * 1;
      color: rgba($color: #000, $alpha: 0.45);
      white-space: nowrap;

      &-title {
        padding: 8px 16px;
      }
    }

    &__level2 {
      padding-left: $one_level_padding * 2;
      color: #333;
      white-space: nowrap;
      cursor: pointer;

      &-title {
        display: block;
        padding: 8px 16px;
        text-decoration: none;
        color: inherit;
      }

      &--active {
        color: rgb(104, 176, 235);
      }

      &:hover {
        color: rgb(104, 176, 235);
      }
    }
  }

  &-content {
    flex-grow: 1;
    max-height: 100vh;
    overflow: auto;
    padding: 24px;
    box-sizing: border-box;
  }
}
</style>
