import React from 'react'
import Expo from 'expo'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Drawer from './components/Drawer'
import Headlines from './screens/Headlines'
import NewsList from './screens/NewsList'
import NewsView from './screens/NewsView'

const HeaderTitle = props => {
  // Use the 'title' property
  if (props.children) {
    return <Text style={s.title}>{props.children}</Text>
  }
  return (
    <View style={s.header}>
      <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
        <MaterialCommunityIcons name="menu" size={30} color="red" />
      </TouchableOpacity>
      <Text style={s.headerTitle}>GMA NEWS UNOFFICIAL</Text>
    </View>
  )
}

const StackNav = StackNavigator(
  {
    Headlines: {
      screen: ({ navigation }) => <Headlines newsType="Headlines" navigation={navigation} />,
    },
    News: {
      screen: ({ navigation }) => <NewsList newsType="News" navigation={navigation} />,
    },
    Sports: {
      screen: ({ navigation }) => <NewsList newsType="Sports" navigation={navigation} />,
    },
    Money: {
      screen: ({ navigation }) => <NewsList newsType="Money" navigation={navigation} />,
    },
    SciTech: {
      screen: ({ navigation }) => <NewsList newsType="SciTech" navigation={navigation} />,
    },
    Showbiz: {
      screen: ({ navigation }) => <NewsList newsType="Showbiz" navigation={navigation} />,
    },
    Lifestyle: {
      screen: ({ navigation }) => <NewsList newsType="Lifestyle" navigation={navigation} />,
    },
    Opinion: {
      screen: ({ navigation }) => <NewsList newsType="Opinion" navigation={navigation} />,
    },
    HashTag: {
      screen: ({ navigation }) => <NewsList newsType="HashTag" navigation={navigation} />,
    },
    'Serbisyo Publiko': {
      screen: ({ navigation }) => <NewsList newsType="Serbisyo Publiko" navigation={navigation} />,
    },
    NewsView: {
      screen: NewsView,
      navigationOptions: {},
    },
  },
  {
    initialRouteName: 'Headlines',
    navigationOptions: ({ navigation }) => ({
      headerTitle: props => <HeaderTitle navigation={navigation} {...props} />,
    }),
  }
)

const DrawerNav = DrawerNavigator(
  {
    Headlines: { screen: StackNav },
  },
  {
    drawerBackgroundColor: 'transparent',
    contentComponent: Drawer,
    contentOptions: {},
  }
)

export default () => (
  <View style={s.container}>
    <DrawerNav />
  </View>
)

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 12,
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
})
