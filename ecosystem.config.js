module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // 生产环境
    {
      name: 'prod-yktserver',
      script: './index.js',
      watch: true,
      ignore_watch: [
        'node_modules',
        'public',
        'cacheFiles',
        'logs',
        'package-lock.json',
        'yarn.lock',
        '.gitignore',
      ],
      env: {
        NODE_ENV: 'production',
        PORT: 8091,
      },
    },
    // 测试环境
    {
      name: 'test-yktserver',
      script: './index.js',
      watch: true,
      ignore_watch: [
        'node_modules',
        'public',
        'cacheFiles',
        'logs',
        'package-lock.json',
        'yarn.lock',
        '.gitignore',
      ],
      env: {
        NODE_ENV: 'development',
        PORT: 8092,
      },
    },
  ],
};
