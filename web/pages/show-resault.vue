<template>
    <body>
        <div id="showReasult1">
            <fieldset class="field">
                {{log}}
                 <div id="selectedQuestion">
                    <span>Select your question:</span>
                    <br>
                    <select v-model="selected" v-on:change="showchoices(selected)" >
                        <option v-for="question in questions" :key="question._id" 
                        :value="question._id" >{{ question.question }}</option>
                    </select>
                    <br>
                    <span>Selected: <br> {{ selected ? questions[selected].question : '' }}</span>
                </div>

                <div id="getchoices">
                    <div id="choices">
                        <div v-for="choice in (choices)" :key="choice._id.choice">
                            <div v-for="choiced in ( questions[selected].choices)" :key="choiced._id">
                                <div v-if="choice._id.choice == choiced._id ">
                                    <label >{{ choiced.text }}</label>
                                    <b-progress :value="choice.count*100/total" show-value :striped="striped" class="w-25 mb-2"></b-progress>    
                                </div>
                            </div>       
                        </div> 
                    </div>
                </div>
            </fieldset>
        </div>
    </body>
</template>

<script>
import axios from 'axios';

    export default {
        data: function() {
            return {
                log: "",
                picked: "",
                question: "",
                message: "",
                remainingTime: "",    
                striped: true,
                clicked: 0,
                selected: '',
                choices:[],
                total:0,
                re:{}
            };
        },
    
        async asyncData() {
            // We can return a Promise instead of calling the callback
            let returnedQuestions = (await axios.get('http://localhost:3001/getgozine')).data;
            let questions = {};

            Array.prototype.forEach.call(returnedQuestions , item => {
                questions[item._id] = item;
            })

            return {
                questions
            }
           
        },
        methods: {
            addtodb: function() {
                this.log = this.question;
                this.log = this.choice;
            },
            submit: function() {
                this.log = this.question;
            },
            addbutton: function() {
                radiobutton();
            },
            async showchoices(selected){
                let answer={};
                answer = (await axios.get(`http://localhost:3001/getresult/${this.questions[this.selected]._id}`)).data;
                this.choices=answer.array;
                this.total=answer.total;
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
        background-color: #888292;
    }
    
    #showReasult1 {
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-top: 10%;
        border-width: 2%;
        border-color: #c0bcbc;
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
        background-color: #11020475;
        border-radius: 20%;
        border: #ecb603;
        border-width: 20px;
    }

    
    #remainingTime {
        border-radius: 3%;
        border: none;
        margin-left: 33%;
        margin-right: 30%;
        margin-top: 3%;
        margin-bottom: 2%;
        background-color: blanchedalmond;
        color: blueviolet;
    }
    
    #field2 {
        border-radius: 3%;
        border: none;
        background-color: blanchedalmond;
        color: blueviolet;
    }
    
    #myshowReasult {
        font-size: 200%;
        color: #240b0b;
        margin-top: 4%;
        margin-bottom: 1%;
        border: #ecb603;
        border-width: 20px;
    }
    
    #progressbar {
        size: 120%;
        visibility: visible;
    }
    
    .mb-2 {
         /* margin-top: 3%; */
        size: 120%;
        visibility: visible;
        margin-left: 38%;
        color: #ecb603
    }
    
    #quest {
        margin-top: 3%;
        text-align: center;
        margin-left: 3%;
    }
    
    #choices {
        text-align: center;
        margin-top: 1%;
        color: rgb(190, 172, 119);
        ;
    }
    
    #addchoice {
        text-align: center;
        margin-top: 1%;
        color: blueviolet;
    }
    
    #submit {
        margin-top: 1%;
        margin-bottom: 2%;
        color: blueviolet;
    }
    
    #picked {
        margin-top: 1%;
        color: rgb(0, 247, 255);
    }
    #selectedText {
        text-align: center;
        margin-top: 1%;
        color: rgb(159, 219, 103);
    }
</style>
