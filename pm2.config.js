module.exports = {
  apps: [
    {
      name: "app",
      script: "app.js",
      env: {
        COMMON_VARIABLE: "true"
      },

      env_production: {
        NODE_ENV: "production"
      }
    }
  ],
  delpoy: {
    production: {
      user: "michael",
      host: ["119.23.201.183"],
      poet: "3999",
      ref: "origin/master",
      repo: "git@github.com:soymikey/elema-app-clone.git",
      path: "/www/elema/production",
      ssh_options: "StrictHostKeyChecking = no",
      "post-deploy":
        "npm install&& npm run build&&pm2 startOrRestart ecosystem.json --env production",
      env: {
        NODE_ENV: "production"
      }
    }
  }
};
