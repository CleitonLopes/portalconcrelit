<template>
    <div class="container cadastre">
		<div class="row">
			<div class="col-12">
				<h2 class="titulo">Cadastre sua Empresa</h2>
			</div>
		</div>

		<!-- Dados do contato -->
		<form class="row">
			<div class="col-1">
				<div class="row steps-form-3">
					<div class="col-12">
						<div class="steps-row-3 setup-panel-3 d-flex justify-content-between">
							<div class="steps-step-3 step">
								<button v-if="validatedStep1" id="steps-active" type="button" class="btn btn-primary btn-circle-3 waves-effect" data-toggle="tooltip" 	data-placement="top" title="Digite os Dados">
									<b>1</b>
								</button>
								<button v-else type="button" class="btn btn-primary btn-circle-3 waves-effect p-3" data-toggle="tooltip" data-placement="top" title="	Escolha o Plano">
									<b>1</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-10">
				<div class="row">
					<div class="col-12 mb-4">
						<h4 class="texto-plano">SEUS DADOS</h4>
					</div>

                    <div class="col-12">
                        <p><b>Dados de Acesso</b></p>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <input type="email" required class="form-control" :class="{ 'is-valid': customer.email != null }" placeholder="Email" v-model="customer.email">
                        <small v-show="(customer.email == null || customer.email == '')"
                        style="color: #ff7675;">Atenção, e-mail obrigatório, este e-mail será sua identificação em sua area administrativa *</small>
                    </div>

                    <div class="form-group col-6">
                        <input type="password" class="form-control" required
                        :class="{ 'is-valid': customer.password != null }" placeholder="Password" 
                        v-model="customer.password">
                        <small v-show="(customer.password == null || customer.password == '')" style="color: #ff7675;">Password obrigatório *</small>
                    </div>

                    <div class="form-group col-6">
                        <input type="password" class="form-control" required
                        :class="{ 'is-valid': customer.password_confirmation != null }" placeholder="Password" 
                        v-model="customer.password_confirmation" @blur="validatePassword()">
                        <small v-show="(customer.password_confirmation == null || customer.password_confirmation == '')" style="color: #ff7675;">Confirmação de Password obrigatório *</small>
                    </div>

                    <div class="col-12">
                        <p><b>Dados de Contato</b></p>
                    </div>

                    <div class="form-group col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input type="text" class="form-control" required
                        :class="{ 'is-valid': customer.name != null }" placeholder="Nome" v-model="customer.name">
                        <small v-show="(customer.name == null || customer.name == '')" style="color: #ff7675;">Nome obrigatório *</small>
                    </div>

                    <div class="form-group col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <input type="text" class="form-control" maxlength="15" required :class="{ 'is-valid': customer.phone != null }" placeholder="(__)_____-____" v-model="preparePhone">
                        <small v-show="(customer.phone == null || customer.phone == '')" style="color: #ff7675;">Telefone obrigatório *</small>
                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2">
                        <p><b>Dados da Concreteira</b></p>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <input type="text" class="form-control" required :class="{ 'is-valid': customer.name_fantasy != null }" placeholder="Nome Fantasia" v-model="customer.name_fantasy">
                        <small v-show="(customer.name_fantasy == null || customer.name_fantasy == '')" style="color: #ff7675;">Nome Fantasia obrigatório *</small>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <input type="text" class="form-control" maxlength="18" required :class="{ 'is-valid': customer.cnpj != null }" placeholder="CNPJ" v-model="prepareCnpj">
                        <small v-show="(customer.cnpj == null || customer.cnpj == '')" style="color: #ff7675;">CNPJ obrigatório *</small>
                        <small v-show="customer.cnpj != null & customer.cnpj !== '' && customer.cnpj.length < 14" style="color: #ff7675;">CNPJ inválido, verifique!</small>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        <input @blur="findCep()" maxlength="8" required type="text" class="form-control" :class="{ 'is-valid': customer.zip_code != null }" placeholder="CEP" v-model="customer.zip_code">
                        <small v-show="(customer.zip_code == null || customer.zip_code == '')" style="color: #ff7675;">Cep obrigatório *</small>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <input type="text" class="form-control" required :class="{ 'is-valid': customer.address != null }" placeholder="Endereço" v-model="customer.address">
                        <small v-show="(customer.address == null || customer.address == '')" style="color: #ff7675;">Endereço obrigatório *</small>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        <input type="text" class="form-control" required :class="{ 'is-valid': customer.number != null }" placeholder="N°" v-model="customer.number">
                        <small v-show="(customer.number == null || customer.number == '')" style="color: #ff7675;">Numero obrigatório *</small>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <input type="text" class="form-control" placeholder="Complemento" :class="{ 'is-valid': customer.complement != null }" v-model="customer.complement">
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                        <input type="text" class="form-control" required :class="{ 'is-valid': customer.neighborhood != null }" placeholder="Bairro" v-model="customer.neighborhood">
                        <small v-show="(customer.neighborhood == null || customer.neighborhood == '')" style="color: #ff7675;">Bairro obrigatório *</small>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                        <input type="text" class="form-control" required placeholder="Cidade" :class="{ 'is-valid': customer.city != null }" v-model="customer.city">
                        <small v-show="(customer.city == null || customer.city == '')" style="color: #ff7675;">Cidade obrigatório *</small>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        <select v-model="customer.state_selected" class="form-control">
                            <option v-for="item in state" :value="item.value">
                                {{ item.description }}
                            </option>
                        </select>
                    </div>
				</div>
			</div>
		</form>

		<!-- Dados do Plano -->
		<div class="row">
			<div class="col-1">
				<div class="row steps-form-3">
					<div class="col-12">
						<div class="steps-row-3 setup-panel-3 d-flex justify-content-between">
							<div class="steps-step-3 step">
								<button v-if="validatedStep2" id="steps-active" type="button" class="btn btn-primary btn-circle-3 waves-effect p-3" data-toggle="tooltip" data-placement="top" title="	Escolha o Plano">
								<b>2</b>
								</button>
								<button v-else type="button" class="btn btn-primary btn-circle-3 waves-effect p-3" data-toggle="tooltip" data-placement="top" title="	Escolha o Plano">
									<b>2</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-10">
				<div class="row no-gutters">
					<div class="col-12">
						<h4 class="texto-plano">ESCOLHA SEU PLANO</h4>
					</div>

                    <div class="container anuncie">
                        <div class="row no-gutters">
                            <div v-for="(plan, key) in data" class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <div class="block" :class="{ elevated: plan.id == selectedPlan }">
                                    <div class="header">
                                        <h2>{{ plan.name }}</h2>
                                    </div>

                                    <div class="content">
                                        <sup>R$</sup>
                                        <span>{{ plan.value }}</span>
                                        <sup>,00</sup>
                                    </div>
                                    <img v-if="plan.best_seller" src="~assets/images/selo-venda.png"
                                    title="Selo mais vendido" alt="Selo mais vendido" class="selo">

                                    <button class="btn btn-success" @click="setPlan(plan.id)">Quero esse!</button>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>

				<div class="row">
					<div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4 align-self-center">
						<div class="titulo-plano-exclusivo">APROVEITE!</div>
						<div class="titulo-plano-exclusivo">GARANTA + VISIBILIDADE</div>
					</div>

					<div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 mb-4" style="background-color: #ff6501; display: inline-block">

						<div class="row">

							<div class="col-2">
								<input type="checkbox" class="option-input checkbox" v-model="plan.additional_value"/>
							</div>

							<div class="col-10 mt-3">
								<div class="texto-plano-exclusivo">Adicionar Logomarca da Concreteira na Página inicial</div>
								<span v-if="data !== null" class="valor-plano-exclusivo">
									R$ {{data[0]['value_additional']}}/mês
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Dados Cartão -->
		<div class="row">
			<div class="col-1">
				<div class="row steps-form-3">
					<div class="col-12">
						<div class="steps-row-3 setup-panel-3 d-flex justify-content-between">
							<div class="steps-step-3 step mt-3">
								<button v-if="validatedStep3" id="steps-active" type="button" class="btn btn-primary btn-circle-3 waves-effect" data-toggle="tooltip" data-placement="top" title="Escolha o Pagamento">
								<b>3</b>
								</button>
								<button v-else type="button" class="btn btn-primary btn-circle-3 waves-effect" data-toggle="tooltip" data-placement="top" title="Escolha o Pagamento">
									<b>3</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-10">

				<div class="row">

					<div class="col-12 mt-4 mb-2">
						<h4 class="texto-plano">PAGAMENTO</h4>
					</div>

					<div class="form-group col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1">
                        <img src="~assets/images/mastercard.png" alt="Cartão de Crédito Mastercard" title="Método e Pagamento Cartão Mastercard">
                        <div class="form-check mt-2">
                            <input class="form-check-input position-static" type="radio" name="blankRadio" v-model="payment_method" :value="'Mastercard'">
                        </div>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1">
                        <img src="~assets/images/amex.png" alt="Cartão de Crédito Amex" title="Método e Pagamento Cartão Amex">
                        <div class="form-check mt-2">
                            <input class="form-check-input position-static" type="radio" name="blankRadio" v-model="payment_method" :value="'Amex'">
                        </div>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1">
                        <img src="~assets/images/visa.png" alt="Cartão de Crédito Visa" title="Método e Pagamento Cartão Visa">
                        <div class="form-check mt-2">
                            <input class="form-check-input position-static" type="radio" name="blankRadio" v-model="payment_method" :value="'Visa'">
                        </div>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1">
                        <img src="~assets/images/hipercard.png" alt="Cartão de Crédito Hipercard" title="Método e Pagamento Cartão Hipercard">
                        <div class="form-check mt-2">
                            <input class="form-check-input position-static" type="radio" name="blankRadio" v-model="payment_method" :value="'Hipercard'">
                        </div>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1">
                        <img src="~assets/images/diners.png" alt="Cartão de Crédito Diners Club" title="Método e Pagamento Cartão Diners Club">
                        <div class="form-check mt-2">
                            <input class="form-check-input position-static" type="radio" name="blankRadio" v-model="payment_method" :value="'Dinersclub'">
                        </div>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1">
                        <img src="~assets/images/elo.png" alt="Cartão de Crédito Elo" title="Método e Pagamento Cartão Elo">
                        <div class="form-check mt-2">
                            <input class="form-check-input position-static" type="radio" name="blankRadio" v-model="payment_method" :value="'Elo'">
                        </div>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1">
                        <img src="~assets/images/boleto.png" alt="Boleto Bancário" title="Método e Pagamento Boleto">
                        <div class="form-check mt-2">
                            <input class="form-check-input position-static" type="radio" name="blankRadio" v-model="payment_method" :value="'Boleto'">
                        </div>
                    </div>

                    <div v-show="payment_method !== 0" class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <p>Bandeira Selecionada: {{ payment_method }}</p>
                    </div>

                    <div v-if="payment_method == 'Boleto'" class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <p>
                            Após finalizar a compra, dados com a impressão do boleto será mostrado na tela, após o pagamento
                            seu acesso ao painel serão liberados automaticamente! :)
                        </p>
                    </div>
				</div>

				<form v-show="payment_method != 'Boleto'" class="form-group row">

                    <div class="form-group col-12 col-sm-12 col-md-7 col-lg-7 col-xs-7 ">
                        <label for="">N° do cartão</label>
                        <input type="text" maxlength="19" class="form-control" v-model="prepareNumberCardCredit">
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-7 col-lg-7 col-xs-7 ">
                        <label for="">Nome que está no cartão</label>
                        <input type="text" class="form-control" v-model="card.card_name">
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                        <label for="">CPF</label>
                        <input type="text" class="form-control" maxlength="14" required
                            :class="{ 'is-valid': customer.cpf != null }" v-model="prepareCpf">

                        <small v-show="(customer.cpf == null || customer.cpf == '')" style="color: #ff7675;">CPF obrigatório *
                        </small>

                        <small v-show="customer.cpf != null & customer.cpf !== '' && customer.cpf.length < 14" style="color: #ff7675;">CPF inválido, verifique!</small>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-5 col-lg-5 col-xs-5 "></div>

                    <div class="form-group col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        <label for="">Mês</label>
                        <select v-model="card.card_date_validated" class="form-control">
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                        <label for="">Ano</label>
                        <input type="text" minlength="4" maxlength="4"
                        class="form-control ccjs-year" v-model="card.card_year" placeholder="">
                    </div>

                    <div class="form-group col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <label for="">Cód. segurança</label>
                        <input type="text" maxlength="3" class="form-control ccjs-csc" v-model="card.card_security_code">
                    </div>
                </form>
			</div>
		</div>

		<!-- Finalizar compra -->
		<div class="row">
			<div class="col-1">
				<div class="row steps-form-3">
					<div class="col-12">
						<div class="steps-row-3 setup-panel-3 d-flex justify-content-between">
							<div class="steps-step-3 step">
								<button v-if="token !== null && token !== ''" id="steps-active" type="button" class="btn btn-primary btn-circle-3 waves-effect p-3" data-toggle="tooltip" data-placement="top" title="Basic Information">
									<i class="fa fa-check" aria-hidden="true"></i>
								</button>
								<button v-else type="button" class="btn btn-primary btn-circle-3 waves-effect p-3" data-toggle="tooltip" data-placement="top" title="Basic Information">
									<i class="fa fa-check" aria-hidden="true"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-10">
				<div class="row">
					<div class="col-12">
						<div class="">
							<button :disabled="!validatedStep3 || loader" class="btn btn-success" type="button" @click="finalyPurchase">
								Finalizar Compra
							</button>
							<img v-show="loader" id="loader" src="~assets/images/loader.gif" alt="loader pagina">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

