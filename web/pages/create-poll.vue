<template>
  <body>
    <div id="poll1">
      <fieldset class="field">
        {{log}}
        <div id="mypoll">
          <span> My Poll </span>
        </div>
        <div id="quest">
          <input v-model="poll.question" placeholder="question">
        </div>
        <div id="choices">
          <div v-for="choice in (poll.choice)" :key="choice._id">
            <input v-model="choice.text" placeholder="your choice">
          </div>
        </div>

        <div id="addchoice">
          <button v-on:click="addchoice"> add choice</button>
  
        </div>
  
        <div id="deadline">
          <fieldset id="field2">
            <span>deadline is: {{ poll.remainingtime }}</span>
            <input v-model="poll.remainingtime" placeholder="days">
          </fieldset>
        </div>
  
        <div id="removepoll">
          <button v-on:click="addtodb()"> submit </button>
        </div>

         <div id="choseText">
            <fieldset id="field4">
               <div v-if="!validated">
                  <span>{{ pickedText }}</span>
               </div>
            </fieldset>
          </div>
  
      </fieldset>
    </div>
  </body>
</template>

<script>
  import axios from 'axios';
  const ObjectID = require('bson-objectid');
  
  export default {
    data: function() {
      return {
        log: "",
        picked: "",
        pickedText: "",
        clicked: 0,
        poll: {
          question: "",
          choice: [],
          remainingtime: ""
        }
      };
    },
  
    methods: {
      async addtodb() {
        this.pickedText = "your poll has been successfuly added"
        await axios.post('http://localhost:3001/sendpoll', {
          poll: this.poll
        })
      },
  
      removePoll: function() {
        this.log = this.question;
      },
  
      addchoice: function() {
        this.poll.choice.push({
          _id: ObjectID().str,
          text: ""
        })
      },
    }
  }
</script>


<style scoped>
  body {
    background-color: #003239;
  }
  
  #poll1 {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 10%;
  }
  
  .field {
    background-color: rgba(71, 133, 124, 0.6);
    border-radius: 10px;
    padding-bottom: 30px;
  }
  
  #deadline {
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
  #field4 {
        border-radius: 3%;
        border: none;
        background-color: blanchedalmond;
        color: rgb(62, 58, 66);
    }
  #mypoll {
    font-size: 200%;
    color: #240b0b;
    margin-top: 4%;
    margin-bottom: 1%;
  }
  
  #quest {
    text-align: center;
    margin-left: 3%;
  }
  
  #choices {
    text-align: center;
    margin-top: 1%;
    color: blueviolet;
  }
  
  #addchoice {
    text-align: center;
    margin-top: 1%;
    color: blueviolet;
  }
  
  #removepoll {
    margin-top: 1%;
    color: blueviolet;
  }
</style>
