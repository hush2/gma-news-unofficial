import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default class NewsRelated extends React.Component {
  render() {
    const handleOnPress = () => {
      this.props.navigation.navigate('NewsView', {
        main: story,
        backText: this.props.backText,
      })
    }
    const story = this.props.data
    return (
      <TouchableOpacity onPress={handleOnPress}>
        <View style={s.newsRelated}>
          <FontAwesome name="newspaper-o" size={24} />
          <Text style={s.title}>{story.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const s = StyleSheet.create({
  newsRelated: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 2,
  },
  title: {
    marginHorizontal: 10,
  },
})
