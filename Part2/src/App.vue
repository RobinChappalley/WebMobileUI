<script setup>
import { computed, ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import baseInputeNumber from './components/bases/baseInputeNumber.vue';
const tempSI = ref(10)
const tempK = computed(() => { return tempSI })
const tempC = computed(() => { return tempK.value - 273.15 })
const tempF = computed(() => { return (tempC.value * 1.8) + 32 })


</script>

<template>
  <TheHeader></TheHeader>
  <label for="kelvin">kelvin</label>
  <baseInputeNumber unit="K°" v-model="tempK" />
  <label for="celsius">celsius</label>
  <baseInputeNumber unit="C°" v-model="tempC" />
  <label for="farenheit">farenheit</label>  
  <baseInputeNumber unit="F°" v-model="tempF" />

</template>


<style scoped>
/* Ajoute tes styles ici */
</style>