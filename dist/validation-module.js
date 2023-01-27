const ValidationModule = (function() {

    const PASSWORD_MIN_LENGTH = 7;
    let password = '';
    const NO_ERROR = 'good';
    const ERROR_EMPTY_PASSWORD = 'Must enter a password';
    const ERROR_NOT_LONG_ENOUGH = 'Must be at least 7 characters long';
    const ERROR_NO_NUMBER = 'Must contain at least one number';
    const ERROR_NO_LETTER = 'Must contain at least one letter';
    const ERROR_UPPERCASE_LOWERCASE = 'Must contain at least one lowercase and one uppercase letter';
    const ERROR_SPECIAL_CHARACTER = 'Must contain at least one special character';

    const getPassword = (input) => {
        password = input.value;
    }

    const comparePasswords = (input) => {
        if(input.value === password && input.value.length > 0) {
            return true;
        } else {
            return false;
        }
    }
        
    const checkPasswordLength = (input) => {
        input = input.value;
        if(input.length >= PASSWORD_MIN_LENGTH ) {
            return true;
        } else {
            return false;
        }
    }

    const checkSpecialCharacters = (input) => {
        const format = /[~`!@#$%^&*()-_+=\[\]{};':"\\|,.<>\/?]+/;
        const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
        /*for(let i=0; i < specialChars.length; i++) {
            console.log(input[i])
            if(input.value.indexOf(specialChars[i]) > -1) {
                console.log('special')
                return true;
            } else {
                console.log('not special')
                return false;
        }
        }*/
        if(input.value.match(/\W/)){
            console.log('special')
            return true;
        } else {
            console.log('NOT special')
            return false;
        }
    }

    const checkNotEmpty = (input) => {
        input = input.value;
        if(input.trim() != '') {
            return true;
        } else {
            return false;
        }
    }

    const checkNumber = (input) => {
        let hasNumber = /\d/;
        //const number = /^[0-9a]+$/;
        if(hasNumber.test(input.value)) {
            return true;
        } else {
            return false;
        }
    }

    const checkLetter = (input) => {
        const letter = /[a-zA-Z]/g;
        if(input.value.match(letter)) {
            return true;
        } else {
            return false;
        }
    }

    const checkUpperLowercase = (input) => {
        const isUppercase = /[A-Z]/;
        const isLowercase = /[a-z]/;
        if(isUppercase.test(input.value) && isLowercase.test(input.value)) {
            return true;
        } else {
            return false;
        }
    }
    
    return {
        getPassword,
        comparePasswords,
        checkPasswordLength,
        checkSpecialCharacters,
        checkNotEmpty,
        checkNumber,
        checkLetter,
        checkUpperLowercase
    }
    
    })();
    
    export {ValidationModule}