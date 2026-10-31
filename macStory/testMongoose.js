const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ short: String });

schema.methods.success = function () {
    console.log(this.short + ' добавлен в базу');
}

const Part = mongoose.model('Part', schema);


const fragment = new Part({ short: 'Стив Джобс' });
fragment.save().then(() => fragment.success());
