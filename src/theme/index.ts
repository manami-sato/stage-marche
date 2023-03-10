import { extendTheme } from '@chakra-ui/react';

const colors = {
  white: '#FFFFFF',
  black800: '#303030',
  black600: '#5A5A5A',
  black500: '#828282',
  black400: '#9E9E9E',
  black300: '#DCDCDC',
  black200: '#F1F1F1',
  black100: '#F8F8F8',
  // greenToBlue: 'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)',
  greenToBlue: 'linear-gradient(-225deg, #9bf1cb 0%, #44a1be 100%)',
  yellowToRed:
    'linear-gradient(115.54deg, #924993 16.77%, #9C519D 25%, #A95BAA 67.68%, #9C519D 82.17%, #924993 91.96%)',
  pink: '#ed8599',
  yellow: '#fcd13e',
  lime: '#d9da21',
  green: '#aac836',
  skyblue: '#5dc1cf',
  primary: '#4AB9C9',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black800',
      bg: 'black100',
      fontSize: '1.4rem',
      fontFamily: 'body',
      a: {
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
    },
    pre: {
      fontFamily: 'body',
      whiteSpace: 'pre-wrap',
    },
    '.setGenre': {
      background: 'primary',
      color: 'white',
    },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
};
const breakpoints = {
  sm: '500px',
  md: '640px',
  lg: '820px',
};
const textStyles = {
  bodyW: {
    width: '90vw',
    margin: '0 auto',
  },
  shadow: {
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.05)',
  },
  tagItem: {
    width: 'fit-content',
    padding: '12px 20px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderRadius: '9999px',
    transition: 'color 0.2s, background 0.2s',
  },
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
