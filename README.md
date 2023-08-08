![image](https://github.com/Sigma-Research/eslint-config-hexin/assets/138546641/6b0e860c-0e3c-4796-b062-56a42d384726)![image](https://github.com/Sigma-Research/eslint-config-hexin/assets/138546641/8a70a86a-660c-48ad-baee-31869562c024)# 安装依赖
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
2. 手动在override字段中重写冲突的规则<br>
**3. 如果项目使用ESModule**
在.eslintrc.js(配置文件)中加上
```js
 parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
```

**4. 使用TypeScript时文件报错**
![image](https://github.com/Sigma-Research/eslint-config-hexin/assets/138546641/947e431d-ab9f-4e7a-b536-b239e3d51d08)<br>
安装相关依赖
```shell
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```


# 持续维护
可以使用这个插件自动将eslint提示转为中文<br>
![image](https://github.com/Sigma-Research/eslint-config-hexin/assets/138546641/92b2ac3b-3a9c-4499-a12f-207b6780173e)




