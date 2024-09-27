<script setup lang="ts">
import { useChecks } from '../../store/Checks';
import AtomWebOption from '../atoms/AtomWebOption.vue';

const store = useChecks()

</script>

<template>
    <div class="container">
        <input type="text" id="" placeholder="URLを入力してください" v-model="store.url">
        <AtomWebOption />
    </div>
</template>

<style scoped></style>