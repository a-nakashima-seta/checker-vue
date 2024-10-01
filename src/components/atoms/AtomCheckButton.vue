<!-- AtomCheckButton.vue -->
<script setup lang="ts">

interface Emits {
    (event: 'executeCheck'): void;
}

const emit = defineEmits<Emits>();

const executeCheck = () => {
    emit("executeCheck"); // 親コンポーネントにイベントを送信
};
</script>

<template>
    <button @click="executeCheck">チェック実行</button>
</template>

<style scoped>
button {
    display: block;
    margin: 1.5em auto;
}
</style>
