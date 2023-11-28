module.exports = {
  printWidth: 80, // 单行宽度限制
  tabWidth: 2, // tab 使用两个空格
  useTabs: false, // 不使用制表符缩进，使用空格缩进
  semi: false, // 代码需要分号结尾
  singleQuote: true, // 单引号
  bracketSpacing: true, // 对象左右两侧需要空格
  jsxBracketSameLine: true, // html 关闭标签换行
  arrowParens: 'avoid', // 单参数的箭头函数参数不需要括号
  proseWrap: 'always', // 参考 https://prettier.io/docs/en/options.html#prose-wrap
  trailingComma: 'none', // 参考 https://prettier.io/docs/en/options.html#trailing-commas, 末尾去除空白字符
  plugins: ['prettier-plugin-tailwindcss'] // 如果是pnpm、yarn 就需要手动引入，npm 是自动引入
}
