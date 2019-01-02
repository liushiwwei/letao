setHtmlFontSize ();
function setHtmlFontSize(){
    //假设设计稿大小
var designWidth = 750 ;
//假设设计稿根元素大小
var designFontSize = 200;
//获取当前屏幕宽度
var windowWidth = document.documentElement.offsetWidth;
//计算当前屏幕根元素大小
var nowFontSize = windowWidth/(750/200);
// 设置当前html的元素的大小

document.documentElement.style.fontSize = nowFontSize + 'px';
}

window.addEventListener('resize',setHtmlFontSize);
