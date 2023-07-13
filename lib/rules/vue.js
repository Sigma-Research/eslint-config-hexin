module.exports = {
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  plugins: ['vue'],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'vue/attributes-order': 2,
    'vue/max-attributes-per-line': [
      2,
      {
        // 强制标签每行最大属性数
        singleline: 4,
        multiline: {max: 1},
      }
    ],
    'vue/html-self-closing': [
      2,
      {
        // 强制使用闭合标签
        html: {
          void: 'any',
          normal: 'any',
          component: 'any',
        },
        svg: 'any',
        math: 'any',
      }
    ],
    // 单行元素换行符
    'vue/singleline-html-element-content-newline': 0,
    // 多行元素换行符
    'vue/multiline-html-element-content-newline': 0,
    // 可以在便签右便签使用换行符
    'vue/html-closing-bracket-newline': 0,
    // 允许计算属性中出现副作用
    'vue/no-side-effects-in-computed-properties': 0,
    // 允许v-for 和 v-if 作用在同一元素上
    'vue/no-use-v-if-with-v-for': 0,
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 2,
    // component标签必须有is属性
    'vue/require-component-is': 'error',
  },
};
