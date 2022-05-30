form.addEventListener('submit', (e) => {
    e.preventDefault();
    valido();
  });


  function valido(form)
  {
    if(form.name.value == "") {
      alert("Por favor, escribe tu nombre de usuario.");
      form.name.focus();
      return false;
    }           

    let emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
    if(!emailValido.test(form.email.value)){
        alert("Por favor, escribe tu correo electrónico.");
        form.email.focus();
        return false;
    }
    
    if(form.message.value == "") {
      alert("Por favor, escribe tu mensaje.");;
      form.message.focus();
      return false;
    }
  
    return form.submit();
  }
