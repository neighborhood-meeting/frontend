import React, { PropTypes } from 'react'
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import RegionSimple from '../Components/RegionSimple'

// Styles
import styles from './Styles/HomeScreenStyle'

// const dummyRegions = [
//   {
//     regionId: 1,
//     name: '행복이 가득한 창전동',
//     description: '행복이 가득하다',
//     notice: '낙성대 공지'
//   },
//   {
//     regionId: 2,
//     name: '영희네 동네 주민 모임',
//     description: '동네 주민이 가득하다',
//     notice: '낙성대 공지'
//   },
//   {
//     regionId: 3,
//     name: '민수 때릴 사람',
//     description: '때릴 사람이 가득하다',
//     notice: '낙성대 공지'
//   }
// ]

class HomeScreen extends React.Component {

  static propTypes = {
    toRegion: PropTypes.func,
    fetchRegions: PropTypes.func,
    regions: PropTypes.array,
    user: PropTypes.object
  }

  componentDidMount () {
    this.props.fetchRegions(this.props.user.userId)
  }

  render () {
    const { user } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.profileBox}>
          <Image source={{uri: user.profileUrl}} style={styles.profileImage} />
          <Text style={styles.profileText}>
            {user.name}
          </Text>
        </View>
        <View style={styles.regionBox}>
          <View style={styles.regionList}>
            {this.createRegionSimples()}
          </View>
        </View>
      </View>
    )
  }

  createRegionSimples = () => {
    const {regions} = this.props
    return regions.map((region) => {
      return (
        <RegionSimple key={region.regionId} region={region} onPress={() => this.handleRegionPress(region)} />
      )
    })
  }

  handleRegionPress = (region) => {
    return this.props.toRegion({ region: region, hideNavBar: false, title: region.name })
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.login.item,
    regions: state.regions.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toRegion: NavigationActions.regionMain,
    fetchRegions: (userId) => dispatch(Actions.fetchRegions(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
