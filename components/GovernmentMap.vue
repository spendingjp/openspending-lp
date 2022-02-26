<template>
  <div class="site-selector">
    <select id="js-site-selector"></select>
    <div id="map" class="map">
      <client-only>
        <l-map :zoom="6" :center="[36.67740687825185, 136.71395820379257]">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
          ></l-tile-layer>
        </l-map>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style></style>
