<template>
    <section class="container pedido">
        <div class="row">
            
            <div class="col-12">
                <h2 class="titulo">Qual o seu Pedido?</h2>
            </div>

            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-lx-6">

                <div class="form-group row">
                    <label for="zipcode" class="col-12 col-sm-12 col-md-4 col-form-label"><b>CEP DA OBRA:</b></label>
                    <div class="col-12 col-sm-12 col-md-8">
                        <div class="input-group">
                            <input type="text" class="form-control"
                                placeholder="Digite seu CEP" aria-label="" aria-describedby="basic-addon1"
                                maxlength="10" required id="zipCode" v-model="prepareZipCode" @keyup.enter="searchCoordinates()">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-primary" type="button" title="Buscar Cep" @click="searchCoordinates()">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12" v-show="loader">
                    <div class="text-center mt-100 mb-100">
                        <img id="loader" src="~assets/images/loader.gif" alt="loader pagina">
                    </div>
                </div>

                <div v-show="!loader" id="map-order" class="mb-4 mt-4"></div>

            </div>

            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-lx-6">

                <p class="text-left">Qual o tipo de concreto que você precisa?</p>

                <form class="form-row mt-4">
                    <div class="col-12 col-sm-12 col-md-6">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="concrete-convencional"
                            :value="'Concreto Convencional'"
                            v-model="data.typeConcrete" />
                            <label class="form-check-label" for="concrete-convencional">
                                Concreto Convencional
                            </label>
                        </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="concrete-bombeado"
                                :value="'Concreto Bombeado'"
                                v-model="data.typeConcrete" />
                            <label class="form-check-label" for="concrete-bombeado">
                                Concreto Bombeado
                            </label>
                        </div>
                    </div>

                    <div class="col-12 mt-4">
                        <p class="text-left">Especificações</p>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
						<select v-model="data.resistenceConcreteSelected" class="form-control">
							<option v-for="item in dataConcreteRes" :value="item.value">
								{{ item.description }}
							</option>
						</select>
					</div>

                    <div class="form-group col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
						<select v-model="data.pieceConcreteSelected" class="form-control">
							<option v-for="item in dataPieceConcrete" :value="item.value">
								{{ item.description }}
							</option>
						</select>
					</div>



                    <div class="col-12">
                        <p class="text-left">E a quantidade necessária?</p>
                    </div>

                    <div class="col-4 col-sm-4 col-md-3">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="8" v-model="data.quantityConcrete">
                        </div>
                    </div>

                    <div class="col-4 col-sm-4 col-md-1">
                        <label for="metros">m³</label>
                    </div>

                    <div class="col-4 col-sm-4 col-md-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="quantityconcrete" v-model='data.chkQuantityConcrete'>
                            <label class="form-check-label" for="quantityconcrete">
                                Não sei
                            </label>
                        </div>
                    </div>

                    <div class="col-12">
                        <p class="text-left">Deixe seus dados para contato:</p>
                    </div>

                    <div class="col-12">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Nome" v-model="data.name">
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group">
                            <input type="text" title="Somente números" 
                            class="form-control" pattern="[0-9]+" placeholder="Telefone" maxlength="15" v-model="preparePhone">
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="E-mail" v-model="data.mail">
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group">
                            <textarea class="form-control" placeholder="Mensagem" v-model="data.message"></textarea>
                        </div>
                    </div>

                    <div class="col-12 text-right">

                        <router-link to="/"
                            class="btn btn-secondary btn-lg" type="button">
                            Voltar
                        </router-link>

                        <button class="btn btn-success btn-lg" type="submit" :disabled="!validatedOrder || loader" @click.prevent.stop="sendOrder">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>    
</template>

<script>

import axios from 'axios'

