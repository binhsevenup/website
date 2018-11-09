var LOGIN_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtemail = document.forms['register-form']['email'];
        var txtPassword = document.forms['register-form']['password'];
        var password = txtPassword.value;
        var email = txtemail.value;
        var jsMember = {
            email: email,
            password: password,
        }
        var jsonData = JSON.stringify(jsMember);
        postRegisterData(jsonData);
    }
}

function postRegisterData(jsonData) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var members = JSON.parse(this.responseText);
            alert(members.token);
            localStorage.setItem('token-key',members.token);
        }
    }
    xmlhttp.open('POST', LOGIN_API, true);
    xmlhttp.setRequestHeader("content-type", "application/json");
    xmlhttp.send(jsonData);
}