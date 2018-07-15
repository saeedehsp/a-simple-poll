<template>
    <div id="main">

        <b-navbar toggleable="md" type="dark" variant="info" sticky="TRUE">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">Polling</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="create-poll">Create Poll</b-nav-item>
                    <b-nav-item href="vote">Vote</b-nav-item>
                    <b-nav-item href="show-result">Results</b-nav-item>
                </b-navbar-nav>

    <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="homepage">HomePage</b-nav-item>
                <b-nav-item href="about-us">AboutUs</b-nav-item>
            </b-navbar-nav>

       </b-collapse>
    </b-navbar>

        <b-container style="margin-left:auto;margin-right:auto;width:80%;height:30%;">
        <div>
            <b-card text-variant="" title="Polling Website" sub-title=""
               img-src=https://s22.postimg.cc/akubuey01/business-poll-survey2-2401.jpg
                img-alt="Card image" img-top style="width:60%; margin-left:auto;margin-right:auto;">
                <br>
                <p class="card-text ">welcome to our website</p>
                <br>
                <p class="card-text ">
                    you can add a poll with maximum 4 choices in our website.
                </p>
            </b-card>
        </div>
        <br>
        <div>
            <b-card-group deck >
               <b-card title="Create Your Poll">
                   <br>
                   <p class="card-text">you are able to create your own poll and ask others to vote on it.</p>
                   <br>
                   <b-button href="/index" variant="primary">Start</b-button>
                </b-card>
                <b-card title="Vote">
                    <br>
                    <p class="card-text">here you can vote to multiplequestions .</p>
                    <br>
                    <b-button href="/vote" variant="primary">let's vote</b-button>
                </b-card>
                <b-card title="Check The Results">
                    <br>
                    <p class="card-text">here you can check the results of polls .</p>
                    <br>
                    <b-button href="/show-result" variant="primary">Check out</b-button> 
                </b-card>
            </b-card-group>
        </div>
    </b-container>
    </div>
</template>

<script>
    
</script>

<style scoped>
    
    
    
    body {
    
        font: 15px/1.3 'Open Sans', 'sans-serif';
        background-color: #ebffd5;
        text-align: center;
    
    }
 
    body { 
        width: 100%;   
        height: 100%;  
    }

    p {
    
        font-size: 22px;
        font-weight: 500;
        float: center; 
        color: #034c6e;
    
    }

    
</style>