import axios from 'axios'
import CModalOrcamento from '~/components/Modals/ModalOrcamento.vue'

export default {
    
    name: 'CCadastreSuaEmpresa',
    components: {
        CModalOrcamento
    },

    data () {

        return {

            customer: {
                name: null,
                password: null,
                password_confirmation: null,
                phone: null,
                email: null,
                name_fantasy: null,
                cnpj: null,
                cpf: null,
                zip_code: null,
                address: null,
                number: null,
                neighborhood: null,
                city: null,
                complement: null,
                state_selected: "AC"
            },

            payment_method: 0,
            card: {
                card_number: null,
                card_date_validated: null,
                card_year: null,
                card_security_code: null,
                card_name: null
            },

            selectedPlan: null,
            plan: {
                plan_id: null,
                additional_value: false
            },

            state: [
                { description: "AC", value: "AC" },
                { description: "AL", value: "AL" },
                { description: "AP", value: "AP" },
                { description: "AM", value: "AM" },
                { description: "BA", value: "BA" },
                { description: "CE", value: "CE" },
                { description: "DF", value: "DF" },
                { description: "ES", value: "ES" },
                { description: "GO", value: "GO" },
                { description: "MA", value: "MA" },
                { description: "MT", value: "MT" },
                { description: "MS", value: "MS" },
                { description: "MG", value: "MG" },
                { description: "PA", value: "PA" },
                { description: "PB", value: "PB" },
                { description: "PR", value: "PR" },
                { description: "PE", value: "PE" },
                { description: "PI", value: "PI" },
                { description: "RJ", value: "RJ" },
                { description: "RN", value: "RN" },
                { description: "RS", value: "RS" },
                { description: "RO", value: "RO" },
                { description: "RR", value: "RR" },
                { description: "SC", value: "SC" },
                { description: "SP", value: "SP" },
                { description: "SE", value: "SE" },
                { description: "TO", value: "TO" }
            ],

            flag: [
                { description: 'Selecione', value: 0},
                { description: 'Mastercard', value: 'mastercard' },
                { description: 'Amex', value: 'amex'},
                { description: 'Visa', value: 'visa'},
                { description: 'Hipercard', value: 'hipercard' },
                { description: 'Diners Club', value: 'dinersclub'},
                { description: 'Elo', value: 'elo'},
                { description: 'Boleto', value: 'BOLETO_BANCARIO'}
            ],

            formValidated: false,
            chkTerms: false,
            token: null,
            loader: false,

            modal: {
                title: null,
                message: null
            },
            dataPlan: null
        }
    },

    computed: {

        validatedStep1() {

            let self = this
            let data = JSON.parse(JSON.stringify(this.customer))

            delete data.complement
            delete data.cpf

            let validated = true;

            Object.keys(data).map(function(key, index) {

                if (data[key] === null || data[key] === '') {

                    validated = false

                }

            })

            return validated
        },

        validatedStep2() {

            let validated = false

            if (this.validatedStep1) {

                let self = this
                let data = JSON.parse(JSON.stringify(this.plan))

                if (data.plan_id !== null || data.plan_id !== '' && data.plan_id > 0) {

                    validated = true

                }

            }

            return validated
        },

        validatedStep3() {

            let validated = true

            if (this.validatedStep1 && this.validatedStep2) {

                if (this.payment_method === 0) {
                    return false
                }

                if (this.payment_method !== 'Boleto') {

                    if (this.customer.cpf === null ||
                        this.customer.cpf === '' || this.customer.cpf.length < 14) {
                        return false
                    }

                    if (this.card.card_year === null ||
                        this.card.card_year.length < 4) {
                        return false
                    }

                    if (this.card.card_security_code === null ||
                        this.card.card_security_code.length < 3) {
                        return false
                    }


                    let self = this
                    let data = JSON.parse(JSON.stringify(this.card))

                    Object.keys(data).map(function(key, index) {

                        if (data[key] === null || data[key] === '') {

                            validated = false

                        }

                    })
                } else {
                    return validated
                }

            } else {
                validated = false
            }

            return validated
        },

        preparePhone: {

            get() {

                return this.customer.phone
            },

            set(value) {

                if (value !== null) {

                    this.customer.phone = value.replace(/\D/g,"")
                    this.customer.phone = this.customer.phone.replace(/^(\d{2})(\d)/g,"($1) $2")
                    this.customer.phone = this.customer.phone.replace(/(\d)(\d{4})$/,"$1-$2")
                }

            }
        },

        prepareCnpj: {

            get() {

                return this.customer.cnpj
            },

            set(value) {

                if (value !== null) {

                    this.customer.cnpj = value.replace(/\D/g,"")
                    this.customer.cnpj = this.customer.cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
                    this.customer.cnpj = this.customer.cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
                    this.customer.cnpj = this.customer.cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
                    this.customer.cnpj = this.customer.cnpj.replace(/(\d{4})(\d)/,"$1-$2")

                }

            }
        },

        prepareCpf: {

            get() {

                return this.customer.cpf
            },

            set(value) {

                if (value !== null) {

                    this.customer.cpf = value.replace(/\D/g,"")
                    this.customer.cpf = this.customer.cpf.replace(/(\d{3})(\d)/,"$1.$2")
                    this.customer.cpf = this.customer.cpf.replace(/(\d{3})(\d)/,"$1.$2")
                    this.customer.cpf = this.customer.cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
                }
            }
        },

        prepareNumberCardCredit: {

            get() {

                return this.card.card_number
            },

            set(value) {

                if (value !== null) {

                    this.card.card_number =  value.replace(/\D/g,"")
                    this.card.card_number = this.card.card_number.replace(/^(\d{4})\s?\-?\s?(\d{4})\s?\-?\s?(\d{4})\s?\-?\s?(\d{4})$/, '$1-$2-$3-$4')

                }
            }
        },

        getPlanSelected() {

            let plan_id = this.$store.getters.getPlanSelected

            if (plan_id) {

                this.plan.plan_id  = true
                this.selectedPlan = plan_id
            }

            return
        }
    },

    async asyncData({ app }){

        app.uri = app.store.getters.getUri
        app.router = app.store.getters.getRoutes

        return await app.$axios.$get(`${app.uri}/${app.router.plan}`)
    },

    methods: {

        setPlan(value) {

            this.plan.plan_id  = value
            this.selectedPlan = value

        },

        getPlans() {

            let uri = this.$store.getters.getUri
            let routes = this.$store.getters.getRoutes

            axios.get(`${uri}/${routes.plan}`)

            .then(response => {

                let data = response.data

                if (data.success === true) {

                    this.dataPlan = data.data

                }

            })

            .catch(error => {
                alert('Não foi possivel concluir esta operação!');
            })

        },

        findCep() {

            if (this.customer.zip_code  !== null && this.customer.zip_code !== '') {

                this.customer.zip_code = this.customer.zip_code.replace(/\D/g,"")

                let uriViaCep = this.$store.getters.getUriViaCep

                console.log(`${uriViaCep}${this.customer.zip_code}/json/`)

                axios.get(`${uriViaCep}${this.customer.zip_code}/json/`)
                
                .then(response => {

                    if (!response.data.erro) {

                        this.customer.address       = response.data.logradouro
                        this.customer.neighborhood  = response.data.bairro
                        this.customer.city          = response.data.localidade
                        this.customer.complement    = response.data.complemento
                        this.customer.state_selected = response.data.uf.toUpperCase()
                        this.customer.zip_code       = this.prepareCep()

                    } else {
                        alert('Cep não encontrado, verifique!')
                    }

                })
                .catch(error => {

                    alert('Não conseguimos concluir esta operação no momento, tente novamente mais tarde!')

                })

            }

        },

        prepareCep () {

           if (this.customer.zip_code !== null) {

                this.customer.zip_code = this.customer.zip_code.replace(/\D/g,"")
                this.customer.zip_code = this.customer.zip_code.replace(/^(\d{2})(\d)/,"$1.$2")
                this.customer.zip_code = this.customer.zip_code.replace(/(\d{3})(\d)/,"$1-$2")

                return this.customer.zip_code
            }
        },

        validatePassword() {

            if (this.customer.password !== this.customer.password_confirmation) {
                this.modal.title = 'Alerta!'
                this.modal.message = 'As senhas cadastradas não são iguais, verifique!'
                $('#modal').modal()

                this.customer.password = null;
                this.customer.password_confirmation = null;
            }

            return true;
        },

        prepareSendPayment() {


            let customer = JSON.parse(JSON.stringify(this.customer))
            let card = JSON.parse(JSON.stringify(this.card))
            let plan = JSON.parse(JSON.stringify(this.plan))
            let data = {}

            customer.phone      = customer.phone.replace(/\D/g,"")
            customer.cnpj       = customer.cnpj.replace(/\D/g,"")
            customer.zip_code   = customer.zip_code.replace(/\D/g,"")
            data.customer       = customer
            data.plan           = this.plan

            if (this.payment_method === 'Boleto') {

                data.payment_method = 'ticket'

            } else {

                data.payment_method         = this.payment_method
                customer.cpf                = customer.cpf.replace(/\D/g,"")
                card.card_number            = card.card_number.replace(/\D/g,"")
                card.card_date_validated    = `${card.card_year}/${card.card_date_validated}`
                data.card                   = card
            }

            return data;

        },

        finalyPurchase() {

            this.loader = true;

            let data = this.prepareSendPayment()
            let uri = this.$store.getters.getUri
            let routes = this.$store.getters.getRoutes

            console.log(data)

            this.modal.title = null
            this.modal.message = null

            axios.post(`${uri}/${routes.register}`, data)

            .then(response => {

                this.loader = false;

                if (response.status == '201') {

                    this.redirectViewResponse(response)
                    return

                } else {
                    this.modal.title = 'Não foi possivel concluir o cadastro!'
                    this.modal.message = 'Verifique seus dados, (Dados do cartão ou CNPJ para pagamento com Boleto)!'
                    $('#modal').modal()
                    return
                }

            })
            .catch(error => {

               this.loader = false;
               let data = [];

               data = error.body;


               if (error.status == '400') {

                    this.loader = false;
                    this.modal.title = data.data.title
                    this.modal.message = data.data.description
                    $('#modal').modal()

               } else {

                    if (error.status >= '500') {

                        this.modal.title = 'Não foi possivel concluir o cadastro!'
                        this.modal.message = 'Há um problema com o método de pagamento, por favor tente novamente!'
                        $('#modal').modal()

                    }
                }
            })
        },

        redirectViewResponse(response) {

            let params = {}
            let data = response.data.data;

            console.log(data)

            if (data.urlTicket !== undefined) {

                let ticket = [
                    {
                        "name": 'Baixe o PDF',
                        'description': data.urlTicket.url_payment_receipt_pdf
                    },
                    {
                        "name": 'Acesse o link para acessar o boleto',
                        'description': data.urlTicket.url_boleto_bancario
                    },
                    {
                        "name": 'Linha Digitável',
                        'description': data.urlTicket.bar_code
                    }
                ]

                params.ticket = ticket
            }

            params.title = data.title
            params.subTitle = data.description
            params.description = null
            params.descriptionButton = 'Acesse'
            params.to = '/login'
            params.classButton = 'btn btn-primary'
            this.$router.push({name: 'response', params: { params } })
        }

    },

    mounted () {

        // this.getPlans()
        this.getPlanSelected
    }
}
</script>

