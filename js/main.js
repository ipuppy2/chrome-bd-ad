let isDone = false;
const adHost = [
    // 百度
    'pos.baidu.com',
    'adaccount.csdn.net',
];
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
        if(!src){
            return;
        }
        let found = false;
        adHost.some((host) => {
            if(src.indexOf(host) != -1){
                found = true;
                return true;
            }
        });
        if(!found){
            return;
        }
        console.log("removed: " + src);
        it.parentNode.removeChild(it);
    });
    // csdn 
    $('.recommend-ad-box').remove();
    $('.mediav_ad').remove();
}