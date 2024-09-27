<script setup lang="ts">
import MailArea from './components/pages/MailArea.vue';
import SetValuesArea from './components/pages/SetValuesArea.vue';
import WebArea from './components/pages/WebArea.vue';


</script>

<template>
    <div>
        <SetValuesArea />
        <div class="flex-jcc-ac check-wrap">
            <WebArea />
            <MailArea />
        </div>
    </div>
</template>

<style scoped>
.flex-jcc-ac {
    display: flex;
    justify-content: center;
    align-items: start;
}

.check-wrap {
    gap: 8%;
}
</style>