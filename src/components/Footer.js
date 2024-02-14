import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {

    const footerData = [
        { name: 'freeCodeCamp is a donor-supported tax-exempt 501(c)(3) charitable organization (United States Federal Tax Identification Number: 82-0779546).' },
        { name: 'Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public.' },
        { name: ' Donations to freeCodeCamp go toward our education initiatives, and help pay for servers, services, and staff.' },
    ]

    const sideData = [{ name: 'Binary Search in C++' }, { name: 'List Flatten in Python' }, { name: 'JS Comparison Operators' }, { name: 'Python Remove from List' }, { name: 'Operators in C' }, { name: 'What is R Squared?' }, { name: ' Gradient Descent ML' }, { name: 'Bash Scripting Tutorial' }, { name: 'Static Variables in Java' }, { name: 'Install Node.js on Ubuntu' }]

    const sideData2 = [{ name: 'Binary Search in Java' }, { name: 'Python Print Exception' }, { name: 'Python Program Examples' }, { name: 'Pip Upgrade' }, { name: 'Dataframe to CSV' }, { name: 'Git Squash Commits' }, { name: ' JS Ternary Operator' }, { name: 'Create an Array in Java' }, { name: 'What Does = Mean in JS?' }, { name: 'SQL Where Contains String' }]

    const sideData3 = [{ name: "Lambda Sort in Python" }, { name: "Enhanced Java for-loops" }, { name: "Create a Dict in Python" }, { name: "Undo Git Add" }, { name: "JavaScript Replace" }, { name: "Integer Array in C" }, { name: "Print Newline in Python" }, { name: "Trim a String in Python" }, { name: "Python Iterate Over Dict" }, { name: "How to Join Lists in Python" },]

    const aboutData = [{ name: 'About', }, { name: 'Alumni Network', }, { name: 'Open Source', }, { name: 'Shop', }, { name: 'Support', }, { name: 'Sponsors', }, { name: 'Academic Honesty', }, { name: 'Code of Conduct', }, { name: 'Privacy Policy', }, { name: 'Terms of Service', }, { name: 'Copyright Policy', }]


    return (
        <>
            <Grid container marginTop={10} sx={{ justifyContent: 'center', backgroundColor: '#DFDFE2' }}>
                <Grid container >
                </Grid>
                <Grid container sx={{ width: { xs: '97%', sm: '95%', lg: '90%', xl: '70%' }, fontSize: '10px' }} >
                    <Grid item xs={12} md={6} sx={{ marginTop: { xs: '30px', md: '90px', lg: '90px' }, }}>

                        {footerData.map((item) => (
                            <>
                                <Grid container>
                                    <Typography variant="" sx={{ lineHeight: '20px', marginTop: '20px', fontSize: { xs: '16px', lg: '16px', xl: '13.5px' }, margin: '8px' }}> {item.name} </Typography>
                                </Grid>
                            </>
                        ))
                        }
                        <Typography fontFamily={'"Lato",sans-serif'} sx={{ fontSize: { xs: '19px', sm: '16px' }, fontWeight: '550', marginTop: '20px', color: '#2A2A40' }}>You can <span style={{ textDecoration: 'underline' }}> make a tax-deductible donation here.</span> </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ marginTop: '25px' }}>
                        <Grid container>
                            <Grid item xs={12} textAlign='center'>
                                <Typography fontFamily={'"Hack-ZeroSlash",monospace'} sx={{ lineHeight: { xs: '45px', xl: '26px' }, fontWeight: '550', fontSize: { xs: '18px', xl: '14px' } }} >Trending Guides</Typography>
                            </Grid>

                            <Grid container item xs={12} sm={4} md={6} lg={4} lineHeight={2} sx={{ marginLeft: { xs: '10px', sm: '0' } }} direction='column'>
                                {sideData.map((item) => (
                                    <Typography variant="p" > {item.name}</Typography>
                                ))}
                            </Grid>
                            <Grid container item xs={12} sm={4} lineHeight={2} sx={{ marginLeft: { xs: '10px', sm: '0' } }} direction='column' >
                                {sideData2.map((item) => (
                                    <Typography variant="p" >{item.name}</Typography>

                                ))}
                            </Grid>
                            <Grid container item xs={12} sm={4} lineHeight={2} sx={{ marginLeft: { xs: '10px', sm: '0' } }} direction='column'>
                                {sideData3.map((item) => (
                                    <Typography sx={{display:{md:'none', lg:'block'}}} variant="p" >{item.name}</Typography>

                                ))}
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Grid textAlign='center' sx={{ marginTop: '15px' }}>
                                    <Typography fontFamily={'"Hack-ZeroSlash",monospace'} sx={{ lineHeight: { xs: '55px', xl: '36px' }, fontWeight: '550', fontSize: { xs: '18px', xl: '14px' } }} >Mobile App</Typography>
                                    <Grid container>
                                        <Grid item xs={12} sm={6}>
                                            <img style={{paddingRight:'5px'}} src="https://www.tapsmart.com/wp-content/uploads/2015/08/app-store-badge.png" width='131vmin' alt="App Store Logo" />
                                            </Grid>
                                            <Grid item xs={12} sm={6} sx={{marginTop:{xs:'15px', sm:'0px'}}}>
                                            <img  src="https://en.logodownload.org/wp-content/uploads/2019/06/get-it-on-google-play-badge.png" width='136vmin' alt="Google Play Badge" />

                                            </Grid>
                                        
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container marginTop={2} justifyContent="center" marginBottom={5} sx={{ borderTop: { lg: '1px solid lightgrey' } }}>
                        {
                            aboutData.map((item) => (
                                <>
                                    <Grid  >
                                        <Typography variant="p" sx={{ marginRight: '25px', display: 'flex', lineHeight: { xs: '2.5', lg: '6' } }}>{item.name}</Typography>
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