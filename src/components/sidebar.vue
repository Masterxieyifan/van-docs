<template>
    <el-menu
        router
        :default-active="currentPath"
        class="vantop-docs--menu">
        <template v-for="{children, path, title} in menuList">
            <template v-if="children && children.length > 0">
                <el-submenu
                    :key="path"
                    :index="title">
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
</template>
<script>
export default {
    title: 'NavBar',
    props: {
        menuList: {
            type: Array,
            default: ()=>[],
        },
    },
    computed: {
        currentPath() {
            return this.$route.path;
        },
    },
};
</script>
<style scoped lang="scss">
.vantop-docs--menu {
    overflow-y: auto;
    height: calc(100% - 100px);
    z-index: 499;
    .el-menu-item, .el-submenu__title {
        height: 40px;
        line-height: 40px;
    }
}
</style>