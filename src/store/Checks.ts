import { defineStore } from 'pinia';
import { ref } from 'vue';
import { runChecks as externalRunChecks } from "../composables/checkFunc";

export const useChecks = defineStore('Checks', () => {
    const WebCheckList = ref<string[]>([
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
        'faviconは設定されているか',
    ]);

    const MailCheckList: string[] = [
        'タイトルは正しいか',
        'プリヘッダーは正しいか',
        '冒頭に変数があり、正しい申込番号が入っているか',
        '画像のリンク切れはないか',
        '$$$utm_campaign$$$がないか',
        '※画像がうまく表示されない方はこちらがあるか',
        '開封タグはあるか',
        'フッターが変数化されているか'
    ];

    const checkedItems = ref<string[]>([...WebCheckList.value]); // 初期値として全選択
    const checkStatus = ref<boolean>(true);
    const url = ref<string>('');

    const getWebSource = async () => {
        if (!url.value) {
            alert('URLが入力されていません。');
            return;
        }

        try {
            const response = await fetch('getSource.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: url.value })
            });

            if (!response.ok) {
                throw new Error('ネットワークエラー: ' + response.status);
            }

            const res = await response.json();

            if (res.html) {
                alert(res.html);
            }

            return true
        } catch (error) {
            console.error('ページソースの取得に失敗しました:', error);

            return false
        }

    };

    const selectAll = () => {
        checkedItems.value = [...WebCheckList.value];
        checkStatus.value = true;
    };

    const clearAll = () => {
        checkedItems.value = [];
        checkStatus.value = false;
    };

    const runChecks = async () => {
        const success = await getWebSource();
        if (success) { 
            externalRunChecks(checkedItems.value);
        } else {
            alert('チェックを実行できませんでした。');
        }
    };

    return { WebCheckList, MailCheckList, checkStatus, url, selectAll, clearAll, getWebSource, checkedItems, runChecks };
});
