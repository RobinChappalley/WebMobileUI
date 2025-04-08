<template>
    <div>
        <input type="number" v-model="model" v-bind="$attrs">
        <abbr v-if="unit">{{ unit }}</abbr>
    </div>
</template>

<script setup>
defineOptions({
    inheritAttrs: false, // disable inheritAttrs to the root element, so use v-bind="$attrs" to pass all attributes to the input element
});
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