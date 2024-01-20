<script setup>
import appHeader from './components/Header.vue'
import appFooter from './components/Footer.vue'
</script>


<template>
  <appHeader /> 
  <router-view/>
  <appFooter />
</template>

<style scoped>
</style>
