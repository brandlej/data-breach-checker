import React, { useReducer } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  reducer,
  initialState,
  CHANGE_EMAIL,
  getValues,
  getEmailValid,
  getEmailFeedback,
  getEmail,
  emailFieldName,
} from "./reducer";

export const CheckEmailForm = ({ onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(getValues(state));
    return false;
  };

  const emailFieldValueValid = getEmailValid(state);
  const emailFieldValid =
    typeof emailFieldValueValid === "boolean" ? emailFieldValueValid : true;
  const emailFieldFeedback = getEmailFeedback(state);

  const onChangeEmail = ({ target: { value } }) =>
    dispatch({ type: CHANGE_EMAIL, value });

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { marginBottom: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          name={emailFieldName}
          required
          label="Email"
          variant="standard"
          error={!emailFieldValid}
          helperText={!emailFieldValid ? emailFieldFeedback : ""}
          onChange={onChangeEmail}
          value={getEmail(state)}
        />
      </Box>
      <Button
        variant="contained"
        disabled={!getEmailValid(state)}
        onClick={onSubmitForm}
      >
        Submit
      </Button>
    </>
  );
};
