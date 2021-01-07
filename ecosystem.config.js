module.exports = {
    apps: [
      {
        name: 'nextjs-deno',
        cwd: './',
        script: 'node ncc/index.js',
         args: '',
        instances: 1,
        exec_mode: 'fork',
        env: {
          DEPLOY_ENV: 'prod',
          NODE_ENV: 'production',
        },
      },
    ],
  };
  