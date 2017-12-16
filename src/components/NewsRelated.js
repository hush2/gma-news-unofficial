import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default class NewsRelated extends React.Component {
  render() {
    const handleOnPress = () => {
      this.props.navigation.navigate('NewsView', {main: story, backText: this.props.backText})
    }
    const story = this.props.data
    return (
      <TouchableOpacity onPress={handleOnPress}>
        <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 2 }}>
          <FontAwesome name="newspaper-o" size={24} />
          <Text> {story.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
