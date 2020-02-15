<template>
  <b-jumbotron fluid="">
    <template slot="header">
      Who are we
    </template>
    <hr class="my-4">
    <p>
      You can join our website and create your own or <br>
      you can just participate in voting .<br>
      Start from below
    </p>
    <br>
    <b-btn variant="primary" href="/create-poll">Create Poll</b-btn>
    <b-btn variant="success" href="/vote">Vote</b-btn>
  </b-jumbotron>

</template>
<script>
  export default {

  }
</script>
<style scoped>
  body {
    background-color: #c4dde0;
  }
</style>
