const formContacto = document.getElementById('myFormIdCont');

function registerValidateCont() {
	var acumErrores = 0;
	
	formContacto.classList.remove('is-invalid');
	
    var inputName = document.forms["myForm3"]["inputName"];
    var inputEmail = document.forms["myForm3"]["inputEmail"];
	var inputText = document.forms["myForm3"]["inputText"];

	//NOMBRE
    if(inputName.value == "") {
		inputName.classList.add("is-invalid");
		document.getElementById("errorNameCont").textContent = "*Campo requerido";
		acumErrores ++;
	}else if(!validar_nombre(inputName.value)){
		inputName.classList.add("is-invalid");
		document.getElementById("errorNameCont").textContent = "*Nombre no valido";
		acumErrores ++;
	} else {
        inputName.classList.add("is-valid");
    }
    //EMAIL
    if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmailCont").textContent = "*Campo requerido";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmailCont").textContent = "*El email no cumple el formato";
		acumErrores ++;
	} else {
        inputEmail.classList.add("is-valid");
    }
    //TEXTO
	if(inputText.value == "") {
		inputText.classList.add("is-invalid");
		document.getElementById("errorTextCont").textContent = "*Ups! Te falto el texto!";
		acumErrores ++;
	}else if(!validar_texto(inputText.value)){
		inputText.classList.add("is-invalid");
		document.getElementById("errorTextCont").textContent = "*El texto debe contener minimo 20 digitos";
		acumErrores ++;
	} else {
        inputText.classList.add("is-valid");
    }

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

formContacto.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    registerValidateCont();
}, true);


function validar_nombre(name) {
    var comp = /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
    return comp.test(name) ? true : false;
}


function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_texto(text) {
    return text.length < 20 ? false : true;
}