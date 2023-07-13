module.exports = {
  // 其他配置项...
  rules: {
    // 禁止在代码行上使用行内注释
    'no-inline-comments': 'error',
    // 规定多行注释的样式为注释块以 /* 开始，并以 */ 结束，每一行都以 * 开始
    'multiline-comment-style': ['error', 'starred-block'],
    // 注释前需要一个空格
    'spaced-comment': ['error', 'always'],
    // 禁止使用特定的警告注释
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme'], location: 'anywhere' }],
  },
};
