
import React, { useEffect } from "react";
import { Icon } from '@iconify/react';
import { Grid, Typography } from "@mui/material";
import { Setdata } from "../Redux/Actions/Getdataaction";
import { connect } from "react-redux";
import { Getdata } from "../Redux/Api/Getdata";
import { useParams } from "react-router-dom";

const FirstComponent = ({
    data,
    Setdata
}) => {


    useEffect(() => {
        Getinformtaion();
    }, [])

    const Getinformtaion = async () => {

        try {
            const getdata = await Getdata();
            console.log("i am get data in firstcomponent", getdata);

            Setdata(getdata);
        }

        catch (error) {

            console.log("here Im getting error");
        }
    }

    const pram = useParams();
    const routename = pram.id;
    console.log('routename', routename)

    const extractedata = data;
    console.log('this is extrated data', data);

    const matter = extractedata.filter((item) => item.status === routename)

    console.log("i am matter", typeof (matter))

    return (

        <Grid container paddingTop={10} justifyContent='center'>

            {matter.map((item) => (
                <Grid sx={{ width: { sm: '75%', md: '70%', lg: '60%', xl: '50%' }, textAlign: 'center', }}>
                    <Typography paddingTop={5} lineHeight={1} fontFamily='"Hack-ZeroSlash",monospace' sx={{ fontSize: { xs: '30px', sm: '45px', md: '50px', lg: '45px', xl: '35px' }, fontWeight: 600 }}>{item.title}</Typography>
                    <Grid sx={{ margin: '30px 0px 30px 0px' }}>
                        <Icon icon={item.icon} width="90" height="90" />
                    </Grid>
                    <Grid container justifyContent='center'>
                        <Grid sx={{ width: { xs: '95%', sm: '95%', lg: '70%', xl: '75%' } }}>
                            <Typography sx={{ textAlign: "start", color: '#1B1B32', fontSize: { xs: '17px', sm: '18px', xl: '16px' }, marginBottom: '20px', fontFamily: '"Lato", sans-serif', }}>
                                {item.para1}
                            </Typography>
                            <Typography sx={{ textAlign: "start", color: '#1B1B32', fontSize: { xs: '17px', sm: '18px', xl: '16px' }, marginBottom: '20px', fontFamily: '"Lato", sans-serif', }}>
                                {item.para2}
                            </Typography>
                            <Typography sx={{ textAlign: "start", color: '#1B1B32', fontSize: { xs: '17px', sm: '18px', xl: '16px' }, marginBottom: '20px', fontFamily: '"Lato", sans-serif', }}>
                                {item.para3}
                            </Typography>
                            <Grid sx={{ background: '#D9EDF7', textAlign: 'left', marginBottom: '30px', padding: '10px' }}>
                                <Typography variant="p" sx={{ fontFamily: '"Lato",sans-serif', color: '#317086', fontSize: '13px', }}>{item.note}</Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            ))}
        </Grid>


 );
}

const mapStateToProps = (state) => {
    return {
        data: state.Reducer.data,

    }
}

const mapDispatchToProps = {
    Setdata,
}
export default connect(mapStateToProps, mapDispatchToProps)(FirstComponent);