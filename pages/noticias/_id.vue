<template>
	<section v-if="post != ''" id="blog" class="mt-60">
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

					<div>
						<img id="loader-facebook" src="~assets/images/loader.gif" alt="loader pagina">
					</div>

					<div id="loaded-plugin-facebook" style="display: none;">
						<c-facebook-plugin />						
					</div>

				</div>	
				
				<div class="col-12 mt-4">
					<nuxt-link to="/noticias" class="btn btn-primary">
						voltar
					</nuxt-link>
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

#loader-facebook {
	top: 10%;
	left: 45%;
	width: 50px;
	height: 50px;
	position: absolute;
	z-index: 2
}

</style>

