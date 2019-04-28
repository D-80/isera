import variables from './variables.scss';

export default ({
  palette: {
    type: 'light',
    divider: variables.secondaryColor,
    background: {
      default: variables.backgroundColor
    },
    primary: {
      main: variables.primaryColor
    },
    secondary: {
      main: variables.secondaryColor
    },
    error: {
      main: variables.errorColor,
    },
    text: {
      primary: variables.primaryFontColor,
      secondary: variables.secondaryFontColor,
      disabled: variables.disabledFontColor,
      hint: variables.hintFontColor,
    },
  },
  typography: {
    fontFamily: variables.fontStack,
    useNextVariants: true,
  }
});
