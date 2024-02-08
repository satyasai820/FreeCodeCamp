import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FirstComponent from "../components/FirstComponent";
import CourseComponent from "../components/CourseComponent";


const Detail = () => {


     const data = [
        {
            name:"Hello Welcome to Java Script details Page",
            status:"javascript"
        },

        {
            name:"Hello Welcome to Responsive Web Design details Page",
            status:"responsive"
        },

     ]


const pram = useParams();
const routename = pram.id;
console.log('routename',routename)

const updated = data.filter((item)=>item.status === routename)

    return(
        <div style={{backgroundColor:'#F5F6F7'}} >
            <Navbar/>
            <FirstComponent />
            <CourseComponent />
            <Typography variant="h1" sx={{textAlign:'center',marginTop:'90px',}}>{updated[0].name}</Typography>
        </div>
    )
}

export  default Detail;