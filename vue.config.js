module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api' : '/api'
                }
            }
        }
    }
}