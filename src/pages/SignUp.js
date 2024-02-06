
import { Icon } from "@iconify/react";
import { AppBar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { auth } from '../FireBase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";




const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const [token, setToken] = useState(null);

    const changeHandlerEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeHandlerPassword = (e) => {
        setPassword(e.target.value);
    }


    const handleButtonClick = async (e) => {
        e.preventDefault();
        if (email === '' && password === '') {
            console.log('no field is empty')
        } 

        if (isSignUp) {
            try {
              const userCredential = await createUserWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;
              const token = await user.getIdToken();
              localStorage.setItem('authToken', token);
        
              console.log('Token:', token);
              alert('Data is successfully stored in Firebase');
              setEmail('');
              setPassword('');
              navigate('/home');
            } catch (error) {
              const errorMessage = error.message;
              alert("You already have an account. Please log in.");
              console.log('Error:', errorMessage);
            }
          } else {
            try {
              const userCredential = await signInWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;
              const token = await user.getIdToken();
              localStorage.setItem('authToken', token);
        
              console.log('Token:', token);
              alert('Data is successfully stored in Firebase');
              setEmail('');
              setPassword('');
              navigate('/home');
            } catch (error) {
              const errorMessage = error.message;
              alert('Error: ' + errorMessage);
              console.log('Error:', errorMessage);
            }
          }
    }

    const toggleMode = () => {
        setIsSignUp((prevMode) => !prevMode);
    };


    return (
        <>
            <Box style={{ backgroundColor: '#D0D0D5', minHeight: '100vh' }}>
                <AppBar position="static" style={{ backgroundColor: '#0A0A23' }}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%" >
                        <img src='./assets/images/FreeCodeCamp_logo.png' alt='s' width={{ xs: 100, md: 200 }} height={22} />
                    </Box>
                </AppBar>

                <Grid container sx={{ justifyContent: 'center', marginTop: '30px' }}>
                    <Grid sx={{ border: '3px solid black', width: { xs: '95%', sm: '55%', md: '40%', lg: '28%', xl: '21%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' } }}>
                        <Grid sx={{ marginTop: '30px', textAlign: 'center' }} >
                            <img src="assets/images/SignUp_Logo.jpg" alt="logo" width={{ md: 200 }} height={20} />

                        </Grid>
                        <Grid sx={{ textAlign: 'center', margin: '30px 0px 40px 0px' }}>
                            <Typography fontFamily={'Lato,Arial'} fontWeight={400}> Log in to freeCodeCamp</Typography>
                            <Typography fontFamily={'Lato,Arial'} fontWeight={400}  >Learn</Typography>
                        </Grid>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Grid sx={{
                                border: '3px solid #c2c8d0', width: '80%', display: 'flex', height: '40px', alignItems: 'center', marginBottom: '10px',
                                '&:hover': {
                                    backgroundColor: 'lightgrey',
                                }
                            }}>
                                <Typography sx={{ padding: '5px 9px 0px 15px' }}> <Icon icon="devicon:google" width="15" height="15" /></Typography>

                                <Typography fontFamily={'Lato,Arial'} sx={{ fontSize: '13px', lineHeight: '25px' }}> Continue with Google</Typography>
                            </Grid>
                            <Grid sx={{
                                border: '3px solid #c2c8d0', width: '80%', display: 'flex', height: '40px', alignItems: 'center', marginBottom: '10px',
                                '&:hover': {
                                    backgroundColor: 'lightgrey',
                                }
                            }}>
                                <Typography sx={{ padding: '5px 9px 0px 15px' }}> <Icon icon="devicon:github" width="18" height="18" /></Typography>

                                <Typography fontFamily={'Lato,Arial'} sx={{ fontSize: '13px', lineHeight: '25px' }}> Continue with Git Hub</Typography>
                            </Grid>
                            <Grid sx={{
                                border: '3px solid #c2c8d0', width: '80%', display: 'flex', height: '40px', alignItems: 'center', marginBottom: '10px',
                                '&:hover': {
                                    backgroundColor: 'lightgrey',
                                }
                            }}>
                                <Typography sx={{ padding: '5px 9px 0px 15px' }}> <Icon icon="devicon:apple" width="18" height="18" /></Typography>

                                <Typography fontFamily={'Lato,Arial'} sx={{ fontSize: '13px', lineHeight: '25px' }}> Continue with Apple</Typography>
                            </Grid>

                        </Grid>

                        <Grid container justifyContent='center' marginBottom={3}>
                            <Grid sx={{ width: '35%' }} >
                                <hr></hr>
                            </Grid>
                            <Grid>
                                <Typography fontSize={10} sx={{ fontSize: '9px', padding: '4px 8px 0px 8px ' }}>OR</Typography>
                            </Grid>
                            <Grid sx={{ width: '35%' }} >
                                <hr></hr>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent='center' marginBottom={3}>
                            <Grid marginBottom={1}>
                                <TextField id="outlined-basic" label="Email address" size="small" variant='outlined' type="email" name="email" value={email} onChange={changeHandlerEmail} />
                            </Grid>
                            <Grid>
                                <TextField id="outlined-basic" label="Password" size="small" variant='outlined' type="password" name="password" value={password} onChange={changeHandlerPassword} />
                            </Grid>
                        </Grid>

                        <Grid container justifyContent='center'>
                            <Grid >
                                <Button variant="container" sx={{ backgroundColor: '#f1be32', borderRadius: '0px', color: 'black', textTransform: 'none', fontFamily: '', width: '230px', marginBottom: '20px', '&:hover': { backgroundColor: '#f1be32' } }} onClick={handleButtonClick}>
                                    <Typography sx={{ fontSize: '13px' }}> {isSignUp ? 'Countinue with Email' : 'Login with Email'}  </Typography></Button>
                                <Typography fontFamily='Lato,Arial' sx={{ fontSize: '13px', textAlign: 'center', marginBottom: '20px' }}> {isSignUp ? 'Already have an account?' : '   Don`t have an account yet?'}  <span style={{ color: '#635DFF', fontWeight: 'bold' }} onClick={toggleMode} >{isSignUp ? 'Log In' : ' Sign up'}</span></Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={{ marginTop: { xs: '60px', justifyContent: 'center' } }}>
                    <Grid>
                        <Typography fontFamily='Lato,Arial' textAlign='center' sx={{ fontSize: { xs: '13.5px', lg: '13px', xl: '10.5px' }, color: '#3B3B4F', lineHeight: '2' }}>freeCodeCamp is free and your account is private by default. We use your email address to connect you to your account.</Typography>
                        <Typography fontFamily='Lato,Arial' textAlign='center' sx={{ fontSize: { xs: '13.5px', lg: '13px', xl: '10.5px' }, color: '#3B3B4F', lineHeight: '2' }}>You must be at least 13 years old to create an account on freeCodeCamp.</Typography>
                        <Typography fontFamily='Lato,Arial' textAlign='center' sx={{ fontSize: { xs: '13.5px', lg: '13px', xl: '10.5px' }, color: '#3B3B4F', lineHeight: '2' }}>By continuing, you indicate that you have read and agree to freeCodeCamp.org's <span style={{ color: '#002EAD' }}>Terms of Service</span>and<span style={{ color: '#002EAD' }}>Privacy Policy</span>.</Typography>
                    </Grid>

                </Grid>


            </Box>
        </>


    );
}
export default SignUp;