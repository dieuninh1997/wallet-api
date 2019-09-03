module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '12345678',
      database: 'mango',
    },
  },
  staging: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '12345678',
      database: 'mango',
    },
  },
  production:
    {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '12345678',
        database: 'mango',
      },
    },
}
