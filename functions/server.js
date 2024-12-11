const cors = require('cors');
const express = require('express');
const { warn } = require('firebase-functions/logger');
const { Firestore } = require('firebase-admin/firestore');

const app = express();

app.use(cors({ origin: true }));
app.set('trust proxy', true);

app.get('/', async (req, res) => {
  warn({ 'Request received': req });

  const firestore = new Firestore();
  const ref = firestore.doc(`req/${Date.now()}`);

  const remoteIp = req.headers['x-forwarded-for'] || 'unknown';

  const browser = req.query.browser ? req.query.browser : 'unknown';

  await ref.set({
    ip: remoteIp,
    browser,
  });

  res.send();
});

module.exports = app;
