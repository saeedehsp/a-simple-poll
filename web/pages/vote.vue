<template>
    <body>
        <div id="vote1">
            <fieldset class="field">
    
                {{log}}
    
                <div id="selectedQuestion">
                    <span>Select your question:</span>
                    <br>
                    <select v-model="selected">
                                                        <option v-for="question in questions" :key="question._id" :value="question._id">{{ question.question }}</option>
                                                    </select>
                    <br>
                    <span>Selected: <br> {{ selected ? questions[selected].question : '' , validated = true  }}</span>
                </div>
    
                <div id="getchoices">
                    <div id="choices">
                        <form v-if="showForm" method="post" action="http://localhost:3001/sendvote" v-on:submit.prevent="selectedChoice">
                            <div v-for="choice in (selected ? questions[selected].choices : [])" :key="choice._id">
                                <input type="radio" name="choice" :value="choice._id" v-model="picked">
                                <label :for="choice">{{ choice.text }}</label>
                            </div>
                            <div id="submit">
                                <button v-on:click="submit"> submit </button>
                            </div>
                        </form>
                    </div>
                </div>
    
                <div id="remainingTime">
                    <fieldset id="field2">
                        <span>remainingTime is:{{ selected ? calculateRemainingTime() : "" }}</span>
                    </fieldset>
                </div>
    
                <div id="remainingTimePassed">
                    <fieldset id="field3">
                        <div v-if="remained<=0">
    
                            <span> deadline is passed</span>
                        </div>
                    </fieldset>
                </div>

                <div id="choseText">
                    <fieldset id="field4">
                        <div v-if="!validated">
                            <div v-if="!passed">
                                <span>{{ pickedText }}</span>
                            </div>
                        </div>
                    </fieldset>
                </div>
    
    
    
            </fieldset>
        </div>
    </body>
</template>

<script>
    import moment from 'moment';
    import axios from 'axios';
    
    export default {
    
        data() {
            return {
                passed: false,
                log: "",
                picked: "",
                pickedText: "",
                question: "",
                message: "",
                clicked: 0,
                selected: '',
                remained: 1,
                questions: [],
                showForm: true,
                validated: true
    
            };
        },
        async asyncData() {
            let returnedQuestions = (await axios.get('http://localhost:3001/getquestions')).data;
            let questions = {};
    
            returnedQuestions.forEach(item => {
                questions[item._id] = item;
            })
    
    
            return {
                questions
            }
        },
    
    
        created() {
            console.log("vote created");
        },
    
        methods: {
    
            submit: function() {
                this.log = this.question;
            },
            addbutton() {
                radiobutton();
            },
    
    
    
            async selectedChoice() {
                    
                this.validated = false;
                this.pickedText = "your vote has been successfuly added"
                console.log(`save ${this.picked} for ${this.questions[this.selected].question}`);
                await axios.post('http://localhost:3001/sendvote', {
                    choice: this.picked,
                    question: this.selected
                });
    
    
            },
    
            calculateRemainingTime() {
                var deadline = moment(this.questions[this.selected].remainingTime)
                var now = moment()
                this.remained = deadline.diff(now, 'days')
    
                if (this.remained <= 0) {
    
                    delete this.questions[this.selected];
                    this.selected = '';
    
                    
            }
                return this.remained
            },
    
    
    
            addFind: function() {
                this.finds.push({
                    value: ''
                });
            }
        }
    }
</script>


<style scoped>
    body {
        background-color: #003239;
    }
    
    #vote1 {
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-top: 10%;
        border-width: 2%;
        border-color: #240b0b;
    }
    
    #selectedQuestion {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-top: 10%;
        color: rgb(0, 247, 255);
        text-shadow: black;
        font-size: 1.5em;
    }
    
    .field {
        background-color: rgba(71, 133, 124, 0.6);
        border-radius: 10px;
        padding-bottom: 30px;
    }
    
    #remainingTime {
        border-radius: 3%;
        border: none;
        margin-left: 33%;
        margin-right: 30%;
        margin-top: 2%;
        margin-bottom: 2%;
        background-color: blanchedalmond;
        color: blueviolet;
    }
    
    #remainingTimePassed {
        border-radius: 3%;
        border: none;
        margin-left: 33%;
        margin-right: 30%;
        margin-bottom: 2%;
        background-color: blanchedalmond;
        color: blueviolet;
    }
    
    #field2 {
        border-radius: 3%;
        border: none;
        background-color: blanchedalmond;
        color: rgb(62, 58, 66);
    }
    
    #field3 {
        border-radius: 3%;
        border: none;
        background-color: blanchedalmond;
        color: rgb(62, 58, 66);
    }
    
    #field4 {
        border-radius: 3%;
        border: none;
        background-color: blanchedalmond;
        color: rgb(62, 58, 66);
    }
    
    #myvote {
        font-size: 200%;
        color: #240b0b;
        margin-top: 4%;
        margin-bottom: 1%;
        border: #ecb603;
        border-width: 20px;
    }
    
    #quest {
        margin-top: 3%;
        text-align: center;
        margin-left: 3%;
    }
    
    #choices {
        text-align: center;
        margin-top: 1%;
        margin-left: 4%;
        color: rgb(25, 37, 37);
    }
    
    #submit {
        text-align: center;
        margin-top: 1%;
        color: blueviolet;
    }
    
    #getchoices {
        margin-top: 1%;
        color: blueviolet;
    }
    
    #picked {
        margin-top: 1%;
        color: rgb(0, 247, 255);
    }
</style>
