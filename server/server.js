const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(_dirname, '../public')));
app.use('/bundles', express.static(path.join(_dirname, '.../bundles')));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
