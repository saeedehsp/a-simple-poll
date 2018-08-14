var mongoose = require('mongoose');

mongoose.connect('mongodb://test1:abcd123@fdq1.ni8.ir:27017/test1');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected")
});

var Schema = mongoose.Schema;
var choiceSchema = new Schema({choice: String})
var pollSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    choices:[{ }],
    remainingTime: Date
});

var Poll = mongoose.model('Poll', pollSchema);

var resultSchema = new Schema({
    pollID: {
            type: Schema.Types.ObjectId,
            ref: 'Poll'
            },
    choiceID: Schema.Types.ObjectId,
});

var Result = mongoose.model('Result', resultSchema);

module.exports = {
    Poll,
    Result
};