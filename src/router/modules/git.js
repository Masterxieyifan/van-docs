/*
 * @Descripttion: git 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-07-15 12:17:52
 * @LastEditors: 蔡远程
 */
const load = path => require(`@/views/git/${path}.md`).default;
export default {
    sideBar: 'git',
    children: [
        {
            title: 'Commit信息规范',
            path: '/git/commit',
            component: load('commit'),
        },
        {
            title: 'Flow工作流',
            path: '/git/flow',
            component: load('flow'),
        },
        {
            path: '/git*',
            redirect: '/git/commit',
        }
    ],
};