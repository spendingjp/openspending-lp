<template>
  <l-marker :lat-lng="[government.latitude, government.longitude]">
    <l-icon
      icon-url="/images/map_pin.png"
      :icon-size="[24, 32]"
      :shadow-size="[24, 32]"
      :icon-anchor="[11, 41]"
      :shadow-anchor="[2, 31]"
      :popup-anchor="[0, -40]"
    >
    </l-icon>
    <l-popup
      ><a
        :href="`${$config.siteUrlResolver.protocol}://${government.slug}.${$config.siteUrlResolver.domain}/`"
        >{{ government.name }}</a
      ></l-popup
    >
  </l-marker>
</template>

<script lang="ts">
import { Government } from '@/types/government'
export default {
  props: {
    government: {
      type: Object as () => Government,
      required: true,
    },
  },
}
</script>

<style></style>
