// 使用 postcss-pxtorem 将 px 转为 rem   npm install postcss-pxtorem -D
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
