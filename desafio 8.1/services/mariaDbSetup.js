async function setupMariaDb(mariaDbKnex) {
  const hasTable = await mariaDbKnex.schema.hasTable('products');

  if (!hasTable) {
    await mariaDbKnex.schema.createTable('products', (table) => {
      table.increments('id');
      table.string('title');
      table.integer('price');
      table.string('thumbnail');
    });
    console.log(`Tabla creada`);
    return true;
  }
  console.log(`Tabla ya existente`);
  return true;
}

module.exports = {
  setupMariaDb,
};
