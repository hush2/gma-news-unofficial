import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { NavigationActions, SafeAreaView } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Colors } from '../Constants'

export default class MyDrawer extends React.Component {

  //
  // componentDidMount () {
  //   this.props.navigation.navigate('DrawerToggle')
  // }

  showScreen = (route) => {
    const action = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: route})]
    })
    this.props.navigation.dispatch(action)
  }

  DrawerItem = (props) => {
    let color = Colors[props.text.toLowerCase()]
    return (
      <TouchableOpacity
        style={[s.drawerItem, {backgroundColor: color}]}
        onPress={() => this.showScreen(props.text)}
      >
        <FontAwesome name={props.icon} size={24} color='#FFFFFF'/>
        <Text style={s.drawerText}>{props.text}</Text>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
          <View style={{flex: 1}}>
            <Text>GMA</Text>
            <Text>News</Text>
            <Text>Unoffical</Text>
          </View>

          <this.DrawerItem text='News' icon={'newspaper-o'}/>
          <this.DrawerItem text='Sports' icon='soccer-ball-o'/>
          <this.DrawerItem text='Money' icon='money'/>
          <this.DrawerItem text='SciTech' icon='lightbulb-o'/>
          <this.DrawerItem text='Showbiz' icon='film'/>
          <this.DrawerItem text='Lifestyle' icon='instagram'/>
          <this.DrawerItem text='Opinion' icon='quote-right'/>
          <this.DrawerItem text='HashTag' icon='hashtag'/>
          <this.DrawerItem text='Serbisyo' icon='support'/>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerText: {
    color: '#eeeeee',
    fontSize: 22,
    marginLeft: 14
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    marginHorizontal: 30,
    paddingVertical: 12,
    paddingLeft: 30,
    borderRadius: 10
  },
})
