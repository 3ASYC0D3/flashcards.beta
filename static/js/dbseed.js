const mongoose = require('mongoose');
const cardSamples = require('./cards');
const { Schema } = mongoose;
const dbUrl = 'mongodb://localhost:27017/flashcards';
const Card = require('./../../models/cards');


mongoose.connect(dbUrl)
  .then(() => {
      console.log('DB connected')
  })
  .catch(err => {
        console.log(err)
  });

const seedDB = async () => {
    await Card.deleteMany({});
    for (let i = 0; i < 50; i++ ) {
        const random50 = Math.floor(Math.random() * 50);
        const card = new Card({
            front: `${cardSamples[random50].front}`,
            back: `${cardSamples[random50].back}`,
            number: `${cardSamples[random50].no}`
        });
        await card.save();
    };
    allCards = await Card.find();
    console.log(allCards);
};


  seedDB().then(() => {
    mongoose.connection.close();
    console.log('Database disconnected');
});
