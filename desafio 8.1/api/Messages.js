const sqliteOptions = require('../config/sqliteConfig');
const { setupSqliteDb } = require('../services/sqliteSetup');
const knex = require('knex')(sqliteOptions.options);

class Messages {
  messages = [];
  constructor(knex, tableName) {
    this.knex = knex;
    this.tableName = tableName;
  }

  async getMessages() {
    this.messages = await this.knex(this.tableName).select(`*`);
    return this.messages;
  }

  async saveMessage(message) {
    const result = await this.knex(this.tableName).insert(message);
    return result;
  }

  async startDb() {
    const loaded = await setupSqliteDb(knex);
    return loaded;
  }
}

module.exports = new Messages(knex, 'messages');
