import React from "react"
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
import { login } from "../../store/signInSlice"
import { useSelector } from "react-redux"

const theme = createTheme()

const SingIn = () => {
  const error = useSelector((state) => state.signIn.error)

  const dispatch = useDispatch()

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
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
  )
}

export default SingIn
