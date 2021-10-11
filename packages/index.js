import FlexList from './flex-list/index';
import WaterFallList from './water-fall-list/index';
import KeepProportionContainer from './keep-proportion-container/index';

const components = [FlexList, WaterFallList, KeepProportionContainer];

const install = function(Vue) {
    if (install.installed) return;

    components.map(component => {
        Vue.component(component.name, component);
    });

    if (typeof window !== undefined && window.Vue) {
        install(window.Vue);
    }
}

export default {
    install,
    FlexList,
    WaterFallList,
    KeepProportionContainer
}
