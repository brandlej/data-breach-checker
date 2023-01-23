// Note: Does not meet all cases and is not fully RFC compliant
const basicEmailRegExp = /^\S+@\S+\.\S+$/;

export const validateEmail = (value) => {
  if (!value) {
    return "Email is required.";
  }

  if (!basicEmailRegExp.test(value)) {
    return "Email is not valid";
  }

  return null;
};
