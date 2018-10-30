
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

    <c-brand />

    <c-how-it-works />

    <c-deposition />

    <c-latest-post />

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

    <c-newsletter />
    <c-footer />
  </div>

</template>


<script>

import axios from 'axios';
import CNewsletter from '~/components/Newsletter'
import CFooter from '~/components/Footer.vue'
import CBrand from '~/components/Home/Brand.vue'
import CHowItWorks from '~/components/Home/HowItWorks.vue'
import CDeposition from '~/components/Home/Deposition.vue'
import CLatestPost from '~/components/Home/LatestPost.vue'

export default {

  name: 'CHome',

  components: {
    CNewsletter,
    CFooter,
    CBrand,
    CHowItWorks,
    CDeposition,
    CLatestPost
  },

  data() {
    return {
      title: 'Home',
      zipCode: null,
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
      uri: null,
      router: null
    };
  },

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

      app.store.dispatch('setLatestPost', results[0])
      app.store.dispatch('setDepositions', results[1])
      app.store.dispatch('setBrands', results[2])

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

        let paramRoute = `cep=${validated}`

        if (validated.citySelected !== undefined) {

          paramRoute = `cidade=${validated.citySelected.replace(/\s+/g, '-')}`

        }

        this.$router.push({ name: 'orcamento-id', params: { id: paramRoute }})

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

      let uriViaCep = this.$store.getters.getUriViaCep

      let filter = `${this.dataAddress.stateSelected}/${this.dataAddress.citySelected}/${this.dataAddress.street}/${this.dataAddress.number}`

      axios.get(`${uriViaCep}${filter}/json/`)
      .then(response => {

        if (!response.data.erro) {

          if (response.data.length > 0) {

            if (response.data.length > 1) {

              this.responseDataAddress = response.data

            } else if(response.data[0] !== undefined) {

              this.selectAddress(response.data[0])

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
header {
  margin-top: 40px;
}

header input {
  margin-top: 30px;
}

header button {
  margin-top: 30px;
}
/* Fim header */

/*Pesquisa CEP */
.form-control-lg, .input-group-lg > .form-control, .input-group-lg > .input-group-prepend > .input-group-text, .input-group-lg > .input-group-append > .input-group-text, .input-group-lg > .input-group-prepend > .btn, .input-group-lg > .input-group-append > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.50rem;
    line-height: 2;
}

select.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]), .input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]), .input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]), .input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]), .input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]) {
    height: calc(2.875rem + 18px);
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
/* Fim CEP */

.main {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 80vh;
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
  max-height: 300px;
  overflow-y: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
/* Fim Header */

.na-midia {
  margin-top: 50px;
  background-color: #f5f5f5;
  padding: 20px 0 100px 0;
}
</style>



