<script>
export default {

    name: 'CHeader',
    data () {
        return {

        }
    }
}
</script>


<template>

    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">

        <nuxt-link to="/" class="navbar-brand">
            <img src="~assets/images/logo-header.png" alt="" class="d-inline-block align-top">
        </nuxt-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <nuxt-link to="/" class="nav-link">Inicio <span class="sr-only">(current)</span></nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/sobre" class="nav-link">Sobre</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/anuncie" class="nav-link">Anuncios</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/cadastre-sua-empresa" class="nav-link">Cadastre sua Concreteira</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/noticias" class="nav-link">Noticias</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/contato" class="nav-link">Contato</nuxt-link>
            </li>
            </ul>

            <nuxt-link to="/login" class="btn btn-primary my-2 my-sm-0">Entrar</nuxt-link>

        </div>
    </nav>

</template>

<style scoped>

/*.navbar {
  padding: 1rem 4rem;
}*/

.navbar-nav{
  margin-right: 50px;
}

.navbar-nav li {
  margin-left: 8px;
  margin-right: 8px;

}

@media screen and (max-width: 768px){
  .navbar-nav li {
    margin-left: 0;
    margin-right: 0;
  }
}

</style>


