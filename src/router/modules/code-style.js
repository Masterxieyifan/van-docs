/*
 * @Descripttion: 代码风格 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-07-15 12:16:35
 * @LastEditors: 蔡远程
 */
const load = path => require(`@/views/code-style/${path}.md`).default;
export default {
    sideBar: 'code-style',
    children: [
        {
            title: 'JavaScript',
            path: '/code-style/javascript',
            component: load('javascript'),
        },
        {
            title: 'CSS',
            path: '/code-style/css',
            component: load('css'),
        },
        {
            title: 'HTML',
            path: '/code-style/html',
            component: load('html'),
        },
        {
            title: 'Vue和文件命名',
            path: '/code-style/vue',
            component: load('vue'),
        },
        {
            title: '业务状态/枚举类型',
            path: '/code-style/enum',
            component: load('enum'),
        },
        {
            path: '/code-style*',
            redirect: '/code-style/javascript',
        }
    ],
};