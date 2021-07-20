/*
 * @Descripttion: 微前端相关 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-07-15 11:18:55
 * @LastEditors: 蔡远程
 */
const load = path => require(`@/views/micro-web/${path}.md`).default;
export default {
    sideBar: 'micro-web',
    children: [
        {
            title: 'Vanlement使用指南',
            path: '/micro-web/vanlement',
            component: load('vanlement'),
        },
        {
            title: 'Switch Host使用指南',
            path: '/micro-web/SwitchHost',
            component: load('SwitchHost'),
        },
        {
            title: '蓝盾相关CI/CD流程',
            path: '/micro-web/pass-ci-cd',
            component: load('pass-ci-cd'),
        },
        {
            title: '微前端常见问题解答',
            path: '/micro-web/issues',
            component: load('issues'),
        },
        {
            path: '/micro-web*',
            redirect: '/micro-web/vanlement',
        }
    ],
};