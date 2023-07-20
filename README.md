# 安装依赖
```shell
  npm install git+https://git@github.com/Sigma-Research/eslint-config-hexin#75bc0a86c03054768b311599eaf1d38d72ad8558
```

# 使用示例
## 1. 整体引入
```js
    //.eslintrc.js
    module.exports = {
        extends: [//...
            'hexin', //...
        ],
    };
```
## 2. 单独引入
```js
//.eslintrc.js
module.exports = {
    extends: [//...
      'hexin/lib/codeStyle', 'hexin/lib/typescript', 'hexin/lib/vue', //...
    ],
};
```

# 注意事项
**1. 注意eslint extends的优先级,如果有相同规则,后面的会把前面的覆盖掉**<br>
**2. 如果存在和prettier冲突的情况:**
1. 安装```eslint-config-prettier```和```eslint-plugin-prettier```, 在.eslintrc.js中```extends```中添加```plugin:prettier/recommended```(对于eslint有版本要求)<br>
2. 手动在rules字段中重写冲突的规则<br>
**3. 如果项目使用ESModule**
在.eslintrc.js(配置文件)中加上
```js
 parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
```

# 持续维护
可以使用这个插件自动将eslint提示转为中文
![image](https://github.com/Sigma-Research/eslint-config-hexin/assets/138546641/92b2ac3b-3a9c-4499-a12f-207b6780173e)




