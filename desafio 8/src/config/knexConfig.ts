interface KnexOptions {
  client: string;
  connection: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
}

const knexConfig: KnexOptions = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test',
  },
};

export default knexConfig;
