/*
 * @Author: yong.xie
 * @Date: 2021-07-20 17:52:31
 * @LastEditors: yong.xie
 * @LastEditTime: 2021-07-20 18:41:28
 * @FilePath: /van-docs/vue.config.js
 */
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    lintOnSave: isProd,
    pages: {
        index: {
            entry: 'src/main.js', // 入口
            template: 'public/index.html', // 模板
            filename: 'index.html', // 输出文件
        },
    },
    publicPath: './',
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.resolve('/src'));

        config.module
            .rule('md')
            .test(/\.md$/)
            .use('vue-loader')
            .loader('vue-loader')
            .options({
                compilerOptions: {
                    preserveWhitespace: false,
                },
            })
            .end()
            .use(path.resolve(__dirname, './md-loader/index.js'))
            .loader(path.resolve(__dirname, './md-loader/index.js'))
            .end();
    },
};
