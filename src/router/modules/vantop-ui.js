/*
 * @Descripttion: vantop-ui 路由
 * @Author: 蔡远程
 * @Date: 2021-07-13 14:07:57
 * @LastEditTime: 2021-07-20 11:23:50
 * @LastEditors: 陈建中
 */
const load = path => require(`@/views/vantop-ui/${path}.md`).default;
export default {
    sideBar: 'vantop-ui',
    children: [
        {
            path: '/vantop-ui',
            title: '简介',
            component: load('README'),
        },
        {
            path: '/vantop-ui/vantop-table',
            title: 'Vantop Table',
            component: load('VantopTable'),
        },
        {
            path: '/vantop-ui/vantop-popover',
            title: 'Vantop Popover',
            component: load('VantopPopover'),
        },
        {
            path: '/vantop-ui/basic-box',
            title: 'Basic Box',
            component: load('BasicBox'),
        },
        {
            path: '/vantop-ui/advanced-filter',
            title: 'Advanced Filter',
            component: load('AdvancedFilter'),
        },
        {
            path: '/vantop-ui/btn-wrapper',
            title: 'Button Wrapper',
            component: load('BtnWrapper'),
        },
        {
            path: '/vantop-ui/increasement',
            title: 'Increasement',
            component: load('Increasement'),
        },
        {
            path: '/vantop-ui/decreasement',
            title: 'Decreasement',
            component: load('Decreasement'),
        },
        {
            path: '/vantop-ui/search-list',
            title: 'Search List',
            component: load('SearchList'),
        },
        {
            path: '/vantop-ui/search-tree',
            title: 'Search Tree',
            component: load('SearchTree'),
        },
        {
            path: '/vantop-ui/van-tree',
            title: 'Van Tree',
            component: load('VanTree'),
        },
        {
            path: '/vantop-ui/select-search-input',
            title: 'Select Search Input',
            component: load('SelectSearchInput'),
        },
        {
            path: '/vantop-ui/multiple-input',
            title: 'Multiple Input',
            component: load('MultipleInput'),
        },
        {
            path: '/vantop-ui/input-number',
            title: 'Input Number',
            component: load('InputNumber'),
        },
        {
            path: '/vantop-ui/sticky',
            title: 'Sticky',
            component: load('Sticky'),
        },
        {
            path: '/vantop-ui/sticky-header',
            title: 'Sticky Header',
            component: load('StickyHeader'),
        },
        {
            path: '/vantop-ui/anchors',
            title: 'Anchors',
            component: load('Anchors'),
        },
        {
            path: '/vantop-ui/collapse',
            title: 'Collapse',
            component: load('Collapse'),
        },
        {
            path: '/vantop-ui/select-tree',
            title: 'Select Tree',
            component: load('SelectTree'),
        },
        {
            path: '/vantop-ui/select-create',
            title: 'Select Create',
            component: load('SelectCreate'),
        },
        {
            path: '/vantop-ui/transfer',
            title: 'Transfer',
            component: load('Transfer'),
        },
        {
            path: '/vantop-ui/tree-transfer',
            title: 'Tree Transfer',
            component: load('TreeTransfer'),
        },
        {
            path: '/vantop-ui/time',
            title: 'Time',
            component: load('Time'),
        },
        {
            path: '/vantop-ui/img-previewer',
            title: 'Img previewer',
            component: load('ImgPreviewer'),
        },
        {
            path: '/vantop-ui/Empty',
            title: 'Empty',
            component: load('Empty'),
        },
        {
            path: '/vantop-ui/import-dialogue',
            title: 'Import Dialogue',
            component: load('ImportDialogue'),
        },
        {
            path: '/vantop-ui/SelectDatePicker',
            title: 'Select Date Picker',
            component: load('SelectDatePicker'),
        },
        {
            path: '/vantop-ui/PageListTemplate',
            title: 'Page List Template',
            component: load('PageListTemplate'),
        },
        {
            path: '/vantop-ui*',
            redirect: '/vantop-ui',
        }
    ],
};