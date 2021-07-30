const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose
  .connect(
    'mongodb+srv://manas:manas123@cluster0.p01ap.mongodb.net/FoodDB?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Mongodb connected...');
  });

const foodSchema = new mongoose.Schema({
  title: String,
  img_url: String,
  price: Number,
});
const FoodItem = mongoose.model('FoodItem', foodSchema);

app.get('/getFoodItems', async (req, res) => {
  const foodItems = await FoodItem.find({});

  res.send(foodItems);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
