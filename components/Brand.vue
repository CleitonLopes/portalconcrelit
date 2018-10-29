<template>
  <div>
    <div v-if="loaderBrand" class="row">
      <div class="col-12 text-center mt-2">
        <img id="loader" src="~assets/images/loader.gif" alt="loader pagina">
      </div>
    </div>

    <div v-else class="container-fluid mt-2">
      <div class="row">
        <div class="col-md-12">
          <div id="brandCarousel" class="carousel slide" data-ride="carousel" data-interval="2500">

            <ol class="carousel-indicators">
              <li data-target="#brandCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#brandCarousel" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner">
              <div class="carousel-item active text-center">
                <div class="row">
                  <div class="col-12 col-md-2" v-for="(brand, index) in brands">
                    <a :href="brand.redirect" :title="brand.name"
                    class="thumb" target="_blank">
                    <img style="max-width:100px; height: 100px;"
                    :src="brand.path_image" :alt="brand.alt">
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item text-center">
              <div class="row">
                <div class="col-12 col-md-2" v-for="(brand, index) in brands">
                  <a :href="brand.redirect" :title="brand.name"
                  class="thumb" target="_blank">
                  <img style="max-width:100px; height: 100px;"
                  :src="brand.path_image" :alt="brand.alt">
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

	import axios from 'axios'

	export default {

		name: 'CBrand',

		data () {

			return {

		      brands: [],
          loaderBrand: false
			}
		},

  	async asyncData({ app }) {

			app.uri = app.store.getters.getUri
      app.router = app.store.getters.getRoutes

			let data = await app.$axios.$get(`${app.uri}/${app.router.brand}`)
			return { data }

		},

		mounted () {

			let uri = this.$store.getters.getUri
      let router = this.$store.getters.getRoutes

      this.loaderBrand = true

			axios.get(`${uri}/${router.brand}`)
			.then(response => {

          this.loaderBrand = false
					this.brands = response.data

			})
      .catch(error => {
          this.loaderBrand = false
      })
		}
  }

</script>

<style>
 .carousel-indicators {
  left: 0;
  top: auto;
  bottom: -40px;

}

/* The colour of the indicators */
.carousel-indicators li {
    background: #ff6501;
    border-radius: 50%;
    width: 8px;
    height: 8px;
}

.carousel-indicators .active {
  background: #ff6501;
}


</style>