<style>

.cadastre {
  margin-top: 100px;
}

.cadastre .titulo {
	color: #ff6501;
	font-size: 50px;
}

.cadastre p {
	font-weight: bold;
}

.cadastre table th {
  color: #FFF;
}

.cadastre table td {
  font-weight: bold;
  color: #444;
}

.cadastre .texto-plano {
  color: #ff6501;
}

.cadastre .selo {
  position: absolute;
  right: -8px;
  top: -10px;
  z-index: 1;
}

.titulo-plano-exclusivo {
  font-size: 20px;
  font-weight: bold;
  color: #444;
}

.texto-plano-exclusivo {
  color: #fff; 
  text-align: "justify";
  font-size: 16px;
  margin-top: 5px;
  font-weight: bold;
}

.valor-plano-exclusivo {
  font-size:26px; 
  font-weight: bold;
  color: #fff;
}

/* Anuncie */
.anuncie .titulo {
    margin-top: 140px;
    color: #ff6501;
    font-size: 50px;
}

.anuncie p {
    margin: -20px 0 40px 0;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
}

.anuncie .selo {
    position: absolute;
    right: -8px;
    top: -10px;
    z-index: 1;
}

.titulo-plano-exclusivo {
    font-size: 20px;
    font-weight: bold;
    color: #444;
}

