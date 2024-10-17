const express = require('express');
require('dotenv').config();
const userRoutes = require('./Routes/userRoute');
const app = express();

app.use(express.json());

// Use routes
app.use('/', userRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`SERVER RUNNING PORT: ${PORT}`));
