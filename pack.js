const shell = require('shelljs');
const fs = require('fs');


const LIBS = {
    'VANTOP_UI': {
        'name': 'vantop-ui',
        'path': 'node_modules/@vantop/vantop-ui',
    },
    'VANTOP_UTIL': {
        'name': 'vantop-util',
        'path': 'node_modules/@vantop/vantop-util',
    },
    'VANTOP_EDITOR': {
        'name': 'vantop-editor',
        'path': 'node_modules/vantop-editor',
    },
};

let o = {};
Object.values(LIBS).forEach(i => {
    // 复制changelog文件
    shell.exec(`mkdir -p releases && cp ${process.cwd()}/${i.path}/CHANGELOG.md releases/${i.name}.md`);

    // 获取最新版本号
    try {
        const FILE_PATH = `${process.cwd()}/${i.path}/package.json`;
        fs.accessSync(FILE_PATH, fs.constants.F_OK);
        const pkg = require(FILE_PATH);
        o[i.name] = pkg.version || 'N/A';
    } catch (err) {
        o[i.name] = 'N/A';
    }
});
// 写入版本号
fs.writeFileSync(`${process.cwd()}/const/version.json`, JSON.stringify(o));
