const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'freedb.tech',
    user: env.DB_USER || 'freedbtech_diogo',
    password: env.DB_PASSWORD || 'testesmarkio',
    database: env.DB_NAME || 'freedbtech_smarkio',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;