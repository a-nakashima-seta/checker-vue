<script setup lang="ts">
import MoleculeMailCheckList from '../molecules/MoleculeMailCheckList.vue';
import OrganismMailFileUploader from '../organisms/OrganismMailFileUploader.vue';


</script>

<template>
    <div class="container">
        <h1 class="heading">
            配信用(mail_cpn)
        </h1>

        <OrganismMailFileUploader />

        <MoleculeMailCheckList />
    </div>
</template>

<style scoped></style>