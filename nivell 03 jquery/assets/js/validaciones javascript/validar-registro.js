const formRegistro = document.getElementById('myFormIdReg');

function registerValidateReg() {
	var acumErrores = 0;
	
	formRegistro.classList.remove('is-invalid');
	
    var inputEmail = document.forms["myForm2"]["inputEmail"];
	var inputPassword = document.forms["myForm2"]["inputPassword"];
	var inputPasswordRep = document.forms["myForm2"]["inputPasswordRep"];

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "*Campo requerido";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
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

	if(inputPasswordRep.value == "") {
		inputPasswordRep.classList.add("is-invalid");
		document.getElementById("errorPasswordRep").textContent = "*La contraseña es obligatoria";
		acumErrores ++;
	/*}else if(!validar_password(inputPasswordRep.value)){
		inputPasswordRep.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "La contraseña debe contener minimo 6 digitos";
		acumErrores ++;*/
	}else if(!validar_passwordConfirm(inputPassword.value, inputPasswordRep.value)){
		inputPasswordRep.classList.add("is-invalid");
		console.log("okkkk");
		document.getElementById("errorPasswordRep").textContent = "*La contraseña debe ser igual a la anterior";
		acumErrores ++;
	} else {
        inputPasswordRep.classList.add("is-valid");
    }

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

formRegistro.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    registerValidateReg();
	console.log("funcion addevent registro");
}, true);


function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

/*function validar_password(password) {
    return password.length < 6 ? false : true;
}*/

function validar_passwordConfirm(value1, value2){
	if(value1 == value2){
		return true;
	}else{
		return false;
		}
}


function validar_password(str){
    // minuscula + mayus
    // minimo 8 caracteres
	//minimo un numero
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return re.test(str);
  }