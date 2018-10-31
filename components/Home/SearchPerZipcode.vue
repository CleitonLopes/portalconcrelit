<template>

    <div class="row justify-content-center fadeIn">
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
                <a class="cep" href="#" @click.stop.prevent="setTypeSearchAddress('address')">
                    Não sabe o CEP? Digite seu endereço
                </a>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {

    name: "CSearchPerZipCode",

    data () {

        return {

            zipCode: null
        }
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

            if (this.zipCode === null || this.zipCode === undefined || this.zipCode === '') {
                validated = false
            }

            return validated
        } 
    },

    methods: {

        redirectOrder () {

            let validated = false
            let event = null

            this.$store.dispatch('setZipCode', null)
            this.$store.dispatch('setDataAddress', null)

            validated = this.validateZipCode()        

            if (!validated) {
                alert('Preencha os campos corretamente!')
                return false
            }            

            this.$store.dispatch('setZipCode', validated)

            .then(() => {

                let paramRoute = `cep=${validated}`

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

        setTypeSearchAddress (value) {

            this.$store.dispatch('setTypeSearchAddress', value)
        
        }
    }
};
</script>

<style scoped>

.form-control-lg, .input-group-lg > .form-control, 
.input-group-lg > .input-group-prepend > .input-group-text, 
.input-group-lg > .input-group-append > .input-group-text, 
.input-group-lg > .input-group-prepend > .btn, 
.input-group-lg > .input-group-append > .btn {
    
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

</style>