.texto-plano-exclusivo {
    color: #fff;
    text-align: "justify";
    font-size: 16px;
    margin-top: 5px;
    font-weight: bold;
}

.valor-plano-exclusivo {
    font-size: 26px;
    font-weight: bold;
    color: #fff;
}

.block {
    border: 1px solid #ccc;
    height: 280px;
    min-width: 200px;
    margin: 10px 0 50px 0;
    box-shadow: 2px 2px 2px 2px #CCC;
    text-align: center;
}

.block .header {
    text-align: center;
    padding: 10px 0 10px 0;
    color: #FFF;
    background-color: #00aeef;
    border-bottom: 1px solid #00aeef;

}

.block .header h2 {
    font-size: 1.5em;
    font-weight: bold;
}

.block .content {
    text-align: center;
    margin-top: 50px;
}

.block .content sup {

    font-size: 1.5em;
    font-weight: bold;
    color: #ff6501;
    top: -20px;

}

.block .content span {
    font-size: 55px;
    font-weight: 900;
    color: #ff6501;

}

.block button {
    margin-top: 20px;
}

.block .unit {
    width: 250px;
}

.elevated {
    -webkit-box-shadow: 5px 40px 40px 5px #ccc;
    -moz-box-shadow: 5px 40px 40px 5px #ccc;
    box-shadow: 5px 40px 40px 5px #ccc;
}
/* Fim Anuncie */

