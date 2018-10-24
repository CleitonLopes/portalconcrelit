<template>
    <div>
        <c-modal :params='modal' />

        <section id="newsletter" class="container-fluid newsletter mt-100">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 text-center mt-4">
                        <i class="fa fa-envelope-o fa-3x"></i>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <h2 class="titulo-newsletter">Quer receber as melhores dicas para sua obra?</h2>
                        <p>Deixe e-mail que iremos enviar dicas, informações e novidades!</p>
                    </div>

                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="input-group input-group-md">
                            <input type="text" class="form-control" placeholder="exemplo@concretousinado.com.br" v-model="email"
                            aria-describedby="basic-addon3">
                            <div class="input-group-append input-group-append-md">
                                <button class="btn btn-primary" type="button"
                                @click="subscription()" :disabled="!validated">
                                    <i class="fa fa-paper-plane fa-lg"></i>
                                </button>
                                <img v-show="loader" id="loader" src="~assets/images/loader.gif" alt="loader pagina">
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
	    </section>
    </div>    
</template>

<script>

import axios from 'axios'
import CModal from '~/components/Modals/Modal.vue'

export default {

    data () {
        
		return {

			email: null,
            loader: false,
            modal: {
                title: null,
                message: null
            }
		}
    },
    
    components: {
        CModal
    },

	computed: {

		validated() {

			return (this.email !== undefined && this.email !== null)
		}
	},

	methods: {

		subscription() {

			let uri = this.$store.getters.getUri
			let routes = this.$store.getters.getRoutes

            this.loader = true;

            axios.post(`${uri}/${routes.newsletter}`, {'email': this.email })

            .then((response) => {

                this.modal.title = 'Newsletter!'

            	if (response.status == '201') {

                    this.modal.message = response.data.data
                    $('#modal').modal()

                } else {

                    this.modal.message = 'Não conseguimos concluir esta operação neste momento, tente mais tarde!'
                    $('#modal').modal()
                }

                this.loader = false;
            })

		}
	}
}
</script>

<style scoped>

.newsletter {
  background-color: #ff6501;
  padding-bottom: 40px;
}

.newsletter .titulo-newsletter {
  font-size: 36px;
  letter-spacing: 0;
  margin: 50px 0 0 0;
  color: #FFF;
  font-weight: bold;
}

.newsletter p {
  font-size: 18px;
  color: #FFF;
}

.newsletter .form-control-md, .input-group-md > .form-control, .input-group-md > .input-group-prepend > .input-group-text, .input-group-md > .input-group-append > .input-group-text, .input-group-md > .input-group-prepend > .btn, .input-group-md > .input-group-append > .btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 2;
  border: 2px solid #FFF;
  background-color: transparent;
  color: #FFF;
}

.newsletter .btn-primary {
  border: 1px solid #FFF;
  background-color: #FFF !important;
}

.newsletter .form-control::-webkit-input-placeholder {
  color: #FFF;
}

.newsletter .fa-envelope-o {
  color: #FFF;
  transform: rotate(-25deg);
}

.newsletter i {
  color: #ff6501;
}

</style>

