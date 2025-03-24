<script setup>
import { computed, ref } from 'vue';
import TheHeader from './components/TheHeader.vue';
const tempK = ref(10)
const tempC = computed(() => { return tempK.value - 273.15 })
const tempF = computed(() => { return (tempC.value*1.8)+32})


</script>

<template>
  <TheHeader></TheHeader>
  <label for="kelvin">kelvin</label>
  <input name="kelvin" type="number" v-model="tempK">
  <br>
  <label for="celsius">celsius</label>
  <input name="celsius" type="number" v-model="tempC">
  <br>
  <label for="farenheit">farenheit</label>
  <input name="farenheit" type="number" v-model="tempF">

</template>


<style scoped>
/* Ajoute tes styles ici */
</style>¨