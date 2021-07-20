import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.scss';
// hightlight
import hljs from 'highlight.js';
import 'highlight.js/styles/docco.css';
import './assets/styles/common.scss';
router.afterEach(() => {
    Vue.nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)');
        Array.prototype.forEach.call(blocks, hljs.highlightBlock);
    });
});

//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import icon from './config/icon.json';
Vue.prototype.$icon = icon; // Icon 列表页用
Vue.use(ElementUI);

// vxe-table
import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
import XEUtils from 'xe-utils';

window.XEUtils = XEUtils;
Vue.use(VXETable);

// vantop-ui
import '@vantop/vantop-ui/lib/index.css';
import VantopUILib from '@vantop/vantop-ui';
import { loadIconFont, } from '@vantop/vantop-ui';
loadIconFont();
for (const k in VantopUILib) {
    if (k === 'install') {
        VantopUILib.install(Vue);
    } else {
        const component = VantopUILib[k];
        Vue.component(component.name, component);
    }
}


//vantop-editor
import VantopEditor from 'vantop-editor';
Vue.component('vantop-editor', VantopEditor);

//md-loader demo-block
import DemoBlock from '@/components/demo-block';
Vue.component('demo-block', DemoBlock);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
