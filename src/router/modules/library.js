/*
 * @Descripttion: FE库开发指南 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-07-15 11:19:48
 * @LastEditors: 蔡远程
 */
const load = path => require(`@/views/library/${path}.md`).default;
export default {
    sideBar: 'library',
    children: [
        {
            title: '开发流程规范',
            path: '/library/standard',
            component: load('standard'),
        },
        {
            title: '组件库开发',
            path: '/library/ui',
            component: load('ui'),
        },
        {
            title: '工具库开发',
            path: '/library/util',
            component: load('util'),
        },
        {
            title: '发包流程',
            path: '/library/publish',
            component: load('publish'),
        },
        {
            path: '/library*',
            redirect: '/library/standard',
        }
    ],
};