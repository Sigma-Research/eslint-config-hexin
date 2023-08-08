const { RuleTester } = require('eslint');
const rule = require('../lib/rules/comment-space');
const ruleTester = new RuleTester({parserOptions: { ecmaVersion: 2018 }});
// 我是一个china人
const errMsg = (warnWord) => '注释英文单词加空格!!';
ruleTester.run('comments-key', rule, {
  valid: [
    '//我是sssss啊啊啊',
    '// fixdddd啊啊啊啊啊啊',
    `/**
        * 容十三内水s是说
        */`
  ],
  invalid: [
    {
      code: '//测试asdasd内容',
      errors: [{ message: errMsg('fixme') }],
    }
  ],
});
