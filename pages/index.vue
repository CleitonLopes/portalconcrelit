
<template>
  <div>
    <header class="main fadeIn">
      <div class="title">
        <div class="blur-overlay"></div>
        <div class="title-text">
          <h1>Precisa de Concreto Usinado para sua obra ?</h1>
          <h3>Receba orçamentos com rapidez.</h3>

          <!-- Busca por Cep -->
          <div v-show="searchSelected == 'zipCode'" class="row justify-content-center fadeIn">
            <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <div class="input-group input-group-lg">
                <input type="text" class="form-control" maxlength="10" required placeholder="Digite seu CEP"
                aria-label="DIGITE SEU CEP" aria-describedby="basic-addon3" v-model="prepareZipCode"
                @keyup.enter="redirectOrder">
                <div class="input-group-append input-group-append-lg">
                  <button class="btn btn-primary" @click="redirectOrder()" type="button" :disabled="!validatedButtonSearch">
                    <i class="fa fa-search fa-lg"></i>
                  </button>
                </div>
              </div>

              <div id="link-cep" class="change-search">
                <a class="cep" href="#" @click.stop.prevent="changeSearch('address')">
                  Não sabe o CEP? Digite seu endereço
                </a>
              </div>

            </div>
          </div>

          <!-- Busca por Rua -->
          <div v-show="searchSelected == 'address'" class="row justify-content-center fadeIn">
            <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">

              <div class="form-row">

                <div class="col-12 col-sm-4 col-md-4 col-lg-4 mt-40">
                  <select class="form-control form-control-lg" v-model="getCityByState" required>
                    <option v-for="item in jsonState" :value="item.ID">

                      {{ item.Sigla }}

                    </option>
                  </select>
                </div>

                <div class="col-12 col-sm-8 col-md-8 col-lg-8 mt-40">
                  <select class="form-control form-control-lg" v-model="getSelectCity" required>
                    <option v-for="item in jsonCities" :value="item.Nome">

                      {{ item.Nome }}

                    </option>
                  </select>
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                  <input @keyup.enter="findByAddress()" type="text" class="form-control form-control-lg" v-model="dataAddress.street"
                  placeholder="Digite seu endereço" required />
                </div>

                <div class="col-12 col-sm-2 col-md-2 col-lg-2">
                  <button type="button" class="btn btn-secondary btn-lg btn-block" @click="changeSearch('zipCode')">Voltar</button>
                </div>

                <div class="col-12 col-sm-10 col-md-10 col-lg-10 mb-40">
                  <button type="button" class="btn btn-primary btn-lg btn-block"
                  @click="findByAddress()" :disabled="!validateAddress()">
                  Buscar
                </button>
              </div>
            </div>
            <!-- Fim Busca -->

            <!-- Bloco de Endereços encontrados -->
            <div v-if="responseDataAddress.length > 1" class="table-wrapper-scroll-y">
              <table class="table table-hover table-light">
                <thead class="table-secondary">
                  <tr>
                    <th scope="col">Logradouro</th>
                    <th scope="col">Bairro</th>
                    <th scope="col">Complemento</th>
                    <th scope="col">Cep</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in responseDataAddress">
                    <td scope="row">{{ item.logradouro}}</td>
                    <td>{{ item.bairro }}</td>
                    <td>{{ item.complemento }}</td>
                    <td>{{ item.cep }}</td>
                    <td><a href="#" @click.stop.prevent="selectAddress(item)">Selecionar</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- Fim Bloco endereços -->

          </div>
        </div>
      </div>
      </div>
    </header>

    <!-- Carrossel com Logos -->
    <div class="container-fluid mt-4" id="brands">
      <div id="logo" class="carousel slide" data-ride="carousel" data-interval="5000">
        <div class="carousel-inner row w-100 mx-auto" role="listbox">
          <div v-for="(brand, index) in brands" class="carousel-item col-md-3" :class="{ active: index == 0}">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a :href="brand.redirect" :title="brand.name"
                  class="thumb" target="_blank">
                  <img style="width:100px; height: 100px;" class="img-fluid mx-auto d-block"
                  :src="brand.path_image" :alt="brand.alt">
                </a>
              </div>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#logo" role="button" data-slide="prev">
          <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>
        </a>
        <a class="carousel-control-next text-faded" href="#logo" role="button" data-slide="next">
          <i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <!-- Fim Carrosel com Logos -->

    <!-- Como Funciona -->
    <section id="como-funciona" class="container como-funciona">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-xl-12">
          <h2 class="titulo">COMO FUNCIONA?</h2>
        </div>

        <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
          <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
          <div class="sub-titulo">Localização</div>
          <p>Insira o cep ou endereço de sua obra. Assim, iremos verificar as concreteiras mais próximas.</p>
          <p></p>
        </div>

        <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
          <i class="fa fa-pencil-square fa-3x" aria-hidden="true"></i>
          <div class="sub-titulo">Solicite</div>
          <p>Conte-nos qual tipo de concreto e resitência que você precisa e solicite orçamentos.</p>
        </div>

        <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
          <i class="fa fa-mouse-pointer fa-3x" aria-hidden="true"></i>
          <div class="sub-titulo">Escolha</div>
          <p>Receba e avalie e compare os orçamentos que melhor se adequem a sua necessidade.</p>
        </div>

        <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
          <i class="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
          <div class="sub-titulo">Compre</div>
          <p>Realize a compra e negocie direto com o fornecedor que você optou.</p>
        </div>
      </div>
    </section>
    <!-- Fim Bloco como funciona -->

    <!-- Depoimentos -->
    <section id="depoimentos" class="container-fluid depoimentos">
      <div class="container">
        <div v-if="loaderDeposition" class="row">
          <div class="col-12 text-center mt-4">
            <img id="loader" src="~assets/images/loader.gif" alt="loader pagina">
          </div>
        </div>


        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-xl-12">
            <h2 class="titulo">DEPOIMENTOS</h2>
          </div>
          <div v-for="(deposition, index) in depositions" class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div class="card text-white bg-primary mb-3 text-center box-card">
              <div class="card-header">
                <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                <span>{{ deposition.title }}</span>
              </div>
              <div class="card-body text-left">
                <div class="card-title">
                  <i class="fa fa-star fa-lg" aria-hidden="true"></i>
                  <i class="fa fa-star fa-lg" aria-hidden="true"></i>
                  <i class="fa fa-star fa-lg" aria-hidden="true"></i>
                  <i class="fa fa-star fa-lg" aria-hidden="true"></i>
                  <i class="fa fa-star fa-lg" aria-hidden="true"></i>
                </div>
                <p class="card-text">
                {{ deposition.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Fim Bloco Depoimentos -->

    <!-- Ultimos Posts -->
    <section id="blog" class="container">
      <no-ssr>
        <div v-if="loaderBlog" class="row">
          <div class="col-12 text-center mt-4">
            <img id="loader" src="~assets/images/loader.gif" alt="loader pagina">
          </div>
        </div>

        <div v-else class="row">

          <div class="col-12 col-sm-12 col-md-12 col-xl-12">
            <h2 class="titulo">BLOG</h2>
          </div>
          <div v-for="post in posts" class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
            <div class="card">
              <img class="card-img-top" src="~assets/images/concreto-blog.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text"
                  v-html="post.description.substr(0, 250).concat('...')">
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    Criado em {{ post.date }}
                  </small>
                </p>
                
                <router-link :to="{ name: 'post', params: { post }}" class="btn btn-primary">
                  Continuar
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </no-ssr>
    </section>
    <!-- Fim Bloco Posts -->

    <!-- Na Midia -->
    <section id="na-midia" class="container-fluid na-midia">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-xl-12">
            <h2 class="titulo">NA MIDIA</h2>
          </div>

          <div class="col-12 col-sm-12 col-lg-3 col-xl-3 text-center">
            <a href="https://exame.abril.com.br/negocios/dino/locacao-de-equipamentos-se-torna-uma-oportunidade-em-tempos-de-crise/" target="_blank">
              <img src="~assets/images/exame.png" alt="Exame - Concrelit na Midia" title="Exame - Concrelit na Midia" class="img-responsive">
            </a>
          </div>
          <div class="col-12 col-sm-12 col-lg-3 col-xl-3 text-center">
            <a href="http://www.infomoney.com.br//negocios/noticias-corporativas/noticia/7324898/locacao-equipamentos-torna-uma-oportunidade-tempos-crise" target="_blank">
              <img src="~assets/images/infomoney.png" alt="InfoMoney - Concrelit na Midia" title="InfoMoney - Concrelit na Midia" class="img-responsive">
            </a>
          </div>
          <div class="col-12 col-sm-12 col-lg-3 col-xl-3 text-center">
            <a href="https://www.terra.com.br/noticias/dino/locacao-de-equipamentos-se-torna-uma-oportunidade-em-tempos-de-crise,c553e374a0919a297db0aff78d6ed026ctmg9eap.html" target="_blank">
              <img src="~assets/images/terra.png" alt="Terra - Concrelit na Midia" title="Terra - Concrelit na Midia" class="img-responsive">
            </a>
          </div>

          <div class="col-12 col-sm-12 col-lg-3 col-xl-3 text-center">
            <a href="http://www.agenciaoglobo.com.br/dinonews/Default.aspx?idnot=41428&tit=Loca%C3%A7%C3%A3o+de+Equipamentos+se+torna+uma+Oportunidade+em+tempos+de+Crise" target="_blank"><img src="~assets/images/oglobo.png" alt="O Globo - Concrelit na Midia" title="O Globo - Concrelit na Midia" class="img-responsive"></a>
          </div>
        </div>
      </div>
    </section>
    <!-- Fim midia -->

  </div>

</template>


<script>

import axios from 'axios';

export default {

  name: 'CHome',

  data() {
    return {
      title: 'Home',
      zipCode: null,
      posts: null,
      depositions: null,
      searchSelected: "zipCode",
      stateSelected: 1000,
      dataAddress: {
        stateSelected: null,
        citySelected: "Selecione a cidade",
        street: null,
        number: "",
        zipCode: null
      },
      responseDataAddress: [],
      jsonState: [],
      jsonCities: [],
      brands: [],
      loaderBlog: false,
      loaderDeposition: false,
      loaderBrand: false,
      uri: null,
      router: null
    };
  },

  // head () {
  //   return {
  //     title: this.title,
  //     meta: [
       
  //       // { hid: 'description', name: 'google-site-verification', content: "qLHlnawy_EkPlETzJYROs-4d8U9ZVJN9HoCMP8XJbJ8" }
  //     ]
  //   }
  // },

  computed: {

    prepareZipCode: {

      get () {

        return this.zipCode;
      },

      set (value) {

        if (value !== null) {

          this.zipCode = value.replace(/\D/g,"")
          this.zipCode = this.zipCode.replace(/^(\d{2})(\d)/,"$1.$2")
          this.zipCode = this.zipCode.replace(/(\d{3})(\d)/,"$1-$2")

          return this.zipCode
        }
      }
    },

    validatedButtonSearch () {

      let validated = true

      if (this.zipCode === null || this.zipCode === undefined
        || this.zipCode === '') {
        validated = false
      }

      return validated

    },

    getCityByState: {

      get () {

        return this.stateSelected

      },

      set (value) {

        this.loadJsonCitiesByState(value)
        this.stateSelected = value
      }
    },

    getSelectCity: {

      get () {

        return this.dataAddress.citySelected

      },

      set (value) {

        this.dataAddress.citySelected = value
      }
    }
  },

  async asyncData({ app }){

    app.uri = app.store.getters.getUri
    app.router = app.store.getters.getRoutes

    return Promise.all([

      app.$axios.$get(`${app.uri}/${app.router.lastPost}`),
      app.$axios.$get(`${app.uri}/${app.router.lastDeposition}`),
      app.$axios.$get(`${app.uri}/${app.router.brand}`)

    ])
    .then(results => {
      return {
        posts: results[0],
        depositions: results[1],
        brands: results[2]
      }
    })
  },

  methods: {

    changeSearch (value) {

      this.searchSelected = value
    },

    redirectOrder () {

      let validated = false
      let event = null

      this.$store.dispatch('setZipCode', null)
      this.$store.dispatch('setDataAddress', null)

      if (this.searchSelected == 'zipCode') {

        if (validated = this.validateZipCode()) {

          event = 'setZipCode'

        } else {
          alert('Preencha os campos corretamente!')
          return false
        }

      } else {

        if (validated = this.validateAddress()) {

          event = 'setDataAddress'

        } else {
          alert('Preencha os campos corretamente!')
          return false
        }

      }

      this.$store.dispatch(event, validated)

      .then(() => {

        this.$router.push('pedido')

      })

    },

    validateZipCode () {

      let zipCode =  this.zipCode.replace(/\D/g,"")

      if (zipCode.length == 8) {

        return zipCode

      }

      return false
    },

    validateAddress () {

      let jsonState = this.jsonState

      if (this.dataAddress.stateSelected == 'Estado') {
        return false;
      }

      if (this.dataAddress.citySelected == 'Selecione a cidade') {
        return false;
      }

      if (this.dataAddress === null) {
        return false
      }

      if (this.dataAddress.citySelected === null) {
        return false
      }

      if (this.dataAddress.street === null) {
        return false;
      }

      for (let i = 0; i < jsonState.length; i++) {

        if (jsonState[i].ID == this.stateSelected) {

          this.dataAddress.stateSelected = jsonState[i].Sigla
        }
      }

      return this.dataAddress

    },

    loadJsonState() {

      fetch('/json/estados.json')

      .then(response => response.json())

      .then(data => {

        this.jsonState = data
        this.$store.dispatch('setJsonState', data)

      })

      .catch(error => {

        alert('Não foi possivel carregar os estados!')

      })

    },

    loadJsonCitiesByState(stateID) {

      this.jsonCities = []
      let filtered = []

      fetch('/json/cidades.json')
      .then(response => response.json())
      .then(data => {

        let i = 0;

          data.filter(() => {

            if (data[i].Estado == stateID) {

              this.jsonCities.push(data[i])

            }

            i++

          })

          this.$store.dispatch('setJsonCities', this.jsonCities)

      })

      .catch(error => {

        alert('Não foi possivel carregas as cidades!')
        
      })

    },

    findByAddress() {

      this.responseDataAddress = []

      filter = `${this.dataAddress.stateSelected}/${this.dataAddress.citySelected}/${this.dataAddress.street}/${this.dataAddress.number}`

      this.$http.get(`https://viacep.com.br/ws/${filter}/json/`)
      .then(response => {

        if (!response.body.erro) {

          if (response.body.length > 0) {

            if (response.body.length > 1) {

              this.responseDataAddress = response.body

            } else if(response.body[0] !== undefined) {

              this.selectAddress(response.body[0])

            }

          } else {

            alert('Nenhum resultado encontrado, verifique!')
          }

        } else {
          alert('Cep não encontrado, verifique!')
        }

      })
      .catch(error => {

        alert('Não conseguimos concluir esta operação no momento, tente novamente mais tarde!')

      })
    },

    selectAddress(item) {

      if (item) {
        this.dataAddress.stateSelected = item.uf
        this.dataAddress.citySelected = item.localidade
        this.dataAddress.street = item.logradouro
        this.dataAddress.zipCode = item.cep.replace(/\D/g,"")

        setTimeout(() => {
          this.redirectOrder()
        }, 1000)

      }

    },

    getInitial() {

      this.uri = this.$store.getters.getUri
      this.router = this.$store.getters.getRoutes
    }

  },

  mounted () {

    this.getInitial()
    this.loadJsonState()
    this.loadJsonCitiesByState(this.stateSelected)

  }
};

</script>

<style scoped>

/* HEADER */
header input {
  margin-top: 30px;
}

header button {
  margin-top: 30px;
}

.change-search {
  margin-top: 10px;
  font-size: 20px;
  color: #FFF;
  text-align: center;
}

#link-cep a {
  color: #FFF;
}

#link-cep a:hover {
  color: #FFF;
  opacity: 0.8;
}

