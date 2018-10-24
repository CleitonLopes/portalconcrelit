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
            <nuxt-link to="/orcamento" class="nav-link">Faça seu Orçamento</nuxt-link>
        </li>
        <li class="nav-item">
            <nuxt-link to="/anuncie" class="nav-link">Anuncios</nuxt-link>
        </li>
        <li class="nav-item">
            <nuxt-link to="/cadastre-sua-empresa" class="nav-link">Cadastre sua Concreteira</nuxt-link>
        </li>
        <li class="nav-item">
            <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
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

/* INPUT PESQUISA CEP */
.form-control-lg, .input-group-lg > .form-control, .input-group-lg > .input-group-prepend > .input-group-text, .input-group-lg > .input-group-append > .input-group-text, .input-group-lg > .input-group-prepend > .btn, .input-group-lg > .input-group-append > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.50rem;
    line-height: 2;
}

select.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]), .input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]), .input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]), .input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]), .input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]) {
    height: calc(2.875rem + 18px);
}

.navbar {
  padding: 1rem 4rem;
}

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


