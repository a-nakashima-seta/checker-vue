<script setup lang="ts">
import { useChecks } from '../../store/Checks';
import AtomCheckButton from '../atoms/AtomCheckButton.vue';
import MoleculeWebCheckList from '../molecules/MoleculeWebCheckList.vue';
import MoleculeWebForm from '../molecules/MoleculeWebForm.vue';

const store = useChecks();

const executeCheck = async () => {
    await store.runChecks(); // チェック実行
};
</script>

<template>
    <div class="container">
        <h1 class="heading">Web版</h1>
        <MoleculeWebForm />
        <MoleculeWebCheckList />
        <AtomCheckButton @executeCheck="executeCheck" />
    </div>
</template>

<style scoped></style>