export default {

    data () {

        return {

            data: {

                zipCode: null,
                typeConcrete: 'Concreto Convencional',
                resistenceConcrete: '15',
                quantityConcrete: null,
                name: null,
                phone: null,
                mail: null,
                message: null,
                origin: null,
                chkQuantityConcrete: false,
                resistenceConcreteSelected: 0,
                pieceConcreteSelected: 0

            },

            dataConcreteRes: [
                { description: 'Qual FCK?', value: '0' },
                { description: '15', value: '15' },
                { description: '20', value: '20' },
                { description: '25', value: '25' },
                { description: '30', value: '30' },
                { description: '35', value: '35' },
                { description: '40', value: '40' },
                { description: 'Não sei', value: 'nenhum' },
            ],

            dataPieceConcrete: [
                { description: 'Qual peça será concretada?', value: '0'},
                { description: 'Peça A', value: 'A'},
                { description: 'Peça B', value: 'B'},
            ],

            dataAddress: null,
            loader: false,

        }
    },

    computed: {

        preparePhone: {


            get() {

                return this.data.phone

            },

            set(value) {

                if (value !== null) {

                    this.data.phone = value.replace(/\D/g,"")
                    this.data.phone = this.data.phone.replace(/^(\d{2})(\d)/g,"($1) $2")
                    this.data.phone = this.data.phone.replace(/(\d)(\d{4})$/,"$1-$2")
                }

            }
        },

        prepareZipCode: {

            get() {

                return this.data.zipCode

            },

            set(value) {

                if (value !== null) {

                    this.data.zipCode = value.replace(/\D/g,"")
                    this.data.zipCode = this.data.zipCode.replace(/^(\d{2})(\d)/,"$1.$2")
                    this.data.zipCode = this.data.zipCode.replace(/(\d{3})(\d)/,"$1-$2")

                    return this.zipCode

                    this.$store.dispatch('setZipCode', this.data.zipCode)
                }
            }
        },

        validatedOrder () {

            let self = this
            let data = JSON.parse(JSON.stringify(this.data))

            delete data.origin

            if (data.chkQuantityConcrete) {
                delete data.quantityConcrete
            }

            let validated = true

            Object.keys(data).map(function(key, index) {

                if (data[key] === null || data[key] === '') {

                    validated = false

                }

            })

            return validated
        },
    },

    methods: {

        searchCoordinates () {

            let uri = this.$store.getters.getUriGeocode
            let keyGoogle = this.$store.getters.getKeyGoogle

            let filter = null

            if (filter = this.getFilterGeocode()) {

                axios.get(`${uri}${filter}&${keyGoogle}`)

                .then((response) => {

                    let result = response.data.results.shift()

                    if (result !== undefined && response.status === 200) {

                        this.data.origin = result
                        this.initMap(result.geometry.location)

                    } else {

                        alert('Local não encontrado, vefique o cep digitado!')

                    }

                })
            }

        },

        // Retorna filtro (Cep ou endereço) para google maps
        getFilterGeocode () {

            let zipCode = this.$store.getters.getZipCode
            let dataAddress = this.$store.getters.getDataAddress
            let filter = null;

            if (this.data.zipCode != null || this.data.zipCode != undefined) {
                zipCode = this.data.zipCode.replace(/\D/g,"")
                filter = `components=country:BRA|postal_code:${zipCode}`
                return filter
            }

            if (zipCode != null || zipCode != undefined) {

                let zipCodeReplace = zipCode.replace(/\D/g,"")

                // Adiciona caraters 17.512-060
                zipCodeReplace = zipCode.replace(/\D/g,"")
                zipCodeReplace = zipCodeReplace.replace(/^(\d{2})(\d)/,"$1.$2")
                zipCodeReplace = zipCodeReplace.replace(/(\d{3})(\d)/,"$1-$2")

                this.data.zipCode = zipCodeReplace
                filter = `components=country:BRA|postal_code:${zipCode}`
                return filter

            }

            if (dataAddress != null || dataAddress != undefined) {

                this.data.zipCode = dataAddress.zipCode

                filter = `address=${dataAddress.street},${dataAddress.number},+${dataAddress.citySelected},
                    ${dataAddress.stateSelected}&components=country:BR`
                return filter

            }

            return filter

        },

        alterZipCode () {

            this.disabled = false
            this.$store.dispatch('setZipCode', null)
            document.getElementById('zipCode').focus()
        },

        prepareData () {

            let obj = this.data

            let data = {

                "order" : {
                    "chk_quantity_concrete": obj.chkQuantityConcrete,
                    "piece_concrete_selected": obj.pieceConcreteSelected,
                    "quantity_concrete": obj.quantityConcrete,
                    "resistence_concrete_selected": obj.resistenceConcreteSelected,
                    "type_concrete": obj.typeConcrete
                },

                "address": {
                    "zip_code": obj.zipCode,
                    "formatted_address": obj.origin.formatted_address,
                    "place_id": obj.origin.place_id,
                    "lat": obj.origin.geometry.location.lat,
                    "lng": obj.origin.geometry.location.lng
                },

                "message": {
                    "name": obj.name,
                    "phone": obj.phone.replace(/\D/g,""),
                    "email": obj.mail,
                    "message": obj.message
                }

            }

            return data

        },

        sendOrder () {

            let uri = this.$store.getters.getUri
            let data = this.prepareData()

            this.load = true;
            setTimeout(() => {
                this.load = false;
                this.redirectViewResponse()
            }, 500)

            this.$http.post(`${uri}/create-order`, data)

            .then((response) => {})

        },

        redirectViewResponse() {

            params = {}

            params.title = 'Pedido realizado com sucesso!'
            params.subTitle = 'Sua solicitação já foi enviada para concreteiras mas perto da sua região. '
            params.description = [
                'Fique atento ao seu e-mail',
                'Os orçamentos serão enviado nele, 1h após a solicitação.',
                'Bons negócios!'
            ]
            params.descriptionButton = 'Solicitar novo orçamento'
            params.to = '/pedido'
            params.classButton = 'btn btn-success'
            this.$router.push({name: 'response', params: { params } })

        },

         /** Monta e carrega dinamicamente o script no header da pagina **/
        loadScript () {

            let script = document.createElement('script')
            script.setAttribute('id', 'script-map')
            script.setAttribute('async', '')
            script.setAttribute('defer', '')
            script.type = 'text/javascript'
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyASIpKCFSAc7tsSj2Bj62xMCoHeCqSIBvE`
            document.head.appendChild(script)

        },

        /** Adiciona o mapa no HTML DOM **/
        initMap (params) {

            this.loader = true

            if (!document.getElementById('script-map')) {
                this.loadScript()
            }

            if (params.hasOwnProperty('lat') &&
                    params.hasOwnProperty('lng')) {

                setTimeout(() => {

                    let coordinates = new google.maps.LatLng(params.lat, params.lng)

                    if (document.getElementById('map-order') !== null) {

                        let map = new google.maps.Map(document.getElementById('map-order'), {
                            zoom: 14,
                            center: coordinates
                        });

                        let marker = new google.maps.Marker({
                            position: coordinates,
                            map: map
                        });
                    }

                    this.loader = false

                }, 1000);

            } else {

                this.loader = false
                alert('Local não encontrado, vefique o cep digitado!')

            }
        },
    },

    mounted () {

        this.searchCoordinates()

    }
    
}
</script>

<style scoped>

.pedido {
    margin-top: 100px;
  }
  
  .pedido .titulo {
      color: #ff6501;
      font-size: 50px;
  }

  .pedido p {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
  }

  #map-order {
    height: 500px;
    width: 100%;
  }

</style>


