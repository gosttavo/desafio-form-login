function validateFields(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email == ""){
        alert('Preencha o campo e-mail.');
        document.getElementsByName("email").focus();
        return false;
    }

    else if (password == ""){
        alert('Preencha o campo senha.');
        document.getElementsByName("password").focus();
        return false;
    }
}