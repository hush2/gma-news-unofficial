import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

export default class NewsItem extends React.Component {
  render() {
    const handleOnPress = () => {
      this.props.navigation.navigate('NewsView', { main: story, backText: this.props.backText })
    }
    const story = this.props.data
    return (
      <TouchableOpacity
        style={{
          marginVertical: 5,
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc',
          paddingVertical: 4,
          paddingHorizontal: 10,
        }}
        onPress={handleOnPress}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            resizeMethod="resize"
            style={{ width: 128, height: 96 }}
            source={{ uri: encodeURI(story.base_url + story.base_filename) }}
          />
          <View style={{ flex: 1 }}>
            {!!story.kicker && <Text style={{ fontSize: 12 }}>{story.kicker}</Text>}
            <Text style={{ fontSize: 18 }}>{story.title}</Text>
            <Text>{story.date}</Text>
          </View>
        </View>
        <Text>{story.teaser}</Text>
      </TouchableOpacity>
    )
  }
}
