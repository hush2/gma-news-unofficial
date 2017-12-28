import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'

export default class JustInItem extends React.Component {
  render() {
    const handleOnPress = () => {
      this.props.navigation.navigate('NewsView', {
        main: this.props.data,
        backText: this.props.backText,
      })
    }
    const story = this.props.data
    return (
      <TouchableOpacity style={s.justInContainer} onPress={handleOnPress}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            resizeMethod="resize"
            style={{ width: 128, height: 96 }}
            source={{ uri: encodeURI(story.base_url + story.base_filename) }}
          />
          <View style={{ flex: 1 }}>
            {!!story.kicker && (
              <Text style={{ fontSize: 12 }}>{story.kicker}</Text>
            )}
            <Text style={{ fontSize: 18 }}>{story.title}</Text>
            <Text>{story.date}</Text>
          </View>
        </View>
        <Text>{story.teaser}</Text>
      </TouchableOpacity>
    )
  }
}

const s = StyleSheet.create({
  justInContainer: {
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
})
