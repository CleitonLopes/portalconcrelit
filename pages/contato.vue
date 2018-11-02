<template>

    <section>
        <div class="container contato">
            <div class="row">
                <div class="col-12">
                    <h2 class="titulo">Fale com nossa Equipe</h2>
                </div>

                <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">

                    <div class="row mb-4 align-items-center">
                        <div class="col-4 mt-4 text-center">
                            <i class="fa fa-phone fa-3x" aria-hidden="true"></i>
                        </div>

                        <div class="col-8 mt-4">
                            <dl>
                                <dt>Telefone:</dt>
                                <dd><a href="tel:11999999999">+55(011) 99999999</a></dd>
                                <dd><a href="tel:11999999999">+55(011) 99999999</a></dd>
                            </dl>
                        </div>

                        <div class="col-4 mt-4 text-center">
                            <i class="fa fa-envelope fa-3x" aria-hidden="true"></i>
                        </div>

                        <div class="col-8 mt-4">
                            <dl>
                                <dt>E-mail:</dt>
                                <dd>concrelite@teste.com.br</dd>
                            </dl>
                        </div>

                        <div class="col-4 mt-4 text-center">
                            <i class="fa fa-user fa-3x" aria-hidden="true"></i>
                        </div>

                        <div class="col-8 mt-4">
                            <dl>
                                <dt>Atendimento:</dt>
                                <dd>Segunda à Sexta-feira das 08h00 as 17h00</dd>
                                <dd>Sábado das 08h00 as 17h00</dd>
                            </dl>
                        </div>

                        <div class="col-4 mt-4 text-center">
                            <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                        </div>

                        <div class="col-8 mt-4">
                            <dl>
                                <dt>Endereço</dt>
                                <dd>Rua Maria Dias Barbosa, 130</dd>
                                <dd>Perequê - ilhabela/SP - CEP 11.630-000</dd>
                            </dl>
                        </div>
                    </div>

                </div>

                <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-4">
                    <div class="col-12">
                        <dl>
                            <dt>Tem alguma dúvida, critica ou sugestão</dt>
                            <dd>Prencha abaixo com seus dados pessoais e fale diretamente com a gente.</dd>
                        </dl>
                    </div>
                    <form action="">
                        <div class="form-group col-12">
                            <input type="text" class="form-control" placeholder="Nome">
                        </div>
                        <div class="form-group col-12">
                            <input type="text" class="form-control" placeholder="Telefone">
                        </div>
                        <div class="form-group col-12">
                            <input type="email" class="form-control" placeholder="E-mail">
                        </div>
                        <div class="form-group col-12">
                            <textarea type="text" rows="6"
                            class="form-control" placeholder="Mensagem"></textarea>
                        </div>

                        <div class="col-12 text-right">
                            <button type="btn" class="btn btn-success btn-lg">Enviar</button>
                        </div>
                    </form>
                </div>

                <div class="col-12">
                    <div v-if="loader">
                        <div class="text-center mt-100 mb-100">
                            <img id="loader" src="~assets/images/loader.gif" alt="loader pagina">
                        </div>
                    </div>
                    <div id="map" class="mb-4 mt-4"></div>
                </div>

            </div>
        </div>

        <c-newsletter />
        <c-footer />
    </section>

</template>

<script>

import CNewsletter from '~/components/Newsletter'
import CFooter from '~/components/Footer.vue'

export default {

    name: 'CContato',

    components: {
        CNewsletter,
        CFooter
    },

    data () {

        return {
            message: 'Contato',
            loader: true
        }
    },

    computed: {},

    methods: {

        loadScript () {

            let script = document.createElement('script')
            script.setAttribute('id', 'script-map')
            script.setAttribute('async', '')
            script.setAttribute('defer', '')
            script.type = 'text/javascript'
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyASIpKCFSAc7tsSj2Bj62xMCoHeCqSIBvE`
            document.head.appendChild(script)

        },

        initMap () {

            this.loader = true

            if (!document.getElementById('script-map')) {
                this.loadScript()
            }

            setTimeout(() => {

                let uluru = new google.maps.LatLng(-23.5515822, -46.648708)

                if (document.getElementById('map') !== null) {

                    let map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 12,
                        center: uluru
                    });

                    let marker = new google.maps.Marker({
                        position: uluru,
                        map: map
                    });
                }

                this.loader = false

            }, 2000);
        }
    } ,

    mounted () {

        return this.initMap()

    }

}
</script>

<style scoped>

.contato {
    margin-top: 100px;
}

.contato .titulo {
    color: #ff6501;
	font-size: 50px;
}

.contato i {
    color: #ff6501;
}

.contato a {
    color: #444;
    font-size: 16px;
}

.contato .email {
    font-size: 16px;
}

.contato .texto-contato {
    font-size: 20px;
}

#map {
    height: 400px;
    width: 100%;
}

</style>


