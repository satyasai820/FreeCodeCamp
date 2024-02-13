import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AccordionGetData } from "../Redux/Api/Getdata";
import { SetData2 } from "../Redux/Actions/Dropdataaction";

const AccordionComponent = (
    { data2, SetData2 }
) => {

    useEffect(() => {
        getAccordionData();

    }, [])

    const getAccordionData = async () => {
        try {
            const getData = await AccordionGetData();

            SetData2(getData);

            console.log("accordion data is here", getData);
        }
        catch (error) {
            console.log("Here Im getting error in Accordion Component...");
        }

    }

    const gridData = [{ num: '1' }, { num: '2' }, { num: '3' }, { num: '4' }, { num: '5' }, { num: '6' }, { num: '7' }, { num: '8' }, { num: '9' }, { num: '10' }, { num: '11' }, { num: '12' }, { num: '13' }, { num: '14' }, { num: '15' }, { num: '16' }, { num: '17' }, { num: '18' }, { num: '19' }, { num: '20' }, { num: '21' }, { num: '22' }, { num: '23' }, { num: '24' }, { num: '25' }, { num: '26' }, { num: '27' }, { num: '28' }, { num: '29' }, { num: '30' }, { num: '31' }, { num: '32' }, { num: '33' }, { num: '34' }, { num: '35' }, { num: '36' }, { num: '37' }, { num: '38' }, { num: '39' }, { num: '40' }, { num: '41' }, { num: '42' }, { num: '43' }, { num: '44' }, { num: '45' }, { num: '46' }, { num: '47' }, { num: '48' }, { num: '49' }, { num: '50' }]

    const param = useParams();
    const routename = param.id;
    console.log('i am data2 in accordian', data2)
    const extractData = data2;

    const matter = extractData.filter((item) => item.status === routename);
    console.log('Im accordion component data', matter);

    return (
        <>
            <Grid container justifyContent='center'>
                <Grid sx={{ width: { md: '80%' } }}>

                    {matter.map((item) => (
                        <>
                            <Accordion sx={{ borderRadius: '0', marginBottom: '5px', boxShadow: 'none', padding: 1.5 }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" sx={{ fontFamily: '"Hack-ZeroSlash",monospace', fontWeight: '700', color: '#1B1B32', lineHeight: '1.5', fontSize: { xs: '20px', xl: '18px' }, '&:hover': { backgroundColor: '#D0D0D5' } }}> <Typography sx={{ marginRight: '8px', marginTop: "4px" }}><Icon icon="ph:circle-thin" width="15" height="15" /></Typography> {item.title} </AccordionSummary>
                                <AccordionDetails>  {item.para1} </AccordionDetails>
                                <AccordionDetails> {item.para2} </AccordionDetails>
                                <Button sx={{ marginBottom: '20px', fontFamily: '"Lato",sans-serif', textTransform: 'none', border: '3px solid #1B1B32', borderRadius: '0px', backgroundColor: '#D0D0D5', color: '#1B1B32', marginLeft: '15px', '&:hover': { backgroundColor: '#1B1B32', color: '#F5F6F7' } }}>Start project</Button>
                                <Grid container marginTop={3} sx={{ paddingLeft: { xs: '8vmin', sm: '0px' } }} >
                                            {gridData.map((item) => (
                                                <>
                                                    <Grid textAlign='center' item xs={2} sm={1} xl={1} sx={{ border: '1px dashed #D0D0D5', marginLeft: '15px', marginBottom: '12px', '&:hover': { backgroundColor: '#D0D0D5' } }}>
                                                        <Typography sx={{ margin: '10px' }}>{item.num}</Typography>
                                                    </Grid>
                                                </>
                                            ))}


                                        </Grid>

                                {/* <Grid container marginTop={3} sx={{ paddingLeft: { xs: '8vmin', sm: '0px' } }} >
                                    {(() => {
                                        let a = 50; 
                                        let elements = [];

                                        for(let  i = 1; i <= a; i++){

                                            elements.push(
                                                <Grid key={i} textAlign='center' item xs={2} sm={1} xl={1} sx={{ border: '1px dashed #D0D0D5', marginLeft: '15px', marginBottom: '12px', '&:hover': { backgroundColor: '#D0D0D5' } }}>
                                                    <Typography sx={{ margin: '10px' }}>{i}</Typography>
                                                </Grid>
                                            );

                                        }

                                    })()}
                                    </Grid> */}
                            </Accordion>
                        </>
                    ))}
                    <Accordion sx={{ borderRadius: '0', marginBottom: '80px', boxShadow: 'none', }}>
                        <Grid container>

                            <Grid sx={{ marginLeft: '10px', paddingTop: '10px', width: { xs: '49vmin', sm: '28%', lg: '26%' } }}>
                                <Typography sx={{ border: '1px solid #99C9FF', backgroundColor: '#99C9FF', fontFamily: '"Lato",sans-serif', paddingLeft: '5px' }}>Certification Project</Typography>
                                <Typography sx={{ fontFamily: '"Hack-ZeroSlash",monospace', fontWeight: '700', color: '#1B1B32', lineHeight: '2.5', fontSize: { xs: '20px', xl: '18px' } }}> Survey Form</Typography>
                            </Grid>

                            <Grid>
                                <AccordionDetails sx={{ fontSize: '18px' }}> This is one of the required projects to earn your certification. </AccordionDetails>
                                <AccordionDetails sx={{ fontSize: '18px' }}> For this project, you will build a survey form to collect data from your users. </AccordionDetails>

                            </Grid>
                        </Grid>


                    </Accordion>

                </Grid>
            </Grid>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        data2: state.Reducer2.data2,

    }
}

const mapDispatchToProps = {
    SetData2,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccordionComponent);