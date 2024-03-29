module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],
}
