<script setup lang="ts">
import { useChecks } from '../../store/Checks';
import AtomCheckButton from '../atoms/AtomCheckButton.vue';

const store = useChecks()

</script>

<template>
    <div>
        <h3>チェックリスト</h3>
        <ul>
            <li v-for="(list, index) in store.MailCheckList" :key="index">
                <input type="checkbox" name="" id="" checked>
                <label for="">{{ list }}</label>
            </li>
        </ul>

        <AtomCheckButton />
    </div>
</template>

<style scoped></style>