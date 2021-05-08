// 在根目录下创建vue.config.js

var path = require('path')
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack:  {
   resolve: {
       //配置目录别名
       alias:{
           'assets': '@/assets',
           'common': '@/common',
           'components': '@/components',
           'netrok': '@/netrok',
           'router': '@/router',
           'views': '@/views',
      
       }
   }
  }
}