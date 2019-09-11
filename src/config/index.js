export default {

    title: 'wind-blog',
    cookieExpires: 1,
    useI18n: false,
    baseUrl: {
        dev: 'http://localhost:9090',
        pro: ''
    },

    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',

    configureWebpack: {
        devtool: 'source-map'
    }
}