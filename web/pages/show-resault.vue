<template>
    <body>
        <div id="showReasult1">
            <fieldset class="field">
    
                {{log}}
    
                <div id="selectedQuestion">
                    <span>Select your question:</span>
                    <br>
                    <select v-model="selected">
                        <option v-for="question in questions" :key="question.id">{{ question.question }}</option>
                    </select>
                    <br>
                    <span>Selected: <br> {{ selected }}</span>
                </div>
    
    
    
                <div id="choices">
                    <div v-for="choice in choices" :key="choice.id">
                        <input type="radio" :id="choice.id" name="choice" :value="choice.id" v-model="picked">
                        <label :for="choice.id">{{ choice.choice }}</label>
                          <b-progress :value="45" class="w-25 mb-2"></b-progress>

                    </div>
                </div>
    
    
                <!-- <div id="progressbar">
                    <b-progress :value="45" class="w-25 mb-2"></b-progress>
                </div> -->
    
                <div id="picked">
                    <span>Picked: {{ picked }}</span>
                </div>
    
    
                <div id="remainingTime">
                    <fieldset id="field2">
                        <span>remainingTime is: {{ message }}</span>
    
    
                    </fieldset>
                </div>
    
                <div id="submit">
                    <button v-on:click="submit"> submit </button>
                </div>
    
    
    
    
    
            </fieldset>
        </div>
    </body>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                log: "",
                picked: "",
                question: "",
                message: "",
    
                striped: true,
                choices: [{
                        id: "one",
                        choice: "choice one"
                    },
                    {
                        id: "two",
                        choice: "choice two"
                    },
                    {
                        id: "three",
                        choice: "choice three"
                    },
    
                ],
                clicked: 0,
                selected: '',
    
                questions: [{
                        id: "one",
                        question: "question one"
                    },
                    {
                        id: "two",
                        question: "question two"
                    },
                    {
                        id: "three",
                        question: "question three"
                    },
    
                ],
    
            };
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
        margin-top: 2%;
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
        margin-left: 40%;
        
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
</style>
