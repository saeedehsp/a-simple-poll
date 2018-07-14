<template>
    <div id="main">
    
    
        <div class="container">
            <div class="toppane"> </div>
            <div>
    
    
    
                <p>welcome to our website </p>
    
            
    
                <p>you can add a poll with maximum 4 choices</p>
    
    
    
            </div>
    
            <div class="leftpane">
    
                <nuxt-link to="/create-pol">Create Poll</nuxt-link>
                <p>you are able to create your own poll</p>
                <p>and ask others to vote on it</p>
            </div>
    
            <div class="middlepane">
                <nuxt-link to="/vote">Vote</nuxt-link>
                <p>here you can vote to multiple</p>
                <p>questions and later you can check results</p>
            
            </div>
    
            <div class="rightpane">
                <nuxt-link to="/about-us">About Us</nuxt-link>
                <p></p>
            </div>
        </div>
    
    
    </div>
</template>

<script>    
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    
     body {
        font: 15px/1.3 'Open Sans', 'sans-serif';
        background-color: #ebffd5;
        text-align: center; 
    }
    
    body {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    
    .container {
        width: 100%;
        height: 100%;
    }
    
    .leftpane {
        width: 25%;
        height: 66%;
        float: left;
        /*border-collapse: collapse;*/
        font: 15px/1.3 'Open Sans', 'sans-serif';
        background-color: #ebffd5;
        text-align: center;
    }
    
    .middlepane {
        width: 50%;
        height: 66%;
        float: left;
        border-collapse: collapse;
        font: 15px/1.3 'Open Sans', 'sans-serif';
        background-color: #ebffd5;
        text-align: center;
    }
    
    .rightpane {
        width: 25%;
        height: 66%;
        position: relative;
        float: right;
        border-collapse: collapse;
        font: 15px/1.3 'Open Sans', 'sans-serif';
        background-color: #ebffd5;
        text-align: center;
    }
    
    .toppane {
        width: 100%;
        height: 400px;
        border-collapse: collapse;
        font: 15px/1.3 'Open Sans', 'sans-serif';
        background-color: #ebffd5;
        text-align: center;
    }
    
    p {
        font-size: 22px;
        font-weight: bold;
        color: #0f00e6;
    }
</style>
