import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const QuestionComponent = () => {

    const QuestionData = [
        {
            que:'What exactly is freeCodeCamp?',
            ans:'freeCodeCamp is a community of people from all around the world who are learning to code together. Were a 501(c)(3) public charity.',
        },
        {
            que:'How will freeCodeCamp help me learn to code?',
            ans:'You will learn to code by building dozens of projects, step-by-step, right in your browser, code editor, or mobile app.',
        },
        {
            que:'Is freeCodeCamp really free?',
            ans:'Yes. Every aspect of freeCodeCamp is 100% free. The courses, the projects, and even the certifications.',
        },
        {
            que:'Can freeCodeCamp help me get a job as a software developer?',
            ans:'Yes. Every year, thousands of people who join the freeCodeCamp community get their first software developer job.',
        },
        {
            que:'What skills will I learn?',
            ans:'You will learn the skills most developers use on the job: HTML, CSS, JavaScript, Python, Linux, Git, and SQL, and more. Youll also learn how to use powerful libraries for web development, mobile app development, data science, and artificial intelligence.',
        },
        {
            que:'How long does it take to learn all this?',
            ans:'freeCodeCamp is self-paced. Realistically, it may take several years of practicing coding to learn these skills well enough to get a job as a software engineer. Don`t quit school or your day job until you feel ready.',
        },
        {
            que:'How do I get started?',
            ans:'If you`re a beginner, you should start at the beginning of the freeCodeCamp core curriculum. If you `re more advanced, we still recommend starting at the beginning, but you can skip to whatever area you wish.',
        },
        {
            que:'How do I earn the free verified certifications?',
            ans:'For each certification, you need to build its 5 certification projects, and get all of the project tests to pass to be able to claim your certification.',
        },
        {
            que:'I don`t see [name of tool] in the freeCodeCamp core curriculum.',
            ans:'Aside from the freeCodeCamp core curriculum, We have thousands of free, full-length books, courses, and programming tutorials. We almost certainly teach whatever programming tools you want to learn. Just use the search bar.',
        }
    ]
    return(
        <>
        <Box>
            <Typography sx={{
                    marginTop: {
                        xs: '20px',
                        sm: '30px',
                        md: '60px',
                        lg: '80px',
                        xl: '40px',
                    },
                    marginLeft: {
                        xs: '35px',
                        sm: '150px',
                        md: '200px',
                        lg: '300px',
                        xl: '290px',
                    },
                    marginRight: {
                        sm: '100px',
                        md: '200px',
                        lg: '300px',
                        xl: '350px',
                    },
                    fontWeight: '600',
                    fontSize: {
                        xs: '29px',
                        sm: '40px',
                        md: '40px',
                        lg: '40px',
                        xl: '33px',
                    },
                    marginBottom: '10px',
                }}>Frequently asked questions:</Typography>
        </Box>

        {QuestionData.map( (element) => (
            <>
            <Grid  sx={{
            // border:'1px solid black',
            width:{
                xs:'80%',
                sm:'60%',
                md:'60%',
                lg:'65%',
            },
            marginLeft:{
                xs:'10vmin',
                sm:'150px',
                md:'200px',
                lg:'290px',
            },
            marginRight:{
                lg:'200px',
                xl:'0px',
            },
            marginTop:'20px',
        }}>
            <Typography sx={{
                fontWeight:'700',
                fontFamily:'sans-serif',
                fontSize:{
                    xs:'20px',
                    xl:'16px',
                },
                marginBottom:'10px',
            }}
            >{element.que}</Typography>
            <Typography fontFamily={'"Lato",sans-serif'} sx={{
                fontWeight:'400',
                fontSize:{
                    xs:'18px',
                    sm:'16px',
                    md:'18px',
                    lg:'17px',
                    xl:'13.5px',
                },
            }}>{element.ans}</Typography>
        </Grid>
            </>
        ))}
        
        <Typography fontFamily={'"Hack-ZeroSlash",monospace'} sx={{
               marginLeft:{
                xs:'10vmin',
                sm:'150px',
                md:'200px',
                lg:'290px',
            },
            marginTop:'15px',
            fontWeight:'bold',
            fontSize:'20px',
          
        }}>Happy coding !</Typography>

        </>
    );
}

export default QuestionComponent;