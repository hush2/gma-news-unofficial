import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DrawerItems, SafeAreaView, StackNavigator, DrawerNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import Swiper from 'react-native-swiper'
import News from './screens/NewsList'
import Headlines from './screens/Headlines'
import NewsView from './screens/NewsView'

const DrawerItem = props => {
  return <Text style={[s.drawerItem, { backgroundColor: props.bgColor }]}>{props.title}</Text>
}

const StackNav = StackNavigator({
  Headlines: {
    screen: News,
    navigationOptions: {
      drawerLabel: props => <DrawerItem bgColor="#ccc" title="Headlines" {...props} />,
    },
  },
  NewsView: {
    screen: NewsView,
  },
})

const CircleView = props => (
  <View
    style={{
      backgroundColor: '#9c9310',
      marginHorizontal: 2,
      width: 30,
      height: 30,
      borderRadius: 30 / 2,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text style={{ fontSize: 16, color: '#fff' }}>{props.value}</Text>
  </View>
)

class MyDrawer extends React.Component {
  constructor() {
    super()
    this.data = require('./data/specialconfig_v1')
  }

  componentDidMount() {
    this.props.navigation.navigate('DrawerToggle')
  }

  render() {
    const lotto = this.data.lotto[0]

    return (
      <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <Swiper
            style={{
              flex: 1,
              height: 130,
              backgroundColor: '#1e76bb',
              marginBottom: 4,
            }}
            // index={1}
            showsButtons
            // autoplay
            autoplayTimeout={3}
            showsPagination={false}
            loop={false}
            nextButton={<FontAwesome name="arrow-right" size={16} color="#555" />}
            prevButton={<FontAwesome name="arrow-left" size={16} color="#555" />}>
            <View style={{ paddingLeft: 4, flex: 1 }}>
              <Text
                style={{
                  fontSize: 18,
                  alignSelf: 'flex-start',
                  fontWeight: 'bold',
                }}>
                FOREX
              </Text>
              <Text style={{ fontSize: 40, alignSelf: 'center' }}>{this.data.forex.usd}</Text>
              <Text style={{ fontSize: 20, alignSelf: 'center' }}>1 USD</Text>
              <Text style={{ fontSize: 14, alignSelf: 'flex-start' }}>More...</Text>
            </View>

            <View style={{ paddingLeft: 4, flex: 1 }}>
              <Text
                style={{
                  fontSize: 12,
                  alignSelf: 'flex-start',
                  fontWeight: 'bold',
                }}>
                LOTTO RESULT
              </Text>
              <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 16 }}>{lotto.type.toUpperCase()}</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{lotto.post_date}</Text>
                <View
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <CircleView value={lotto.results[0]} />
                  <CircleView value={lotto.results[1]} />
                  <CircleView value={lotto.results[2]} />
                  <CircleView value={lotto.results[3]} />
                  <CircleView value={lotto.results[4]} />
                  <CircleView value={lotto.results[5]} />
                </View>
              </View>
            </View>
          </Swiper>

          <DrawerItem bgColor="#ccc" title="Headlines" />
          <DrawerItem bgColor="#ccc" title="News" />
          <DrawerItem bgColor="#ccc" title="Sports" />
          <DrawerItem bgColor="#0CA51A" title="Money" />
          <DrawerItem bgColor="#ccc" title="SciTech" />
          <DrawerItem bgColor="#ccc" title="ShowBiz" />
          <DrawerItem bgColor="#ccc" title="LifeStyle" />
          <DrawerItem bgColor="#ccc" title="HashTag" />
          <DrawerItem bgColor="#ccc" title="Serbisyo Publiko" />
          <DrawerItem bgColor="#ccc" title="Videos" />
          <DrawerItem bgColor="#ccc" title="Photos" />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 30,
              marginVertical: 10,
            }}>
            <FontAwesome name="internet-explorer" size={34} color="#ccc" />
            <FontAwesome name="facebook-official" size={34} color="#ccc" />
            <FontAwesome name="twitter" size={34} color="#ccc" />
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const DrawerNav = DrawerNavigator(
  {
    Drawer: { screen: StackNav },
  },
  {
    // drawerWidth: 220,
    drawerBackgroundColor: '#2c526f',
    contentOptions: {
      tintColor: 'red',
    },
    // contentComponent: MyDrawer
  }
)

export default class App extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <DrawerNav />
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Expo.Constants.statusBarHeight
  },
  drawerItem: {
    textAlign: 'center',
    marginVertical: 5,
    paddingVertical: 10,
    color: '#fff',
    fontSize: 22,
  },
})
