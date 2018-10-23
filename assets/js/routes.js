

const routes = [

    { path: '/', component: cpHome },
    { path: '/anuncie', component: cpAnuncie },
    { path: '/cadastre-sua-empresa', component: cpCadastroEmpresa },
    { path: '/blog', component: cpBlog },
    { path: '/contato', component: cpContato },
    { path: '/pedido', component: cpPedido, name: 'pedido' },
    { path: '/response', component: cpResponse, name: 'response', props: true },
    { path: '/newsletter', component: cpNewsletter },
    { path: '/login', component: cpLogin },
    { path: '/post', component: cpPost, name: 'post', props: true},

    {
        path: '/areacliente',
        component: cpAreaCliente,

        beforeEnter: (to, from, next) => {

            storage = JSON.parse(localStorage.getItem('user'))

            if (storage && (storage.access_token !== null || storage.access_token !== '')) {
                next()
            } else {
                next('/login')
            }
         }
    }

];

const router = new VueRouter({

    //mode: 'history',
    routes,

    scrollBehavior (to, from, savedPosition) {

        return { x: 0, y: 0 }

    }

})