import React from "react";
import PrimarySearchAppBar from "../components/Navbar";
import Content from "../components/Content";
import Cards from "../components/Crads";
import ButtonComponent from "../components/ButtonComponent";
import BoxInformation from "../components/BoxInformation";
import QuestionComponent from "../components/QuestionComponent";
import Footer from "../components/Footer";





const Flash = () => {
    return(
        <>
        <PrimarySearchAppBar/>
        <Content/>
        <Cards />
        <ButtonComponent />
        <BoxInformation />
        <ButtonComponent />
        <QuestionComponent />
        <ButtonComponent />
        <Footer />
      
        </>
    )
}

export default Flash;