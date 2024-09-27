<script setup lang="ts">
import AtomSetValueButton from '../atoms/AtomSetValueButton.vue';
import { useSetValues } from '../../store/setValues';
import { ref, watch } from 'vue';

const store = useSetValues();


const InputValue = ref<string>('');

// 値の保存
const saveValues = () => {
    const lines = InputValue.value.split('\n');
    store.currentValue.prod_cd = lines[0] || '';
    store.currentValue.title = lines[1] || '';
    store.currentValue.preheader = lines[2] || '';

    store.saveValues();
};


store.loadValues();

watch(
    () => store.strageValue,
    (newValue) => {
        InputValue.value = `${newValue.prod_cd}\n${newValue.title}\n${newValue.preheader}`;
    },
    { immediate: true }
);
</script>

<template>
    <div>
        <textarea v-model="InputValue" rows="3" placeholder="申込番号、タイトル、プリヘッダーを改行で入力"></textarea>
        <div>
            <AtomSetValueButton @setValues="saveValues" />
        </div>
    </div>
</template>

<style scoped>
.setValue-box {
    display: flex;
    align-items: center;
}

textarea {
    width: 100%;
    padding: 5px;
    font-size: 16px;
}

input {
    font-size: 16px;
    padding: 0 5px;
}
</style>
