const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Rock' },
    { name: 'Pop' },
    { name: 'Jazz' },
    { name: 'Heavy metal' },
    { name: 'Musical' },
    { name: 'Kpop'},
    { name: 'Rhythm and blues' },
    { name: 'Hip hop' },
    { name: 'Folk' },
    { name: 'gaspel' },
    { name: 'Classical' },
    { name: 'Country'},
    { name: 'Blues' },
    { name: 'Electronic' },
    { name: 'Calol' },
    { name: 'Gaspel' },
    { name: 'Funk' },
    { name: 'Instrumental'},
    { name: 'Disco' },
    { name: 'Opera' },
    { name: 'Dance' },
    { name: 'Orchestra' },
    { name: 'Techno' },
    { name: 'R&B'},
    { name: 'Swing' },
    { name: 'Progressive rock' },
    { name: 'Carol' },
    { name: 'Trance' },
    { name: 'Latin' },
    { name: 'Ballad'}

  ]);

  console.log('categories seeded');


  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
