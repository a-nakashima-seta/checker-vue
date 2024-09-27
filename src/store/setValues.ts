import { defineStore } from 'pinia'
import { setValues } from '../types/setValues'
import { ref } from 'vue'

export const useSetValues = defineStore('setValues', () => {

    const currentValue = ref<setValues>({
        prod_cd: "",
        title: "",
        preheader: "",
    });


    const strageValue = ref<setValues>({
        prod_cd: localStorage.getItem("prod_cd") || "",
        title: localStorage.getItem("title") || "",
        preheader: localStorage.getItem("preheader") || "",
    });

    const editStatus = ref<Record<string, boolean>>({
        prod_cd: false,
        title: false,
        preheader: false,
    });

    const loadValues = (): void => {
        currentValue.value.prod_cd = localStorage.getItem("prod_cd") || "";
        currentValue.value.title = localStorage.getItem("title") || "";
        currentValue.value.preheader = localStorage.getItem("preheader") || "";
    };

    const saveValues = (): void => {
        localStorage.setItem('prod_cd', currentValue.value.prod_cd);
        localStorage.setItem('title', currentValue.value.title);
        localStorage.setItem('preheader', currentValue.value.preheader);
        strageValue.value = { ...currentValue.value };

        alert("値をセットしました。")
    };


    return { currentValue, loadValues, saveValues, strageValue, editStatus };
});
