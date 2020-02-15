<template>
  <body>
    <div id="poll1">
      <div class="field">
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
          <span>deadline is: {{ poll.remainingtime }}</span>
          <input v-model="poll.remainingtime" placeholder="days">
        </div>

        <div id="removepoll">
          <button v-on:click="addtodb()"> submit </button>
        </div>

        <div id="choseText">
          <div id="field2">
            <div v-if="!validated">
              <span>{{ pickedText }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </body>
</template>

<script>
  import axios from 'axios';
  const ObjectID = require('bson-objectid');

  export default {
    data: function () {
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

      removePoll: function () {
        this.log = this.question;
      },

      addchoice: function () {
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
    background-color: #c4dde0;
  }

  #poll1 {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 10%;
  }

  .field {
    background-color: #a6d5dc;
    border-radius: 10px;
    padding: 10px 0;
  }

  #deadline {
    border-radius: 3%;
    border: none;
    margin-left: 33%;
    margin-right: 30%;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  #deadline input {
    border: 1px solid #16a2b8;
    border-radius: 5px;
    padding: 5px;
  }

  #field2 {
    border-radius: 3%;
    border: none;
    background-color: blanchedalmond;
    color: rgb(62, 58, 66);
    margin: 15px 10px;
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

  #choices input {
    border: 1px solid #16a2b8;
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
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

  #quest input {
    width: 80%;
    border: 1px solid #16a2b8;
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
  }

  button {
    border: 1px solid #16a2b8;
    border-radius: 5px;
    padding: 5px;
    background-color: #16a2b8;
    color: white;
  }
</style>
