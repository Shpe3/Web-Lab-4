<template>
    <div id="pageNotFound">
        <div class="mainbox">
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
        <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
            <p>Let's go <router-link to="login">login page</router-link>
    and try from there.</p></div>
        </div>
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet">
</template>

<style scoped>
    #pageNotFound {
    background-color: white;
    }

    .mainbox {
    background-color: white;
    margin: auto;
    height: 600px;
    width: 600px;
    position: relative;
    }

    .err {
        color: #ffffff;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 11rem;
        position:absolute;
        left: 20%;
        top: 8%;
    }

    .far {
    position: absolute;
    font-size: 8.5rem;
    left: 42%;
    top: 15%;
    color: #ffffff;
    }

    .err2 {
        color: #ffffff;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 11rem;
        position:absolute;
        left: 68%;
        top: 8%;
    }

    .msg {
        text-align: center;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 1.6rem;
        position:absolute;
        left: 16%;
        top: 45%;
        width: 75%;
    }
</style>

<script>
  export default {
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/4b9ba14b0f.js')
      document.head.appendChild(recaptchaScript)
    },

  }
</script>