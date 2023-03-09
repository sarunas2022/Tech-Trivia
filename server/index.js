const express = require('express');
require('dotenv').config();
const cors = require('cors');

const questionsRouter = require('./src/routes/questions');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', questionsRouter);

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
