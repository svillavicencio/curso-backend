import { Knex } from 'knex';

const initialData = [
  {
    title: 'Escuadra',
    price: 123.45,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
  },
  {
    title: 'Calculadora',
    price: 234.56,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
  },
  {
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
  },
];

export default async function createTableSetup(
  knex: Knex,
  tableName: string
): Promise<boolean> {
  const hasTable = await knex.schema.hasTable(tableName);
  if (!hasTable) {
    try {
      await knex.schema.createTable(tableName, (table) => {
        table.increments('id');
        table.string('title');
        table.integer('price');
        table.string('thumbnail');
      });
      console.log(`Tabla creada`);
      await knex(tableName).insert(initialData);
      console.log(`Datos insertados`);
      return true;
    } catch (error) {
      console.error(error);
    }
    return true;
  }
  console.log('Ya existe la tabla');
  return true;
}
