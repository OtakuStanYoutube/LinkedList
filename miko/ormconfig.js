module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["dist/entities/*.js"],
  migrations: ["dist/migrations/*.js"],
  seeds: ["dist/seeds/*.js"],
  cli: {
    entitiesDir: "dist/entities",
    migrationsDir: "dist/migrations",
  },
};
