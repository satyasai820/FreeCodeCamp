import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComponent = () => {

    const gridData = [{ num: '1' }, { num: '2' }, { num: '3' }, { num: '4' }, { num: '5' }, { num: '6' }, { num: '7' }, { num: '8' }, { num: '9' }, { num: '10' }, { num: '11' }, { num: '12' }, { num: '13' }, { num: '14' }, { num: '15' }, { num: '16' }, { num: '17' }, { num: '18' }, { num: '19' }, { num: '20' }, { num: '21' }, { num: '22' }, { num: '23' }, { num: '24' }, { num: '25' }, { num: '26' }, { num: '27' }, { num: '28' }, { num: '29' }, { num: '30' }, { num: '31' }, { num: '32' }, { num: '33' }, { num: '34' }, { num: '35' }, { num: '36' }, { num: '37' }, { num: '38' }, { num: '39' }, { num: '40' }, { num: '41' }, { num: '42' }, { num: '43' }, { num: '44' }, { num: '45' }, { num: '46' }, { num: '47' }, { num: '48' }, { num: '49' }, { num: '50' }]
    const accordionData = [
        {
            title: 'Learn HTML by Building a cat photo App',
            para1: ' HTML tags give a webpage its structure. You can use HTML tags to add photos, buttons, and other elements to your webpage.',
            para2: 'In this course, you`ll learn the most common HTML tags by building your own cat photo app.'
        },
        {
            title: 'Learn Basic CSS by Building a Cafe Menu ',
            para1: 'CSS tells the browser how to display your webpage. You can use CSS to set the color, font, size, and other aspects of HTML elements.',
            para2: 'In this course, you`ll learn CSS by designing a menu page for a cafe webpage.'
        },
        {
            title: 'Learn CSS Colors by Building a Set of Colored Markers',
            para1: 'Selecting the correct colors for your webpage can greatly improve the aesthetic appeal to your readers.',
            para2: 'In this course, you`ll build a set of colored markers. You`ll learn different ways to set color values and how to pair colors with each other.'
        },
        {
            title: 'Learn HTML Form by Building a Registration Form',
            para1: 'You can use HTML forms to collect information from people who visit your webpage.',
            para2: 'In this course, you`ll learn HTML forms by building a signup page. You`ll learn how to control what types of data people can type into your form, and some new CSS tools for styling your page.'
        },
    ]
    return(
        <>
         <Grid container justifyContent='center'>
                        <Grid sx={{ width: { md: '80%' } }}>

                            {accordionData.map((item) => (
                                <>
                                    <Accordion sx={{ borderRadius: '0', marginBottom: '5px', boxShadow: 'none' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" sx={{ fontFamily: '"Hack-ZeroSlash",monospace', fontWeight: '700', color: '#1B1B32', lineHeight: '2.5', fontSize: { xs: '20px', xl: '18px' }, '&:hover': { backgroundColor: '#D0D0D5' } }}> {item.title} </AccordionSummary>
                                        <AccordionDetails>  {item.para1} </AccordionDetails>
                                        <AccordionDetails> {item.para2} </AccordionDetails>
                                        <Button sx={{ marginBottom: '20px', fontFamily: '"Lato",sans-serif', textTransform: 'none', border: '3px solid #1B1B32', borderRadius: '0px', backgroundColor: '#D0D0D5', color: '#1B1B32', marginLeft: '15px', '&:hover': { backgroundColor: '#1B1B32', color: '#F5F6F7' } }}>Start project</Button>
                                        <Grid container marginTop={3} sx={{ paddingLeft: { xs: '8vmin', sm: '0px' } }} >
                                            {gridData.map((item) => (
                                                <>
                                                    <Grid textAlign='center' item xs={2} sm={1} xl={1} sx={{ border: '1px dashed #D0D0D5', marginLeft: '15px', marginBottom: '12px', '&:hover': { backgroundColor: '#D0D0D5' } }}>
                                                        <Typography sx={{ margin: '10px' }}>{item.num}</Typography>
                                                    </Grid>
                                                </>
                                            ))}


                                        </Grid>
                                    </Accordion>
                                </>
                            ))}
                            <Accordion sx={{ borderRadius: '0', marginBottom: '80px', boxShadow: 'none', }}>
                                <Grid container>
                                    <Grid sx={{ marginLeft: '10px', paddingTop: '10px', width: { xs: '49vmin', sm: '28%', lg: '26%' } }}>
                                        <Typography sx={{ border: '1px solid #99C9FF', backgroundColor: '#99C9FF', fontFamily: '"Lato",sans-serif', paddingLeft: '5px' }}>Certification Project</Typography>
                                        <Typography sx={{ fontFamily: '"Hack-ZeroSlash",monospace', fontWeight: '700', color: '#1B1B32', lineHeight: '2.5', fontSize: { xs: '20px', xl: '18px' } }}> Survey Form</Typography>
                                    </Grid>

                                    <Grid>
                                        <AccordionDetails sx={{ fontSize: '18px' }}> This is one of the required projects to earn your certification. </AccordionDetails>
                                        <AccordionDetails sx={{ fontSize: '18px' }}> For this project, you will build a survey form to collect data from your users. </AccordionDetails>
                                        
                                    </Grid>
                                </Grid>


                            </Accordion>

                        </Grid>
                    </Grid>
        </>
    );
}

export default AccordionComponent;