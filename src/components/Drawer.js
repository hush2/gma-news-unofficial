import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { NavigationActions, SafeAreaView } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Colors } from '../Constants'

export default class MyDrawer extends React.Component {
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
        style={[s.drawerItem, { backgroundColor: color }]}
        onPress={() => this.showScreen(route)}
      >
        <FontAwesome name={props.icon} size={24} color="#FFFFFF" />
        <Text style={s.drawerText}>{props.text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
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
    marginVertical: 10,
  },
  drawerText: {
    flex: 1,
    color: '#eeeeee',
    fontSize: 22,
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
})
