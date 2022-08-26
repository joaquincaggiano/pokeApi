export const ACTIONS = {
    EMAIL_FORMAT: 'emailFormat',
    USERNAME_LENGTH:'usernameLength',
    PASSWORD_FORMAT: 'passwordFormat'
  }

 export const errorsState = {
    usernameLength: {isInvalid: false, msg: 'Username must be at least 6 characters', value: ''},
    emailFormat: {isInvalid: false, msg: 'Please enter a valid email', value: ''},
    passwordFormat: {isInvalid: false, msg: 'Password be at least 8 characters and must contain at least one upper case, one lower case and one number', value: ''}
  }

 export function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.USERNAME_LENGTH: 
            if (action.payload.value.length < 6){
                return {...state, usernameLength: {
                    isInvalid: true, value: action.payload.value, msg: errorsState.usernameLength.msg}}
            }else{
                return {...state, 
                    usernameLength: {
                    isInvalid: false, value: action.payload.value, msg: errorsState.usernameLength.msg}
                };
            }
     case ACTIONS.EMAIL_FORMAT: 
        let validFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (!action.payload.value.match(validFormat)){
                return {...state, emailFormat: {
                    isInvalid: true, value: action.payload.value, msg: errorsState.emailFormat.msg}}
            }else{
                return {...state, emailFormat: errorsState.emailFormat};
            }
     case ACTIONS.PASSWORD_FORMAT: 
            let validPassFormat = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$/
                if (!action.payload.value.match(validPassFormat)){
                    return {...state, passwordFormat: {
                        isInvalid: true, value: action.payload.value, msg: errorsState.passwordFormat.msg}}
                }else{
                    return {...state, passwordFormat: errorsState.passwordFormat};
                }
      default: 
          throw new Error('error')
    }
  }