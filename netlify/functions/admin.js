const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const { createClient } = require('@supabase/supabase-js');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const jwtSecret = process.env.JWT_SECRET;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/admin', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, jwtSecret);

  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('*, roles(name)')
    .eq('id', decoded.id)
    .single();

  if (userError) {
    return res.status(400).json({ error: userError.message });
  }

  if (userData.roles.name !== 'admin') {
    return res.status(403).json({ error: 'Accès refusé' });
  }

  res.status(200).json({ message: 'Bienvenue sur la page d\'administration', user: userData });
});

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  return await handler(event, context);
};
