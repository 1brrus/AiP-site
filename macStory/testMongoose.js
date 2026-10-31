const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Part = require('./models/part').Part;

var fragment = new Part({
    title: 'Основатель компании',
    short: 'Стив Джобс',
});
fragment.save();
