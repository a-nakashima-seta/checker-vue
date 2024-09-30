<script setup lang="ts">
import { useChecks } from '../../store/Checks';
import AtomCheckButton from '../atoms/AtomCheckButton.vue';
import MoleculeWebCheckList from '../molecules/MoleculeWebCheckList.vue';
import MoleculeWebForm from '../molecules/MoleculeWebForm.vue';

const store = useChecks()

const getPageSource = () => {
    store.getWebSource()
}

</script>
<template>
    <div class="container">
        <h1 class="heading">
            Web版
        </h1>

        <MoleculeWebForm />

        <MoleculeWebCheckList />
        <AtomCheckButton @click="getPageSource" />
    </div>
</template>

<style scoped></style>