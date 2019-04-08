module.exports = {
    // baseUrl: process.env.NODE_ENV === 'production'
    //   ? '//your_url'
    //   : '/',
    //  baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath  default:'/'
    publicPath:process.env.NODE_ENV === 'production'
    ? '/kblog/'
    : '/',

    //type:string  default:'dist'
    outputDir: 'dist',

    //放置生成的静态资源 (js、css、img、fonts) 的 目录。
    assetsDir: 'static',
    
    /*
    *
    *Type: string
    *Default: 'index.html'
    *指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    */
    //indexPath:'index.html',

    filenameHashing: true,
  
    //在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字，value 是：
    // 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
    //或一个指定其 entry 的字符串。
    /****
     * Type: Object
     * Default: undefined
     * 
     */
    // pages: {
    //   index: {
    //     // page 的入口
    //     entry: 'src/pages/index/index.js',
    //     // 模板来源
    //     template: 'src/pages/index/index.html',
    //     // 在 dist/index.html 的输出
    //     filename: 'index.html',
    //     // 当使用 title 选项时，
    //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //     title: '首页',
    //     // 在这个页面中包含的块，默认情况下会包含
    //     // 提取出来的通用 chunk 和 vendor chunk。
    //     chunks: ['chunk-vendors', 'chunk-common', 'index']
    //   }
    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    //     // subpage: ''
    // },
  
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
  
    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
  
    // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
    transpileDependencies: [],
  
    // 生产环境 sourceMap
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
  
    // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
    // corsUseCredentials: false,
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    configureWebpack: (config) => {
    },
  
    // webpack 链接 API，用于生成和修改 webapck 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    // chainWebpack: (config) => {
    //   // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    //   config.optimization
    //     .splitChunks({
    //       cacheGroups: {}
    //     });
  
    //   // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    //   config.module
    //     .rule('eslint')
    //     .exclude
    //     .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
    //     .end()
    // },
  
    // 配置高于chainWebpack中关于 css loader 的配置
    css: {
      // 是否开启支持 foo.module.css 样式
      modules: false,
  
      // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
      // Default: 生产环境下是 true，开发环境下是 false
      extract: true,
  
      // 是否构建样式地图，false 将提高构建速度
      sourceMap: false,
  
      // css预设器配置项
      loaderOptions: {
        css: {
          // options here will be passed to css-loader
        },
  
        postcss: {
          // options here will be passed to postcss-loader
        }
      }
    },
  
    // All options for webpack-dev-server are supported
    // https://webpack.js.org/configuration/dev-server/
    // devServer: {
    //   open: true,
  
    //   host: '127.0.0.1',
  
    //   port: 3000,
  
    //   https: false,
  
    //   hotOnly: false,
  
    //   proxy: null,
  
    //   before: app => {
    //   }
    // },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,
  
    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
  
    // 第三方插件配置
    pluginOptions: {}
  };