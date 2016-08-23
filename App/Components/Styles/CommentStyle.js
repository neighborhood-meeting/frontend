import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 20,
    backgroundColor: Colors.snow
  },
  writerImage: {
    width: Metrics.icons.medium,
    height: Metrics.icons.medium,
    borderRadius: Metrics.icons.medium / 2,
    borderColor: Colors.orange,
    borderWidth: 1
  },
  commentText: {
    ...Fonts.style.normarl
  },
  commentWriter: {
    fontWeight: 'bold'
  },
  timeText: {
    ...Fonts.style.time,
    marginLeft: 6
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
  }
})
