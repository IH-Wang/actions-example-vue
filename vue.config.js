module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/actions-example-vue/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = process.env['VUE_APP_TITLE'] || 'CI /CD 測試 demo';
      return args;
    });
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
};
