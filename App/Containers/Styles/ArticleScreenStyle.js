import { StyleSheet } from 'react-native'
import { Colors, Fonts, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  commentCheckButton: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 15,
    marginRight: 16,
    backgroundColor: Colors.textLittle,
    width: 89,
    height: 29,
    borderRadius: 10
  },
  commentCheckText: {
    ...Fonts.style.normal,
    color: Colors.snow,
    textAlign: 'center'
  }
})
