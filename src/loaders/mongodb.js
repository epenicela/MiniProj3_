const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://epenicela:ep123456@cluster0.n1kb5kv.mongodb.net/test');
}
mongoose.set('strictQuery', true);

module.exports = startDB;