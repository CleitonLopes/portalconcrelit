<template>

	<section id="sobre">
		<div class="container sobre">
			<div class="row no-gutters">
				<div class="col-12">
					<h2 class="titulo">Sobre a Concrelit!</h2>
				</div>

				<div class="col-12 mt-4">
					<p>
						A história do ConcretoUsinado.com.br inicia em 2018, quando o fundador Bruno Reganati, engenheiro de produção, especialista em marketing digital, une conhecimentos adquiridos ao longo se sua carreira em busca de inovação no mercado de engenharia civil, com uma simples proposta: criar uma solução para aumentar as vendas de concreto usinado para concreteiras por meio da internet.
					</p>

					<p class="text-center"><strong>“Um idealista é uma pessoa que ajuda os outros a prosperar.” HENRY FORD</strong></p>

					<p>
						Esta frase resume o propósito desta plataforma: ser um portal de publicidade, sem depender de intermediações, de forma a unir os consumidores finais às empresas prestadoras de serviço de concreto usinado.
					</p>

					<p>
						O principal objetivo do portal é, para os consumidores finais e compradores que atuam para construtoras, trazer facilidade no recebimento de orçamentos de concreto usinado para todas as regiões do Brasil, e, para as concreteiras, trazer oportunidade de venda através da internet, dentro de um raio de 35km, para manter a qualidade do concreto até seu tempo de descarga.
					</p>

					<p>
						O site, visa agilizar o processo de localização de concreteiras em todas as regiões do Brasil, divulgando-as e auxiliando em suas estratégias de captação de clientes online. Busca também, reduzir tempo de procura de orçamentos do consumidor final, simplificando o processo de cotação, criando facilidade para o mesmo.
					</p>
				</div>

			</div>
		</div>

    <c-newsletter />
    <c-footer />
	</section>

</template>

<script>

import CNewsletter from '~/components/Newsletter'
import CFooter from '~/components/Footer.vue'

export default {

	name: 'CSobre',

	components: {
    CNewsletter,
    CFooter
  },
}

</script>


<style>

.sobre .titulo {
    margin-top: 140px;
    color: #ff6501;
    font-size: 50px;
}

.sobre p {
    margin: -20px 0 40px 0;
    text-align: justify;
    font-weight: 300;
    font-size: 18px;
}

</style>