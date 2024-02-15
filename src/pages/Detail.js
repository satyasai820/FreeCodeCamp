
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FirstComponent from "../components/FirstComponent";
import CourseComponent from "../components/CourseComponent";
import BoxInformation from "../components/BoxInformation";
import Footer from "../components/Footer";


const Detail = () => {


const pram = useParams();
const routename = pram.id;
console.log('routename',routename)

    return(
        <div style={{backgroundColor:'#F5F6F7'}} >
            <Navbar/>
            <FirstComponent />
            <CourseComponent />
            <BoxInformation width='45%' marginLeft='420px' fontFamily = '"Hack-ZeroSlash",monospace' fontSize = '25px'  marginRight = '90px' display = 'none' />
            <Footer />
        </div>
    )
}

export  default Detail;