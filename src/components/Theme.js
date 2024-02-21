
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: '#F5F6F7',
    },
  },
});

theme.typography.h1 = {
  fontSize: '40px',
  [theme.breakpoints.down('md')]: {
    fontSize: '27px',
  },
  fontFamily: '"Lato", sans-serif',
  color: '#1B1B32',
  fontWeight: '700',
};

theme.typography.h6 = {
  fontFamily: '"Lato", sans-serif',
  fontWeight: '550',
  color: '#1B1B32',
};

theme.typography.p = {
  fontFamily: '"Lato", sans-serif',
  fontSize: '12px',
  [theme.breakpoints.only('lg')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '13px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
  },
  color: '#2A2A40',
};

export default theme;
