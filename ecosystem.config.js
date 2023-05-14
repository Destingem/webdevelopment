module.exports = {
    apps: [
      {
        name: 'Mujweb',
        script: 'yarn',
        args: 'start',
        env: {
          PORT: 443,
          NODE_ENV: 'production'
        },
      },
    ],
  };