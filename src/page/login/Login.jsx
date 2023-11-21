import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import axios from "axios";
import {useDispatch} from "react-redux"
import api from '../../service/apis/api.user'
// import {chargerFlag,addLogin} from "../../store"

function Copyright(props) {
  

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function SignInSide() {
const dispatch=useDispatch()

 
  const linknav = useNavigate();
  const home = () => {
    linknav("/");
  };

  const signUp = () => {
    linknav("/rigister");
  };

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const chargerValue = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userLogin.email != "" && userLogin.password) {
   
      api.checkLogin(userLogin)
      .then((check)=>{
        if (check.data.length!=0) {
          alert("đang nhập thành công")
          linknav("/");
          localStorage.setItem("currentUsers",JSON.stringify(check.data[0]))
        }else{
          alert("sai mật khẩu hoặc email")
        }
      })
    } else {
      toast("Vui lòng nhập đủ thông tin")
    }
  };
  console.log(userLogin);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline classes="signin--icon" />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://phela.vn/wp-content/uploads/2023/11/DSC00252-Edit-scaled.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          className="background"
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // backgroundColor: "red"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={chargerValue}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={chargerValue}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                // style={{background:"transparent",fontWeight:600}}
                className="btn--login"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link style={{ color: "white" }} variant="body2">
                    <p onClick={home}> Back To Home? </p>
                  </Link>
                </Grid>
                <Grid item>
                  <Link style={{ color: "white" }} variant="body2">
                    Don't have an account?{" "}
                    <span style={{ color: "blue" }} onClick={signUp}>
                      Sign Up{" "}
                    </span>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
