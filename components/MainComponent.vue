<template>
  <div class="main" role="main">
    <about-section></about-section>
    <know-section></know-section>
    <join-section></join-section>
    <library-section></library-section>
    <contact-section></contact-section>
  </div>
</template>

<script>
import AboutSection from '@/components/AboutSection.vue'
import KnowSection from '@/components/KnowSection.vue'
import JoinSection from '@/components/JoinSection.vue'
import LibrarySection from '@/components/LibrarySection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  components: {
    AboutSection,
    KnowSection,
    JoinSection,
    LibrarySection,
    ContactSection,
  },
}
</script>
