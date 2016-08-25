import React, { PropTypes } from 'react'
import { View, Text, Image } from 'react-native'

import styles from './Styles/RegionTitleStyle'
import { Images } from '../Themes'

export default class RegionTitle extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: null
  }

  render () {
    const { title } = this.props
    const titleBlock = title && <Text style={styles.titleText}>{title}</Text>
    return (
      <View style={styles.container}>
        {titleBlock}
        <Image source={Images.logo} style={styles.logo} />
      </View>
    )
  }
}
