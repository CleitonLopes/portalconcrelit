import Vuex from 'vuex'

const createStore = () => {

    return new Vuex.Store({

        actions: {

            setTypeSearchAddress(store, payload) {
                return store.commit('setTypeSearchAddress', payload)
            },

            setZipCode(store, payload) {
                return store.commit('setZipCode', payload)
            },

            setDataAddress(store, payload) {
                return store.commit('setDataAddress', payload)
            },

            setToken(store, payload) {
                return store.commit('setToken', payload)
            },

            setStorage(store, payload) {
                return store.commit('setStorage', payload)
            },

            setJsonState(store, payload) {
                return store.commit('setJsonState', payload)
            },

            setJsonCities(store, payload) {
                return store.commit('setJsonCities', payload)
            },

            setPlanSelected(store, payload) {
                return store.commit('setPlanSelected', payload)
            },

            setBrands(store, payload) {
                return store.commit('setBrands', payload)
            },

            setDepositions(store, payload) {
                return store.commit('setDepositions', payload) 
            },

            setLatestPost(store, payload) {
                return store.commit('setLatestPost', payload)
            }

        },

        mutations: {

            setTypeSearchAddress(state, payload) {
                state.typeSearchAddress = payload
            },

            setZipCode(state, payload) {
                state.zipCode = payload
            },

            setDataAddress(state, payload) {
                state.dataAddress = payload
            },

            setToken(state, payload) {
                state.token = payload
            },

            setStorage(state, payload) {
                state.storage = payload
            },

            setJsonState(state, payload) {
                state.states = payload
            },

            setJsonCities(state, payload) {
                state.cities = payload
            },

            setPlanSelected(state, payload) {
                state.planSelected = payload
            },

            setBrands(state, payload) {
                state.brands = payload
            },

            setDepositions(state, payload) {
                state.depositions = payload
            },

            setLatestPost(state, payload) {
                state.latestPost = payload
            },

        },

        state: {

            typeSearchAddress: 'zipCode', 
            zipCode: null,
            dataAddress: null,

            // uri:'http://concretousinadoapi.com.br/api/public/api',
            uri:'https://concretousinado.com.br/api/public/api',

            uriViaCep: 'https://viacep.com.br/ws/',
            uriGeocode: 'https://maps.googleapis.com/maps/api/geocode/json?',
            keyGoogle: 'key=AIzaSyASIpKCFSAc7tsSj2Bj62xMCoHeCqSIBvE',

            routes: {
                accessToken: 'access_token',
                forgotPassword: 'forgot-password',
                alterPassword: 'alter-password',
                register: 'register',
                newSubscription: 'new-subscription',
                cancelSubscription: 'cancel-subscription',
                user: 'user',
                customer: 'customer',
                financial: 'financial',
                plan: 'plan',
                order: 'order',
                notification: 'notification-order',
                newsletter: 'newsletter',
                brand: 'brand',
                lastPost: 'last-post',
                lastDeposition: 'last-deposition',
                blog: 'post',
                postTag: 'post-tag'
            },

            storage: null,

            planSelected: null,

            // Array de estados Brasileiros https://github.com/felipefdl/cidades-estados-brasil-json
            states: null,

            // Array de cidades Brasileiras https://github.com/felipefdl/cidades-estados-brasil-json
            cities: null,

            brands: [],

            depositions: [],

            latestPost: [],

            token: null

        },

        getters: {

            getTypeSearchAddress: state => {
                return state.typeSearchAddress
            },

            getZipCode: state => {
                return state.zipCode
            },

            getDataAddress: state => {
                return state.dataAddress
            },

            getToken: state => {
                return state.token != null
            },

            getUri: state => {
                return state.uri
            },

            getUriGeocode: state => {
                return state.uriGeocode
            },

            getUriViaCep: state => {
                return state.uriViaCep
            },

            getKeyGoogle: state => {
                return state.keyGoogle
            },

            getRoutes: state => {
                return state.routes
            },

            getStorage: state => {
                return state.storage
            },

            getPlanSelected: state => {
                return state.planSelected
            },

            getBrand: state => {
                return state.brands
            },

            getDepositions: state => {
                return state.depositions
            },

            getLatestPost: state => {
                return state.latestPost
            }

        }

    })
}

export default createStore