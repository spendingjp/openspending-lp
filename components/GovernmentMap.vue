<template>
  <div class="site-selector">
    <div id="map" class="map">
      <client-only>
        <l-map :zoom="6" :center="[36.67740687825185, 136.71395820379257]">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
          ></l-tile-layer>
          <map-icon
            v-for="g in governments"
            :key="g.id"
            :government="g"
          ></map-icon>
        </l-map>
      </client-only>
    </div>
  </div>
</template>

<script lang="ts">
import MapIcon from './MapIcon.vue'
import { Government } from '@/types/government'

export default {
  components: { MapIcon },
  props: {
    governments: {
      type: Array as () => Government[],
      required: true,
    },
  },
}
</script>

<style></style>
