import React from "react";
import { SetData2 } from "../Redux/Actions/Dropdataaction";
import controls from "./imports";

const AccordionComponent = ({ data2, SetData2 }) => {

    controls.useEffect(() => {
        getAccordionData();

    }, [])

    const getAccordionData = async () => {
        try {
            const getData = await controls.AccordionGetData();

            SetData2(getData);

        }
        catch (error) {
            console.log("Here Im getting error in Accordion Component...");
        }

    }

    const gridData = [{ num: '1' }, { num: '2' }, { num: '3' }, { num: '4' }, { num: '5' }, { num: '6' }, { num: '7' }, { num: '8' }, { num: '9' }, { num: '10' }, { num: '11' }, { num: '12' }, { num: '13' }, { num: '14' }, { num: '15' }, { num: '16' }, { num: '17' }, { num: '18' }, { num: '19' }, { num: '20' }, { num: '21' }, { num: '22' }, { num: '23' }, { num: '24' }, { num: '25' }, { num: '26' }, { num: '27' }, { num: '28' }, { num: '29' }, { num: '30' }, { num: '31' }, { num: '32' }, { num: '33' }, { num: '34' }, { num: '35' }, { num: '36' }, { num: '37' }, { num: '38' }, { num: '39' }, { num: '40' }, { num: '41' }, { num: '42' }, { num: '43' }, { num: '44' }, { num: '45' }, { num: '46' }, { num: '47' }, { num: '48' }, { num: '49' }, { num: '50' }]

    const param = controls.useParams();
    const routename = param.id;
    const extractData = data2;

    const matter = extractData.filter((item) => item.status === routename);

    return (
        <>
            <controls.Grid container justifyContent='center'>
                <controls.Grid sx={{ width: { md: '80%' } }}>

                    {matter.map((item) => (
                        <>
                            <controls.Accordion sx={{ borderRadius: '0', marginBottom: '5px', boxShadow: 'none', padding: 1.5 }}>
                                <controls.AccordionSummary expandIcon={<controls.ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" sx={{ fontFamily: '"Hack-ZeroSlash",monospace', fontWeight: '700', color: '#1B1B32', lineHeight: '1.5', fontSize: { xs: '20px', xl: '18px' }, '&:hover': { backgroundColor: '#D0D0D5' } }}> <controls.Typography sx={{ marginRight: '8px', marginTop: "4px" }}><controls.Icon icon="ph:circle-thin" width="15" height="15" /></controls.Typography> {item.title} </controls.AccordionSummary>
                                <controls.AccordionDetails>  {item.para1} </controls.AccordionDetails>
                                <controls.AccordionDetails> {item.para2} </controls.AccordionDetails>
                                <controls.Button sx={{ marginBottom: '20px', fontFamily: '"Lato",sans-serif', textTransform: 'none', border: '3px solid #1B1B32', borderRadius: '0px', backgroundColor: '#D0D0D5', color: '#1B1B32', marginLeft: '15px', '&:hover': { backgroundColor: '#1B1B32', color: '#F5F6F7' } }}>Start project</controls.Button>
                                <controls.Grid container marginTop={3} sx={{ paddingLeft: { xs: '8vmin', sm: '0px' } }} >
                                    {gridData.map((item) => (
                                        <>
                                            <controls.Grid textAlign='center' item xs={2} sm={1} xl={1} sx={{ border: '1px dashed #D0D0D5', marginLeft: '15px', marginBottom: '12px', '&:hover': { backgroundColor: '#D0D0D5' } }}>
                                                <controls.Typography sx={{ margin: '10px' }}>{item.num}</controls.Typography>
                                            </controls.Grid>
                                        </>
                                    ))}


                                </controls.Grid>
                            </controls.Accordion>
                        </>
                    ))}
                    <controls.Accordion sx={{ borderRadius: '0', marginBottom: '80px', boxShadow: 'none', }}>
                        <controls.Grid container>

                            <controls.Grid sx={{ marginLeft: '10px', paddingTop: '10px', width: { xs: '49vmin', sm: '28%', lg: '26%' } }}>
                                <controls.Typography sx={{ border: '1px solid #99C9FF', backgroundColor: '#99C9FF', fontFamily: '"Lato",sans-serif', paddingLeft: '5px' }}>Certification Project</controls.Typography>
                                <controls.Typography sx={{ fontFamily: '"Hack-ZeroSlash",monospace', fontWeight: '700', color: '#1B1B32', lineHeight: '2.5', fontSize: { xs: '20px', xl: '18px' } }}> Survey Form</controls.Typography>
                            </controls.Grid>

                            <controls.Grid>
                                <controls.AccordionDetails sx={{ fontSize: '18px' }}> This is one of the required projects to earn your certification. </controls.AccordionDetails>
                                <controls.AccordionDetails sx={{ fontSize: '18px' }}> For this project, you will build a survey form to collect data from your users. </controls.AccordionDetails>

                            </controls.Grid>
                        </controls.Grid>

                    </controls.Accordion>

                </controls.Grid>
            </controls.Grid>
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

export default controls.connect(mapStateToProps, mapDispatchToProps)(AccordionComponent);