<template>
  <div>
    <header-component></header-component>
    <main-component></main-component>
    <footer-component></footer-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderComponent from '~/components/HeaderComponent.vue'
import MainComponent from '~/components/MainComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HeaderComponent,
    FooterComponent,
    MainComponent,
  },
})
</script>
