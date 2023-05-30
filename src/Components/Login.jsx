import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useState, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";

import { Navigate } from "react-router-dom";
const LOGIN_MUTATION = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      token
    }
  }
`;

export default function Login() {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [mutateFunction, { data, loading, error }] =
    useMutation(LOGIN_MUTATION);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    mutateFunction({
      variables: {
        input: {
          username: formData.userName,
          password: formData.password,
          rememberMe: true,
        },
      },
    })
      .then((response) => {
        const { token } = response.data.login;
        localStorage.setItem("token", token);
        window.location.href = "/dataList";
      })
      .catch((error) => {
        console.log(error);
      });

    //Navigate("/dataList");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/dataList";
    }
    console.log(data, loading, error);
  }, [data, loading, error]);
  if (error) {
    return `error in login ${error.message}`;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="userName"
            name="userName"
            //autoComplete="userName"
            value={formData.userName}
            onChange={(e) => handleChange(e)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
