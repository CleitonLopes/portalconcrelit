<template>
	 <!-- <div class="container-fluid mt-4" id="brands">

      <div id="logo" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner row w-100 mx-auto" role="listbox">
          <div v-for="(brand, index) in brands" class="carousel-item col-md-3" :class="{ active: index == 0}">
            <div class="panel panel-default">
              <div class="panel-thumbnail">
                <a :href="brand.redirect" :title="brand.name"
                  class="thumb" target="_blank">
                  <img style="width:100px; height: 100px;" class="img-fluid mx-auto d-block"
                  :src="brand.path_image" :alt="brand.alt">
                </a>
              </div>
            </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#logo" role="button" data-slide="prev">
          <i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>
        </a>
        <a class="carousel-control-next text-faded" href="#logo" role="button" data-slide="next">
          <i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>
        </a>
      </div>
  </div> -->
  <div class="container-fluid mt-2">
            <div class="row">
                <div class="col-md-12">
                    <div id="brandCarousel" class="carousel slide" data-ride="carousel">

                        <ol class="carousel-indicators">
                            <li data-target="#brandCarousel" data-slide-to="0" class="active"></li>
                            <!-- <li data-target="#brandCarousel" data-slide-to="1"></li> -->
                        </ol>

                        <!-- Carousel items -->
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
<!--                                     <div class="col-md-2">
                                        <a href="#">
                                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div> -->
                                </div>
                                <!--.row-->
                            </div>
                            <!--.item-->

                            <!-- <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-2">
                                        <a href="#">
                                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-2">
                                        <a href="#">
                                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-2">
                                        <a href="#">
                                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-2">
                                        <a href="#">
                                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-2">
                                        <a href="#">
                                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-2">
                                        <a href="#">
                                            <img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                </div>
                            </div>
 -->
                        </div>
                        <!--.carousel-inner-->
                    </div>
                    <!--.Carousel-->

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

			axios.get(`${uri}/${router.brand}`)
			.then(response => {
					this.brands = response.data
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