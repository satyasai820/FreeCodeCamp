import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import Cards from "../components/Crads";
import ButtonComponent from "../components/ButtonComponent";
import BoxInformation from "../components/BoxInformation";
import QuestionComponent from "../components/QuestionComponent";
import Footer from "../components/Footer";
import { ScaleLoader } from "react-spinners";
import Navbar from "../components/Navbar";

const Flash = () => {
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 2000)
    }, [])
    return (
        <>
            {loading ?
                (<ScaleLoader 
                    color={'black'}
                    loading={loading}
                    size={60}
                    id="spinner" 
                />) : (
                    < div style={{backgroundColor:'white'}}>
                        <Navbar />
                        <Content />
                        <Cards />
                        <ButtonComponent />
                        <BoxInformation />
                        <ButtonComponent />
                        <QuestionComponent />
                        <ButtonComponent />
                        <Footer />
                    </div>

                )



            }


        </>
    )
}

export default Flash;