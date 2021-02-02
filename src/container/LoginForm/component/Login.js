import React from "react";
import { useSelector } from 'react-redux';
import { Box, Typography } from "@material-ui/core";
import { LoginForm } from "./LoginForm";

export function Login({ onSubmit }) {
  const [ status, user, error ] = useSelector(state => [
      state.login.status,
      state.login.user,
      state.login.error
  ])

  if (user) {
    return (
      <Box m={1}>
        <Typography variant="body1">
          Logged in as <b>{user.email}</b>
        </Typography>
      </Box>
    );
  }

  const isLoading = status === "pending";
  const isError = status === "rejected";

  return (
    <>
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
      {isError && (
        <Box m={1}>
          <Typography variant="body1">
            <b>Error: </b> {error}
          </Typography>
        </Box>
      )}
    </>
  );
}
