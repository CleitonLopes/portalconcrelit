<template>

    <div class="footer">
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

        <footer class="mt-100">
            <div class="container-fluid">
                <div class="container">
                    <div class="row">

                        <router-link  to="/" class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 align-self-center mt-4">
                            <img src="~assets/images/logo-rodape.png" alt="logo concrelit rodapé" class="d-inline-block align-top">
                        </router-link>

                        <div class="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 mt-4">
                            <p>A Empresa</p>
                            <ul>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Privacidade</a></li>
                                <li><a href="#">Tipos de Concreto</a></li>
                                <li><a href="#">Cadastre-se</a></li>
                                <li><a href="#">Como funciona?</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </div>

                        <div class="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 mt-4">
                            <p>Pagamento</p>
                            <div class="d-inline-block">
                                <img src="~assets/images/mastercard.png" alt="Cartão de Crédito Mastercard" class="cards">
                                <img src="~assets/images/amex.png" alt="Cartão de Crédito Amex" class="cards">
                                <img src="~assets/images/visa.png" alt="Cartão de Crédito Visa" class="cards">
                                <img src="~assets/images/hipercard.png" alt="Cartão de Crédito Hipercard" class="cards">
                                <img src="~assets/images/diners.png" alt="Cartão de Crédito Dinners" class="cards">
                                <img src="~assets/images/elo.png" alt="Cartão de Crédito Elo" class="cards">
                                <img src="~assets/images/boleto.png" alt="Metodo de Pagamento Boleto" class="cards">
                            </div>
                        </div>

                        <div class="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 mt-4">
                            <p>Segurança</p>
                            <a href=""><img src="~assets/images/certificate.jpeg" alt="Cartão de Crédito Mastercard" class="certificate"></li></a>
                            <p class="mt-4">Termos</p>
                            <a href="" class="terms-of-use">Termos de uso</a>
                        </div>

                        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-4">
                            <p class="cor-footer-email"><b>contato@concretousinado.com.br</b></p>
                            <p>(11) 99999 9999</p>
                            <p class="mt-4">Fique conectado!</p>
                            <a href=""><img src="~assets/images/facebook.png" alt="Redes Sociais Facebook" class="cards"></a>
                            <a href=""><img src="~assets/images/linkedin.png" alt="Redes Sociais Linkedin" class="cards"></a>
                            <a href=""><img src="~assets/images/googleplus.png" alt="Redes Sociais Google Plus" class="cards"></a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

import axios from 'axios'
import CFooter from '~/components/Footer.vue'

export default {

    name: 'CLogin',

    components: {
        CFooter
    },

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

<style scoped>

footer {
  /*position: absolute;*/
  clear: both;
  width: 100%;
  padding: 50px 0 50px 0;
  background-color: #3d3d3d;
  bottom: 0px;
}

footer p {
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
}

footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

footer ul li a {
  color: #FFF;
  opacity: 0.8;
  font-size: 16px;
}

footer a:link, a:visited, a:active{
  text-decoration: none;
}

footer a:hover {
 opacity: 1;
 color: #FFF;
}

.cor-footer-email {
  color: #ff6501;
  font-size: 16px;
}

.cards {
  margin: 10px 10px 0 0;
}

.certificate {
  width: 110px;
}

.terms-of-use {
  color: #FFF;
  opacity: 0.8;
}


.content {overflow:hidden;}
.aside {width:200px;}
.fleft {float:left;}
.fright {float:right;}

</style>

