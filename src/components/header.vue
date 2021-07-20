<template>
    <div class="vantop-docs--header">
        <div class="vantop-docs--header__wrap">
            <router-link class="vantop-docs--header__logo" to="/">VANTOP FE DOCS</router-link>
            <el-menu
                router
                :default-active="activeIndex"
                class="vantop-docs--header__menu"
                mode="horizontal">
                <template v-for="({title, children, path}, index) in HEADER_CONFIG">
                    <template v-if="children && children.length > 0">
                        <el-submenu
                            :key="title"
                            class="vantop-docs-header__submenu"
                            :index="title+index">
                            <template slot="title">{{title}}</template>
                            <el-menu-item
                                v-for="{title, path} in children"
                                :index="path"
                                :key="path">{{title}}</el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item
                            :key="path"
                            :index="path">{{title}}</el-menu-item>
                    </template>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<script>
import HEADER_CONFIG from '@/config/header.js';
export default {
    name: 'Header',
    data() {
        return {
            HEADER_CONFIG,
        };
    },
    computed: {
        activeIndex() {
            return this.$route.path.split('/').slice(0, 2).join('/') || '';
        },
    },
};
</script>

<style scoped lang="scss">
.vantop-docs--header {
    position: fixed;
    left: 0;
    z-index: 500;
    top: 0;
    width: 100%;
    .vantop-docs--header__wrap {
        position: relative;
        max-width: 1300px;
        margin: 0 auto;
    }
    .vantop-docs--header__menu {
        padding-left: 300px;
    }
    .vantop-docs--header__logo {
        user-select: none;
        cursor: pointer;
        position: absolute;
        font-weight: 600;
        color: #2c3e50;
        font-size: 20px;
        z-index: 2;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
<style lang="scss">
.el-menu--horizontal .el-menu.el-menu--popup {
    min-width: 150px;
}
</style>