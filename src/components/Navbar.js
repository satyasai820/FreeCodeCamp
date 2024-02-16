
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Icon } from '@iconify/react';
import { Button, Hidden, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../FireBase';
import { signOut } from 'firebase/auth';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'grey',
    border: '3px solid black',

    '&:hover': {
        border: '3px solid #3A9BDC',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto',
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

const SignInbutton = {
    border: '1px solid orange',
    textTransform: 'none',
    padding: '0px 12px',
    color: 'black',
    background: 'linear-gradient(#fecc4c, #ffac33)',
    fontSize: '16px',
    borderRadius: '0',
};

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    let token = localStorage.getItem('accessToken');

    const handleButtonClick = (event) => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {

        setMenuOpen(false);

    };


    const tokenRemove = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            navigate('/');
            token = '';
            console.log("token deleted", token);
        }).catch((error) => {
            console.log('hiii not working')
        });

    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ backgroundColor: '#0A0A23' }}>
                <Toolbar>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search 9,000+ tutorials"
                            inputProps={{ 'aria-label': 'search' }}
                            style={{ backgroundColor: '#3B3B4F', color: 'white', width: '100%' }}

                        />
                    </Search>
                    <Box sx={{ marginLeft: { xs: '0%', lg: '15%', xl: '18%' } }}>
                        <img src='https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg' alt='s' width={{ xs: 100, md: 200 }} height={20} />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: '6px',

                        }}
                    >
                        <Box sx={{
                            border: '1px solid white',
                            // padding: '0 3px',
                            padding:{xs:'0px 2px',sm:'2px 5px'},
                            marginBottom:{xs:'7px ', sm:'0px'},
                            ':hover': {
                                backgroundColor: 'white',
                                color: 'black',
                            }
                        }}><Icon icon="mdi:internet" width="23" height="23" /></Box>

                        <Hidden smUp>


                            <IconButton>
                                <Box sx={{ border: '1px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom:'6px', padding:'1px'  }}>
                                    <Icon  onClick={handleButtonClick} icon="ic:baseline-menu" color="white" width="25" height="25" />
                                    <Hidden mdUp>
                                    <Menu
                                anchorEl={anchorEl}
                                open={menuOpen}
                                onClose={handleMenuClose}
                                PaperProps={{
                                    style: {backgroundColor: 'black', color: 'white', width: '150px', marginLeft:'20px',  marginTop:'13px', },
                                }}
                            >
                                <MenuItem sx={{ fontFamily: 'Lato, sans-serif', fontSize: '14px', paddingLeft:'20px' }} onClick={handleMenuClose} style={{ color: 'white' }}> Donate </MenuItem>
                                <MenuItem sx={{ fontFamily: 'Lato, sans-serif', fontSize: '14px', paddingLeft:'20px' }} onClick={handleMenuClose} style={{ color: 'white' }}> Curriculum </MenuItem>
                                <MenuItem sx={{  fontFamily: 'Lato, sans-serif',fontSize: '14px', paddingLeft:'20px'}} onClick={handleMenuClose} style={{ color: 'white' }}>  Forum </MenuItem>
                                <MenuItem sx={{fontFamily: 'Lato, sans-serif', fontSize: '14px', }} style={{ color: 'white' }}>
                                    {token ? (<Button onClick={tokenRemove} style={{ color: 'white', textTransform: 'none' }}>
                                        Sign out
                                    </Button>) : (<Button disabled style={{ color: 'gray' }}>
                                        Sign Out
                                    </Button>)}
                                </MenuItem>
                            </Menu>
                                    </Hidden>
                                </Box>
                            </IconButton>


                        </Hidden>
                        <Hidden smDown>
                            <IconButton>
                                <Button
                                    onClick={handleButtonClick}
                                    sx={{
                                        border: '1px solid white', color: 'white', borderRadius: '0px', textTransform: 'capitalize', fontSize: '14px', fontFamily: 'Lato, sans-serif', padding: '3px',
                                        ':hover': { backgroundColor: 'white', color: 'black', },
                                    }}>
                                    Menu
                                </Button>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={menuOpen}
                                onClose={handleMenuClose}
                                PaperProps={{
                                    style: {
                                        backgroundColor: 'black',
                                        color: 'white',
                                        width: '200px',
                                    },
                                }}
                            >
                                <MenuItem sx={{ fontFamily: 'Lato, sans-serif', fontSize: '14px', }} onClick={handleMenuClose} style={{ color: 'white' }}> Donate </MenuItem>
                                <MenuItem sx={{
                                    borderBottom: '1px solid white',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    Curriculum
                                </MenuItem>
                                <MenuItem sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    Forum
                                </MenuItem>
                                <MenuItem sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    News
                                </MenuItem>
                                <MenuItem sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    Ratio
                                </MenuItem>
                                <MenuItem sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    Contribute
                                </MenuItem>
                                <MenuItem sx={{
                                    borderBottom: '1px solid white',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    Podcast
                                </MenuItem>
                                <MenuItem sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} style={{ color: 'white' }}>
                                    {token ? (<Button onClick={tokenRemove} style={{ color: 'white', textTransform: 'none' }}>
                                        Sign out
                                    </Button>) : (<Button disabled style={{ color: 'gray' }}>
                                        Sign Out
                                    </Button>)}
                                </MenuItem>
                            </Menu>

                        </Hidden>
                        <Hidden smUp>
                            <IconButton >
                                <Box sx={{ border: '2px solid #f79205', display: 'flex', alignItems: 'center',  backgroundColor: '#FEAC32', color: 'black',  marginBottom:'6px' }}>
                                    {token ? (<Icon icon="mdi:user-circle" color='white' width="25" height="25" />) : <Icon onClick={() => (navigate('/SignUp'))} icon="material-symbols:login" width="25" height="25" />}

                                </Box>
                            </IconButton>

                        </Hidden>
                        <Hidden smDown>
                            <IconButton >
                                {token ? (<Icon icon="mdi:user-circle" color='white' width="35" height="35" />) : (<Button onClick={() => (navigate('/SignUp'))} style={SignInbutton}>Sign in</Button>)}

                            </IconButton>
                        </Hidden>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}



