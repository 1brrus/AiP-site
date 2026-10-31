var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partSchema = new Schema({
    title: String,
    short: {
        type: String,
        unique: true,
        required: true
    },
    picture: String,
    desc: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports.Part = mongoose.model("Part", partSchema);
