import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const global_variables = {
  fonts: {
    light: 'OpenSans-Light',
    regular: 'OpenSans-Regular',
    semibold: 'OpenSans-SemiBold',
    bold: 'OpenSans-Bold',
    black: 'OpenSans-ExtraBold',
  },
  dimensions: {
    deviceWidth: width,
    deviceHeight: height,
  },
  colors: {
    green: 'rgba(57, 207, 157, 1)',
    mediumgreen: 'rgba(57, 207, 157, 0.7)',
    lightgreen: '#5FD1B2',
    white: '#FFFFFF',
    grey: '#2f3542',
    lightGrey: '#a4b0be',
  },
  greenGradient: {
    color1: '#98de5b',
    color2: '#08e1ae',
  },
};

export default global_variables;