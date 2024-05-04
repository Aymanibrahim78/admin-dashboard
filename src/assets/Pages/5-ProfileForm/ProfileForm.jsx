// @ts-nocheck
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import {
  Box,
  MenuItem,
  Stack,
  TextField,
  Button,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Header from '../../Components/Header'

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const ProfileForm = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    handleClick();
  };
  const data = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manger",
      label: "Manger",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  // Show PassWord

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // End Show passWors
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
                  <Header title={"CREATE ACCOUNT"}  subTitle={"Create a New Account Profile"}/>

      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
          error={errors.firstName}
          helperText={
            errors.firstName ? "this siled required & Min 3 Character" : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Fist Name"
          variant="filled"
        />
        <TextField
          error={errors.lastName}
          helperText={
            errors.lastName ? "this siled required & Min 3 Character" : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={errors.email}
        helperText={errors.email ? "this siled required & Valid Email" : null}
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />

      <FormControl variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          error={errors.password}
          {...register("password", { required: true, pattern: regPassword })}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText error={errors.password}>
          {errors.password ? "this siled required & password" : null}
        </FormHelperText>
      </FormControl>

      <TextField
        error={errors.phoneNumber}
        helperText={
          errors.phoneNumber ? "this siled required & Min 11 Number" : null
        }
        {...register("phoneNumber", { required: true, minLength: 11 })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        >
          Create New Account
        </Button>

        {/* Snak Bar  */}
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={1000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account Created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default ProfileForm;
