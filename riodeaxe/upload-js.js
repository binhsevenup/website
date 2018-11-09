var LOGIN_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtName = document.forms['register-form']['name'];
        var txtDescription = document.forms['register-form']['description'];
        var txtSinger = document.forms['register-form']['singer'];
        var txtAuthor = document.forms['register-form']['author'];
        var txtThumbnail = document.forms['register-form']['thumbnail'];
        var txtLink = document.forms['register-form']['link'];
        var name = txtName.value;
        var description = txtDescription.value;
        var singer = txtSinger.value;
        var author = txtAuthor.value;
        var thumbnail = txtThumbnail.value;
        var link = txtLink.value;
        var jsMember = {
            name: name,
            description: description,
            singer: singer,
            author: author,
            thumbnail: thumbnail,
            link: link,
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
            localStorage.setItem('Upload thành công bài hát:' + ,members.name);
        }
    }
    xmlhttp.open('POST', CREATE_SONG_API, true);
    xmlhttp.setRequestHeader("content-type", "application/json");
    xmlhttp.send(jsonData);
}