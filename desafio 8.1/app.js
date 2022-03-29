const express = require('express');
const path = require('path');
const moment = require('moment');
const { engine: expresshbs } = require('express-handlebars');
const socketIO = require('socket.io');
const app = new express();
const productos = require('./routes/productos');
const productsInstance = require('./api/Products');
const messagesInstance = require('./api/Messages');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/productos', productos);

// view engine setup
app.set('port', process.env.PORT || 8080);
app.engine(
  'hbs',
  expresshbs({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, '/views/layouts/'),
    partialsDir: path.join(__dirname, '/views/partials/'),
  })
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//server
const server = app.listen(app.get('port'), async () => {
  const mariaDbLoaded = await productsInstance.startDb();
  const sqliteDbLoaded = await messagesInstance.startDb();
  if (mariaDbLoaded && sqliteDbLoaded) {
    console.log(`server running on ${app.get('port')}`);
  }
});
app.get('/', (req, res) => {
  res.render('index');
});

//socket
const io = socketIO(server);
io.on('connection', async (socket) => {
  console.log('user connected id:', socket.id);
  socket.on('new-product', (data) => {
    io.sockets.emit('new-product', data);
  });

  const messages = await messagesInstance.getMessages();

  socket.emit('messages', messages);

  socket.on('new-message', async (data) => {
    const newMessage = {
      email: data.email,
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      msg: data.msg,
    };
    const message = await messagesInstance.saveMessage(newMessage);
    io.sockets.emit('messages', message);
  });
});
