module.exports = {
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  host: '127.0.0.1',
  dialect: 'postgres',
  port: 5433,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
