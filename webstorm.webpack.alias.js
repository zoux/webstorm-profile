/**
 * 本文件对项目无任何作用，仅作为 WebStorm 识别别名用
 */

const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
