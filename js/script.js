$(function(){
    var srcs = ['img/pa.jpg','img/choki.jpg','img/guu.jpg'];//imgのsrcを配列に格納
    var userCard;//ユーザーが選択したカードの番号を格納
    var computerCard;//コンピューターが選択したカードの番号を格納

    //.game__cardBoxListの子要素のimgをクリックした時に発火するイベント
    //.game__selectedUserに選択した写真のソースを設定するイベント
    $('.game__cardBoxList > li > img').click(function(){
       var selected = $('.game__selectedUser').attr("src");//.game__selectedUserのソースを変数に格納
       if(selected){return;}
       var src = $(this).attr("src");
       userCard = srcs.indexOf(src);
       $('.game__selectedUser').attr({'src':src});
       computer();
    });

    function computer(){
        computerCard = Math.floor(Math.random() * 3);
        var src = srcs[computerCard];
        $('.game__selectedComputer').attr({ "src" : src });
        judge(userCard,computerCard);
    }

    function judge(user,computer){
        var result = $('.game__result .unit');
        if(user == computer){
            result.text('引き分け');
        }else if( (user == 0 && computer == 2) || (user == (computer + 1))){
            result.text('あなたの勝ち');
        }else{
            result.text('コンピューターの勝ち');
        }
        setTimeout(reset,3000);
    }

    function reset(){
        $('.game__result .unit').text("");
        $('.game__selectedUser').attr({"src" : ""});
        $('.game__selectedComputer').attr({"src" : ""});
    }
});