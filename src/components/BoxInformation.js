
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const BoxInformation = ({width, marginLeft, fontFamily, fontSize, marginRight, display}) => {

    const BoxData = [
        {
            Icon: 'carbon:logo-react',
            title: 'Front End Development Libraries Certification',
        },
        {
            Icon: 'arcticons:dbnavigator-alt',
            title: 'Data Visualization Certification',
        },
        {
            Icon: 'clarity:storage-solid',
            title: 'Relational Database Certification',
        },
        {
            Icon: 'fa-regular:list-alt',
            title: 'Back End Development and APIs Certification',
        },
        {
            Icon: 'fluent:notepad-edit-16-regular',
            title: 'Quality Assurance Certification',
        },
        {
            Icon: 'bxl:python',
            title: 'Scientific Computing with Python (Beta) Certification',
        },
        {
            Icon: 'fluent:arrow-growth-24-filled',
            title: 'Data Analysis with Python Certification',
        },
        {
            Icon: 'mdi:shield-check',
            title: 'Information Security Certification',
        },
        {
            Icon: 'simple-icons:uml',
            title: 'Machine Learning with Python Certification',
        },
        {
            Icon: 'mdi:square-root',
            title: 'College Algebra with Python Certification',
        }
    ]

    const Box2Data = [
        {
            Icon: 'game-icons:viking-helmet',
            title: 'The Odin Project - freeCodeCamp Remix (Beta)',
        },
        {
            Icon: 'subway:sharing-1',
            title: 'Coding Interview Prep',
        },
        {
            Icon: 'fa-solid:graduation-cap',
            title: 'Project Euler',
        },
        {
            Icon: 'teenyicons:mobile-solid',
            title: 'Rosetta Code',
        }
    ]

    return (
        <>
            <Box >
                <Typography lineHeight={1} fontFamily={fontFamily} sx={{ marginTop: { xs: '20px', sm: '30px', md: '60px', lg: '80px', xl: '80px', }, marginLeft: { xs: '15px', sm: '100px', md: '200px', lg: '300px', xl: marginLeft, }, marginRight: { sm: '100px', md: marginRight ||'400px', lg: '300px', xl:'350px', }, fontWeight: '600', fontSize: { xs: '25px', sm:  fontSize||'40px', md:fontSize ||'40px', lg: fontSize||'35px', xl: fontSize ||'33px', }, marginBottom: '20px', }}>
                    Earn free verified certifications with freeCodeCamp's core curriculum:</Typography>
            </Box>

            <Link to="/detail/responsive" style={{ textDecoration: 'none',color:'inherit' }}>

                <Grid container sx={{ justifyContent: 'center', }}>
                    <Grid  sx={{
                        alignItems: 'center', border: '3px solid black', height: { xs: '75px', xl: '65px', }, marginTop: '8px',
                         width: { xs: '90%', sm: '75%', md: '60%', xl:width },
                        paddingLeft: '10px', backgroundColor: '#D0D0D5', display: 'flex',
                        ':hover': {
                            backgroundColor: '#0A0A23',
                            color: '#D0D0D5',
                        },
                    }}>
                        <Icon icon='fluent:phone-laptop-16-regular' width="50" height="50" />

                        <Typography sx={{
                            fontFamily: '"Lato",Helvetica,Arial,sans-serif ',
                            fontSize: { xs: '17px', sm: '19px', lg: '20px', xl: '15px', }, marginLeft: '10px',
                        }} >
                            Responsive Web Design Certification
                        </Typography>
                        <Box sx={{ marginLeft: 'auto', display: display || 'block' }}>
                            <Icon icon="mingcute:arrows-right-line" width="35" height="35" />
                        </Box>

                    </Grid>
                </Grid>

            </Link>

            <Link to="/detail/javascript"  style={{ textDecoration: 'none',color:'inherit' }}>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid sx={{
                    alignItems: 'center', border: '3px solid black', height: { xs: '75px', xl: '65px', }, marginTop: '8px', width: { xs: '90%', sm: '75%', md: '60%', xl:width },
                    paddingLeft: '10px', backgroundColor: '#D0D0D5', display: 'flex',
                    ':hover': {
                        backgroundColor: '#0A0A23',
                        color: '#D0D0D5',
                    },
                }}>
                    <Icon icon='ion:logo-javascript' width="50" height="50" />

                    <Typography sx={{
                        fontFamily: '"Lato",Helvetica,Arial,sans-serif ',
                        fontSize: { xs: '17px', sm: '19px', lg: '20px', xl: '15px', }, marginLeft: '10px',
                    }} >
                        JavaScript Algorithms and Data Structures (Beta) Certification
                    </Typography>
                    <Box sx={{ marginLeft: 'auto', display: display || 'block'  }}>
                        <Icon icon="mingcute:arrows-right-line" width="35" height="35" />
                    </Box>

                </Grid>
            </Grid>
            </Link>

            {BoxData.map((item) => (
                <>
                    <Grid container sx={{ justifyContent: 'center', }}>
                        <Grid sx={{
                            alignItems: 'center', border: '3px solid black', height: { xs: '75px', xl: '65px', }, marginTop: '8px', width: { xs: '90%', sm: '75%', md: '60%', xl:width }, paddingLeft: '10px', backgroundColor: '#D0D0D5',
                            ':hover': {
                                backgroundColor: '#0A0A23',
                                color: '#D0D0D5',
                            },
                            display: 'flex',
                        }}>
                            <Icon icon={item.Icon} width="50" height="50" />

                            <Typography sx={{
                                fontFamily: '"Lato",Helvetica,Arial,sans-serif ',
                                fontSize: {
                                    xs: '17px', sm: '19px', lg: '20px', xl: '15px',
                                }, marginLeft: '10px',
                            }} >
                                {item.title}
                            </Typography>
                            <Box sx={{ marginLeft: 'auto', display: display || 'block' }}>
                                <Icon icon="mingcute:arrows-right-line" width="35" height="35" />
                            </Box>

                        </Grid>
                    </Grid>
                </>
            ))}

            <Box >
            <Typography lineHeight={1} fontFamily={fontFamily} sx={{ marginTop: { xs: '20px', sm: '30px', md: '60px', lg: '80px', xl: '80px', }, marginLeft: { xs: '15px', sm: '100px', md: '200px', lg: '300px', xl: marginLeft, }, marginRight: { sm: '60px', md: '200px', lg: '300px', xl: '350px', }, fontWeight: '600', fontSize: { xs: '25px', sm: fontSize || '40px', md: fontSize||'40px', lg: '30px', xl: fontSize ||'33px', }, marginBottom: '20px', }}>
            Prepare for the developer interview job search:</Typography>
            </Box>


            {Box2Data.map((item) => (
                <>
                    <Grid container sx={{ justifyContent: 'center', }}>
                        <Grid sx={{
                            alignItems: 'center', border: '3px solid black', height: { xs: '75px', xl: '65px', }, marginTop: '8px', width: { xs: '90%', sm: '75%', md: '60%', xl:width },
                            paddingLeft: '10px', backgroundColor: '#D0D0D5', display: 'flex',
                            ':hover': {
                                backgroundColor: '#0A0A23',
                                color: '#D0D0D5',
                            },
                        }}>
                            <Icon icon={item.Icon} width="50" height="50" />

                            <Typography sx={{
                                fontFamily: '"Lato",Helvetica,Arial,sans-serif ',
                                fontSize: { xs: '17px', sm: '19px', lg: '20px', xl: '15px', }, marginLeft: '10px',
                            }} >
                                {item.title}
                            </Typography>
                            <Box sx={{ marginLeft: 'auto', display:display || 'block' }}>
                                <Icon icon="mingcute:arrows-right-line" width="35" height="35" />
                            </Box>

                        </Grid>
                    </Grid>
                </>
            ))}

        </>
    );
}

export default BoxInformation;