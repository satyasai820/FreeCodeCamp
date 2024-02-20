
import React from "react";
import BorderLinearProgress from '@mui/material/LinearProgress';
import controls from "./imports";

const PercentageComponent = () => {
    return(
        <controls.Grid container paddingTop={13} justifyContent='center'>
            <controls.Grid sx={{width:{sm:'75%',md:'60%',lg:'60%',xl:'45%'},textAlign:'center'}}>
                <controls.Typography  fontFamily='"Hack-ZeroSlash",monospace' sx={{fontSize:{xs:'6vmin',sm:'25px'}, fontWeight:600}}>Welcome to freeCodeCamp.org</controls.Typography>
                <controls.Typography sx={{marginTop:'30px',fontSize:'18px'}}>"It does not matter how slowly you go as long as you do not stop."</controls.Typography>
                <controls.Box sx={{fontStyle: 'italic',fontWeight: 'regular',}}>-Confucius</controls.Box>
                <controls.Grid sx={{border:'2px solid #DAEAFC',marginTop:'30px', backgroundImage: 'linear-gradient(-10deg, #d9edf7 35%, rgba(237, 202, 216, 0) 75%, #ffd7e0), radial-gradient(circle, #ffcae1 0, #daeafc 100%)', backgroundSize: '100% 100%',}}>
                <controls.Box sx={{display: 'flex', flexDirection: 'column',alignItems: 'center',}}><BorderLinearProgress sx={{height:'10px',marginTop:'20px',width:'95%', border:'1px solid #00471B',backgroundColor:'#D9EDF7'}} variant="determinate" value={41} /></controls.Box>
                <controls.Typography sx={{fontFamily:'"Hack-ZeroSlash",monospace',color:'#317085',margin:'10px 0px 10px 0px',fontSize:'18px',fontWeight:'bold'}}>41%</controls.Typography>
                <controls.Grid marginBottom={3}>
                <controls.Typography variant="p" sx={{ fontFamily:'"Lato",sans-serif', color:'#317086', fontSize:'13px'}}>Donate now to help our charity reach our goal of 20,000 monthly supporters this year.</controls.Typography>
                </controls.Grid>
                <controls.Grid marginBottom={5}>
                    <controls.Button sx={{border:'3px solid #31708F', color:'#31708F', borderRadius:'0', textTransform:'none',fontFamily:'"Lato",sans-serif',fontWeight: 'regular', '&:hover':{backgroundColor:'#31708F',color:'#F5F6F7'}}}>Donate</controls.Button>
                </controls.Grid>

            </controls.Grid>
            </controls.Grid>
           

        </controls.Grid>
    );
}

export default PercentageComponent;