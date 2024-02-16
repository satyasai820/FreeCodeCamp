import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import PercentageComponent from "../components/PercentageComponent";
import BoxInformation from '../components/BoxInformation';
import Footer from '../components/Footer';



const Home = () => {


    return (
        <div style={{ backgroundColor: '#F5F6F7' }}>
            <Navbar />
            <PercentageComponent />
            <BoxInformation width='45%' marginLeft='420px' fontFamily='"Hack-ZeroSlash",monospace' fontSize='25px' marginRight='95px' display='none' />
            <Footer />
        </div>
    );
}
export default Home;