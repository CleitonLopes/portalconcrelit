<template>
    <section id="anuncie">
		<div class="container anuncie">
			<div class="row no-gutters">
				<div class="col-12">
					<h2 class="titulo">Anuncie!</h2>
					<p>Planos para divulgar sua Concreteira</p>
				</div>

				<div v-for="(plan, key) in data" class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
					<div class="block" :class="{ elevated: plan.id == selectedPlan }">
						<div class="header">
							<h2>{{ plan.name }}</h2>
						</div>

						<div class="content">
							<sup>R$</sup>
							<span>{{ plan.value }}</span>
							<sup>,00</sup>
						</div>
						<img v-if="plan.best_seller" src="~/assets/images/selo-venda.png"
						title="Selo mais vendido" alt="Selo mais vendido" class="selo">

						<button class="btn btn-success" @click="setPlan(plan.id)">Quero esse!</button>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script>

import axios from 'axios'

export default {

    name: 'Anuncios',
    data () {

        return {
            message: 'Anuncie',
            selectedPlan: null,
            plan: {
                plan_id: null,
                additional_value: false
            },
            dataPlan: null,
        }
    },

    async asyncData({ app }){

        app.uri = app.store.getters.getUri
        app.router = app.store.getters.getRoutes

        return await app.$axios.$get(`${app.uri}/${app.router.plan}`)
    },

    methods: {

        setPlan(value) {

            this.plan.plan_id  = value
            this.selectedPlan = value
            this.$store.dispatch('setPlanSelected', this.plan.plan_id)

            .then(() => {

                this.$router.push('/cadastre-sua-empresa')
            })

        }
    }
}
</script>

<style scoped>

.anuncie .titulo {
    margin-top: 140px;
    color: #ff6501;
    font-size: 50px;
}

.anuncie p {
    margin: -20px 0 40px 0;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
}

.anuncie .selo {
    position: absolute;
    right: -8px;
    top: -10px;
    z-index: 1;
}

.titulo-plano-exclusivo {
    font-size: 20px;
    font-weight: bold;
    color: #444;
}

.texto-plano-exclusivo {
    color: #fff;
    text-align: "justify";
    font-size: 16px;
    margin-top: 5px;
    font-weight: bold;
}

.valor-plano-exclusivo {
    font-size: 26px;
    font-weight: bold;
    color: #fff;
}

.block {
    border: 1px solid #ccc;
    height: 280px;
    min-width: 200px;
    margin: 10px 0 50px 0;
    box-shadow: 2px 2px 2px 2px #CCC;
    text-align: center;
}

.block .header {
    text-align: center;
    padding: 10px 0 10px 0;
    color: #FFF;
    background-color: #00aeef;
    border-bottom: 1px solid #00aeef;

}

.block .header h2 {
    font-size: 1.5em;
    font-weight: bold;
}

.block .content {
    text-align: center;
    margin-top: 50px;
}

.block .content sup {

    font-size: 1.5em;
    font-weight: bold;
    color: #ff6501;
    top: -20px;

}

.block .content span {
    font-size: 55px;
    font-weight: 900;
    color: #ff6501;

}

.block button {
    margin-top: 20px;
}

.block .unit {
    width: 250px;
}

.elevated {
    -webkit-box-shadow: 5px 40px 40px 5px #ccc;
    -moz-box-shadow: 5px 40px 40px 5px #ccc;
    box-shadow: 5px 40px 40px 5px #ccc;
}

</style>
