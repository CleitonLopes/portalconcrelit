<template>
  <div>
    <c-header />
    <nuxt/>
    <c-newsletter />
    <c-footer />
  </div>
</template>

<script>

import CHeader from '~/components/Header.vue'
import CNewsletter from '~/components/Newsletter'
import CFooter from '~/components/Footer.vue'

export default {
  
  components: {
    CHeader,
    CNewsletter,
    CFooter
  }
}
</script>

<style>
</style>

