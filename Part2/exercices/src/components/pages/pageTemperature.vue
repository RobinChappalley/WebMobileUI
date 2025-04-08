<template>
    {{ tempSI }}
    <label for="kelvin">kelvin</label>
    <baseInputNumber unit="K" v-model="tempK" />
    <label for="celsius">celsius</label>
    <baseInputNumber unit="C°" v-model="tempC" />
    <label for="farenheit">farenheit</label>
    <baseInputNumber unit="F°" v-model="tempF" />
</template>

<script setup>
import { roundToDecimalPlaces } from '@/utls/math.js';
import { ref, computed } from 'vue';
import baseInputNumber from '../bases/baseInputNumber.vue';
const tempSI = ref(0)
const tempK = computed({
    get: () => roundToDecimalPlaces(tempSI.value),
    set: (value) => {
        if (value === '') return
        tempSI.value = value
    }
})
const tempC = computed({
    get: () => roundToDecimalPlaces(tempSI.value - 273.15),
    set: (value) => {
        if (value === '') return
        tempSI.value = value + 273.15
    }
})
const tempF = computed({
    get: () => roundToDecimalPlaces(tempSI.value - 273.15 * 9 / 5 + 32),
    set: (value) => {
        if (value === '') return;
        tempSI.value = (value - 32) * 5 / 9 + 273.15;
    }
})


</script>

<style scoped>
/* Ajoute tes styles ici */
</style>