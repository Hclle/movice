// 页面加载
window.onload = function () {
    var dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
            url: 'demo.mp4',
            pic: 'images/220.jpg',
        },
    });
    dp.fullScreen.cancel(setDPlayer());
    setDPlayer();
}
// 页面尺寸变化
window.onresize = function () {
    setDPlayer();
}
// 设置播放器尺寸
function setDPlayer() {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;

    document.getElementById('dplayer').style.borderRadius = '5px';
	// 判断是否为移动设备
	if (width > 768) {
		width = ((width * 0.8) * 0.7);
		height = width / 1.777;
		
		document.getElementById('dplayer').style.width = width + 'px';
		document.getElementById('dplayer').style.height = height + 'px';
	}else {
		width = (width * 0.8);
		document.getElementById('dplayer').style.width = width + 'px';
	}
    
}
// 发送评论
function send() {
    var content = document.getElementById('c-textarea');
    var c_list = document.getElementsByClassName('c-list')[0];
    var toast = document.getElementById('c-textarea-toast');
    
    var myDate = new Date();

    if (content.value != "") {
        if (content.value.length <= 70) {
            toast.innerHTML = '';
            c_list.innerHTML = '<div class="c-item"><div class="c-left"><img src="images/220.jpg" alt="" class="c-head"></div><div class="c-right"><div class="c-info"><div class="c-name">Hclle</div> <div class="c-time">' + myDate.toLocaleString() + '</div></div><div class="c-content">' + content.value + '</div></div></div>' + c_list.innerHTML;
            content.value = "";
        }else {
            toast.innerHTML = '字数不能大于70个!';
        }
        
    }else {
        toast.innerHTML = '请输入评论内容!';
    }

}