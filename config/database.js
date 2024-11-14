const { db } = require("./env");
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", db.DATABASE_HOST),
      port: env.int("DATABASE_PORT", db.DATABASE_PORT),
      database: env("DATABASE_NAME", db.DATABASE_NAME),
      user: env("DATABASE_USERNAME", db.DATABASE_USERNAME),
      password: env("DATABASE_PASSWORD", db.DATABASE_PASSWORD),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_REJECT_UNAUTHORIZED", false),
      },
    },
    pool: {
      min: env.int("DATABASE_POOL_MIN", 0),
      max: env.int("DATABASE_POOL_MAX", 10),
      acquireTimeoutMillis: env.int("DATABASE_POOL_ACQUIRE", 60000),
      createTimeoutMillis: env.int("DATABASE_POOL_CREATE", 30000),
      destroyTimeoutMillis: env.int("DATABASE_POOL_DESTROY", 5000),
      idleTimeoutMillis: env.int("DATABASE_POOL_IDLE", 30000),
      reapIntervalMillis: env.int("DATABASE_POOL_REAP", 1000),
      createRetryIntervalMillis: env.int("DATABASE_POOL_RETRY", 200),
    },
  },
});
