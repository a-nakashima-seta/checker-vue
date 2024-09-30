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
                body: JSON.stringify({ url: url.value }) // URLをオブジェクト形式で送信
            });

            if (!response.ok) {
                throw new Error('ネットワークエラー: ' + response.status);
            }

            const res = await response.json(); // JSONとしてレスポンスを取得

            // HTMLソースをテキストとして処理する場合
            if (res.html) {
                // ここでHTMLを適切に処理・表示するコードを追加できます
                console.log(res.html); // 取得したHTMLを表示
            }

        } catch (error) {
            console.error('ページソースの取得に失敗しました:', error);
        }
    };



    const selectAll = () => {
        checkStatus.value = true
    }
    const clearAll = () => {
        checkStatus.value = false
    }


    return { WebCheckList, MailCheckList, checkStatus, url, selectAll, clearAll, getWebSource };
});
