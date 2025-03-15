const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Love_m_365:LoVe365@cluster0.otamm.mongodb.net/NextStep?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB: ', err));

// Simple route
app.get('/', (req, res) => {
  res.send('Next Step Career Guidance API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
