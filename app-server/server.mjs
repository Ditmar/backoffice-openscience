import express from 'express';
import { handler } from '../dist/server/entry.mjs';
import fs from 'fs';
import path from 'path';

if (process.env.ENV === 'development') {
  require('dotenv').config();
}
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


app.use(handler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});