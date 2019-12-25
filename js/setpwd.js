// 确认
function setpwd() {
    var pwd1 = document.getElementById('pwd1');
    var pwd2 = document.getElementById('pwd2');
    var pwd3 = document.getElementById('pwd3');

    var toast = document.getElementById('toast');
    
    if (pwd1.value == "") {
        pwd1.classList.add('error');
    } else {
        pwd1.classList.remove('error');
    }
    if (pwd2.value == "") {
        pwd2.classList.add('error');
    } else {
        pwd2.classList.remove('error');
    }
    if (pwd3.value == "") {
        pwd3.classList.add('error');
    } else {
        pwd3.classList.remove('error');
    }
    if (pwd1.value != "" && pwd2.value != "" && pwd3.value != "") {
        toast.style.opacity = 1;
        toast.innerHTML = '设置成功';
        setTimeout('toast.style.opacity = 0',5000);
    }
}