import React, { useEffect } from "react"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import {
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Button,
  CssBaseline,
  Avatar,
} from "@mui/material"
import { useDispatch } from "react-redux"
import { login, resetErrors } from "../../store/signInSlice"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Spinner } from "react-bootstrap"

const theme = createTheme()

const SingIn = () => {
  const { error, token, pending } = useSelector((state) => state.signIn)

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const location = useLocation()

  const fromPage = location.state?.from?.pathname || "/"

  token && navigate(fromPage, { replace: true })

  useEffect(() => {
    dispatch(resetErrors())
  }, [dispatch])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    dispatch(
      login({
        login: data.get("login"),
        password: data.get("password"),
      })
    )
  }

  return (
    <>
      <Helmet>
        <title>Войти</title>
      </Helmet>
      {pending ? (
        <div class="d-flex justify-content-center">
          <Spinner animation="grow" variant="danger" className="m-5" />
        </div>
      ) : (
        <ThemeProvider theme={theme}>
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
              <Avatar sx={{ m: 1, bgcolor: "red" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Войти
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                Validate
                sx={{ mt: 1 }}
              >
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Имя пользователя"
                  name="login"
                  autoComplete="login"
                  autoFocus
                />
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="error"
                >
                  Войти
                </Button>
                <Grid container>
                  <Grid item>
                    <Typography variant="body2" display="block" color="red">
                      {error}
                    </Typography>

                    <Link href="/registry" variant="body2">
                      {"Нет учетной записи? Зарегистрироваться"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </>
  )
}

export default SingIn
