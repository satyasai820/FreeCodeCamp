
import React from "react";
import controls from "./imports";

const Cards = () => {

    const cardData = [
        {
            imgUrl: 'https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png',
            name: 'Shawn Wang ',
            subName: 'in Singapore',
            role: 'Software Engineer at ',
            company: 'Amazon',
            content: ' Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life'
        },
        {
            imgUrl: 'https://www.freecodecamp.org/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png',
            name: 'Sarah Chima ',
            subName: 'in Nigeria',
            role: 'Software Engineer at ',
            company: 'ChatDesk',
            content: ' freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company'
        },
        {
            imgUrl: 'https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png',
            name: 'Emma Bostian ',
            subName: 'in Sweden',
            role: 'Software Engineer at ',
            company: 'Spotify',
            content: ' Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
        }
    ]
    return (
        <>
            <controls.Grid>
                <controls.Typography sx={{fontSize: { xs: '25px', sm: '40px', md: '40px', lg: '40px', xl: '35px', }, textAlign: 'center', marginTop: '50px',fontWeight: '600',}}>Here is what our alumni say about freeCodeCamp:</controls.Typography>
            </controls.Grid>

            {cardData.map((item) => (
                <>
                    <controls.Grid marginTop={6}>
                        <controls.Card sx={{
                            marginLeft: { lg: '150px',xl: '250px'}, margin: {xs: 'auto', sm: 'auto',md: '0'},display: {sm: 'block', md: 'flex'},width: {_xs: '80%',sm: '40%',md: '100%',lg: '80%',xl: '65%',}, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',borderRadius: '0',}}>
                            <controls.CardMedia
                                component="img"
                                sx={{
                                    width: {sm: '100%',md: '300px',lg: '300px',xl: '250px',},}}
                                image={item.imgUrl}
                                alt="Live from space album cover"
                            />
                            <controls.Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <controls.CardContent sx={{ flex: '1 0 auto' }}>
                                    <controls.Typography sx={{fontSize: {xs: '22px',sm: '20px',md: '22px',lg: '25px',xl: '20px',},textAlign: 'center',marginTop: {sm: '20px',md: '20px',lg: '30px',}}} >
                                        <span style={{ fontWeight: 'bold' }}>{item.name}</span>{item.subName}
                                    </controls.Typography>
                                    <controls.Typography sx={{marginTop: '5px',
                                        fontSize: {xs: '23px',sm: '20px',md: '22px',lg: '25px',xl: '20px',},marginBottom: '20px',textAlign: 'center',}} >
                                        {item.role}<span style={{ fontWeight: 'bold' }}>{item.company}</span>
                                    </controls.Typography>
                                    <controls.Typography sx={{
                                        marginLeft: {xs: '15px',sm: '2px',md: '25px',},fontSize: {xs: '20px',sm: '19px',md: '20px',lg: '20px',xl: '16px',}}} >{item.content}
                                    </controls.Typography>

                                </controls.CardContent>
                            </controls.Box>
                        </controls.Card>
                    </controls.Grid >
                </>
            ))}
            
        </>
    );
}
export default Cards;