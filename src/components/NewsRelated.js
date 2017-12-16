import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default class NewsRelated extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 2 }}>
          <FontAwesome name="newspaper-o" size={24} />
          <Text> {this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
