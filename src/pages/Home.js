import React from "react";
import Navbar from "../components/Navbar";
import PercentageComponent from "../components/PercentageComponent";
import BoxInformation from '../components/BoxInformation';
import Footer from '../components/Footer';



const Home = () => {
   
    return(
        <div  style={{backgroundColor:'#F5F6F7'}}>
        <Navbar />
        <PercentageComponent />
        <BoxInformation />
        <Footer/>
        
           
        </div>
    );
}
export default Home;