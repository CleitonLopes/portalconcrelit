<template>
    <div class="container">
        <div class="row justify-content-md-center text-center mt-200">
            <div class="col col-lg-4">
                <form class="form-group">

                    <router-link to="/" class="navbar-brand">
                        <img src="~assets/images/logo-header.png" alt="logo concrelit header" class="d-inline-block align-top">
                    </router-link>

                    <h1 class="h3 mb-3 font-weight-normal">Identifique-se!</h1>
                    <div class="form-group">
                        <label for="inputEmail" class="sr-only">Email</label>
                        <input type="email" v-model="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus="">
                    </div>

                    <div class="form-group">
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" v-model="password" id="inputPassword"
                        class="form-control" placeholder="Password" @keyup.enter="authenticate()" required>
                    </div>

                    <div class="checkbox mb-3">
                        <label>
                        <input type="checkbox" v-model='chk_forgot_password' value="remember-me">
                            Esqueci minha senha!
                        </label>
                    </div>

                    <div v-show="chk_forgot_password" class="form-group">
                    <label for="inputForgotEmail"><b>Infome seu email cadastrado!</b></label>
                        <input type="email" v-model="email_forgot" id="forgot_email" class="form-control mt-2" placeholder="Email de Cadastro">
                        <small id="emailHelp" class="form-text text-muted">
                            Atenção, ao tentar recuperar sua senha, informe o email cadastrado em nosso portal que enviaremos para você em
                            seu email, uma nova senha, assim podendo troca-la a qualquer momento em seu painel!
                        </small>
                    </div>

                    <button v-show="!chk_forgot_password" class="btn btn-lg btn-primary btn-block" type="button" @click="authenticate()">
                        Entrar
                    </button>

                    <img v-show="loader" id="loader" src="~assets/images/loader.gif" alt="loader pagina">

                    <button v-show="chk_forgot_password" class="btn btn-lg btn-primary btn-block" type="button" @click="forgotPassword()">
                        Recuper Senha!
                    </button>

                    <p class="mt-2" v-show="(error !== null || error !== '')" style="color: #ff7675; font-size: 14px;">
                        {{ error }}
                    </p>

                    <p class="mt-5 mb-3 text-muted">©2018</p>

                </form>
            </div>
        </div>

        <!-- Modal Plano Expirado -->
        <div class="modal fade" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal-login">{{ modal.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {{ modal.message }}

                        <br>
                        <small><b> {{ modal.info }} </b></small>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="setStorage(responseLogin)">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {

    name: 'CLogin',

    data() {
        return {
            email: null,
            password: null,
            chk_forgot_password: false,
            email_forgot: null,
            loader: false,
            error: null,
            countError: 0,
            responseLogin: null,
            modal: {
                title: null,
                message: null,
                info: null
            },
        }
    },

    methods: {

        authenticate() {

            this.loader = true;
            this.error = null;

            let uri = this.$store.getters.getUri
            let routes = this.$store.getters.getRoutes

            if (this.countError > 2) {
                this.chk_forgot_password = true
                this.countError = 0;
            }

            if (this.email !== null && this.password !== null) {

                let data = { 'email': this.email, 'password': this.password }

                axios.post(`${uri}/${routes.accessToken}`, data)

                .then(response => {

                    let data = response.data

                    if (data.success === true) {

                        if (data.error === 'SUBSCRIPTION_EXPIRED') {

                            this.modal.title = 'Atenção! Seu Plano Expirou!'
                            this.modal.message = 'Renove seu plano e volte a aparecer nas buscas para atrair clientes.'
                            this.modal.info = 'Se você já efetuou o pagamento, essa mensagem será liberada assim que o pagamento ' +
                            'for debitado.'

                            $('#modal-login').modal()
                            this.responseLogin = data
                            return false

                        } else {

                            this.setStorage(data)
                        }

                    } else

                        if (data.error === 'PAYMENT_PENDING') {

                            this.error = 'Olá você ainda não possui acesso ao painel, é possivel ' +
                            'que seu pagamento ainda não tenha sido debitado :('

                        } else {

                            this.countError++
                            this.error = 'Usuário e/ou senha inválidos!'
                        }

                })

                .catch(error => {

                    this.countError++;
                    this.error = 'Usuário e/ou senha inválidos!';

                })

                this.loader = false
                return;
            }

            this.loader = false;
            alert('Verifique se os campos email/senha estão preenchidos corretamente!');


        },

        setStorage(data) {

            localStorage.setItem('user', JSON.stringify(data));
            this.$router.push('/areacliente')

        },

        forgotPassword() {

            if (this.email_forgot === null || this.email_forgot === '') {
                this.error = 'Informe seu email cadastrado para gerarmos uma nova senha!'
            }

            this.countError = 0;
            this.error = null;
            this.loader = true;

            let uri = this.$store.getters.getUri
            let routes = this.$store.getters.getRoutes

            this.$http.post(`${uri}/${routes.forgotPassword}`, { 'email': this.email_forgot })

            .then(response => {

                let data = response.data

                if (data.success == true) {

                    this.modal.title    = 'Atenção!'
                    this.modal.message  = data.data
                    this.modal.info     = 'Verifique tambêm a sua caixa de spam!'
                    this.loader = false;
                    $('#modal-login').modal()
                }
            })

            .catch(error => {

                this.loader = false
                let data = error.body

                this.modal.title    = 'Atenção!'
                this.modal.message  = data.data
                this.loader = false;
                $('#modal-login').modal()

            })
        }
    }

}
</script>

<style>

</style>

