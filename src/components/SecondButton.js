import React from "react";
import controls from "./imports";

const SecondButton = () => {
    const navigate = controls.useNavigate();
    const token = localStorage.getItem('accessToken')
    const ButtonClicked = () => {
        if(token){
            navigate('/home')
        }else{
        navigate('/signup')
        }
    }
    return (
        <>
            <controls.Box textAlign={'center'}>
                <controls.Button onClick={ ButtonClicked} sx={{
                    color: 'black', backgroundColor: "#FEAC32",
                    width: { xs: '90vmin', sm: '450px', md: '450px', lg: '450px', xl: '400px', }, border: '3px solid #f79205', borderRadius: '0', textAlign: 'center', marginTop: '30px', marginBottom: '30px', boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        backgroundColor: "#FEAC32",
                    }
                }}><controls.Typography sx={{  textTransform:'none', fontFamily: '"Lato",sans-serif', fontSize: { xs: '20px', sm: '20px', md: '20px', lg: '20px', xl: '18px' }, '& .nav-link': { textDecoration: 'none', color: 'inherit', }, }}> Sign in to Save your Process (it's free)</controls.Typography>
                </controls.Button>
            </controls.Box>
        </>

    );
}

export default SecondButton;