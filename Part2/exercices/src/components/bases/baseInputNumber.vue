<template>
    <div>
        <input type="number" v-model="model">
        <abbr v-if="unit">{{ unit }}</abbr>
    </div>
</template>

<script setup>

//Reçoit l'information

defineProps({
    unit: {
        type: String,
        default: null
    },
})

//two-way binding
const model = defineModel()
</script>

<style scoped>
input[type="number"] {
    width: 100%;
    padding: 10px;
}

abbr {
    font-size: 2em;
    margin-left: 10px;
}
</style>