const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app.js');

const port = process.env.PORT;
console.log(process.env.NODE_ENV);

const appListenCallback = () => {
  console.log(`\nApp running on port ${port}...`);
};
app.listen(port, appListenCallback);
