// 注册
function reg() {
    var userName = document.getElementById('userName');
    var eamil = document.getElementById('eamil');
    var userPwd = document.getElementById('userPwd');
    var userPwd1 = document.getElementById('userPwd1');
    var code = document.getElementById('code');
    var eamilCode = document.getElementById('eamilCode');
    var vehicle = document.getElementById('vehicle');
    var toast = document.getElementById('toast');

    if (userName.value == "") {
        userName.parentNode.classList.add('error');
    } else {
        userName.parentNode.classList.remove('error');
    }
    if (eamil.value == "") {
        eamil.parentNode.classList.add('error');
    } else {
        eamil.parentNode.classList.remove('error');
    }
    if (userPwd.value == "") {
        userPwd.parentNode.classList.add('error');
    } else {
        userPwd.parentNode.classList.remove('error');
    }
    if (userPwd1.value == "") {
        userPwd1.parentNode.classList.add('error');
    } else {
        userPwd1.parentNode.classList.remove('error');
    }
    if (code.value == "") {
        code.parentNode.classList.add('error');
    } else {
        code.parentNode.classList.remove('error');
    }
    if (eamilCode.value == "") {
        eamilCode.parentNode.classList.add('error');
    } else {
        eamilCode.parentNode.classList.remove('error');
    }
    if (!vehicle.checked) {
        vehicle.nextElementSibling.style.setProperty('color', 'red', 'important');
    } else {
        vehicle.nextElementSibling.style.setProperty('color', '#666', 'important');
    }
    if (userName.value != "" && eamil.value != "" && userPwd.value != "" && userPwd1.value != "" && code.value != "" && eamilCode.value != "" && vehicle.checked) {
        toast.style.opacity = 1;
        toast.innerHTML = '注册成功';
        setTimeout('toast.style.opacity = 0',5000);
    }
}
// 发送验证码
function getCode(self) {
    if (self.text == '获取验证码') {
        var time = 60;
        var timer = setInterval(function () {
            if (time == 0) {
                self.text = '获取验证码';
                clearInterval(timer);
            }else {
                self.text = time;
            }
            time -= 1;
        }, 1000);
    }
}

function getCodeImg() {
    $('#codeImg').attr('src','http://127.0.0.1:5000/getcode?' + new Date().getTime());
}