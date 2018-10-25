<template>

<div>

    <!-- Header Area Cliente -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <a class="navbar-brand" href="#">
            <img src="~assets/images/logo-header.png" alt="" class="d-inline-block align-top">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="#" class="nav-link">Olá {{customer.name}}</router-link>
                </li>
            </ul>

            <router-link :to="{ name: 'login'}"  target="_blank">
                <button class="btn btn-primary my-2 my-sm-0" type="button" @click.stop.prevent="logout">Sair</button>
            </router-link>

        </div>
    </nav>
    <!-- Fim Header -->


    <div class="container areacliente">

		<div class="row">

            <div class="col-12 col-sm-12 col-md-2 col-lg-2">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-dados-geral-tab"
                        data-toggle="pill" href="#v-pills-dados-geral" role="tab"
                        aria-controls="v-pills-home" aria-selected="true">Cadastro
                    </a>

                    <a class="nav-link" id="v-pills-password-tab"
                        data-toggle="pill" href="#v-pills-password" role="tab"
                        aria-controls="v-pills-password" aria-selected="true">Alterar Senha
                    </a>

                    <a class="nav-link" id="v-pills-profile-tab"
                        data-toggle="pill" href="#v-pills-profile" role="tab" @click="getOrders"
                        aria-controls="v-pills-profile" aria-selected="false">Orçamentos
                    </a>

                    <a class="nav-link" id="v-pills-messages-tab" @click="getFinancial"
                        data-toggle="pill" href="#v-pills-messages" role="tab"
                        aria-controls="v-pills-messages" aria-selected="false">Pagamentos
                    </a>

                    <a class="nav-link" id="v-pills-plano-tab" @click="getCustomerPlan"
                        data-toggle="pill" href="#v-pills-plano" role="tab"
                        aria-controls="v-pills-plano" aria-selected="false">Assinatura
                    </a>

                </div>
            </div>


            <div class="col-12  col-sm-12 col-md-10 col-lg-10">


                <div class="tab-content" id="v-pills-tabContent">

                    <!-- Meu Cadastro -->
                    <div class="tab-pane fade show active" id="v-pills-dados-geral" role="tabpanel" aria-labelledby="v-pills-dados-geral-tab">
                        <div class="row">

                            <div class="col-12">
				                <h4 class="titulo-panel">Meu Cadastro</h4>
			                </div>

                            <div class="col-12">
                                <p><b>Dados de Acesso</b></p>
                            </div>

                            <div class="form-group col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <input type="email" readonly required class="form-control" placeholder="Email" v-model="customer.email">
                            </div>

                            <div class="col-12">
                                <p><b>Dados de Contato</b></p>
                            </div>

                            <div class="form-group col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <input type="text" readonly class="form-control" required placeholder="Nome" v-model="customer.name">
                            </div>

                            <div class="form-group col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <input type="text" readonly class="form-control" maxlength="15" required v-model="customer.phone">
                            </div>

                            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2">
                                <p><b>Dados da Concreteira</b></p>
                            </div>

                            <div class="form-group col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <input type="text" readonly class="form-control" required placeholder="Nome Fantasia"
                                v-model="customer.name_fantasy">
                            </div>

                            <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <input type="text" readonly class="form-control" maxlength="18" required placeholder="CNPJ"
                                v-model="customer.cnpj">
                            </div>

                            <div class="form-group col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                <input @blur="findCep()" readonly maxlength="8" type="text" class="form-control"
                                placeholder="CEP" v-model="customer.zip_code">
                            </div>

                            <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <input type="text" readonly class="form-control" placeholder="Endereço"
                                v-model="customer.address">
                            </div>

                            <div class="form-group col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                <input type="text" readonly class="form-control"
                                placeholder="N°" v-model="customer.number">
                            </div>

                            <div class="form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <input type="text" readonly class="form-control" placeholder="Complemento"
                                v-model="customer.complement">
                            </div>

                            <div class="form-group col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                <input type="text" readonly class="form-control" required placeholder="Bairro"
                                v-model="customer.neighborhood">
                            </div>

                            <div class="form-group col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                <input type="text" readonly class="form-control" required placeholder="Cidade"
                                v-model="customer.city">
                            </div>

                            <div class="form-group col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                <select v-model="customer.state_selected" readonly class="form-control">
                                    <option v-for="item in state" :value="item.value">
                                        {{ item.description }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- Fim meu Cadastro  -->

                    <!-- Alterar Senha -->

                     <div class="tab-pane fade" id="v-pills-password" role="tabpanel" aria-labelledby="v-pills-password-tab">

                        <div class="col-12 mt-40">

                            <h4 class="titulo-panel">Alterar Senha</h4>

                            <div class="row">

                                <div class="col-12">
                                    <p>
                                        <b>
                                            Ao confirmar alteração de senha, você será redirecionado para tela de login, onde
                                            seu acesso será com a senha nova cadastrada.
                                        </b>
                                    </p>
                                </div>

                                 <div class="form-group col-12 col-sm-12 col-md-5">
                                    <input id="password" type="password" class="form-control" required
                                    :class="{ 'is-valid': password != null }" placeholder="Senha Atual"
                                    v-model="password">
                                    <small v-show="(password == null || password == '')" style="color: #ff7675;">Password obrigatório *</small>
                                </div>

                                <div class="form-group col-12 col-sm-12 col-md-5">
                                    <input id="password-confirmation" type="password" class="form-control" required
                                    :class="{ 'is-valid': password_confirmation != null }" placeholder="Nova Senha"
                                    v-model="password_confirmation" @blur="validatePassword()">
                                    <small v-show="(password_confirmation == null || password_confirmation == '')" style="color: #ff7675;">Confirmação de Password obrigatório *</small>
                                </div>

                                <div class="form-group col-12 col-sm-12 col-md-2">
                                    <a href="#" @click.stop.prevent="setPassword()">
                                        <i class="fa fa-eye fa-2x"></i>
                                    </a>
                                </div>

                                <div class="col-12">
                                    <button class="btn btn-success" type="button" @click="alterPassword()">Salvar</button>

                                     <img v-show="loader" id="loader"
                                    src="~assets/images/loader.gif" alt="loader pagina">
                                </div>
                            </div>
                        </div>
                     </div>

                    <!-- Fim Alteração de Senha -->

                    <!-- Orçamentos recebidos -->
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                        <div class="col-12 mt-40">
                            <h4 class="titulo-panel">Orçamentos Recebidos</h4>
                        </div>

                        <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in dataOrder">
                            <td>{{ order.name }}</td>
                            <td>{{ order.phone }}</td>
                            <td>{{ order.email }}</td>
                            <td>{{ order.formatted_address }}</td>

                            <td>
                                <button type="button" class="btn btn-primary"
                                    @click="orderDetail(order)">
                                    <i class="fa fa-search"></i>
                                </button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <!-- Fim Orçamentos Recebidos -->

                    <!-- Inicio Pagamentos -->
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                        aria-labelledby="v-pills-messages-tab">

                        <div class="col-12 mt-40">
                            <h4 class="titulo-panel">Pagamentos</h4>
                        </div>

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Parcela</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Método de Pagamento</th>
                                <th scope="col">Status</th>
                                <th scope="col">Data Pagamento</th>
                                <th scope="col">Próximo Pagamento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="financial in financials">
                                    <td>{{ financial.installment }}</td>
                                    <td>R${{ financial.value }}</td>
                                    <td align="center">{{ financial.method_payment.toUpperCase() }}</td>
                                    <td align="center" v-if="financial.paid">Pago</td>
                                    <td align="center" v-else>-</td>
                                    <td>{{ financial.date_payment }}</td>
                                    <td>{{ financial.date_next_payment }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Fim Pagamentos -->

                    <!-- Inicio Assinatura -->

                    <div class="tab-pane fade" id="v-pills-plano" role="tabpanel" aria-labelledby="v-pills-plano-tab">

                        <div class="col-12">
                            <h4 class="titulo-panel">Assinatura</h4>
                        </div>


                        <table v-if="customerPlan !== null" class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Plano</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Inicio do Plano</th>
                                    <th scope="col">Fim do Plano</th>
                                    <th scope="col">Parcelas</th>
                                    <th scope="col">Status</th>
                                    <th v-if="storage.error == 'SUBSCRIPTION_EXPIRED'"
                                        class="text-center" scope="">Renovar</th>
                                    <th v-if="customerPlan.payu_subscription_id != null"
                                        class="text-center" scope="">Cancelar</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Plano Mensal</td>
                                    <td>R${{ customerPlan.value }}</td>
                                    <td>{{ customerPlan.created_at }}</td>
                                    <td>{{ customerPlan.date_next_payment }}</td>
                                    <td v-if="customerPlan.number_installments > 0">
                                        {{ customerPlan.number_installments }}
                                    </td>
                                    <td v-else>Não Definido</td>
                                    <td>Ativo</td>
                                    <td v-if="storage.error == 'SUBSCRIPTION_EXPIRED'" align="center">
                                        <button type="button" class="btn btn-primary"
                                            @click="showElementSignature">
                                            Renovar
                                        </button>
                                    </td>
                                    <td v-if="customerPlan.payu_subscription_id != null" align="center">
                                         <button type="button" class="btn btn-danger" onclick="$('#modal-cancel').modal()">
                                           Cancelar
                                       </button>
                                    </td>
                               </tr>

                           </tbody>
                        </table>

                        <hr>

                        <div v-show="showSignature">

                            <div class="row no-gutters">

                                <div class="col-12 mt-40">
                                    <h4 class="texto-plano">ESCOLHA SEU PLANO</h4>
                                </div>

                                <div class="container anuncie">
                                    <div class="row no-gutters">
                                        <div v-for="(plan, key) in dataPlan" class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
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
                                            <span v-if="dataPlan !== null" class="valor-plano-exclusivo">
                                                R$ {{dataPlan[0]['value_additional']}}/mês
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-12 mt-4 mb-2">
                                    <h4 class="texto-plano">PAGAMENTO</h4>
                                </div>

                                <!-- Cp Bandeiras -->

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

                                <!-- Cp Dados Cartão -->

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

                            <div class="row mb-100">
                                <button class="btn btn-success" :disabled="!validatedStep2"
                                    type="button" @click="finalyPurchase">
                                    Finalizar Compra
                                </button>

                                <img v-show="loader" id="loader"
                                    src="~assets/images/loader.gif" alt="loader pagina">

                            </div>
                        </div>
                    </div>
                    <!-- Fim Assinatura -->
                </div>
            </div>

        </div>

    </div>

    <div class="modal fade" id="modal-cancel" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal-cancel">Atenção</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Esse processo é irreversivel, mesmo assim deseja continuar o cancelamento do plano?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Não confirmo</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click=cancelSubscription()>
                        Confirmo
                    </button>
                </div>
            </div>
        </div>
    </div>

    <c-modal :params='modal' />
</div>

</template>

<script>

import axios from 'axios'
import CModal from '~/components/Modals/Modal.vue'
import CModalOrder from '~/components/Modals/ModalOrcamento.vue'
import Vue from 'vue'

export default {

    name: 'CAreaCliente',

    components: {
        CModal,
        CModalOrder
    },

    data() {

        return {

            customer: {
                name: null,
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

            password: null,
            password_confirmation: null,

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

            modalOrder: null,
            storage: null,
            showSignature: false,
            financials: null,
            customerPlan: null,
            dataPlan: null,
            dataOrder: null,
            routes: null,
            uri: null,
            token: null,
        }
    },

    computed: {

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

        validatedStep1() {

            let validated = false

            let self = this
            let data = JSON.parse(JSON.stringify(this.plan))

            if (data.plan_id !== null || data.plan_id !== '' && data.plan_id > 0) {
                validated = true
            }

            return validated
        },

        validatedStep2() {

            let validated = true

            if (this.validatedStep1) {

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

                    return validated;
                }

            } else {

                validated = false
            }

            return validated
        },

    },

    methods: {

        validatePassword() {

            if (this.customer.password !== this.customer.password_confirmation) {
                this.modal.title = 'Alerta!'
                this.modal.message = 'As senhas cadastradas estão não são iguais, verifique!'
                $('#modal_payment').modal()
                return false
            }

            return true;
        },

        // Seta o plano
        setPlan(value) {

            this.plan.plan_id  = value
            this.selectedPlan = value
        },

        /*
        * Busca dados do cadastro do cliente
        */
        getCustomer() {

            let user_id = this.storage.data.id

            axios.get(`${this.uri}/${this.routes.customer}/user/${user_id}`, {
                headers: { 'Authorization': this.token }
            })

            .then(response => {

                let data = response.data

                if (data.success === true) {

                    this.customer = data.data

                }

            })
            .then(() => {
                this.prepareMaskCustomer()
            })
        },

        prepareMaskCustomer() {

            let phone = this.customer.phone.replace(/\D/g,"")
            phone = phone.replace(/^(\d{2})(\d)/g,"($1) $2")
            phone = phone.replace(/(\d)(\d{4})$/,"$1-$2")

            let cnpj = this.customer.cnpj.replace(/\D/g,"")
            cnpj = cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
            cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
            cnpj = cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
            cnpj = cnpj.replace(/(\d{4})(\d)/,"$1-$2")

            let zip_code = this.customer.zip_code
            zip_code = zip_code.replace(/^(\d{2})(\d)/,"$1.$2")
            zip_code = zip_code.replace(/(\d{3})(\d)/,"$1-$2")

            this.customer.phone = phone
            this.customer.cnpj = cnpj
            this.customer.zip_code = zip_code

        },

        /*
        * Busca dados do Financeiro
        */
        getFinancial() {

            axios.get(`${this.uri}/${this.routes.financial}/customer/${this.customer.id}`, {
                headers: { 'Authorization': this.token }
            })

            .then(response => {

                let data = response.data

                if (data.success === true) {

                    this.financials = data.data

                }

            })
        },

        /*
        * Busca dados do ultimo plano do cliente
        */
        getCustomerPlan() {

            axios.get(`${this.uri}/${this.routes.financial}/customer/${this.customer.id}/plan`, {

                headers: { 'Authorization': this.token }

            })

            .then(response => {

                let data = response.data

                if (data.success === true) {

                    this.customerPlan = data.data

                }

            })

        },

        getPlans() {

            axios.get(`${this.uri}/${this.routes.plan}`)

            .then(response => {

                let data = response.data

                if (data.success === true) {

                    this.dataPlan = data.data

                }

            })

        },

        getOrders() {

            if (this.customer.id !== null) {

                axios.get(`${this.uri}/${this.routes.notification}/${this.customer.id}`, {

                    headers: { 'Authorization': this.token }
                })

                .then(response => {

                    let data = response.data

                    if (data.success === true) {

                        this.dataOrder = data.data

                    }

                })

            }

        },

        orderDetail(order) {

            this.modalOrder = {

                "type_concrete": order.type_concrete,
                "resistence_concrete_selected": order.resistence_concrete_selected,
                "piece_concrete_selected": order.piece_concrete_selected,
                "quantity_concrete": order.quantity_concrete,
                "message": order.message
            }

            $('#modal_order').modal()

        },

        showElementSignature() {

            this.showSignature = !this.showSignature

            if (this.showSignature) {
                this.getPlans()
            }

        },

        prepareSendPayment() {

            let customer = JSON.parse(JSON.stringify(this.customer))
            let card = JSON.parse(JSON.stringify(this.card))
            let plan = JSON.parse(JSON.stringify(this.plan))
            let data = {}

            data.customer         = customer
            data.plan             = this.plan

            if (this.payment_method === 'Boleto') {

                data.payment_method = 'ticket'

            } else {

                data.payment_method         = this.payment_method
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

            this.$http.post(`${uri}/${routes.newSubscription}`, data)

            .then(response => {

                this.loader = false;

                if (response.status == '201') {

                    this.redirectViewResponse(response)

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


        // Cancelamento de Assinatura
        cancelSubscription () {

            let subscriptionId  = null

            if (subscriptionId = this.customerPlan.payu_subscription_id) {

                this.loader = true;

                let uri = this.$store.getters.getUri
                let routes = this.$store.getters.getRoutes

                this.modal.title = null
                this.modal.message = null

                this.$http.delete(`${uri}/${routes.cancelSubscription}/${subscriptionId}/user/${this.customer.user_id}`)

                .then(response => {

                    this.loader = false;

                    if (response.status == '200') {

                        this.modal.title = response.data.data.title
                        this.modal.message = response.data.data.description
                         $('#modal').modal()

                        setTimeout( () => {

                            $('#modal').modal('toggle')
                            this.logout()

                        }, 2000)
                    }

                })
                .catch(error => {
                    console.log(error)
                    this.loader = false;
                    this.modal.title = error.body.title
                    this.modal.message = error.body.description
                    $('#modal').modal()

                })
            }
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
            this.$router.push({
                name: 'confirmacao-de-compra',
                params: params ,props: true })
        },

        alterPassword() {

            if (this.validateAlterPassword()) {

                this.loader = true;

                this.modal.title = null
                this.modal.message = null

                let data = {
                    'user_id': this.customer.user_id,
                    'email': this.customer.email,
                    'password': this.password,
                    'password_confirmation': this.password_confirmation
                }

                axios.post(`${this.uri}/${this.routes.alterPassword}`, data, {
                    headers: { 'Authorization': this.token }
                })

                .then(response => {

                    this.loader = false;
                    let data = response.data

                    if (response.status == '200') {

                        this.modal.title = data.data
                        this.modal.message = 'Fazendo o logout...'
                        $('#modal').modal()

                        setTimeout( () => {

                            $('#modal').modal('toggle')
                            this.logout()

                        }, 1000)
                    }

                })
                .catch(error => {

                    this.loader = false;
                    this.modal.title = 'Atenção!'
                    this.modal.message = error.response.data
                    $('#modal').modal()

                })
            }

        },

        validateAlterPassword() {

            let validated = true

            if (this.password === null || this.password === '') {
                validated = false;
            }

            if (this.password_confirmation === null
                || this.password_confirmation === '') {
                validated = false;
            }

            return validated
        },

        setPassword () {

            let password = document.getElementById('password')
            let password_confirmation = document.getElementById('password-confirmation')

            if (password.type === 'password' && password_confirmation.type === 'password') {

                password.type = 'text'
                password_confirmation.type = 'text'

            } else {

                password.type = 'password'
                password_confirmation.type = 'password'
            }
        },

        logout() {

            localStorage.removeItem('user')
            this.$router.push('/login')

        }

    },

    mounted() {

        this.uri = this.$store.getters.getUri
        this.routes = this.$store.getters.getRoutes

        this.storage = JSON.parse(localStorage.getItem('user'))

        if (this.storage !== null) {

            this.token = `${this.storage.token_type} ${this.storage.access_token}`

            this.$store.dispatch('setStorage', this.storage)

            .then(() => {

                this.getCustomer()

            })

        } else {

            this.$router.push('/login')
        }

    }
}
</script>

<style scoped>

.areacliente {
    margin-top: 200px;
}

.areacliente .titulo {
	color: #ff6501;
    font-size: 40px;

}

.areacliente .titulo-panel {
	color: #ff6501;
    font-size: 28px;
    text-align: center;
    margin: 10px 0 20px 0;

}

.areacliente .selo {
    position: absolute;
    right: -8px;
    top: -10px;
    z-index: 1;
}

.areacliente .texto-plano {
  color: #ff6501;
}

</style>

