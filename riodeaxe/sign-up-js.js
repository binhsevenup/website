var REGISTER_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtFirstname = document.forms['register-form']['firstname'];
        var txtLastname = document.forms['register-form']['lastname'];
        var txtPassword = document.forms['register-form']['password'];
        var txtAddress = document.forms['register-form']['address'];
        var txtPhone = document.forms['register-form']['phone'];
        var txtAvatar = document.forms['register-form']['avatar'];
        var selectgender = document.forms['register-form']['gender'];
        var txtemail = document.forms['register-form']['email'];
        var dateBirthday = document.forms['register-form']['birthday'];
        var dd = new Date(dateBirthday.value);
        var myDate = dd.getFullYear() + '-' + (dd.getMonth() + 1) + '-'
            + (dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate());
        if (txtFirstname != null && txtLastname != null) {
            var firstName = txtFirstname.value;
            var lastName = txtLastname.value;
            var password = txtPassword.value;
            var address = txtAddress.value;
            var phone = txtPhone.value;
            var avatar = txtAvatar.value;
            var gender = selectgender.value;
            var email = txtemail.value;
            var birthday = dateBirthday.value;
            var jsMember = {
                firstName: firstName,
                lastName: lastName,
                password: password,
                address: address,
                phone: phone,
                avatar: avatar,
                gender: gender,
                email: email,
                birthday: birthday,
            }
            var jsonData = JSON.stringify(jsMember);
            postRegisterData(jsonData);
        }
    }
}

function postRegisterData(jsonData) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var members = JSON.parse(this.responseText);
            alert('Đăng ký thành công với email: ' + members.email );
        }
    }
    xmlhttp.open('POST', REGISTER_API, true);
    xmlhttp.setRequestHeader("content-type", "application/json");
    xmlhttp.send(jsonData);
}