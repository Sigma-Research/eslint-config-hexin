module.exports = {
    // 指定解析器为TypeScript解析器
    parser: '@typescript-eslint/parser',
    // 指定解析器选项
    parserOptions: {
        // 使用的ECMAScript版本
        ecmaVersion: 2020,
        // 代码使用的模块系统
        sourceType: 'module',
        // TypeScript项目的配置文件路径
        project: './tsconfig.json',
    },
    // 指定扩展规则
    extends: [
        // 使用ESLint默认推荐的规则
           'eslint:recommended',
        // 使用@typescript-eslint推荐的规则
        'plugin:@typescript-eslint/recommended',
    ],
    // 指定自定义规则
    rules: {},
};
