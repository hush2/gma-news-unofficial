import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import moment from 'moment'

export default class NewsItem extends React.Component {
  render() {
    const handleOnPress = () => {
      this.props.navigation.navigate('NewsView', {
        main: story,
        backText: this.props.backText,
      })
    }
    const story = this.props.data
    const imageUrl = story.base_url + story.base_filename
    return (
      <TouchableOpacity style={s.container} onPress={handleOnPress}>
        <View style={{ flexDirection: 'row' }}>
          {!!imageUrl && (
            <Image style={s.image} resizeMethod="resize" source={{ uri: encodeURI(imageUrl) }} />
          )}
          <View style={{ flex: 1 }}>
            {!!story.kicker && <Text style={s.kicker}>{story.kicker}</Text>}
            <Text style={s.title}>{story.title}</Text>
            <Text style={s.date}>{moment(story.date).fromNow()}</Text>
          </View>
        </View>
        <Text style={s.teaser}>{story.teaser}</Text>
      </TouchableOpacity>
    )
  }
}

const s = StyleSheet.create({
  container: {
    marginTop: 4,
    borderTopWidth: 0.5,
    borderTopColor: '#777777',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  image: {
    width: 128,
    height: 96,
  },
  kicker: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 6,
  },
  title: {
    fontSize: 18,
    paddingLeft: 6,
    paddingRight: 2,
  },
  date: {
    paddingLeft: 6,
    marginTop: 5,
    color: '#666666',
  },
  teaser: {
    marginTop: 6,
    paddingLeft: 2,
    paddingRight: 2,
  },
})
