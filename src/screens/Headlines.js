import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  View,
  Text,
  Image,
  ActivityIndicator
} from 'react-native'
import { BlurView } from 'expo'
import Urls from '../Urls'

export default class Headlines extends React.Component {
  state = {
    data: {},
    fetched: false,
    error: false,
  }

  componentDidMount () {
    //this.setState({data: require('../data/get_headlinesv2_1')})
    // this.setState({error: true})
    // this.setState({fetched: true})

    fetch(Urls.headlines)
      .then(res => res.json())
      .then(data => this.setState({data, fetched: true}))
      .catch(err => this.setState({error: true}))
  }

  render () {
    if (this.state.error) {
      return (
        <View style={s.error}>
          <Text>Problem fetching data.</Text>
        </View>
      )
    }

    if (!this.state.fetched) {
      return <ActivityIndicator style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} size="large"/>
    }

    let {width} = Dimensions.get('window')

    let date = new Date('2017-12-11T08:44:17')

    let headlines = this.state.data.headlines[0]
    let featured = this.state.data.featured_stories

    return (
      <ScrollView style={s.container}>
        <ImageBackground style={s.imageBackground} source={{uri: headlines.base_url + headlines.base_filename}}>
          <Text style={{fontSize: 12, color: '#fff', backgroundColor: 'red', paddingLeft: 10}}>HEADLINE</Text>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <BlurView tint="dark" intensity={50}>
              <Text style={s.kicker}>{headlines.kicker}</Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                }}>
                {headlines.title}
              </Text>
              <Text style={{fontSize: 10, color: '#a9a9a9'}}>{date.toString()}</Text>
            </BlurView>
          </View>
        </ImageBackground>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, marginRight: 0}}>
            <Text
              style={{
                paddingLeft: 10,
                borderRightColor: '#3869d2',
                borderRightWidth: 1,
                fontSize: 12,
                color: '#fff',
                backgroundColor: '#2752a2',
              }}>
              FEATURED
            </Text>
            <Image
              style={{width: width / 2, height: 150}}
              source={{uri: featured[0].base_url + featured[0].base_filename}}
            />
            {!!featured[0].kicker && <Text>{featured[0].kicker}</Text>}
            <Text>{featured[0].title}</Text>
          </View>

          <View style={{flex: 1, marginLeft: 0}}>
            <Text style={{paddingLeft: 10, fontSize: 12, color: '#fff', backgroundColor: '#2752a2'}}>FEATURED</Text>
            <Image
              style={{width: width / 2, height: 150}}
              source={{uri: featured[1].base_url + featured[1].base_filename}}
            />
            {!!featured[1].kicker && <Text style={s.kicker}>{featured[1].kicker}</Text>}
            <Text>{featured[1].title}</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const IMAGE_BG_HEIGHT = 200

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: null,
    height: IMAGE_BG_HEIGHT,
  },
  kicker: {
    fontSize: 14,
    color: '#e5e7f6',
  },
})
