module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/actions-example-vue/' : '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'CI /CD 測試範例';
      return args;
    });
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
};
