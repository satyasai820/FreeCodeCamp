
import React from "react";
import { Typography, Grid} from "@mui/material";
import AccordionComponent from "./AccordionComponent";
import SecondButton from "./SecondButton";

const CourseComponent = () => {
    const token  = localStorage.getItem('accessToken')
    return (
        <>
            <Grid container justifyContent='center' marginTop={5} >
                <Grid sx={{ width: { sm: '75%', md: '70%', lg: '60%', xl: '50%' }, marginBottom: '20px' }} >
                    <Typography fontFamily='"Hack-ZeroSlash",monospace' sx={{ fontSize: { xs: '6vmin', sm: '35px', lg: '30px', xl: '30px' }, fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>Courses</Typography>
                    <AccordionComponent />
                    <AccordionComponent />
                    <AccordionComponent />
                    <Grid container justifyContent='center'> 
                    <Grid sx={{ width:{ xs:'95%', md: '80%'}, justifyContent:'center', }}>
                        { token ? (<Typography sx={{border:'3px solid black', fontFamily:'"Lato",sans-serif', textAlign:'center', lineHeight:'25px',backgroundColor:'#D0D0D5', '&:hover':{backgroundColor:'#0A0A23', color:'#D0D0D5'}}}>Go to settings to claim your certification</Typography>):(<SecondButton />)}
                    

                    </Grid>
                    </Grid>
                  

                </Grid>
            </Grid>

        </>
    );
}

export default CourseComponent;