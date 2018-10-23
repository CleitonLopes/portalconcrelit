const store = new Vuex.Store({

actions: {

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
    }

},

mutations: {

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
    }

},

state: {

    zipCode: null,

    dataAddress: null,

    uri:'http://concretousinadoapi.com.br/api',
    //uri:'https://concretousinado.com.br/api',

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
        blog: 'post'
    },

    storage: null,

    planSelected: null,

    // Array de estados Brasileiros https://github.com/felipefdl/cidades-estados-brasil-json
    states: null,

    // Array de cidades Brasileiras https://github.com/felipefdl/cidades-estados-brasil-json
    cities: null,

    token: null

},

getters: {

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

    getRoutes: state => {
        return state.routes
    },

    getStorage: state => {
        return state.storage
    },

    getPlanSelected: state => {
        return state.planSelected
    }

}
})