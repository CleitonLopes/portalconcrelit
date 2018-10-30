<template>
	<section id="depoimentos" class="container-fluid depoimentos">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-12 col-md-12 col-xl-12">
					<h2 class="titulo">DEPOIMENTOS</h2>
				</div>
				<div v-for="deposition in getDepositions" :key='deposition.id' class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
					<div class="card text-white bg-primary mb-3 text-center box-card">
						<div class="card-header">
							<i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
							<span>{{ deposition.title }}</span>
						</div>
						<div class="card-body text-left">
							<div class="card-title">
								<i class="fa fa-star fa-lg" aria-hidden="true"></i>
								<i class="fa fa-star fa-lg" aria-hidden="true"></i>
								<i class="fa fa-star fa-lg" aria-hidden="true"></i>
								<i class="fa fa-star fa-lg" aria-hidden="true"></i>
								<i class="fa fa-star fa-lg" aria-hidden="true"></i>
							</div>
							<p class="card-text">
								{{ deposition.description }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {

	name: 'CDeposition',

	computed: {

		getDepositions () {
			return this.$store.getters.getDepositions
		}
	}
}

</script>

<style scoped>

.depoimentos {
  margin-top: 40px;
  background-color: #f5f5f5;
  padding-bottom: 40px;
}

.depoimentos i {
  margin-right: 5px;
}

.depoimentos .card-title i{
    color: #fffc01;
}

.depoimentos span {
  font-size: 22px;
}

.depoimentos p {
  font-size: 14px;
  text-align: justify;
}

.box-card {
  height: 100%;
}

</style>