<template>
    <head>
    <meta charset="UTF-8">
    <title>Login screen</title>
</head>
<table id="reg_table">
    <tr>
        <td style="vertical-align: top">
            <h1>Быков Александр P3211</h1>
            <h2>Лабораторная работа №4</h2>
            Вход в аккаунт <br>
            <p style="color:red">
                {{ errorMsg.errorMessage }}
            </p>
            <form @submit.prevent="submit" class="form-group">
              <div class="row justify-content-center">
                <b>Username:</b>
                <input v-model="user.username" class="login form-control" type="text" name="username">
              </div>
              <div class="row justify-content-center">
                <b>Password:</b>
                <input v-model="user.password" class="login form-control" type="password" name="password">
              </div>
                <input id="register" type="submit" value="Sign in" class="btn btn-outline-primary"/>
            </form>

            <router-link to="registration" class="btn btn-outline-secondary">Registration</router-link>
        </td>
    </tr>
</table>ls
</template>

<script>
import { reactive} from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router';
import VueCookies from 'vue-cookies'

export default {
    name: "VueLogin",
    setup() {
    const user = reactive({
        username: '',
        password: ''
    })
    const errorMsg = reactive({
        errorMessage: null
    })

    const router = useRouter();

    const submit = async () => {
        errorMsg.errorMessage = null;

        await axios.post("/api/auth/login", user).catch(function (error) {
            errorMsg.errorMessage = error.response.data;
            return;
        }).then(function (token) {
            VueCookies.config('Session','','',true)
            VueCookies.set('jwt', token.data)
        })
        if (errorMsg.errorMessage == null) {
            await router.push('index');
        }
    }

    return {
        user,
        errorMsg,
        submit
    }

  }
}
</script>

<style>
        body {
            background-color: white;
        }

        #reg_table {
            width: 70%;
            height: 60%;
            margin: auto;
            text-align: center;
        }
        .login {
            margin-bottom: 1%;
            width: 10%
        }
        h1, h2 {
            font-family: sans-serif;
            color: black;
            font-size: 25px;
            text-align: center;
            vertical-align: text-top;
        }

        input[type=text]:focus {
            border: 3px solid #555;
        }

</style>