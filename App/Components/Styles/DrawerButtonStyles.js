import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    ...Fonts.style.h5,
    color: Colors.snow,
    marginVertical: Metrics.baseMargin
  },
  iconWrapper: {
    width: 30,
    alignItems: 'center',
    marginRight: Metrics.baseMargin
  },
  icon: {
  }
}
