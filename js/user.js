// 确认
function confirm() {
    var eamil = document.getElementById('eamil');
    var sign = document.getElementById('sign');
    var date = document.getElementById('date');

    var toast = document.getElementById('toast');
    
    if (eamil.value == "") {
        eamil.classList.add('error');
    } else {
        eamil.classList.remove('error');
    }
    if (sign.value == "") {
        sign.classList.add('error');
    } else {
        sign.classList.remove('error');
    }
    if (date.value == "") {
        date.classList.add('error');
    } else {
        date.classList.remove('error');
    }
    if (eamil.value != "" && sign.value != "" && date.value != "") {
        toast.style.opacity = 1;
        toast.innerHTML = '设置成功';
        setTimeout('toast.style.opacity = 0',5000);
    }
}