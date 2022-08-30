
export const ACTIONS = {
  EMAIL_FORMAT: "emailFormat",
  USERNAME_LENGTH: "usernameLength",
  PASSWORD_FORMAT: "passwordFormat",
};

export const errorsState = {
  usernameLength: { isValid: false, msg: "", value: "" },
  emailFormat: { isValid: false, msg: "", value: "" },
  passwordFormat: { isValid: false, msg: "", value: "" },
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.USERNAME_LENGTH:
      if (action.payload.value.length < 6) {
        return {
          ...state,
          usernameLength: {
            isValid: true,
            value: action.payload.value,
            msg: action.payload.msg,
          },
        };
      } else if (action.payload.value.trim() === "") {
        return {
          ...state,
          usernameLength: {
            isValid: true,
            value: action.payload.value,
            msg: action.payload.msg,
          },
        };
      } else {
        return errorsState;
      }
    case ACTIONS.EMAIL_FORMAT:
      let validFormat =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!action.payload.value.match(validFormat)) {
        return {
          ...state,
          emailFormat: {
            isValid: true,
            value: action.payload.value,
            msg: action.payload.msg,
          },
        };
      } else if (action.payload.value.trim() === "") {
        return {
          ...state,
          emailFormat: {
            isValid: true,
            value: action.payload.value,
            msg: action.payload.msg,
          },
        };
      } else {
        return errorsState;
      }
    case ACTIONS.PASSWORD_FORMAT:
      let validPassFormat =
        /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$/;
      if (!action.payload.value.match(validPassFormat)) {
        return {
          ...state,
          passwordFormat: {
            isValid: true,
            value: action.payload.value,
            msg: action.payload.msg,
          },
        };
      } else if (action.payload.value.trim() === "") {
        return {
          ...state,
          passwordFormat: {
            isValid: true,
            value: action.payload.value,
            msg: action.payload.msg,
          },
        };
      } else {
        return errorsState;
      }
    default:
      throw new Error("error");
  }
}
