let isDone = false;
const timer = setInterval(() => {
    if(isDone) {
        clearInterval(timer);
    }
    findAndRemove();
}, 200);
$(window).ready(()=>{
    isDone = true;
});
function findAndRemove(){
    // 百度广告
    document.querySelectorAll('iframe').forEach((it) => {
        // http://pos.baidu.com/s?
        const src = it.getAttribute('src');
        if(!src || src.indexOf('pos.baidu.com') == -1){
            return;
        }
        console.log("removed: " + src);
        it.parentNode.removeChild(it);
    });
    // 谷歌广告
    /*document.querySelectorAll('ins').forEach(it => {
        it.parentNode.removeChild(it);
    })*/
}