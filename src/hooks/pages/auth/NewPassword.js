import { Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import { CaretLeft } from 'phosphor-react'
import React from 'react'
import NewPasswordForm from '../../sections/auth/NewPasswordForm';

const NewPassword = () => {
  return (
    <>
     <Stack spacing={2} sx={{ mb: 2, position: "relative" }}>
     <Typography variant="h3" paragraph>
          Reset Password
        </Typography>
        <Typography>
          Please enter your new password below.
        </Typography>
        {/* NewPaswordForm */}
        <NewPasswordForm />

        <Link
          component={RouterLink}
          to="/auth/login"
          color="inherit"
          variant="subtitle2"
          sx={{
            mt: 3,
            mx: "auto",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <CaretLeft />
          Return to signin
        </Link>
     </Stack>
    </>
  )
}

export default NewPassword