import knex from 'knex';
import knexConfig from './config/knexConfig';
import getInstanceContainer from './models/Container';

const dataExample = {
  title: 'asd',
  price: 123123.45,
  thumbnail:
    'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
};

async function startDb() {
  const container = await getInstanceContainer(knex(knexConfig), 'test1');
  if (container) {
    // container.getItems();
    // container.saveItem(dataExample);
    // container.getItems();
    // container.deleteAll();
    // container.getItems();
    // container.getItemById(7);
    // container.deleteItemById(7);
  }
}

startDb();
// Sacar el comentario a cada function del container.
