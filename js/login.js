// 登录
function login() {
	var userName = document.getElementById('userName');
	var userPwd = document.getElementById('userPwd');
	var code = document.getElementById('code');
	var toast = document.getElementById('toast');

	if (userName.value == "") {
		userName.parentNode.classList.add('error');
	} else {
		userName.parentNode.classList.remove('error');
	}
	if (userPwd.value == "") {
		userPwd.parentNode.classList.add('error');
	} else {
		userPwd.parentNode.classList.remove('error');
	}
	if (code.value == "") {
		code.parentNode.classList.add('error');
	} else {
		code.parentNode.classList.remove('error');
	}
	if (userName.value != "" && userPwd.value != "" && code.value != "") {
		toast.style.opacity = 1;
		toast.innerHTML = '登录成功';
		setTimeout('toast.style.opacity = 0', 5000);
	}

}

function getCodeImg() {
	$('#codeImg').attr('src', 'http://127.0.0.1:5000/getcode?' + new Date().getTime());
}
