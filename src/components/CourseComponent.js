
import React from "react";
import { Typography, Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CourseComponent = () => {
    return (
        <>
            <Grid container border={1} justifyContent='center' marginTop={5}>
                <Grid sx={{ width: { sm: '75%', md: '70%', lg: '60%', xl: '50%' }, border: '1px solid red', }}  >
                    <Typography fontFamily='"Hack-ZeroSlash",monospace' sx={{ fontSize: { xs: '6vmin', sm: '25px', xl: '30px' }, fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>Courses</Typography>
                    <Grid container justifyContent='center' >
                        <Grid sx={{ width: { xl: '80%' } }}>
                            <Accordion sx={{borderRadius:'0'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Accordion 1
                                </AccordionSummary>
                                <AccordionDetails>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </AccordionDetails>
                            </Accordion>

                        </Grid>


                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}

export default CourseComponent;