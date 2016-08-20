'use strict'

import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    marginBottom: Metrics.smallMargin,
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
  }
})
