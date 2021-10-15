import VirtualList from './src/index';

VirtualList.install = function(Vue) {
    Vue.component(VirtualList.name, VirtualList);
}

export default VirtualList;
