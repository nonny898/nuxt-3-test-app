module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // 'eslint:recommended',
    // '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/essential',
    // 'plugin:@typescript-eslint/recommended',
    // '@nuxtjs/eslint-config-typescript',
    'prettier',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
  },
}
