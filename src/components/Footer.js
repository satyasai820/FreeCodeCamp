import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {

    const footerData = [
        {
            name: 'freeCodeCamp is a donor-supported tax-exempt 501(c)(3) charitable organization (United States Federal Tax Identification Number: 82-0779546).'
        },
        {
            name: 'Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public.'
        },
        {
            name: ' Donations to freeCodeCamp go toward our education initiatives, and help pay for servers, services, and staff.'
        },
    ]

    const aboutData = [
        {
            name: 'About',
        },
        {
            name: 'Alumni Network',
        },
        {
            name: 'Open Source',
        },
        {
            name: 'Shop',
        },
        {
            name: 'Support',
        },
        {
            name: 'Sponsors',
        },
        {
            name: 'Academic Honesty',
        },
        {
            name: 'Code of Conduct',
        },
        {
            name: 'Privacy Policy',
        },
        {
            name: 'Terms of Service',
        },
        {
            name: 'Copyright Policy',
        }
    ]


    return (
        <>
            <Grid container sx={{
                justifyContent: 'center',
                backgroundColor: '#DFDFE2',


            }}>
                <Grid container >
                </Grid>
                <Grid container sx={{ width: { xs: '97%', sm: '95%', lg: '90%', xl: '70%' }, fontSize: '10px' }} >
                    <Grid item xs={12} md={6} sx={{ marginTop: { xs: '30px', md: '90px', lg: '90px' }, }}>

                        {
                            footerData.map((item) => (
                                <>
                                    <Grid container>
                                        <Typography variant="" sx={{ lineHeight: '20px', marginTop: '20px', fontSize: { xs: '16px', lg: '16px', xl: '13.5px' }, margin: '8px' }}> {item.name} </Typography>
                                    </Grid>
                                </>
                            ))
                        }
                        <Typography fontFamily={'"Lato",sans-serif'} sx={{ fontSize: { xs: '19px', sm: '16px' }, fontWeight: '550', marginTop: '20px', color: '#2A2A40' }}>You can make a tax-deductible donation here.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ marginTop: '25px' }}>
                        <Grid container>
                            <Grid item xs={12} textAlign='center'>
                                <Typography fontFamily={'"Hack-ZeroSlash",monospace'} sx={{ lineHeight: { xs: '45px', xl: '26px' }, fontWeight: '550', fontSize: { xs: '18px', xl: '14px' } }} >Trending Guides</Typography>
                            </Grid>
                            <Grid container item xs={12} sm={4} lineHeight={2} direction='column'>
                                <Typography variant="p" > Binary Search in C++</Typography>
                                <Typography variant="p" > List Flatten in Python</Typography>
                                <Typography variant="p" > JS Comparison Operators</Typography>
                                <Typography variant="p" > Python Remove from List</Typography>
                                <Typography variant="p" > Operators in C</Typography>
                                <Typography variant="p" > What is R Squared?</Typography>
                                <Typography variant="p" > Gradient Descent ML</Typography>
                                <Typography variant="p" > Bash Scripting Tutorial</Typography>
                                <Typography variant="p" > Static Variables in Java</Typography>
                                <Typography variant="p" > Install Node.js on Ubuntu</Typography>
                            </Grid>
                            <Grid container item xs={12} sm={4} lineHeight={2} direction='column' >
                                <Typography variant="p" > Binary Search in Java</Typography>
                                <Typography variant="p" > Python Print Exception</Typography>
                                <Typography variant="p" > Python Program Examples</Typography>
                                <Typography variant="p" > Pip Upgrade</Typography>
                                <Typography variant="p" > Dataframe to CSV</Typography>
                                <Typography variant="p" > Git Squash Commits</Typography>
                                <Typography variant="p" > JS Ternary Operator</Typography>
                                <Typography variant="p" > Create an Array in Java</Typography>
                                <Typography variant="p" > What Does = Mean in JS?</Typography>
                                <Typography variant="p" > SQL Where Contains String</Typography>
                            </Grid>
                            <Grid container item xs={12} sm={4} lineHeight={2} direction='column'>
                                <Typography variant="p" >Lambda Sort in Python</Typography>
                                <Typography variant="p" >Enhanced Java for-loops</Typography>
                                <Typography variant="p" >Create a Dict in Python</Typography>
                                <Typography variant="p" >Undo Git Add</Typography>
                                <Typography variant="p" >JavaScript Replace</Typography>
                                <Typography variant="p" >Integer Array in C</Typography>
                                <Typography variant="p" >Print Newline in Python</Typography>
                                <Typography variant="p" >Trim a String in Python</Typography>
                                <Typography variant="p" >Python Iterate Over Dict</Typography>
                                <Typography variant="p" >How to Join Lists in Python</Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Grid textAlign='center' sx={{ marginTop: '15px' }}>
                                    <Typography fontFamily={'"Hack-ZeroSlash",monospace'} sx={{ lineHeight: { xs: '45px', xl: '26px' }, fontWeight: '550', fontSize: { xs: '18px', xl: '14px' } }} >mobile App</Typography>
                                    <img src="assets/images/Footer_img.png" width='75%'></img>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container marginTop={2}>
                        {
                            aboutData.map((item) => (
                                <>
                                    <Grid >
                                        <Typography variant="p" lineHeight={4} sx={{ marginRight: '25px', display: 'flex'}}>{item.name}</Typography>
                                    </Grid>
                                </>
                            ))
                        }

                    </Grid>

                </Grid>

            </Grid>
        </>
    );
}

export default Footer