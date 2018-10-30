<template>
    <div class="container-fluid mt-2">
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
                                <div class="col-12 col-md-2" v-for="brand in getBrands" :key="brand.id">
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
                                <div class="col-12 col-md-2" v-for="brand in getBrands" :key="brand.id">
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
</template>

<script>

import axios from 'axios'

export default {

	name: 'CBrand',

  computed: {

    getBrands () {
      return this.$store.getters.getBrand
    }

  }
}

</script>

<style scoped>

 .carousel-indicators {
  left: 0;
  top: auto;
  bottom: -40px;
}

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