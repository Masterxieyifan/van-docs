/*
 * @Descripttion: 代码风格 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-07-15 12:13:31
 * @LastEditors: 蔡远程
 */
const load = path => require(`@/views/vantop-editor/${path}.md`).default;
export default {
    sideBar: 'vantop-editor',
    children: [
        {
            title: '简介',
            path: '/vantop-editor',
            component: load('README'),
        },
        {
            title: '快速上手',
            path: '/vantop-editor/quickstart',
            component: load('quickstart'),
        },
        {
            title: '上传图片、word文件',
            path: '/vantop-editor/upload',
            component: load('upload'),
        },
        {
            path: '/vantop-editor*',
            redirect: '/vantop-editor/README',
        }
    ],
};