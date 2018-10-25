<template>
    
    <section id="blog">
		<div class="container blog">
			<div v-if="data" class="row">
				<div class="col-12">
					<h2 class="titulo">Blog</h2>
				</div>

		        <div v-if="loader" class="row">
		            <div class="col-12 text-center mt-4">
		                <img id="loader" src="~assets/images/loader.gif" alt="loader pagina">
		            </div>
		        </div>

				<div v-for="post in data.data" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<h5 class="text-center">{{ post.title }}</h5>
							<img src="~assets/images/banner-concrelit.jpg" class="img-fluid" alt="" />
							<div class="mt-4"
								v-html="post.description.substr(0, 600).concat('...')">
							</div>

					<nuxt-link :to="{ name: 'noticias-id', params: { id:post.title.replace(/\s+/g, '-').toLowerCase()} }" class="btn btn-primary">
						Continuar
					</nuxt-link>
				</div>
			</div>

			<div class="row mt-4">
				<div class="col-12">
					<button v-if="data.prev_page_url" type="button" class="btn btn-secondary mb-2"
						@click="getNextOrPrev(data.prev_page_url)">
						<i class="fa fa-angle-double-left" aria-hidden="true"></i>
						Publicações Recentes
					</button>

					<button v-show="data.next_page_url" type="button" class="btn btn-secondary mb-2"
						@click="getNextOrPrev(data.next_page_url)">
						Publicações Anteriores
						<i class="fa fa-angle-double-right" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		</div>
	</section>

</template>

<script>

import axios from 'axios'

export default {

    name: 'CNoticias',
    data () {

        return {
			
            loader: false,
            uri: null,
            router: null
        }
	},
	
	async asyncData({ app }) {

		app.uri = app.store.getters.getUri
        app.router = app.store.getters.getRoutes

		let data = await app.$axios.$get(`${app.uri}/${app.router.blog}`)		
		return { data }
	
	},

    methods: {
        
        getNextOrPrev(uri) {

            this.loader = true

            axios.get(uri)

            .then(response => {

                this.loader = false

                if (response.status === 200) {

                    this.data = response.data

                }
            })
            .catch(error => {
                this.loader = false
            })

        }
    },    
}
</script>

<style scoped>

.blog .titulo {
	margin: 140px 0 40px 0;
	color: #ff6501;
	font-size: 50px;
}

.blog p {
	text-align: auto;
	font-size: 16px;
	color: #999;
}

.blog h5 {
	margin-bottom: 20px;
}

</style>

