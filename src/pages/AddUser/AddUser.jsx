import React from "react";
import MainBoxLayout from "../../layout/mainBoxLayout";
import Header from "../../components/Header";
import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
export default function AddUser() {
  const roles = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "manager",
      label: "Manager",
    },
    {
      value: "user",
      label: "User",
    },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  
  

  return (
    <MainBoxLayout>
      <Header title="Create User" subtitle="Create new User profile"></Header>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flexWrap: "wrap",
          p: 3,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack direction="row" spacing={2}>
          <TextField
            sx={{ flexGrow: 1 }}
            label="First Name"
            variant="filled"
            value={watch("firstName")}
            error={errors.firstName ? true : false}
            helperText={errors.firstName && "First Name is required"}
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <TextField
            sx={{ flexGrow: 1 }}
            label="Second Name"
            variant="filled"
            value={watch("lastName")}
            error={errors.lastName ? true : false}
            helperText={errors.lastName && "Last Name is required"}
            {...register("lastName", { required: true, maxLength: 20 })}
          />
        </Stack>
        <TextField
          sx={{ flexGrow: 1 }}
          label="Email"
          variant="filled"
          value={watch("email")}
          error={errors.email ? true : false}
          helperText={
            errors.email && errors.email?.type === "required"
              ? "Email is required"
              : errors.email?.type === "pattern"
              ? "Email is not valid"
              : ""
          }
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />

        <TextField
          sx={{ flexGrow: 1 }}
          label="Contact Number"
          variant="filled"
          value={watch("phone")}
          error={errors.phone ? true : false}
          helperText={errors.phone && errors.phone?.type === "required" ? "Phone Number is required" : errors.phone?.type === "pattern" ? "Phone Number is not valid" : ""}
          {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
        />
        <TextField
          sx={{ flexGrow: 1 }}
          label="Address 1"
          variant="filled"
          value={watch("address1")}
          error={errors.address1 ? true : false}
          helperText={errors.address1 && "Address 1 is required"}
          {...register("address1", { required: false })}
        />
        <TextField
          sx={{ flexGrow: 1 }}
          label="Address 2"
          variant="filled"
          value={watch("address2")}
          error={errors.address2 ? true : false}
          helperText={errors.address2 && "Address 2 is required"}
          {...register("address2", { required: false })}
        />
        <TextField
          id="filled-select-currency"
          select
          label="Role"
          defaultValue="admin"
          value={watch("role")}
          error={errors.role ? true : false}
          helperText={errors.role && "Role is required"}
          variant="filled"
          {...register("role", { required: true })}
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ p: 2, mt: 2, minWidth: "15%", textTransform: "UPPERCASE" }}
          >
            Create new user
          </Button>
        </Box>
      </Box>
    </MainBoxLayout>
  );
}
