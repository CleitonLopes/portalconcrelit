<template>
    <div class="row justify-content-center fadeIn">
        <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <div class="form-row mt-2">
                <div class="col-12 col-sm-4 col-md-4 col-lg-4 mt-2">
                    <select class="form-control form-control-lg" v-model="getCityByState" required>
                        <option v-for="item in jsonState" :key="item.ID" :value="item.ID">
                            {{ item.Sigla }}
                        </option>
                    </select>
                </div>

                <div class="col-12 col-sm-8 col-md-8 col-lg-8 mt-2">
                    <select class="form-control form-control-lg" v-model="getSelectCity" required>
                        <option v-for="item in jsonCities" :key="item.ID" :value="item.Nome">
                            {{ item.Nome }}
                        </option>
                    </select>
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                    <input @keyup.enter="findByAddress()" type="text" class="form-control form-control-lg" v-model="dataAddress.street"
                        placeholder="Digite seu endereço" required />
                </div>

                <div class="col-12 col-sm-2 col-md-2 col-lg-2 mt-2">
                    <button type="button" class="btn btn-secondary btn-lg btn-block" @click="setTypeSearchAddress('zipCode')">Voltar</button>
                </div>

                <div class="col-12 col-sm-10 col-md-10 col-lg-10 mt-2 mb-2">
                    <button type="button" class="btn btn-primary btn-lg btn-block"
                        @click="findByAddress()" :disabled="!validateAddress()">
                            Buscar
                    </button>
                </div>
            </div>
            
            <div v-if="responseDataAddress.length > 1" class="table-responsive">
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
                  <tr v-for="item in responseDataAddress" :key="item.id">
                    <td scope="row">{{ item.logradouro}}</td>
                    <td>{{ item.bairro }}</td>
                    <td>{{ item.complemento }}</td>
                    <td>{{ item.cep }}</td>
                    <td><a href="#" @click.stop.prevent="selectAddress(item)">Selecionar</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    
    name: 'CSearchPerAddres',

    data () {

        return {
            
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
        }        
    },

    computed : {

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

    methods: {

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

        redirectOrder () {

            let validated = false
            let event = null

            this.$store.dispatch('setZipCode', null)
            this.$store.dispatch('setDataAddress', null)

            validated = this.validateAddress()

            if (!validated) {
                alert('Preencha os campos corretamente!')
                return false
            }

            this.$store.dispatch('setDataAddress', validated)

            .then(() => {

                let paramRoute = `cidade=${validated.citySelected.replace(/\s+/g, '-')}`
                this.$router.push({ name: 'orcamento-id', params: { id: paramRoute }})
            })

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

        findByAddress() {

            this.responseDataAddress = []

            let uriViaCep = this.$store.getters.getUriViaCep

            let filter = `${this.dataAddress.stateSelected}/${this.dataAddress.citySelected}/${this.dataAddress.street}/${this.dataAddress.number}`

            axios.get(`${uriViaCep}${filter}/json/`)
            
            .then(response => {

                if (response.data.erro) {
                    alert('Cep não encontrado, verifique!')
                    return false
                }

                if (response.data.length <= 0) {
                    alert('Nenhum resultado encontrado, verifique!')
                    return false;
                }

                if (response.data.length > 1) {

                    this.responseDataAddress = response.data

                } else if(response.data[0] !== undefined) {

                    this.selectAddress(response.data[0])

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

        setTypeSearchAddress (value) {
            this.$store.dispatch('setTypeSearchAddress', value)        
        }
    },

    mounted () {
        this.loadJsonState()
        this.loadJsonCitiesByState(this.stateSelected)
    }
}
</script>

<style scoped>

.table-wrapper-scroll-y {
    display: block;
    max-height: 250px;
    overflow-y: auto;
}

table {
    border:1px solid;
}
</style>

