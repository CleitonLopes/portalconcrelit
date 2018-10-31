<template>
  <div>
    <header class="main fadeIn">
        <div class="title">
            <div class="blur-overlay"></div>
            <div class="title-text">
                <h1>Precisa de Concreto Usinado para sua obra ?</h1>
                <h3>Receba orçamentos com rapidez.</h3>

                <div v-if="getTypeSearchAddress == 'zipCode'">
                    <c-search-per-zipcode />
                </div>

                <div v-else>            
                    <c-search-per-address />
                </div>
            </div>
        </div>
    </header>

    <c-brand />

    <c-how-it-works />

    <c-deposition />

    <c-latest-post />

    <c-midia />

    <c-newsletter />

    <c-footer />

  </div>
</template>

<script>

import axios from 'axios';
import CSearchPerZipcode from '~/components/Home/SearchPerZipcode'
import CSearchPerAddress from '~/components/Home/SearchPerAddress'
import CNewsletter from '~/components/Newsletter'
import CFooter from '~/components/Footer.vue'
import CBrand from '~/components/Home/Brand.vue'
import CHowItWorks from '~/components/Home/HowItWorks.vue'
import CDeposition from '~/components/Home/Deposition.vue'
import CLatestPost from '~/components/Home/LatestPost.vue'
import CMidia from '~/components/Home/Midia.vue'

export default {

    name: 'CHome',

    components: {
        CSearchPerZipcode,
        CSearchPerAddress,
        CNewsletter,
        CFooter,
        CBrand,
        CHowItWorks,
        CDeposition,
        CLatestPost,
        CMidia
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

    computed: {

        getTypeSearchAddress () {        
            return this.$store.getters.getTypeSearchAddress
        }
    }
}

</script>

<style scoped>

header { margin-top: 40px; }

header input { margin-top: 30px; }

header button { margin-top: 30px; }

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

.title, .title-text { position: relative; }

.title { overflow: hidden; }

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

</style>