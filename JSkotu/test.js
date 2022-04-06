//全カードの管理
let cards = []
//何回カードをめくるを推したか、確認
let element
//カードの数を保存する変数 はじめのみ変数を用意、残りは配列
var sub_1;
var sub_2;
var sub1;
var sub2;

let pl1 = [];
let pl2 = [];
//何回ボタンを押したか管理する
var counter = 0;

//0~52の数字のシャッフル 呼び出すとき引数に52を与えてね
function getRandomInt(max) {
    subnum = Math.floor(Math.random() * max);
    if(subnum === 0){
      getRandomInt(max);
    }
    return subnum;
}
//12で割った章が0ならスペード、といった感じで管理

//手札の合計値を計算する
function check(){
    sum(pl1,pl2);
}

function sum(pl1,pl2){
    let sum1 = 0;
    let sum2 = 0;

    for(var i = 0 , le = pl1.length; i < le;i = i + 1){
        sum1 = sum1 + pl1[i];
        sum2 = sum2 + pl2[i];
    }
    if(sum1 > sum2){
        document.getElementById("re").innerText = "プレイヤーの勝利！";
    }
    else if(sum1 < sum2){
        document.getElementById("re").innerText = "相手の勝利！";
    }else{
        document.getElementById("re").innerText = "同点！";
    }
}

//画面を読み込んだときの一番初めの動作
function firstmethod(){
    sub_1 = getRandomInt(52);
    sub_2 = getRandomInt(52);
    if(sub_1 === sub_2){
        while(sub_1 === sub_2){
            sub_1 = getRandomInt(52);
            sub_2 = getRandomInt(52);
        }
    }
    pl1.push(sub_1);
    pl2.push(sub_2);
    if(sub_1 < 10){
        sub1 = '0' + sub_1 + '.png';
        sub2 = sub_2 + '.png';
    }else if(sub_2 < 10){
        sub1 = sub_1 + '.png';
        sub2 = '0' + sub_2 + '.png';
    }else if(sub_1 < 10 && sub_2 < 10){
        sub1 = '0' + sub_1 + '.png';
        sub2 = '0' + sub_2 + '.png';
    }else{
        sub1 = sub_1 + '.png';
        sub2 = sub_2 + '.png';
    }
    document.getElementById('image1').src = sub1;
    document.getElementById('image6').src = sub2;
}

window.onload = firstmethod();

//2 カードを引くボタンをクリックした際の関数(ボタンクリック⇒シャッフル⇒画面状にめくった画像の表示)
//counterの値によって挙動をスイッチする
function judge(){
    if(counter === 0){
        buttonclick_1(3,4);
    }else if(counter === 1){
        buttonclick_2(5,6);
    }else if(counter === 2){
        buttonclick_3(7,8);
    }else if(counter === 3){
        buttonclick_4(9,10);
    }
}

function buttonclick_1(a,b){
    a = 'sub_' + a;
    b = 'sub_' + b;
    a_a = 'sub' + a;
    b_b = 'sub' + b;
    a = getRandomInt(52);
    sub3 = a;
    b = getRandomInt(52);
    sub4 = b;
    pl1.push(a);
    pl2.push(b);
    if(a < 10){
        a_a = '0' + a + '.png';
        b_b = b + '.png';
    }else if(b < 10){
        a_a = a + '.png';
        b_b = '0' + b + '.png';
    }else if(a < 10 && b < 10){
        a_a = '0' + a + '.png';
        b_b = '0' + b + '.png';
    }else{
        a_a = a + '.png';
        b_b = b + '.png';
    }
    document.getElementById('image2').src = a_a;
    document.getElementById('image7').src = b_b;
    counter = counter + 1;
}

function buttonclick_2(a,b){
    a = 'sub_' + a;
    b = 'sub_' + b;
    a_a = 'sub' + a;
    b_b = 'sub' + b;
    a = getRandomInt(52);
    sub5 = a;
    b = getRandomInt(52);
    sub6 = b;
    pl1.push(a);
    pl2.push(b);
    if(a < 10){
        a_a = '0' + a + '.png';
        b_b = b + '.png';
    }else if(b < 10){
        a_a = a + '.png';
        b_b = '0' + b + '.png';
    }else if(a < 10 && b < 10){
        a_a = '0' + a + '.png';
        b_b = '0' + b + '.png';
    }else{
        a_a = a + '.png';
        b_b = b + '.png';
    }
    document.getElementById('image3').src = a_a;
    document.getElementById('image8').src = b_b;
    counter = counter + 1;
}

function buttonclick_3(a,b){
    a = 'sub_' + a;
    b = 'sub_' + b;
    a_a = 'sub' + a;
    b_b = 'sub' + b;
    a = getRandomInt(52);
    sub7 = a;
    b = getRandomInt(52);
    sub8 = b;
    pl1.push(a);
    pl2.push(b);
    if(a < 10){
        a_a = '0' + a + '.png';
        b_b = b + '.png';
    }else if(b < 10){
        a_a = a + '.png';
        b_b = '0' + b + '.png';
    }else if(a < 10 && b < 10){
        a_a = '0' + a + '.png';
        b_b = '0' + b + '.png';
    }else{
        a_a = a + '.png';
        b_b = b + '.png';
    }
    document.getElementById('image4').src = a_a;
    document.getElementById('image9').src = b_b;
    counter = counter + 1;
}

function buttonclick_4(a,b){
    a = 'sub_' + a;
    b = 'sub_' + b;
    a_a = 'sub' + a;
    b_b = 'sub' + b;
    a = getRandomInt(52);
    sub9 = a;
    b = getRandomInt(52);
    sub10 = b;
    pl1.push(a);
    pl2.push(b);
    if(a < 10){
        a_a = '0' + a + '.png';
        b_b = b + '.png';
    }else if(b < 10){
        a_a = a + '.png';
        b_b = '0' + b + '.png';
    }else if(a < 10 && b < 10){
        a_a = '0' + a + '.png';
        b_b = '0' + b + '.png';
    }else{
        a_a = a + '.png';
        b_b = b + '.png';
    }
    document.getElementById('image5').src = a_a;
    document.getElementById('image10').src = b_b;
    counter = counter + 1;
}

//もう一回遊ぶボタンをクリックした際の関数（全部元に戻す⇒表示）
//element = document.querySelectorAll("#--")
//element.addEventListener("click", #)

//終了ボタンを押した場合
//element = document.querySelectorAll("#--")
//element.addEventListener("click", #)


