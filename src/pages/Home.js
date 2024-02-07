import React from "react";
import Navbar from "../components/Navbar";
import {  Typography } from "@mui/material";



const Home = () => {
   
    return(
        <>
        <Navbar />
        <center >
        <Typography marginTop={10}>Hello Welcome to Home Page Buddy</Typography>
        </center>
           
        </>
    );
}
export default Home;