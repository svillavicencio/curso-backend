const mariaDbOptions = require('../config/mariaDbConfig');
const { setupMariaDb } = require('../services/mariaDbSetup');
const knex = require('knex')(mariaDbOptions.options);

class Products {
  constructor(knex, tableName) {
    this.items = [];
    this.knex = knex;
    this.tableName = tableName;
  }

  async addItem(item) {
    const result = await this.knex(this.tableName).insert(item);
    return await this.getItemById(result);
  }

  async getItems() {
    this.items = await this.knex(this.tableName).select(`*`);
    return this.items;
  }

  async getItemById(id) {
    const result = await this.knex(this.tableName).where({ id: id });
    return result;
  }

  async updateItemById(newItem, id) {
    const result = await this.knex(this.tableName)
      .where({ id: id })
      .update(newItem);
    return await this.getItemById(id);
  }

  async deleteItemById(id) {
    const result = await this.knex(this.tableName).where({ id: id }).del();
    return result;
  }

  async startDb() {
    const loaded = await setupMariaDb(this.knex);
    return loaded;
  }
}

module.exports = new Products(knex, 'products');
