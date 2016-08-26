import React, { PropTypes } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import RegionSimple from '../Components/RegionSimple'
import RegionTitle from '../Components/RegionTitle'

// Styles
import styles from './Styles/HomeScreenStyle'
import { Images } from '../Themes'

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
        <View style={styles.topBlock}>
          <Image source={Images.bg_graphic} style={styles.backgroundImage} />
        </View>
        <Image source={Images.logo} style={styles.logo} />
        <View style={styles.profileImageBlock}>
          <Image source={{ uri: user.profileUrl }} style={styles.profileImage} />
          <TouchableOpacity style={styles.cameraButton}>
            <Image source={Images.icon_cam} style={styles.cameraIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileText}>
          {user.name}
        </Text>
        <View style={styles.bottomBlockWrapper}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>편집</Text>
          </TouchableOpacity>
          <View style={styles.regionBlock}>
            <View style={styles.regionList}>
              {this.createRegionSimples()}
            </View>
          </View>
        </View>
      </View>
    )
  }

  createRegionSimples = () => {
    const {regions} = this.props
    return regions.map((region) => {
      return (
        <RegionSimple
          key={region.regionId}
          region={region}
          onPress={() => this.handleRegionPress(region)} />
      )
    })
  }

  handleRegionPress = (region) => {
    return this.props.toRegion({
      region: region,
      hideNavBar: false,
      renderTitle: () => (<RegionTitle title={region.name} />)
    })
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
    toRegion: NavigationActions.drawer,
    fetchRegions: (userId) => dispatch(Actions.fetchRegions(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
