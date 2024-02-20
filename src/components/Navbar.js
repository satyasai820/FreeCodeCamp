
import * as React from 'react';
import controls from './imports';


const Search = controls.styled('div')(({ theme }) => ({
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

const SearchIconWrapper = controls.styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = controls.styled(controls.InputBase)(({ theme }) => ({
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

    const [menuOpen, setMenuOpen] = controls.useState(false);
    const [anchorEl, setAnchorEl] = controls.useState(null);
    const navigate = controls.useNavigate();
    let token = localStorage.getItem('accessToken');

    const handleButtonClick = (event) => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {

        setMenuOpen(false);

    };


    const tokenRemove = () => {
        controls.signOut(controls.auth).then(() => {
            localStorage.clear();
            navigate('/');
            token = '';
            console.log("token deleted", token);
        }).catch((error) => {
            console.log('hiii not working')
        });

    }

    return (
        <controls.Box sx={{ flexGrow: 1 }}>
            <controls.AppBar position="fixed" style={{ backgroundColor: '#0A0A23' }}>
                <controls.Toolbar>
                    <Search>
                        <SearchIconWrapper>
                            <controls.SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search 9,000+ tutorials"
                            inputProps={{ 'aria-label': 'search' }}
                            style={{ backgroundColor: '#3B3B4F', color: 'white', width: '100%' }}

                        />
                    </Search>
                    <controls.Box sx={{ marginLeft: { xs: '0%', lg: '15%', xl: '18%' } }}>
                        <img src='https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg' alt='s' width={{ xs: 100, md: 200 }} height={20} />
                    </controls.Box>
                    <controls.Box
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
                        <controls.Box sx={{
                            border: '1px solid white',
                            padding:{xs:'0px 2px',sm:'2px 5px'},
                            marginBottom:{xs:'7px ', sm:'0px'},
                            ':hover': {
                                backgroundColor: 'white',
                                color: 'black',
                            }
                        }}><controls.Icon icon="mdi:internet" width="23" height="23" /></controls.Box>

                        <controls.Hidden smUp>


                            <controls.IconButton>
                                <controls.Box sx={{ border: '1px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom:'6px', padding:'1px'  }}>
                                    <controls.Icon  onClick={handleButtonClick} icon="ic:baseline-menu" color="white" width="25" height="25" />
                                    <controls.Hidden mdUp>
                                    <controls.Menu
                                anchorEl={anchorEl}
                                open={menuOpen}
                                onClose={handleMenuClose}
                                PaperProps={{
                                    style: {backgroundColor: 'black', color: 'white', width: '150px', marginLeft:'20px',  marginTop:'13px', },
                                }}
                            >
                                <controls.MenuItem sx={{ fontFamily: 'Lato, sans-serif', fontSize: '14px', paddingLeft:'20px' }} onClick={handleMenuClose} style={{ color: 'white' }}> Donate </controls.MenuItem>
                                <controls.MenuItem sx={{ fontFamily: 'Lato, sans-serif', fontSize: '14px', paddingLeft:'20px' }} onClick={handleMenuClose} style={{ color: 'white' }}> Curriculum </controls.MenuItem>
                                <controls.MenuItem sx={{  fontFamily: 'Lato, sans-serif',fontSize: '14px', paddingLeft:'20px'}} onClick={handleMenuClose} style={{ color: 'white' }}>  Forum </controls.MenuItem>
                                <controls.MenuItem sx={{fontFamily: 'Lato, sans-serif', fontSize: '14px', }} style={{ color: 'white' }}>
                                    {token ? (<controls.Button onClick={tokenRemove} style={{ color: 'white', textTransform: 'none' }}>
                                        Sign out
                                    </controls.Button>) : (<controls.Button disabled style={{ color: 'gray' }}>
                                        Sign Out
                                    </controls.Button>)}
                                </controls.MenuItem>
                            </controls.Menu>
                                    </controls.Hidden>
                                </controls.Box>
                            </controls.IconButton>


                        </controls.Hidden>
                        <controls.Hidden smDown>
                            <controls.IconButton>
                                <controls.Button
                                    onClick={handleButtonClick}
                                    sx={{
                                        border: '1px solid white', color: 'white', borderRadius: '0px', textTransform: 'capitalize', fontSize: '14px', fontFamily: 'Lato, sans-serif', padding: '3px',
                                        ':hover': { backgroundColor: 'white', color: 'black', },
                                    }}>
                                    Menu
                                </controls.Button>
                            </controls.IconButton>
                            <controls.Menu
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
                                <controls.MenuItem sx={{ fontFamily: 'Lato, sans-serif', fontSize: '14px', }} onClick={handleMenuClose} style={{ color: 'white' }}> Donate </controls.MenuItem>
                                <controls.MenuItem sx={{
                                    borderBottom: '1px solid white',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    Curriculum
                                </controls.MenuItem>
                                <controls.MenuItem sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    Forum
                                </controls.MenuItem>
                                <controls.MenuItem sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    News
                                </controls.MenuItem>
                                <controls.MenuItem sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    Ratio
                                </controls.MenuItem>
                                <controls.MenuItem sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    Contribute
                                </controls.MenuItem>
                                <controls.MenuItem sx={{
                                    borderBottom: '1px solid white',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} onClick={handleMenuClose} style={{ color: 'white' }}>
                                    Podcast
                                </controls.MenuItem>
                                <controls.MenuItem sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '14px',
                                }} style={{ color: 'white' }}>
                                    {token ? (<controls.Button onClick={tokenRemove} style={{ color: 'white', textTransform: 'none' }}>
                                        Sign out
                                    </controls.Button>) : (<controls.Button disabled style={{ color: 'gray' }}>
                                        Sign Out
                                    </controls.Button>)}
                                </controls.MenuItem>
                            </controls.Menu>

                        </controls.Hidden>
                        <controls.Hidden smUp>
                            <controls.IconButton >
                                <controls.Box sx={{ border: '2px solid #f79205', display: 'flex', alignItems: 'center',  backgroundColor: '#FEAC32', color: 'black',  marginBottom:'6px' }}>
                                    {token ? (<controls.Icon icon="mdi:user-circle" color='white' width="25" height="25" />) : <controls.Icon onClick={() => (navigate('/SignUp'))} icon="material-symbols:login" width="25" height="25" />}

                                </controls.Box>
                            </controls.IconButton>

                        </controls.Hidden>
                        <controls.Hidden smDown>
                            <controls.IconButton >
                                {token ? (<controls.Icon icon="mdi:user-circle" color='white' width="35" height="35" />) : (<controls.Button onClick={() => (navigate('/SignUp'))} style={SignInbutton}>Sign in</controls.Button>)}

                            </controls.IconButton>
                        </controls.Hidden>
                    </controls.Box>
                    <controls.Box sx={{ flexGrow: 1 }} />
                </controls.Toolbar>
            </controls.AppBar>
        </controls.Box>
    );
}



