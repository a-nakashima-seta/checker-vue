export const checkFunctions: Record<string, () => void> = {
    'タイトルは正しいか': () => test1(),
    'プリヘッダーはないか': () => test2(),
    '冒頭に変数はないか': () => test3(),
    '画像のリンク切れはないか': () => test4(),
    '$$$utm_campaign$$$がないか': () => alert("UTMキャンペーンの確認"),
    '※画像がうまく表示されない方はこちらはないか': () => alert("画像表示の確認"),
    '開封タグはないか': () => alert("開封タグの確認"),
    'noindexの記述はあるか': () => alert("noindexの確認"),
    'フッターが変数化されていないか': () => alert("フッターの確認"),
    'GTM用の記述があるか': () => alert("GTM記述の確認"),
    'faviconは設定されているか': () => alert("faviconの確認"),
};

export const runChecks = (selectedItems: string[]) => {
    selectedItems.forEach(item => {
        const checkFunc = checkFunctions[item];
        if (checkFunc) {
            checkFunc(); // 関数を呼び出す
        }
    });
};


const test1 = () => {
    alert("test1")
}
const test2 = () => {
    alert("test2")
}
const test3 = () => {
    alert("test3")
}
const test4 = () => {
    alert("test4")
}