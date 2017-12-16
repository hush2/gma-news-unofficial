import React from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import { BlurView } from 'expo'

export default class NewsMain extends React.Component {
  render () {
    const main = this.props.data
    const labelColor = this.props.labelColor || '#FF0000'

    return (
      <TouchableOpacity
        onPress={
          () => this.props.navigation.navigate('NewsView', {main, backText: this.props.label})
        }>
        <ImageBackground source={{uri: encodeURI(main.base_url + main.base_filename)}}
                         style={s.imageBackground}>
          <Text style={[s.label, {backgroundColor: labelColor}]}>{this.props.label.toUpperCase()}</Text>
          <View style={s.titleContainer}>
            <BlurView style={s.blur} tint="dark" intensity={50}>
              {!!main.kicker && <Text style={s.kicker}>{main.kicker}</Text>}
              <Text style={s.title}>{main.title}</Text>
              <Text style={s.date}>{main.date}</Text>
            </BlurView>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
}

const s = StyleSheet.create({
  imageBackground: {
    width: null,
    height: 200,
  },
  label: {
    paddingHorizontal: 6,
    fontSize: 12,
    color: '#ffffff',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 6,
  },
  kicker: {
    fontSize: 14,
    color: '#cccccc',
  },
  date: {
    fontSize: 10,
    alignSelf: 'flex-end',
    color: '#cccccc',
  },
  blur: {
    paddingTop: 10,
    paddingBottom: 6,
    paddingHorizontal: 20,
  },
})
