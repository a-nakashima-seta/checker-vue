import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChecks = defineStore('Checks', () => {

    const WebCheckList: string[] = ([
        'タイトルは正しいか',
        'プリヘッダーはないか',
        '冒頭に変数はないか',
        '画像のリンク切れはないか',
        '$$$utm_campaign$$$がないか',
        '※画像がうまく表示されない方はこちらはないか',
        '開封タグはないか',
        'noindexの記述はあるか',
        'フッターが変数化されていないか',
        'GTM用の記述があるか',
        'faviconは設定されているか'
    ])


    const MailCheckList: string[] = ([
        'タイトルは正しいか',
        'プリヘッダーは正しいか',
        '冒頭に変数があり、正しい申込番号が入っているか',
        '画像のリンク切れはないか',
        '$$$utm_campaign$$$がないか',
        '※画像がうまく表示されない方はこちらがあるか',
        '開封タグはあるか',
        'フッターが変数化されているか'
    ])

    let checkStatus = ref<boolean>(true)

    // let webOptionStatus = ref("NORMAL")



    const selectAll = () => {
        checkStatus.value = true
    }
    const clearAll = () => {
        checkStatus.value = false
    }


    return { WebCheckList, MailCheckList, checkStatus, selectAll, clearAll };
});
