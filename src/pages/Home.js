import React from "react";
import { auth } from "../FireBase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";



const Home = () => {
    const navigate = useNavigate();
    const handleSignOut = () => {
       auth.signOut();
       navigate('/signup')
       
    }
    return(
        <>
        <Navbar />
        <center>
        <h1>Hey this is Home Page</h1>
        <button onClick={handleSignOut}>sign out</button>
        </center>
        </>
    );
}
export default Home;