import React from 'react'
import { Image, StyleSheet, ScrollView, View, Text } from 'react-native'
import HTMLView from 'react-native-htmlview'

export default class NewsView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.backText,
  })

  renderNode(node, index) {
    if (node.name === 'img') {
      const a = node.attribs
      return <Image key={index} style={s.img} source={{ uri: a.src }} />
    }
  }

  render() {
    const { main } = this.props.navigation.state.params
    const mainText = main.main.replace(/<p>\s+/gi, '<p>') // clean p's

    return (
      <ScrollView>
        <Image style={s.image} source={{ uri: encodeURI(main.base_url + main.base_filename) }} />
        <View style={s.text}>
          <Text style={s.title}>{main.title}</Text>
          <Text style={s.date}>{main.date}</Text>
          <HTMLView value={mainText} stylesheet={html} renderNode={this.renderNode} />
        </View>
      </ScrollView>
    )
  }
}

const s = StyleSheet.create({
  image: {
    width: null,
    height: 300,
  },
  text: {
    margin: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#b1b1b1',
    alignSelf: 'center',
    marginVertical: 20,
  },
  img: {
    width: 400,
    height: 300,
  },
})

const html = StyleSheet.create({
  p: {
    fontSize: 15,
  },
  a: {
    fontWeight: '300',
    color: '#0000ff',
  },
})
