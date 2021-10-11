module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.module.rule('js').include.add(__dirname + 'packages').end().use('babel').loader('babel-loader').tap(options => {
            return options;
        })
    },
    // 强制css内联，不然会导致样式失效问题
    css: { extract: false }
}
