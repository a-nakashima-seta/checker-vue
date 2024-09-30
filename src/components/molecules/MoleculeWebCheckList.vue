<script setup lang="ts">
import { useChecks } from '../../store/Checks';

const store = useChecks()

const lists = store.WebCheckList

</script>

<template>
    <div>
        <h3>チェックリスト</h3>
        <ul>
            <li v-for="(list, index) in lists" :key="index">
                <input type="checkbox" name="" id="" :checked="store.checkStatus">
                <label for="list">{{ list }}</label>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>