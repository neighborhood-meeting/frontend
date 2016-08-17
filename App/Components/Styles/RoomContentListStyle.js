import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  row: {
    flexDirection: 'row',
    height: 200,
    alignItems: 'center',
    margin: Metrics.smallMargin,
    marginHorizontal: Metrics.marginHorizontal,
    backgroundColor: Colors.snow,
    borderRadius: Metrics.smallMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.panther,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    alignSelf: 'center',
    color: Colors.panther,
    textAlign: 'center'
  },
  listContent: {
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  imageBox: {
    alignItems: 'center',
    margin: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover'
  },
  textBox: {
    flex: 1
  }
})
