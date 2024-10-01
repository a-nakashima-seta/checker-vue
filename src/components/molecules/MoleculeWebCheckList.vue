<script setup lang="ts">
import { useChecks } from '../../store/Checks';
import { watch } from 'vue';

const store = useChecks();

const lists = store.WebCheckList;
const checkedItems = store.checkedItems; // ストアから直接取得

// ストアのcheckedItemsをwatchして、変更を反映させる
watch(checkedItems, (newVal) => {
    store.checkedItems = newVal; // Storeに選択された項目を保存
});
</script>

<template>
    <div>
        <h3>チェックリスト</h3>
        <ul>
            <li v-for="(list, index) in lists" :key="index">
                <input type="checkbox" :id="list" :value="list" v-model="checkedItems" />
                <label :for="list">{{ list }}</label>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
