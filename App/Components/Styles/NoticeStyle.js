import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.snow
  },
  noticeBlock: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconBlock: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  expandButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Metrics.baseMargin
  },
  iconText: {
    fontWeight: 'bold',
    color: Colors.orange,
    marginLeft: Metrics.smallMargin
  },
  noticeText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.panther
  }
})
