/*
 * @Descripttion: van-table 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-07-15 12:18:00
 * @LastEditors: 蔡远程
 */
const load = path => require(`@/views/van-table/${path}.md`).default;
export default {
    sideBar: 'van-table',
    children: [
        {
            title: '基础使用',
            children: [
                {
                    path: '/van-table/basic',
                    title: '基础表格',
                    component: load('basic'),
                },
                {
                    path: '/van-table/group',
                    title: '多级表头',
                    component: load('group'),
                },
                {
                    path: '/van-table/tree',
                    title: '树状结构',
                    component: load('tree'),
                },
                {
                    path: '/van-table/complex',
                    title: '复杂表格',
                    component: load('complex'),
                },
                {
                    path: '/van-table/freeze',
                    title: '冻结列',
                    component: load('freeze'),
                }
            ],
        },
        {
            path: '/van-table*',
            redirect: '/van-table/basic',
        }
    ],
};