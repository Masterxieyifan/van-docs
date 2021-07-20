<template>
    <div
        id="app"
        class="vantop-docs-main__wrapper page-container page-component"
    >
        <Sidebar class="page-component__nav" :menuList="navData" />
        <Header />
        <div class="page-component__content">
            <router-view />
        </div>
    </div>
</template>
<script>
import Sidebar from '@/components/sidebar';
import { routesConfig, } from '@/router';
import Header from '@/components/header';
export default {
    name: 'APP',
    components: {
        Header,
        Sidebar,
    },
    computed: {
        navData() {
            const currentSideBar = this.$route.meta.sideBar;
            let result = [];
            if (currentSideBar) {
                routesConfig.forEach((item) => {
                    if (item.sideBar === currentSideBar) {
                        result = item.children.filter((item) => item.title);
                    }
                });
            }
            return result;
        },
    },
};
</script>

<style lang="scss">
.page-container {
    width: 1300px;
    padding: 0;
    margin: 0 auto;
    padding-top: 55px;
    h2 {
        font-size: 28px;
        color: #1f2d3d;
        margin: 0;
    }
    h3 {
        font-size: 22px;
    }
    h4 {
        font-size: 19px;
    }
    h5 {
        font-size: 15px;
    }
    h2,
    h3,
    h4,
    h5 {
        font-weight: normal;
        color: #1f2f3d;

        &:hover a {
            opacity: 0.4;
        }

        a {
            float: left;
            margin-left: -20px;
            opacity: 0;
            cursor: pointer;

            &:hover {
                opacity: 0.4;
            }
        }
    }

    p {
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5em;
    }

    .tip {
        padding: 8px 16px;
        background-color: #ecf8ff;
        border-radius: 4px;
        border-left: #50bfff 5px solid;
        margin: 20px 0;

        code {
            background-color: rgba(255, 255, 255, 0.7);
            color: #445368;
        }
    }

    .warning {
        padding: 8px 16px;
        background-color: #fff6f7;
        border-radius: 4px;
        border-left: #fe6c6f 5px solid;
        margin: 20px 0;

        code {
            background-color: rgba(255, 255, 255, 0.7);
            color: #445368;
        }
    }
}
@media (max-width: 1300px) {
    .page-container {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .page-container {
        padding: 0 20px;
    }
}

.page-component {
    box-sizing: border-box;

    &.page-container {
        padding: 0 20px;
        overflow-y: scroll;
    }

    .page-component__nav {
        width: 240px;
        position: fixed;
        top: 0;
        bottom: 0;
        margin-top: 80px;
        transition: padding-top 0.3s;

        > .el-scrollbar__wrap {
            height: 100%;
            overflow-x: auto;
        }

        &.is-extended {
            padding-top: 0;
        }
    }

    .side-nav {
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 0;

        & > ul {
            padding-bottom: 50px;
        }
    }

    .page-component__content {
        padding-left: 270px;
        padding-bottom: 100px;
        box-sizing: border-box;
        margin-top: 61px;
    }

    .content {
        padding-top: 10px;
        padding-bottom: 50px;

        > {
            h3 {
                margin: 55px 0 20px;
            }

            table {
                border-collapse: collapse;
                width: 100%;
                background-color: #fff;
                font-size: 14px;
                margin-bottom: 45px;
                line-height: 1.5em;

                strong {
                    font-weight: normal;
                }

                td,
                th {
                    border-bottom: 1px solid #dcdfe6;
                    padding: 15px;
                    max-width: 250px;
                }

                th {
                    text-align: left;
                    white-space: nowrap;
                    color: #909399;
                    font-weight: normal;
                }

                td {
                    color: #606266;
                }

                th:first-child,
                td:first-child {
                    padding-left: 10px;
                }
            }

            ul:not(.timeline) {
                margin: 10px 0;
                padding: 0 0 0 20px;
                font-size: 14px;
                color: #5e6d82;
                line-height: 2em;
            }
        }
    }
}

@media (max-width: 768px) {
    .page-component {
        .page-component__nav {
            width: 100%;
            position: static;
            margin-top: 0;
        }
        .side-nav {
            padding-top: 0;
            padding-left: 50px;
        }
        .page-component__content {
            padding-left: 10px;
            padding-right: 10px;
        }
        .content {
            padding-top: 0;
        }
        .content > table {
            overflow: auto;
            display: block;
        }
    }
}
</style>
