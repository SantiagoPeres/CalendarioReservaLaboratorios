module.exports = {
  development: {
    client: 'pg',
    connection:
      'postgres://mkhethgo:gn9hNWGxjr2iCa-RRl4uM1k8Vi6gC2ax@tuffi.db.elephantsql.com:5432/mkhethgo',
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './src/database/seeds' },
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection:
      'postgres://mkhethgo:gn9hNWGxjr2iCa-RRl4uM1k8Vi6gC2ax@tuffi.db.elephantsql.com:5432/mkhethgo',
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './src/database/seeds' },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection:
      'postgres://mkhethgo:gn9hNWGxjr2iCa-RRl4uM1k8Vi6gC2ax@tuffi.db.elephantsql.com:5432/mkhethgo',
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './src/database/seeds' },
    useNullAsDefault: true,
  },
};
