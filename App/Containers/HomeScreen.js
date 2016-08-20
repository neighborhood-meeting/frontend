import React, { PropTypes } from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import RegionSimple from '../Components/RegionSimple'

// Styles
import styles from './Styles/HomeScreenStyle'

const dummyUser = {
  userMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg',
  userId: 1,
  name: '아이유'
}

const dummyRegions = [
  {
    regionId: 1,
    name: '행복이 가득한 창전동',
    description: '행복이 가득하다',
    owner: {
      userId: 1,
      name: '철수'
    }
  },
  {
    regionId: 2,
    name: '영희네 동네 주민 모임',
    description: '동네 주민이 가득하다',
    owner: {
      userId: 2,
      name: '영희'
    }
  },
  {
    regionId: 3,
    name: '민수 때릴 사람',
    description: '때릴 사람이 가득하다',
    owner: {
      userId: 3,
      name: '민수'
    }
  }
]

class HomeScreen extends React.Component {

  static propTypes = {
    toRegion: PropTypes.func,
    usageExamples: PropTypes.func,
    fetchRegions: PropTypes.func,
    regions: PropTypes.array,
    user: PropTypes.object,
    fetchUser: PropTypes.func
  }

  componentDidMount () {
    this.props.fetchUser(dummyUser)
    this.props.fetchRegions(1, dummyRegions)
  }

  componentWillReceiveProps (nextProps) {
    // StatusBar.setBackgroundColor(Colors.orange, false)
  }

  render () {
    const { user } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.profileBox}>
          <Image source={{uri: user.userMainImage}} style={styles.profileImage} />
          <Text style={styles.profileText}>{user.name}</Text>
        </View>
        <ScrollView style={styles.container}>
          {this.createRegionSimples()}
        </ScrollView>
      </View>
    )
  }

  createRegionSimples = () => {
    const {regions} = this.props
    return regions.map((region, i) => {
      return <RegionSimple key={i} region={region} onPress={() => this.handleRoomPress(region, i)} />
    })
  }

  handleRoomPress = (region, i) => {
    if (i === 2) {
      return this.props.usageExamples()
    }
    return this.props.toRegion({regionId: region.regionId})
  }
}

const mapStateToProps = (state) => {
  return {
    regions: state.regions.items,
    user: state.login.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toRegion: NavigationActions.region,
    usageExamples: NavigationActions.usageExamples,
    fetchRegions: (userId, dummyRegions) => dispatch(Actions.fetchRegions(userId, dummyRegions)),
    fetchUser: (dummyUser) => dispatch(Actions.fetchUser(dummyUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
