import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Container, FormLabel, Typography, Box, Grid, Link, TextField, Checkbox, FormControlLabel, Avatar, Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ position: 'fixed', mt: 'auto', bottom: 10}} {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid display="flex" flexDirection="column" item xs={12} md={6}>
              <FormLabel htmlFor="email" required>
                Email Address
              </FormLabel>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                placeholder="example@email.com"
                inputProps={{
                  autoComplete: 'email',
                }}
              />
            </Grid>
            <Grid display="flex" flexDirection="column" item xs={12} md={6}>
              <FormLabel htmlFor="password" required>
                Password
              </FormLabel>
              <TextField
                variant='outlined'
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}
