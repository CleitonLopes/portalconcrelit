<template>
  <div>
    <c-header />
    <nuxt/>
    <c-newsletter />
    <c-footer />
    <no-ssr>
    <c-modal-orcamento />
    </no-ssr>
  </div>
</template>

<script>

import CHeader from '~/components/Header.vue'
import CNewsletter from '~/components/Newsletter'
import CFooter from '~/components/Footer.vue'
import CModalOrcamento from '~/components/Modals/ModalOrcamento.vue'

export default {
  
  components: {
    CHeader,
    CNewsletter,
    CFooter,
    CModalOrcamento
  }
}
</script>

<style>
</style>

