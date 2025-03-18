<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LottoGenerator from './components/LottoGenerator.vue'

</script>
<!-- 'path\filename.vue' 모듈 또는 해당 형식 선언을 찾을 수 없습니다.ts-plugin(2307) => @type/node 패키지 설치 필요  -->

<template>
  <main>
    <LottoGenerator />
  </main>
  <RouterView />
</template>

<style scoped>

</style>
