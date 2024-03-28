const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:2287',
                ws: true,
                changeOrigin: true,
            }
        }
    }
})
