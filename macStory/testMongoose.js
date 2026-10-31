const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');


const Part = mongoose.model('Part', { short: String });


const fragment = new Part({ short: 'Стив Джобс' });
fragment.save().then(() => console.log('Данные внесены'));
