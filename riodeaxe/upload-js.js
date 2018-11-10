var CREATE_API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/songs';

var btnSubmit = document.forms['register-form']['btn-submit'];

if (btnSubmit != null) {

    btnSubmit.onclick = function () {

        var txtName = document.forms['register-form']['name'];
        var txtSinger = document.forms['register-form']['singer'];
        var txtDescription = document.forms['register-form']['description'];
        var txtAuthor = document.forms['register-form']['author'];        
        var txtThumbnail = document.forms['register-form']['thumbnail'];
        var txtLink = document.forms['register-form']['link'];

        var msgName = txtName.nextElementSibling;   
        var msgSinger = txtSinger.nextElementSibling;   
        var msgAuthor = txtAuthor.nextElementSibling;       
        var msgThumbnail = txtThumbnail.nextElementSibling;
        var msgLink = txtLink.nextElementSibling;


        if (txtName != null) {

            var name = txtName.value;

            var singer = txtSinger.value;

            var description = txtDescription.value;

            var author = txtAuthor.value;

            var thumbnail = txtThumbnail.value;

            var link = txtLink.value;

            var jsMember = {

                name: name,

                singer: singer,

                description: description,

                author: author,

                thumbnail: thumbnail,

                link: link,

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

            alert(members.name + ' has been added to your list');

            localStorage.getItem('token-key');

        }

    }

    xmlhttp.open('POST', CREATE_API, true);

    xmlhttp.setRequestHeader('Content-type','application/json');

    xmlhttp.setRequestHeader('Authorization', 'Basic ' +  localStorage.getItem('token-key'));

    xmlhttp.send(jsonData);

}