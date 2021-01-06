/*
我喜欢桜島麻衣
Copyright zshMVP(https://zshmvp.com)
*/
function love_sakurajimamai_time() {
var today = new Date();
var love_star = new Date(1598457600000);//2020/08/27
var time_swap = (today.getTime() - love_star.getTime());
var  day_swap = time_swap / 86400000//86400000ms=24h=1day
var love_day = Math.floor(day_swap);
    str = '';
    str += love_day + '日'; 
    str += today.getHours() + '時';
    str += today.getMinutes() + '分';
    return str;
};

$('#love_time').html(love_sakurajimamai_time());

setInterval(function(){
 $('#love_time').html(love_sakurajimamai_time()) 
}, 60000);