import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import BorderLinearProgress from '@mui/material/LinearProgress';

const PercentageComponent = () => {
    return(
        <Grid container paddingTop={13} justifyContent='center'>
            <Grid sx={{width:{sm:'75%',md:'70%',lg:'60%',xl:'50%'},textAlign:'center'}}>
                <Typography  fontFamily='"Hack-ZeroSlash",monospace' sx={{fontSize:{xs:'6vmin',sm:'25px'}, fontWeight:600}}>Welcome to freeCodeCamp.org</Typography>
                <Typography sx={{marginTop:'30px',fontSize:'18px'}}>"It does not matter how slowly you go as long as you do not stop."</Typography>
                <Box sx={{fontStyle: 'italic',fontWeight: 'regular',}}>-Confucius</Box>
                <Grid sx={{border:'2px solid #DAEAFC',marginTop:'30px', backgroundImage: 'linear-gradient(-10deg, #d9edf7 35%, rgba(237, 202, 216, 0) 75%, #ffd7e0), radial-gradient(circle, #ffcae1 0, #daeafc 100%)', backgroundSize: '100% 100%',}}>
                <Box sx={{display: 'flex', flexDirection: 'column',alignItems: 'center',}}><BorderLinearProgress sx={{height:'10px',marginTop:'20px',width:'95%', border:'1px solid #00471B',backgroundColor:'#D9EDF7'}} variant="determinate" value={41} /></Box>
                <Typography sx={{fontFamily:'"Hack-ZeroSlash",monospace',color:'#317085',margin:'10px 0px 10px 0px',fontSize:'18px',fontWeight:'bold'}}>41%</Typography>
                <Grid marginBottom={3}>
                <Typography variant="p" sx={{ fontFamily:'"Lato",sans-serif', color:'#317086', fontSize:'13px'}}>Donate now to help our charity reach our goal of 20,000 monthly supporters this year.</Typography>
                </Grid>
                <Grid marginBottom={5}>
                    <Button sx={{border:'3px solid #31708F', color:'#31708F', borderRadius:'0', textTransform:'none',fontFamily:'"Lato",sans-serif',fontWeight: 'regular', '&:hover':{backgroundColor:'#31708F',color:'#F5F6F7'}}}>Donate</Button>
                </Grid>

            </Grid>
            </Grid>
           

        </Grid>
    );
}

export default PercentageComponent;