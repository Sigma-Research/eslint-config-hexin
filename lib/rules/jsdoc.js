module.exports = {
  rules: {
    /**
     * 要求在函数上使用JSDoc
     *
     * @see https://eslint.org/docs/rules/require-jsdoc
     */
    'require-jsdoc': ['warn', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
        FunctionExpression: false,
      },
    }],

    /**
     * 强制JSDoc注释中的每行都以星号开始
     *
     * @see https://eslint.org/docs/rules/valid-jsdoc
     */
    'valid-jsdoc': ['error', {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturnType: true,
      preferType: {
        String: 'string',
        Number: 'number',
        Boolean: 'boolean',
        Object: 'object',
        Array: 'array',
        Function: 'function',
      },
    }],
  },
};
