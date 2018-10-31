<template>
	<section>
		<div id="blog" class="container blog">

			<div class="row">

				<div class="col-12 col-sm-8 col-md-8">
					
					<h2 class="titulo">Blog</h2>

					<div v-for="post in data.data" :key="post.id">

						<h5 class="text-left">{{ post.title }}</h5>
			
						<img :src="post.path_image" style="width: 100%;" alt="" />				
					
						<div class="mt-4"
							v-html="post.description.substr(0, 600)
							.concat('...')">						
						</div>
					
						<nuxt-link :to="{ name: 'noticias-id', params: { id:post.tag } }">
							continue lendo
						</nuxt-link>			
					
					</div>
					
				</div>

				<div class="col-12 col-sm-4 col-md-4">

					<h2 class="titulo">Rede Social</h2>
					<h5>Curta nossa Fan Page</h5>
					
					<c-facebook-plugin />

					<h5>Tags</h5>
					<div v-for="post in data.data" :key="post.id">
						<nuxt-link class="btn btn-secondary mt-1 mb-1 ml-1 mr-1" :to="{ name: 'noticias-id', params: { id:post.tag } }">
							{{ post.tag }}
						</nuxt-link>
					</div>

				</div>	
			</div>

			<div class="row mt-4">

				<div class="col-12 col-sm-4 col-md-4">
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

		<c-newsletter />
   		<c-footer />
	</section>
</template>

<script>

import axios from 'axios'
import CFacebookPlugin from '~/components/FacebookPlugin.vue'
import CNewsletter from '~/components/Newsletter'
import CFooter from '~/components/Footer'

export default {

    name: 'CNoticias',

  	components: {
		CFacebookPlugin,
	    CNewsletter,
	    CFooter
  	},

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
	}
}
</script>

<style scoped>

.blog .titulo {
	margin: 140px 0 40px 0;
	color: #ff6501;
	font-size: 40px;
}

.blog p {
	text-align: auto;
	font-size: 16px;
	color: #999;
}

.blog h5 {
	margin-bottom: 20px;
	text-align: left;
}

</style>

