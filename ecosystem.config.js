module.exports = {
    apps: [
      {
        name: 'Mujweb',
        script: 'yarn',
        args: 'start',
        env: {
          PORT: 3000,
          NODE_ENV: 'production'
        },
      },
    ],
  };