
import React from "react";
import { Icon } from '@iconify/react';
import { Grid, Typography } from "@mui/material";
const FirstComponent = () => {
    return(
        <Grid container marginTop={10} justifyContent='center'>
            <Grid  sx={{ width:{sm:'75%',md:'70%',lg:'60%',xl:'50%'},  textAlign:'center',}}>
                <Typography fontFamily='"Hack-ZeroSlash",monospace' sx={{fontSize:{xs:'6vmin',sm:'25px',xl:'35px'}, fontWeight:600}}>Responsive Web Design</Typography>
                <Grid sx={{margin:'30px 0px 30px 0px'}}>
                <Icon icon="fluent:phone-laptop-16-regular" width="90" height="90" />
                </Grid>
                <Grid container justifyContent='center'>
                <Grid sx={{width:{xs:'95%',sm:'65%',lg:'70%',xl:'75%'}}}>
                    <Typography  sx={{textAlign:"start",color:'#1B1B32',fontSize:{xs:'14px', sm:'16px',xl:'16px'},marginBottom:'20px',fontFamily: '"Lato", sans-serif', }}>In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.</Typography>
                    <Typography  sx={{textAlign:"start",color:'#1B1B32',fontSize:{xs:'14px', sm:'16px',xl:'16px'},marginBottom:'20px',fontFamily: '"Lato", sans-serif', }}>First, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a quiz site.</Typography>
                    <Typography  sx={{textAlign:"start",color:'#1B1B32',fontSize:{xs:'14px', sm:'16px',xl:'16px'},marginBottom:'20px',fontFamily: '"Lato", sans-serif', }}>Finally, you'll learn how to make webpages that respond to different screen sizes by building a photo gallery with Flexbox, and a magazine article layout with CSS Grid.</Typography>
                    <Grid sx={{background:'#D9EDF7', textAlign:'left' ,marginBottom:'30px',padding:'10px'}}>
                    <Typography variant="p"  sx={{ fontFamily:'"Lato",sans-serif', color:'#317086', fontSize:'13px',}}>Note: Some browser extensions, such as ad-blockers and dark mode extensions can interfere with the tests. If you face issues, we recommend disabling extensions that modify the content or layout of pages, while taking the course.</Typography>
                    </Grid>
                   
                </Grid>
                </Grid>

            </Grid>

        </Grid>

    );
}

export default FirstComponent;