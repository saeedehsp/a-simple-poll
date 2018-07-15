<template>
  <body>
    <div id="poll1">
      <fieldset class="field">
  
  
  
        {{log}}
        <div id="mypoll">
          <span> My Poll </span>
        </div>
  
       
        <div id="quest">
          <input v-model="question" placeholder="question">
        </div>
  <div id="choices">
      <div id="one">
        <input type="radio" id="one" value="one" v-model="picked">
         <input v-model="choice[0]" placeholder="your choice">

      </div>
      <div id="two">
        <input type="radio" id="two" value="Two" v-model="picked">
        <input v-model="choice[1]" placeholder="your choice">
      </div>
      
      <div v-if="clicked >0">
           <div id="three">
            <input type="radio" id="three" value="three" v-model="picked">
            <input v-model="choice[2]" placeholder="your choice">
         </div>  
      </div>

       <div v-if="clicked >1">
           <div id="four">
            <input type="radio" id="four" value="four" v-model="picked">
            <input v-model="choice[3]" placeholder="your choice">
         </div>  
      </div>
    </div>

  
          <!-- <span>Picked: {{ picked }}</span>
   -->
  
           <div id="addchoice">
              <button v-on:click="clicked++"> add choice</button>
           </div>
  
          <div id="deadline">
            <fieldset id="field2">
              <span>deadline is: {{ message }}</span>
              <input v-model="message" placeholder="days">
            </fieldset>
          </div>
  
          <div id="removepoll">
            <button v-on:click="addtodb"> submit </button>
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
        choice:[] ,
        clicked: 0,

      };
    },
    methods: {
      addtodb: function() {
        this.log = this.question;
        this.log = this.choice;
      },
      removePoll: function() {
        this.log = this.question;
      },
      addbutton : function(){
        radiobutton();
      }
    }
  }

</script>


<style scoped>
  body {
    background-color: #cdb7f0;
  }
  
  #poll1 {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 10%;
  }
  
  .field {
    background-color: #85475175;
    border-radius: 20%;
    border: none;
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
