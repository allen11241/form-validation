import { ValidationModule } from "./validation-module";
  
  function createForm() {
    const form = document.createElement('form');
    form.appendChild(createEmailLabel());
    form.appendChild(createEmailInput());
    form.appendChild(createCountryLabel());
    form.appendChild(createCountryInput());
    form.appendChild(createZipLabel());
    form.appendChild(createZipInput());
    form.appendChild(createPasswordLabel());
    form.appendChild(createPasswordContainer());
    form.appendChild(createPasswordConfirmLabel());
    form.appendChild(createPasswordConfirmContainer());
    form.appendChild(createSubmitBtn());
    return form;
  }

  function createPasswordContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(createPasswordInput());
    container.appendChild(createErrorMessage());
    return container;
  }

  function createErrorMessage() {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message-red')
    errorMessage.setAttribute('id', 'error-message');
    return errorMessage;
  }

  function createPasswordConfirmContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(createPasswordConfirmInput());
    container.appendChild(createErrorMessageConfirm());
    return container;
  }

  function createErrorMessageConfirm() {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message-red')
    errorMessage.setAttribute('id', 'error-message-confirm');
    return errorMessage;
  }
  
  function createEmailLabel() {
    const label = document.createElement('label');
    label.setAttribute('for', 'email');
    label.textContent = 'email';
    return label;
  }
  
  function createEmailInput() {
    const email = document.createElement('input');
    email.type = 'email';
    email.required = true;
    email.placeholder = 'example@mail.com';
    email.setAttribute('id', 'email');
    return email;
  }
  
  function createCountryLabel() {
    const label = document.createElement('label');
    label.setAttribute('for', 'country');
    label.textContent = 'country';
    return label;
  }
  
  function createCountryInput() {
    const country = document.createElement('input');
    country.setAttribute('id', 'country');
    country.type = 'text';
    country.required = true;
    return country;
  }
  
  function createZipLabel() {
    const label = document.createElement('label');
    label.setAttribute('for', 'zip');
    label.textContent = 'zip code';
    return label;
  }
  
  function createZipInput() {
    const zip = document.createElement('input');
    zip.setAttribute('id', 'zip');
    zip.required = true;
    zip.type = 'number'
    return zip;
  }
  
  function createPasswordLabel() {
    const label = document.createElement('label');
    label.setAttribute('for', 'password');
    label.textContent = 'password';
    return label;
  }
  
  function createPasswordInput() {
    const password = document.createElement('input');
    password.type = 'password';
    password.required = true;
    password.setAttribute('id', 'password');
    return password;
  }

  function initPasswordListener() {
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    password.addEventListener("blur", function() {
        errorMessage.textContent = '';
        errorMessage.classList.replace('error-message-green','error-message-red');
        if(!ValidationModule.checkNotEmpty(password)) {
            errorMessage.textContent = 'Must enter a password';
        } else if(!ValidationModule.checkPasswordLength(password)) {
            errorMessage.textContent = 'Must be at least 7 characters long';
        } else if(!ValidationModule.checkNumber(password)) {
            errorMessage.textContent = 'Must contain at least one number';
        } else if(!ValidationModule.checkLetter(password)) {
            errorMessage.textContent = 'Must contain at least one letter'
        } else if(!ValidationModule.checkUpperLowercase(password)){
            errorMessage.textContent = 'Must contain at least one lowercase and one uppercase letter'
        } else if(!ValidationModule.checkSpecialCharacters(password)) {
            errorMessage.textContent = 'Must contain at least one special character'
        } else {
            errorMessage.classList.replace('error-message-red','error-message-green');
            errorMessage.textContent = 'acceptable password'
            ValidationModule.getPassword(password);
            console.log('good job')
        }
      });
  }

  function initPasswordConfirmListener() {
    const passwordConfirm = document.getElementById('password-confirm');
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message-confirm');
    passwordConfirm.addEventListener("blur", function() {
        errorMessage.textContent = '';
        if(!ValidationModule.comparePasswords(passwordConfirm)) {
          errorMessage.classList.add('error-message-red')
            errorMessage.textContent = 'Must match password';
        } else {
            errorMessage.classList.replace('error-message-red', 'error-message-green')
            errorMessage.textContent = 'password match'
            ValidationModule.getPassword(passwordConfirm);
            console.log('good job');
        }
      });
  }
  
  function createPasswordConfirmLabel() {
    const label = document.createElement('label');
    label.setAttribute('for', 'password-confirm');
    label.textContent = 'confirm password';
    return label;
  }
  
  function createPasswordConfirmInput() {
    const errorMessage = document.getElementById('error-message-confirm');
    const password = document.createElement('input');
    password.type = 'password';
    password.required = true;
    password.setAttribute('id', 'password-confirm');
    /*password.addEventListener("input", (event) => {
        if(ValidationModule.comparePasswords(password)) {
            password.classList.add('valid');
            //errorMessage.textContent = 'password match'
        } else {
            console.log('no match')
        }
    });*/
    return password;
  }

  function createSubmitBtn() {
    const btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('id', 'btn-submit')
    btnSubmit.textContent = 'Submit';
    btnSubmit.addEventListener('click', function() {

    })
    return btnSubmit;
  }
  
  function initPage() {
    const wrapper = document.querySelector('.content');
    wrapper.appendChild(createForm());
    initPasswordListener();
    initPasswordConfirmListener();
  }
  
  export default initPage;