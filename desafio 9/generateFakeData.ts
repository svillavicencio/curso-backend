import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

function generateFakeData(): void {
  const resultProducts = [];
  const resultMessages = [];
  for (let i = 0; i < 10; i++) {
    let newProduct = {
      title: faker.commerce.productName(),
      price: faker.commerce.price(100, 5000),
      thumbnail: faker.image.imageUrl(),
    };
    resultProducts.push(newProduct);

    let newMessage = {
      socketId: 1,
      mail: faker.internet.email(),
      date: faker.date.recent(),
      msg: faker.lorem.sentence(),
    };

    resultMessages.push(newMessage);

    fs.writeFileSync(
      path.join(__dirname, './fakeProducts.json'),
      JSON.stringify(resultProducts)
    );
    fs.writeFileSync(
      path.join(__dirname, './fakeMessages.json'),
      JSON.stringify(resultMessages)
    );
  }

  console.log('Data creada');
}

generateFakeData();
