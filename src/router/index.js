import Vue from 'vue';
import VueRouter from 'vue-router';
import globalConfig from './global';
Vue.use(VueRouter);

// 获取module内的路由
const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath).default;
    modules.push(value);
    return modules;
}, []);



export const routesConfig = [
    ...modules,
    ...globalConfig
];


const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    }
    return {
        x: 0,
        y: 0,
    };

};

const routes = arrPave(routesConfig);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior,
    routes: routes,
});

export default router;




function arrPave(arr) {
    const result = [];
    function pave(data, sideBar) {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            const sideBarTemp = item.sideBar || sideBar;
            if (item.children) {
                pave(item.children, sideBarTemp);
            } else {
                if (sideBar) {
                    item.meta = {
                        ...item.meta,
                        sideBar: sideBar,
                    };
                }
                result.push(item);
            }
        }
    }
    pave(arr);
    return result;
}