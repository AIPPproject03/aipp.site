var password = "aipp2003"

function checkPassword(){
    if(document.getElementById('pass1').value != password){
        alert("Wrong Password !");
        return false;
    }
    if(document.getElementById('pass1').value == password){
        alert("Correct Password. Wellcome Mr.Tinus");
    }
}