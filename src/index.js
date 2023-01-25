const app = require('./app');
const Loaders = require('./loaders');


Loaders.start();

app.listen(3000, () => console.log('Server is running'));