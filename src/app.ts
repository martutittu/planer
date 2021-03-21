import express from 'express';
import { connectDB } from './db/db';
import colors = require('colors.ts');
colors.enable();

const app = express()
const db = connectDB();
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`.blue.underline)
})

console.log(`Environment: ${process.env.NODE_ENV}`.green);