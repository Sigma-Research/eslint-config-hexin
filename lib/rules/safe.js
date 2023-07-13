module.exports = {
  rules: {
    // 禁止使用alert、confirm和prompt。
    'no-alert': 'error',
    // 禁止使用arguments.caller或arguments.callee。
    'no-caller': 'error',
    // 禁止使用eval()。
    'no-eval': 'error',
    // 禁止使用隐式eval()。
    'no-implied-eval': 'error',
    // 禁止使用Function构造函数。
    'no-new-func': 'error',
    // 禁止使用Object构造函数。
    'no-new-object': 'error',
    // 禁止在字符串中使用八进制转义序列。
    'no-octal-escape': 'error',
    // 禁止javascript: URL。
    'no-script-url': 'error',
    // 禁止自我比较。
    'no-self-compare': 'error',
    // 不允许使用 var 关键字声明变量，推荐使用 const 或 let
    'no-var': 'error',
  },
};
