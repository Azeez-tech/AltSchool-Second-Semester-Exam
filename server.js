const app = require('./app');
require('dotenv').config()
const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});