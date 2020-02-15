const express = require('express');
const cors = require('cors')
const app = module.exports = express();
const bodyparser = require('body-parser');
var mongoose = require('mongoose');

const {
    Poll,
    Result
} = require('./DB');

app.use(cors())

app.listen(3001, function () {
    console.log('listening on 3001')
})

app.use(bodyparser.json());

app.get('/getchoice', function (req, res) {
    Poll.find().lean().exec(function (err, docs) {
        return res.end(JSON.stringify(docs));
    });
})

app.post('/sendpoll', async function (req, res) {
    var date = new Date()
    date.setDate(date.getDate() + parseInt(req.body.poll.remainingtime, 10))
    var newPoll = await new Poll({
        question: req.body.poll.question,
        choices : req.body.poll.choice,
        remainingTime: date

    });
    newPoll.save(function (error) {
        if (error)
            console.log(error);
    });
    return res.end("ok")
});

app.get('/getquestions', function (req, res) {

    Poll.find().lean().exec(function (err, docs) {
        return res.send(JSON.stringify(docs));
    });
});

app.get('/getgozine', function (req, res) {

    Poll.find({},'_id question choices' , function (err, docs) {
        return res.end(JSON.stringify(docs))
    });
});

app.get('/getresult/:id',async function (req, res) {
    await Result.aggregate([
        {
            $group: {
                _id: { choice: "$choiceID" , poll :"$pollID"},
                count: { $sum: 1 }
            }
         }

    ],
        function (err, docs) {
            let array={};
            let total=0;
            var j=0;
            for (var i=0; i < docs.length; i++) {
                if (docs[i]._id.poll == req.params.id) {
                    array[j++]= docs[i];
                    total += docs[i].count;
                }
            }

            if (err) console.log(err);
               return res.send({array,total});
        }
       );
});

app.post('/sendvote',async function(req, res) {

    Poll.findById(req.body.question).lean().exec(async (err, quest) => {
        isSafe = false

        if (quest){
            quest.choices.forEach(choice => {
                if(req.body.choice == choice._id){
                  isSafe = true
                }
            });
        }

        if(isSafe){
            var newVote = await new Result({
                pollID: req.body.question,
                choiceID: req.body.choice
            });
            newVote.save(function (error) {
                if (error)
                    console.log(error);
            });
        }
    })
});
