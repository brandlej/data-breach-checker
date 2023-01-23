import { validateEmail } from "./validator";

export const CHANGE_EMAIL = "ActivateFacilityForm/changeEmail";

export const emailFieldName = "email";

export const initialState = {
  [emailFieldName]: {
    value: "",
    valid: null,
    feedback: null,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      const feedback = validateEmail(action.value);

      return {
        ...state,
        [emailFieldName]: {
          value: action.value,
          valid: !feedback,
          feedback,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export const getEmail = (state) => state[emailFieldName].value;
export const getEmailValid = (state) => state[emailFieldName].valid;
export const validEmail = (state) =>
  typeof state[emailFieldName].valid === "boolean"
    ? state[emailFieldName].valid
    : false;
export const getEmailFeedback = (state) => state[emailFieldName].feedback;

export const getState = (state) => ({
  [emailFieldName]: state[emailFieldName],
});

export const getValues = (state) => ({
  [emailFieldName]: getEmail(state),
});

export const valid = (state) => validEmail(state);
