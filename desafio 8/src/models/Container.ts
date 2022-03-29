import { Knex } from 'knex';
import createTableSetup from '../services/knexSetup';

interface Item {
  id?: number;
  title: string;
  price: number;
  thumbnail: string;
}

class Container {
  private items: Item[] = [];
  private knex: Knex;
  private tableName: string;

  constructor(customKnex: Knex, tableName: string) {
    this.knex = customKnex;
    this.tableName = tableName;
  }
  async saveItem(item: Item): Promise<void> {
    const result = await this.knex(this.tableName).insert(item);
    console.log(result);
  }

  async getItemById(id: number): Promise<void> {
    const result = await this.knex(this.tableName).where({ id: id });
    console.log(result);
  }

  async deleteItemById(id: number): Promise<void> {
    const result = await this.knex(this.tableName).where({ id: id }).del();
    console.log(result);
  }

  async deleteAll(): Promise<void> {
    const result = await this.knex(this.tableName).del();
    console.log(result);
  }

  async getItems(): Promise<void> {
    try {
      this.items = await this.knex.from(this.tableName).select('*');
      console.log('Memoria actualizada', this.items);
    } catch (error) {
      console.log(error);
    }
  }
}

export default async function getInstanceContainer(
  knex: Knex,
  tableName: string
): Promise<Container | undefined> {
  try {
    const dbLoaded = await createTableSetup(knex, tableName);
    if (dbLoaded) {
      return new Container(knex, tableName);
    }
  } catch (error) {
    console.error(error);
  }
}
