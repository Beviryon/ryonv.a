const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const jwtSecret = process.env.JWT_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;

app.post('/refresh-token', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ error: 'Token de rafraîchissement manquant' });
  }

  jwt.verify(token, jwtRefreshSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token de rafraîchissement expiré ou invalide' });
    }

    const newToken = jwt.sign({ id: decoded.id }, jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ token: newToken });
  });
});

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  return await handler(event, context);
};
