<template>
	<section v-if="post != ''" id="blog">
		<div class="container blog">

			<div class="row">

				<div class="col-12 col-sm-8 col-md-8">

					<div class="col-12">
						<h2 class="titulo">Blog</h2>
					</div>			

					<h5 class="text-center">{{ post.title }}</h5>

					<div class="text-center">
						<img :src="post.path_image" style="width: 100%;" alt="" />
					</div>

					<div class="mt-4" v-html="post.description"></div>
				
				</div>

				<div class="col-12 col-sm-4 col-md-4">

					<h2 class="titulo">Rede Social</h2>
					<h5>Curta nossa Fan Page</h5>

					<c-facebook-plugin />

				</div>	

				<nuxt-link to="/noticias" class="btn btn-primary">
					voltar
				</nuxt-link>

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
import CFooter from '~/components/Footer.vue'


export default {

    name: 'CPost',

  	components: {
		CFacebookPlugin,
	    CNewsletter,
	    CFooter
  	},

    data () {

        return {

        	post: '',
            loader: false,
            uri: null,
            router: null
        }
	},

    methods: {

        getPostByTag(tag) {

        	const uri = this.$store.getters.getUri
        	const router = this.$store.getters.getRoutes

            this.loader = true

            axios.get(`${uri}/${router.postTag}/${tag}`)

            .then(response => {

                this.loader = false

                if (response.status === 200) {

                    this.post = response.data

                }
            })
            .catch(error => {
                this.loader = false
            })

        }
    },

    mounted () {
    	console.log(this.$route.params)
    	this.getPostByTag(this.$route.params.id)
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

