//Insertar 10 products en products
db.products.insertMany([
  {
    title: 'Ergonomic Frozen Hat',
    price: 997.0,
    thumbnail: 'http://loremflickr.com/640/480',
  },
  {
    title: 'Sleek Granite Bacon',
    price: 1591.0,
    thumbnail: 'http://loremflickr.com/640/480',
  },
  {
    title: 'Handmade Wooden Gloves',
    price: 604.0,
    thumbnail: 'http://loremflickr.com/640/480',
  },
  {
    title: 'Sleek Plastic Keyboard',
    price: 2120.0,
    thumbnail: 'http://loremflickr.com/640/480',
  },
  {
    title: 'Fantastic Rubber Gloves',
    price: 1619.0,
    thumbnail: 'http://loremflickr.com/640/480',
  },
  {
    title: 'Sleek Soft Keyboard',
    price: 383.0,
    thumbnail: 'http://loremflickr.com/640/480',
  },
  {
    title: 'Handmade Metal Salad',
    price: 4548.0,
    thumbnail: 'http://loremflickr.com/640/480',
  },
  {
    title: 'Small Plastic Pizza',
    price: 3232.0,
    thumbnail: 'http://loremflickr.com/640/480',
  },
  {
    title: 'Ergonomic Concrete Hat',
    price: 2515.0,
    thumbnail: 'http://loremflickr.com/640/480',
  },
  {
    title: 'Rustic Concrete Towels',
    price: 1780.0,
    thumbnail: 'http://loremflickr.com/640/480',
  },
]);

//Insertar 10 mensajes en messages

db.messages.insertMany([
  {
    socketId: 1,
    mail: 'Liliana.Fadel@gmail.com',
    date: '2022-03-29T15:34:34.143Z',
    msg: 'Ea inventore unde temporibus sapiente inventore rem et.',
  },
  {
    socketId: 1,
    mail: 'Glenda.Jast@gmail.com',
    date: '2022-03-29T02:52:17.865Z',
    msg: 'Magni placeat est et distinctio magni consequatur soluta aut.',
  },
  {
    socketId: 1,
    mail: 'Marcia_Ernser@hotmail.com',
    date: '2022-03-29T00:49:34.008Z',
    msg: 'Distinctio excepturi eveniet omnis.',
  },
  {
    socketId: 1,
    mail: 'Trevion_Thompson@hotmail.com',
    date: '2022-03-28T19:58:45.548Z',
    msg: 'Sit delectus corporis vel quos porro ab fugiat ipsam enim.',
  },
  {
    socketId: 1,
    mail: 'Weldon.Jacobson@gmail.com',
    date: '2022-03-29T03:21:34.325Z',
    msg: 'Rerum quo sit rem sunt.',
  },
  {
    socketId: 1,
    mail: 'Chelsey.Bechtelar@gmail.com',
    date: '2022-03-29T09:30:35.240Z',
    msg: 'Dolores nisi est modi.',
  },
  {
    socketId: 1,
    mail: 'Katrine49@yahoo.com',
    date: '2022-03-29T05:52:54.447Z',
    msg: 'At unde aut placeat cum rerum soluta corrupti nisi.',
  },
  {
    socketId: 1,
    mail: 'Miller_Howell21@yahoo.com',
    date: '2022-03-29T12:05:00.640Z',
    msg: 'Aut quisquam quia distinctio ducimus doloremque qui voluptates in.',
  },
  {
    socketId: 1,
    mail: 'Clement.Metz33@gmail.com',
    date: '2022-03-29T11:47:18.361Z',
    msg: 'Qui vel distinctio et tempore magni ut quia porro.',
  },
  {
    socketId: 1,
    mail: 'Cathryn_Conn@gmail.com',
    date: '2022-03-29T16:52:10.247Z',
    msg: 'Ipsum neque consequatur expedita est.',
  },
]);

//listar todos los documentos.
db.products.find().pretty();
db.messages.find().pretty();
// mostrar la cantidad de documentos en cada collection.
db.products.count();
db.messages.count();
// CRUD
// Agregar un producto en products
db.products.insert({
  title: 'Ergonomic Concrete Hat',
  price: '2515.00',
  thumbnail: 'http://loremflickr.com/640/480',
});

// Realizar una consulta por nombre

db.products.find({ title: 'Ergonomic Concrete Hat' }).pretty();
db.products.find({ title: 'Rustic Concrete Towels' }).pretty();

// Listar los productos con precio menor a 1000 pesos
db.products.find({ price: { $lt: 6000 } }).pretty();

// Listar los productos con precio entre los 1000 a 3000 pesos.
db.products.find({ price: { $gt: 1000 }, price: { $lt: 3000 } }).pretty();

// Listar los productos con precio mayor a 3000 pesos.
db.products.find({ price: { $gt: 3000 } }).pretty();

// Realizar una consulta que traiga sólo el nombre del tercer producto más barato.
db.products.find({}, { title: 1 }).sort({ price: 1 }).skip(2).limit(1).pretty();

// Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.
db.products.updateMany({}, { $set: { stock: 100 } });

// Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.
db.products.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } });
// Borrar los productos con precio menor a 1000 pesos
db.products.remove({ price: { $lt: 1000 } });
