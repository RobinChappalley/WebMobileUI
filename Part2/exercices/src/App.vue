<script setup>
import { computed, ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
import baseInputNumber from './components/bases/baseInputNumber.vue';
const tempSI = ref(0)
const tempK = computed(() => { return tempSI })
const tempC = computed(() => { return tempK.value - 273.15 })
const tempF = computed(() => { return (tempC.value * 1.8) + 32 })


</script>

<template>
  <TheHeader></TheHeader>
  <label for="kelvin">kelvin</label>
  <baseInputNumber unit="K°" v-model="tempK" />
  <label for="celsius">celsius</label>
  <baseInputNumber unit="C°" v-model="tempC" />
  <label for="farenheit">farenheit</label>  
  <baseInputNumber unit="F°" v-model="tempF" />

</template>


<style scoped>
/* Ajoute tes styles ici */
</style>