/*************************************************************
 *
 * STEPS
 *
 *************************************************************/

.steps-form-3 {
    height: 100%;
    position: relative;
  }

.steps-form-3 .steps-row-3 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.steps-form-3 .steps-row-3 {

    bottom: 0;
    position: absolute;
    content: "";
    width: 2px;
    height: 100%;
    background-color: #ff6501;
}


.steps-form-3 .steps-row-3 .steps-step-3 {
    height: 190px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    position: relative;
  }

.steps-form-3 .steps-row-3 .steps-step-3.no-height {
    height: 50px;
  }

.steps-form-3 .steps-row-3 .steps-step-3 p {
margin-top: 0.5rem;
}

.steps-form-3 .steps-row-3 .steps-step-3 button[disabled] {
    opacity: 1 !important;
    filter: alpha(opacity=100) !important;
  }

.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 {
    width: 60px;
    height: 60px;
    border: 2px solid #ff6501;
    background-color: white !important;
    color: #ff6501 !important;
    border-radius: 50%;
    padding: 18px 18px 15px 15px;
    margin-top: -13px;
  }

.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3:hover {
  border: 2px solid #ff6501;
  color: #ff6501 !important;
  background-color: white !important;
}

.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 .fa {
  font-size: 1.7rem;
}

#steps-active {
  border: 2px solid #ff6501;
  color: white !important;
  background-color: #ff6501 !important;
}

/*************************************************************
 *
 * END STEPS
 *
 *************************************************************/

</style>
