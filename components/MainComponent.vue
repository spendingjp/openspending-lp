<template>
  <div class="main" role="main">
    <about-section></about-section>
    <know-section :governments="governments"></know-section>
    <join-section></join-section>
    <library-section></library-section>
    <contact-section></contact-section>
  </div>
</template>

<script lang="ts">
import AboutSection from '@/components/AboutSection.vue'
import KnowSection from '@/components/KnowSection.vue'
import JoinSection from '@/components/JoinSection.vue'
import LibrarySection from '@/components/LibrarySection.vue'
import ContactSection from '@/components/ContactSection.vue'
import { Government } from '@/types/government'

export default {
  components: {
    AboutSection,
    KnowSection,
    JoinSection,
    LibrarySection,
    ContactSection,
  },
  props: {
    governments: {
      type: Array as () => Government[],
      required: true,
    },
  },
}
</script>
