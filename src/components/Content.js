import { Grid, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "./ButtonComponent";

const Content = () => {
    return (
        <>
            <Grid container direction="column">
                <Grid >
                    <Typography sx={{
                        fontFamily: 'Lato, sans-serif',
                        color: '#1B1B32',
                        fontSize: {
                            xs: '27px',
                            sm: '35px',
                            md: '35px',
                            lg: '40px',
                        },
                        fontWeight: '700',
                        marginTop: {
                            xs: '100px',
                            md: '120px',
                            lg: '150px',
                            xl: '140px',
                        },

                        marginLeft: {
                            xs: '20px',
                            sm: '100px',
                            md: '150px',
                            lg: '350px',
                            xl: '450px',
                        }

                    }}>Learn to code — for free.</Typography>
                </Grid>
                <Grid  >
                    <Typography sx={{
                        fontFamily: 'Lato, sans-serif',
                        color: '#1B1B32',
                        fontSize: {
                            xs: '27px',
                            sm: '35px',
                            md: '35px',
                            lg: '40px',
                        },
                        fontWeight: '700',
                        marginLeft: {
                            xs: '20px',
                            sm: '100px',
                            md: '150px',
                            lg: '350px',
                            xl: '450px',
                        },
                        marginTop: {
                            xs: '20px',
                        }
                    }} >Build projects.</Typography>
                </Grid>
                <Grid >
                    <Typography sx={{
                        fontFamily: 'Lato, sans-serif',
                        color: '#1B1B32',
                        fontSize: {
                            xs: '27px',
                            sm: '35px',
                            md: '35px',
                            lg: '40px',
                        },
                        fontWeight: '700',
                        marginLeft: {
                            xs: '20px',
                            sm: '100px',
                            md: '150px',
                            lg: '350px',
                            xl: '450px',
                        },
                        marginTop: {
                            xs: '20px',
                        }
                    }}>Earn certifications.</Typography>
                </Grid>
                <Grid container>
                    <Grid >
                        <Typography sx={{
                            fontFamily: 'Lato, sans-serif',
                            color: '#1B1B32',
                            fontSize: {
                                xs: '21px',
                                sm: '20px',
                                md: '21px',
                                lg: '22px',
                                xl: '18px',
                            },

                            fontWeight: '550',
                            marginLeft: {
                                xs: '20px',
                                sm: '100px',
                                md: '150px',
                                lg: '350px',
                                xl: '450px',
                            },
                            marginRight: {
                                sm: '110px',
                                md: '90px',
                                lg: '300px',
                                xl: '430px',
                            },
                            marginTop: {
                                xs: '22px',
                                sm: '20px',
                                md: '20px',
                                lg: '25px',
                                xl: '30px',
                            }

                        }}>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container marginTop={2} >
                <Grid sx={{
                    marginLeft: {
                        xs: '50px',
                        sm: '100px',
                        md: '150px',
                        lg: '350px',
                        xl: '450px',
                    },

                }} >
                    <img src="assets/images/Home_Logo_1.png" width={40} height={40} />
                </Grid>
                <Grid sx={{
                    marginLeft: {
                        xs: '9vmin',
                        sm: '30px',
                        md: '60px',
                        lg: '70px',
                        xl: '70px',
                    },
                }}>
                    <img src="assets/images/Home_Logo_2.jpg" width={70} height={40} />
                </Grid>
                <Grid sx={{
                    marginLeft: {
                        xs: '6vmin',
                        sm: '30px',
                        md: '60px',
                        lg: '70px',
                        xl: '70px',
                    },
                }}>
                    <img src="assets/images/Home_Logo_3.png" width={110} height={40} />
                </Grid>
                <Grid sx={{
                    marginLeft: {
                        xs: '50px',
                        sm: '30px',
                        md: '60px',
                        lg: '70px',
                        xl: '70px',
                    },
                    paddingTop: {
                        xs: '10px',
                        sm: '0px',
                    }
                }}>
                    <img src="assets/images/Home_Logo_4.png" width={100} height={35} />
                </Grid>
                <Grid sx={{
                    marginLeft: {
                        xs: '50px',
                        sm: '30px',
                        md: '60px',
                        lg: '70px',
                        xl: '70px',
                    },
                    paddingTop: {
                        xs: '5px',
                        sm: '0px',
                    }
                }}>
                    <img src="assets/images/Home_Logo_5.png" width={120} height={50} />
                </Grid>
            </Grid >

            {/* Here I'm Using Button Component */}

            <ButtonComponent />


            <Grid container justifyContent='center' >
                <Grid sx={{
                    marginTop: '40px',
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}>
                    <img src="assets/images/Home_Banner_1.png" />
                </Grid>
                <Grid container justifyContent='center' >
                    <Typography fontWeight={600} sx={{
                        fontSize: '18px',
                        color: '#3B3B4F',
                        fontFamily: 'Lato,sans-serif',
                        display: {
                            xs: 'none',
                            lg: 'block',
                        },
                    }}>freeCodeCamp students at a local study group in South Korea.</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{
                marginTop: '25px',
                textAlign: 'center',
            }}>
                <img
                    src="assets/images/Home_Banner_2.png"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                />
            </Grid>


            {/* Here I'm Using cards component  */}
            



        </>
    );
}
export default Content;