import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { NavigationActions, SafeAreaView } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import DrawerHeader from './DrawerHeader'
import { Colors } from '../Constants'
import Urls from '../Urls'
import { fetchData } from '../Utils'

export default class MyDrawer extends React.Component {
  state = {
    data: {},
    error: false,
  }
  async componentDidMount() {
    this.props.navigation.navigate('DrawerOpen')
    try {
      let data = await fetchData(Urls.sconfig, 'sconfig')
      this.setState({ data: data })
    } catch (err) {
      this.setState({ error: true })
    }
  }

  showScreen = (route) => {
    const action = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: route })],
    })
    this.props.navigation.dispatch(action)
  }

  DrawerItem = (props) => {
    const color = Colors[props.text.toLowerCase()]
    const route = props.text.split(' ')[0]
    return (
      <TouchableOpacity
        style={s.drawerItem}
        onPress={() => this.showScreen(route)}
      >
        <FontAwesome
          style={{ width: 30 }}
          name={props.icon}
          size={24}
          color={color}
        />
        <Text style={[s.drawerText, { color: color }]}>{props.text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={s.forex}>
            <DrawerHeader data={this.state.data} />
          </View>
          <View style={s.drawerItems}>
            <this.DrawerItem text="Headlines" icon="home" />
            <this.DrawerItem text="News" icon="newspaper-o" />
            <this.DrawerItem text="Sports" icon="soccer-ball-o" />
            <this.DrawerItem text="Money" icon="money" />
            <this.DrawerItem text="SciTech" icon="lightbulb-o" />
            <this.DrawerItem text="Showbiz" icon="film" />
            <this.DrawerItem text="Lifestyle" icon="instagram" />
            <this.DrawerItem text="Opinion" icon="quote-right" />
            <this.DrawerItem text="HashTag" icon="hashtag" />
            <this.DrawerItem text="Serbisyo Publiko" icon="support" />
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  drawerItems: {
    marginVertical: 2,
  },
  drawerText: {
    flex: 1,
    color: '#eeeeee',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 14,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    marginHorizontal: 8,
    paddingVertical: 12,
    paddingLeft: 30,
    borderRadius: 10,
  },
  forex: {
    flex: 1,
  },
})
