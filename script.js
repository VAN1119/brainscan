function check() {
    let str = [];
    //ラジオボタンの中身を取得
    const q = [document.ask.q0, document.ask.q1, document.ask.q2];
    //変数の宣言
    var sum = 0;
    var bbb = 0;
    
    // for文でqの配列の要素番号をaaaに足し込む
    for (let i = 0; i < q.length; i++) {
        // qの配列の中でラジオボタンの選択肢の配列(2字配列)を呼び出し
        for (let j = 0; j < q[i].length; j++) {
            //　チェックが入っているラジオボタンの検索
            if(q[i][j].checked) {
                // チェックが入ってるラジオボタンのvalueをbbbに代入
                bbb = q[i][j].value;
                //valueからは文字列の取得
                sum += bbb;
                // ラジオボタンは1つしか選べないのでvalueを取得後にブレイク
                break;
            }
        }
    }
    switch (sum) {
        case '0000':
            window.location.href = 'pic1.html';
            break;
        case '0001':
            window.location.href = 'pic8.html';
            break;
        case '0010':
            window.location.href = 'pic3.html';
        case '0011':
            window.location.href = 'pic7.html';
            break;
        case '0100':
            window.location.href = 'pic2.html';
            break;
        case '0101':
            window.location.href = 'pic6.html';
            break;
        case '0110':
            window.location.href = 'pic4.html';
            break;
        case '0111':
            window.location.href = 'pic5.html';
            break;
    } 
}