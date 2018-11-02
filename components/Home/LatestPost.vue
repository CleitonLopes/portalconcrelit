<template>
    <section v-if="getLatestPost.length > 0" class="container">
        <div class="row d-flex align-items-stretch">
            <div class="col-12 col-sm-12 col-md-12 col-xl-12">
                <h2 class="titulo">BLOG</h2>
            </div>
            <div v-for="post in getLatestPost" :key="post.id" class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                <div class="card">
                    <img style="height: 100%;" class="card-img-top" :src="post.path_image" alt="Card image cap">
                    <div class="card-body">
                        <div class="block-title">
                            <h5 class="card-title mt-2 mb-2">{{ post.title }}</h5>
                        </div>
                        <no-ssr>        
                            <p class="card-text"
                                v-html="post.description.substr(0, 250).concat('...')">
                            </p>                        
                        </no-ssr>
                        
                        <div class="text-right">
                            <nuxt-link :to="{ name: 'noticias-id', params: { id:post.tag } }"
                                class="btn btn-primary">
                                Continuar
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {    
    name: 'CLatestPost',

    computed: {

        getLatestPost () {

            return this.$store.getters.getLatestPost
        }
    }
}
</script>

<style scoped>

.blog h5 {
  font-size: 22px;
  color: #333;
}

.block-title {
    height: 100px
}

.card-text {
    text-align: justify;
    letter-spacing: -1px;
}

</style>

