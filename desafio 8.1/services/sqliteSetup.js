async function setupSqliteDb(sqliteKnex) {
  const hasTable = await sqliteKnex.schema.hasTable('messages');
  if (!hasTable) {
    await sqliteKnex.schema.createTable('messages', (table) => {
      table.string('email');
      table.date('date');
      table.string('msg');
    });
    console.log(`Tabla creada`);
    return true;
  }
  console.log(`Tabla ya existente`);
  return true;
}

module.exports = {
  setupSqliteDb,
};
