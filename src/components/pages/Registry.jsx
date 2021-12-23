import React from "react"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useDispatch, useSelector } from "react-redux"
import { registration } from "../../store/registrySlice"
import {
  Button,
  Typography,
  Container,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Avatar,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"

const theme = createTheme()

const Registry = () => {
  const { error, resMessage } = useSelector((state) => state.registry)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  resMessage && navigate("/signIn")

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    dispatch(
      registration({
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        login: data.get("login"),
        password: data.get("password"),
        phone: data.get("phone"),
        isMaster: data.get("role"),
      })
    )
  }

  return (
    <>
      <Helmet>
        <title>Регистрация</title>
      </Helmet>
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
              Регистрация
            </Typography>
            <Typography component="h1" variant="h6" color="green">
              {resMessage}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
              validate
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    name="firstName"
                    id="firstName"
                    label="Имя"
                    autoFocus
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    name="lastName"
                    id="lastName"
                    label="Фамилия"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    name="email"
                    id="email"
                    label="Email адрес"
                    type="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    name="login"
                    id="login"
                    label="Имя пользователя"
                    autoComplete="new-login"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    name="password"
                    id="password"
                    label="Пароль"
                    type="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    name="phone"
                    id="phone"
                    label="Телефон"
                    type="tel"
                    autoComplete="phone"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="role-select-label">
                      Выберите роль
                    </InputLabel>
                    <Select
                      variant="standard"
                      required
                      name="role"
                      id="role"
                      label="role"
                      labelId="role-select-label"
                    >
                      <MenuItem value={true}>Заказчик</MenuItem>
                      <MenuItem value={false}>Исполнитель</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="error"
              >
                Зарегистрироваться
              </Button>
              <Grid item>
                <Typography variant="body2" display="block" color="red">
                  {error}
                </Typography>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signIn" variant="body2">
                    Уже есть аккаунт? Войти
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Registry
