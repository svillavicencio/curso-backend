const path = require('path');
const filedb = path.join(__dirname, '../db/db.sqlite');

const options = {
  client: 'sqlite3',
  connection: {
    filename: filedb,
  },
  useNullAsDefault: true,
};

module.exports = {
  options,
};
