import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.container,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
});