.main {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.main,
.blur-overlay {
  background: url('~assets/images/banner-concrelit.jpg') no-repeat center center fixed;
  background-size: cover;
}

.title,
.title-text {
  position: relative;
}

.title {
  overflow: hidden;
}

.blur-overlay {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.title-text h1 {
  font-weight: bold;
  text-align: center;
  font-size: 44px;
  color: #FFF;
}

.title-text h3 {
  font-size: 34px;
  color: #FFF;
  text-align: center;
}

.table-wrapper-scroll-y {
  display: block;
  max-height: 200px;
  overflow-y: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
/* END HEADER */


/* COMO FUNCIONA */
.como-funciona i {
  margin-bottom: 20px;
  color: #ff6501;

}

.como-funciona .sub-titulo {
  margin-bottom: 10px;
  color: #333;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
}

.como-funciona p {
  font-size: 16px;
  text-align: center;
  color: #333;
  margin-left: 30px;

}

.depoimentos {
  margin-top: 40px;
  background-color: #f5f5f5;
  padding-bottom: 40px;

}

.depoimentos i {
  margin-right: 5px;
}

.depoimentos .card-title i{
    color: #fffc01;
}

.depoimentos span {
  font-size: 22px;
}

.depoimentos p {
  font-size: 14px;
  text-align: justify;
}

.box-card {
  height: 100%;
}

.blog h5 {
  font-size: 22px;
  color: #333;
}

.na-midia {
  margin-top: 50px;
  background-color: #f5f5f5;
  padding: 20px 0 100px 0;
}
</style>



