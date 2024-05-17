const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false
}));
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
