const mongoose = require('mongoose');
const { Schema } = mongoose;
const dbUrl = 'mongodb://localhost:27017/flashcards';


mongoose.connect(dbUrl)
  .then(() => {
      console.log('DB connected')
  })
  .catch(err => {
        console.log(err)
  });

  const cardSchema = new mongoose.Schema({
      front: String,
      back: String,
      number: Number
  });
  
const Card = mongoose.model('Card', cardSchema);

  const seedDB = async () => {
      await Card.deleteMany({});
      const card = new Card({
          front: 'questionSample',
          back: 'answerSample',
          number: 123
      })
      await card.save();
      allCards = await Card.find();
      console.log(allCards);
  };


  seedDB().then(() => {
    mongoose.connection.close();
    console.log('Database disconnected');
});
