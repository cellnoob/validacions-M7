const formInicio = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	formInicio.classList.remove('is-invalid');
	
    var inputEmail = document.forms["myForm"]["inputEmail"];
	var inputPassword = document.forms["myForm"]["inputPassword"];
	

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "*Campo requerido";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "*El email no cumple el formato";
		acumErrores ++;
	} else {
        inputEmail.classList.add("is-valid");
    }

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "*La contraseña es obligatoria";
		acumErrores ++;
	}else if(!validar_password(inputPassword.value)){
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "*La contraseña debe contener minimo 8 digitos";
		acumErrores ++;
	} else {
        inputPassword.classList.add("is-valid");
    }

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

formInicio.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
/*
function validar_password(password) {
    return password.length < 6 ? false : true;
}
*/

function validar_password(str){
    // minuscula + mayus
    // minimo 8 caracteres
	//minimo un numero
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return re.test(str);
  }