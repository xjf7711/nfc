module.exports = {
  // 项目部署的基础路径
  publicPath: "./",
  // 输出文件目录。
  // "dist",
  outputDir: "../../cordova/nfcdemo/platforms/android/app/src/main/assets/www/",

  devServer: {
    host: '0.0.0.0',
    port: 1357,
    proxy: {
      "/api": {
        target: 'http://192.168.0.57:8081',  // 你接口的域名 设置你调用的接口域名和端口号 别忘了加http
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          // '^/fsy': ''
          "^/api": "" // 这里理解成用'/ledger'代替target里面的地址，后面组件中我们掉接口时直接用ledger代替
          // 比如我要调用'http://192.168.0.57:8081/ledger/add'，直接写'/ledger/add'即可
        },
        headers: {
          Referer: "https://www.***.com/",
          host: "https://www.***.com/"
        }
        // 正式环境： 接口地址 /api/**                         前端页面地址
        // 开发环境： 接口地址 http://www.xxx.com/api/**       前端页面地址  http://localhost:8080
      },
    }
  }
};
