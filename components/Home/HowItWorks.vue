<template>
	 <section id="como-funciona" class="container como-funciona mt-2">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-xl-12">
          <h2 class="titulo">COMO FUNCIONA?</h2>
        </div>

        <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
          <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
          <div class="sub-titulo">Localização</div>
          <p>Insira o cep ou endereço de sua obra. Assim, iremos verificar as concreteiras mais próximas.</p>
          <p></p>
        </div>

        <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
          <i class="fa fa-pencil-square fa-3x" aria-hidden="true"></i>
          <div class="sub-titulo">Solicite</div>
          <p>Conte-nos qual tipo de concreto e resitência que você precisa e solicite orçamentos.</p>
        </div>

        <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
          <i class="fa fa-mouse-pointer fa-3x" aria-hidden="true"></i>
          <div class="sub-titulo">Escolha</div>
          <p>Receba e avalie e compare os orçamentos que melhor se adequem a sua necessidade.</p>
        </div>

        <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
          <i class="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
          <div class="sub-titulo">Compre</div>
          <p>Realize a compra e negocie direto com o fornecedor que você optou.</p>
        </div>
      </div>
    </section>
</template>

<script>

	export default {

		name: 'CHowItWorks'

	}

</script>

<style scoped>

.como-funciona i {
  margin-bottom: 20px;
  color: #ff6501;
}

.como-funciona .sub-titulo {
  margin-bottom: 10px;
  color: #333;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
}

.como-funciona p {
  font-size: 16px;
  text-align: center;
  color: #333;
  margin-left: 30px;
}

</style>