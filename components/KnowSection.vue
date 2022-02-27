<template>
  <section id="know" class="section">
    <div class="container">
      <h2 class="heading">
        <img
          src="/images/know_tit.png"
          alt="あなたの税金の使い道を知る"
          width="344"
          height="112"
        />
      </h2>
      <div class="section__lead">
        現在、
        <span class="js-city-num">{{ `${governments.length}` }} </span>
        自治体のサイトが立ち上がっています。<br />
        <government-map :governments="governments"></government-map>
      </div>
    </div>
    <div class="container">
      <p>
        （過去のサイトリストをデータでも公開しています。
        <a
          href="https://docs.google.com/spreadsheet/pub?key=0AnJGwhMm-ribdEJ6V25HRTV2azVRNkpjTTJSQ3k3Nnc&amp;single=true&amp;gid=1&amp;output=csv"
          target="_blank"
        >
          CSVファイル
        </a>
        /
        <a
          href="https://docs.google.com/spreadsheet/pub?key=0AnJGwhMm-ribdEJ6V25HRTV2azVRNkpjTTJSQ3k3Nnc&amp;output=xls"
          target="_blank"
          >Excelファイル </a
        >）
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import GovernmentMap from './GovernmentMap.vue'
import { Government } from '@/types/government'

export default {
  components: { GovernmentMap },
  props: {
    governments: {
      type: Array as () => Government[],
      required: true,
    },
  },
}
</script>

<style></style>
