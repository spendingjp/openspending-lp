<template>
  <div>
    <header-component></header-component>
    <main-component :governments="governments"></main-component>
    <footer-component></footer-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderComponent from '~/components/HeaderComponent.vue'
import MainComponent from '~/components/MainComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import { GovernmentListResponse } from '@/types/government-list-response'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HeaderComponent,
    FooterComponent,
    MainComponent,
  },
  async asyncData({ $axios }) {
    const governments = (
      await $axios.get<GovernmentListResponse>('/api/v1/governments/')
    ).data.results
    return { governments }
  },
})
</script>
