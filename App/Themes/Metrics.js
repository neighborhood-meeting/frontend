import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  regularMargin: 16,
  mediumMargin: 14,
  smallMargin: 5,
  tinyMargin: 4,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 75 : 55,
  buttonRadius: 4,
  icons: {
    tiny: 18,
    small: 22,
    medium: 32,
    large: 49,
    xl: 60
  },
  images: {
    tiny: 16,
    little: 20,
    small: 28,
    medium: 40,
    large: 55,
    logo: 300
  }
}

export default metrics
