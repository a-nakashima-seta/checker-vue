<script setup lang="ts">
interface Emits {
    (e: 'setValues'): void;
}

const emit = defineEmits<Emits>();

const setValues = () => {
    emit('setValues');
};
</script>

<template>
    <div>
        <button @click="setValues">値をセットする</button>
    </div>
</template>

<style scoped>
button {
    margin: 10px auto;
    text-align: center;
    display: block;
}
</style>