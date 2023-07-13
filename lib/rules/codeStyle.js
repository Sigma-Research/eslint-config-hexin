module.exports = {
  // 这是一个常见的ESLint规则，可用于规范代码格式和注释。
  rules: {
    // 要求或禁止使用分号代替 ASI
    semi: ["error", "always"],
    // 强制使用一致的双引号或单引号
    quotes: ["error", "single"],
    // 禁用 console
    "no-console": "warn",
    // 禁止未使用过的变量
    "no-unused-vars": "warn",
    // 禁止未声明的变量
    "no-undef": "error",
    // 不允许在变量定义之前使用变量
    "no-use-before-define": "error",
    // 不允许变量声明覆盖外部作用域的变量
    "no-shadow": "error",
    // 箭头函数的箭头前后需要有空格
    "arrow-spacing": "error",
    // 禁止使用容易混淆的箭头函数语法
    "no-confusing-arrow": "error",
    // 优先使用 const 关键字声明常量
    "prefer-const": "warn",
    // 优先使用箭头函数作为回调函数
    "prefer-arrow-callback": "warn",
    // 箭头函数的参数需要用括号括起来
    "arrow-parens": ["error", "always"],
    // 函数名后面不需要有空格。例如，function foo() { } 是符合规则的，而 function foo () { } 是违反规则的。
    "space-before-function-paren": ["error", "never"],
    // 这个规则指定了代码块（花括号）前需要有空格。例如，if (true) { } 是符合规则的，而 if (true){ } 是违反规则的。
    "space-before-blocks": "error",
    //  'keyword-spacing': 'error'
    "keyword-spacing": "error",
    // 使用驼峰命名法
    camelcase: "error",
    // 禁止使用不必要的括号。例如，(1 + 2) 是符合规则的，而 ( 1 + 2 ) 是违反规则的。
    "no-extra-parens": "error",
    // 每个类成员之间有一个空行
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    // 超过200换行
    "object-curly-newline": ["error", { multiline: true, minProperties: 200 }],
    // 空行规则
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "function",
        next: "*",
      },
    ],
    // 禁止多余的分号
    "no-extra-semi": "error",
    // 禁用 debugger
    "no-debugger": "warn",
    // 不允许多行空行，最多只能有一行空行
    "no-multiple-empty-lines": ["error", { max: 1 }],
    // 禁止在行尾添加空格
    "no-trailing-spaces": ["error", { skipBlankLines: true }],
    // 要求或禁止使用拖尾逗号
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    // 强制使用一致的缩进
    indent: ["error", 2],
    // 强制使用一致的换行符风格
    "linebreak-style": ["error", "unix"],
    // 强制行的最大长度
    "max-len": [
      "warn",
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};
