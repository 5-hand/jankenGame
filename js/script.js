$(function(){
    var srcs = ['img/pa.jpg','img/choki.jpg','img/guu.jpg'];//imgのsrcを配列に格納
    var userCard;//ユーザーが選択したカードの番号を格納
    var computerCard;//コンピューターが選択したカードの番号を格納

    //.game__cardBoxListの子要素のimgをクリックした時に発火するイベント
    //.game__selectedUserに選択した写真のソースを設定するイベント
    $('.game__cardBoxList > li > img').click(function(){
       var selected = $('.game__selectedUser').attr("src");//.game__selectedUserのソースを変数に格納
       if(selected){return;}//.game__selectedUserが選択されている際に他のカードを選択しても入力を拒否する&reset関数が走ると入力可能になる
       var src = $(this).attr("src");//選択されたカードのソースを格納
       userCard = srcs.indexOf(src);//選択されたカードがsrcsのどのsrcなのか＆変数に格納
       $('.game__selectedUser').attr({'src':src});//.game__selectedUserのsrcにsrc変数の値を設定
       computer();//computerの関数を動かす
    });

    //coputerのカードをランダムで設定する関数
    function computer(){
        computerCard = Math.floor(Math.random() * 3);//０~2のランダム数を生成
        var src = srcs[computerCard];//srcsの中からsrc変数にソースを代入
        $('.game__selectedComputer').attr({ "src" : src });//.game__selectedComputerのsrcにsrc変数の値を設定
        judge(userCard,computerCard);//judge関数を動かす//userCard変数とcomputerCard変数を引数として渡す
    }

    function judge(user,computer){
        var result = $('.game__result .unit');//.game__result .unitの要素を変数に格納
        if(user == computer){
            result.text('引き分け');//引き分けの値をresultに反映
        }else if( (user == 0 && computer == 2) || (user == (computer + 1))){
            result.text('あなたの勝ち');//勝利した際の値をresultに反映
        }else{
            result.text('コンピューターの勝ち');//負けた際の値をresultに反映
        }
        setTimeout(reset,3000);//３秒でリセットが走るようにしている
    }

    function reset(){
        $('.game__result .unit').text("");//テキストをからにする
        $('.game__selectedUser').attr({"src" : ""});//ソースをからにする
        $('.game__selectedComputer').attr({"src" : ""});//ソースをからにする
    }
});