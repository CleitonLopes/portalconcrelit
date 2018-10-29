<template>
    <footer>
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
</template>

<style scoped>

footer {
/*  position: absolute;*/
  width: 100%;
  padding: 50px 0 50px 0;
  background-color: #3d3d3d;
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
</style>

