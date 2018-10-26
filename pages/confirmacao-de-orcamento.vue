<template>

    <section class="container response" v-if="params">
		<div class="row">
			<div class="col-12 text-center">
				<h1 class="title">{{ params.title }}</h1>
				<img src="~assets/images/logo-header.png" alt="">

				<p class="subTitle">{{ params.subTitle }}</p>

				<div v-if="params.description !== undefined || params.description.length > 0">

					<p class="description" v-for="item in params.description ">
						{{ item }}
					</p>

				</div>

			 	<router-link v-if="params.descriptionButton !== null"
			 		:to="params.to" :class="params.classButton">
		 			{{ params.descriptionButton }}
	 		 	</router-link>

			</div>
		</div>
	</section>

</template>

<script>
export default {

    name: 'CConfirmacaoOrcamento',

    data () {

		return {
			params: null
		}
	},

	methods: {

		copy(value) {

			if( window.clipboardData && clipboardData.setData ) {
				clipboardData.setData("Text", value.innerHTML);
			}
			return false;
		}
	},

	mounted() {

    this.params = this.$route.params

		if ( this.params == null || this.params == undefined) {
			this.$router.push('/orcamento');
		}
	}
}
</script>

<style scoped>

.response {
    margin-top: 100px;
  }

.response .title {

  margin: 20px 0 20px 0;
  color: #ff6501;
  font-size: 36px;
}

.response .subTitle {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
}

.response .description {
  font-size: 16px;
  text-align: center;
  margin-top: 0;
}

</style>

