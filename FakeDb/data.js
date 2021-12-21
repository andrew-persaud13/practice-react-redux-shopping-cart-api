const mongoose = require('mongoose');

const fantasyId = mongoose.Types.ObjectId();
const comicsId = mongoose.Types.ObjectId();
const scienceId = mongoose.Types.ObjectId();
const fictionId = mongoose.Types.ObjectId();
const programmingId = mongoose.Types.ObjectId();

module.exports = {
  products: [
    {
      title: 'Harry Potter Full Series',
      price: 100,
      description:
        'Enjoy all of Harrys adventures in the ultimate package that includes all 7 books!',
      image:
        'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2l6YXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      quantity: 10,
      category: fantasyId,
    },
    {
      title: 'Chronicles of Narnia',
      price: 18,
      description: 'Come explore all the fun in the wardrobe!',
      image:
        'https://images.unsplash.com/photo-1552410260-0fd9b577afa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      quantity: 8,
      category: fantasyId,
    },
    {
      title: 'The Hobbit',
      price: 25,
      description: 'Will Bilbo find the treasure? Read now and find out!',
      image:
        'https://images.unsplash.com/photo-1564314016469-d0e1851b24a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9iYml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      quantity: 8,
      category: fantasyId,
    },
    {
      title: 'Archie Series',
      price: 45,
      description:
        'Follow along with Archie, Bettie, Jughead and Veronicas adventures! ',
      image:
        'https://images.unsplash.com/photo-1543373072-69f3d4788832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGluZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      quantity: 20,
      category: comicsId,
    },
    {
      title: 'XMen Series',
      price: 75,
      description: 'Professor X versus Magneto...who will lead the Mutants?',
      image:
        'https://images.unsplash.com/photo-1612036782617-472725567302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      quantity: 12,
      category: comicsId,
    },
    {
      title: 'Avengers Series',
      price: 125,
      description:
        'The mightiest heroes protect earth from all those who wish to end it.',
      image:
        'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2ZW5nZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      quantity: 3,
      category: comicsId,
    },
  ],
  categories: [
    {
      _id: fantasyId,
      name: 'fantasy',
    },
    {
      _id: comicsId,
      name: 'comics',
    },
    {
      _id: programmingId,
      name: 'programming',
    },
    {
      _id: scienceId,
      name: 'science',
    },
    {
      _id: fictionId,
      name: 'fiction',
    },
  ],
};
