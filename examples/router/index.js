import { createRouter, createWebHashHistory } from 'vue-router';

import FlexList from '../demo/FlexList/index.vue';
import WaterFallList from '../demo/WaterFallList/index.vue';
import KeepProportionContainer from '../demo/KeepProportionContainer/index.vue';
import VirtualList from '../demo/VirtualList/index.vue';

const routes = [
	{
		path: '/',
		redirect: '/keepproportioncontainer'
	},
	// 保持长宽比的容器
	{
		path: '/keepproportioncontainer',
		name: 'KeepProportionContainer',
		component: KeepProportionContainer
	},
  // 自适应弹性列表
	{
		path: '/flexlist',
		name: 'FlexList',
		component: FlexList
	},
	// 瀑布流式列表
	{
		path: '/waterfalllist',
		name: 'WaterFallList',
		component: WaterFallList
	},
	// 虚拟列表
	{
		path: '/virtuallist',
		name: 'VirtualList',
		component: VirtualList
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
