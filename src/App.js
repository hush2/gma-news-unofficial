import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationActions, DrawerNavigator, StackNavigator } from 'react-navigation'
import Drawer from './components/Drawer'
import NewsList from './screens/NewsList'
import NewsView from './screens/NewsView'

const HeaderTitle = (props) => {
  // Use the 'title' property, ie: 'Back to ...'
  if (props.children) {
    return <Text style={s.title}>{props.children}</Text>
  }
  return (
    <View style={s.header}>
      <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
        {/* The menu button could have been on headerLeft, but put it here
            so we dont have to mess with the back button. */}
        <MaterialCommunityIcons name='menu' size={30} color='red'/>
      </TouchableOpacity>
      <Text style={s.headerTitle}>GMA NEWS UNOFFICIAL</Text>
    </View>
  )
}

const StackNav = StackNavigator({
  News: {
    screen: ({navigation}) =>
      <NewsList newsType='HashTag' navigation={navigation}/>,
  },
  Sports: {
    screen: ({navigation}) =>
      <NewsList newsType='Sports' navigation={navigation}/>
  },
  Money: {
    screen: ({navigation}) =>
      <NewsList newsType='Money' navigation={navigation}/>
  },
  SciTEch: {
    screen: ({navigation}) =>
      <NewsList newsType='SciTech' navigation={navigation}/>
  },
  Showbiz: {
    screen: ({navigation}) =>
      <NewsList newsType='Showbiz' navigation={navigation}/>
  },
  Lifestyle: {
    screen: ({navigation}) =>
      <NewsList newsType='Lifestyle' navigation={navigation}/>
  },
  Opinion: {
    screen: ({navigation}) =>
      <NewsList newsType='Opinion' navigation={navigation}/>
  },
  HashTag: {
    screen: ({navigation}) =>
      <NewsList newsType='HashTag' navigation={navigation}/>
  },
  Serbisyo: {
    screen: ({navigation}) =>
      <NewsList newsType='Serbisyo' navigation={navigation}/>
  },
  NewsView: {
    screen: NewsView,
    navigationOptions: {}
  }
}, {
  navigationOptions: ({navigation}) => ({
    headerTitle: (props) =>
      <HeaderTitle navigation={navigation} {...props}/>
  })
})

const DrawerNav = DrawerNavigator({
  Headlines: {screen: StackNav}
}, {
  drawerWidth: 250,
  drawerBackgroundColor: '#ffffff',
  contentComponent: Drawer,
  contentOptions: {}
})

export default DrawerNav

const s = StyleSheet.create({
  container: {
    // marginTop: Expo.Constants.statusBarHeight
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 12,
    alignItems: 'center'
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center'
  },
  title: {
    fontWeight: 'bold'
  }
})