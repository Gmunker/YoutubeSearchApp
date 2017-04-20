const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`)
  } else {
    next();
  }
});

  app.use(express.static(__dirname));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  
  app.listen(PORT, () => {
    let port = "";
    if (process.env.PORT) {
      port = JSON.stringify(process.env.PORT);
    } else {
      port = 3000;
    }
    console.log(`Express server is u on port ${PORT}`)
});
