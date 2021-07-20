/*
 * @Descripttion: 其他单个 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-07-15 14:16:46
 * @LastEditors: 蔡远程
 */
import Home from '@/components/home';
// const load = path => require(`@/views/${path}.md`).default;
export default [
    {
        path: '/',
        title: 'Home',
        component: Home,
    },
    {
        path: '*',
        redirect: '/',
    }
];