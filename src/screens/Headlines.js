import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import { Error, Loading, NewsMain, NewsRelated } from '../components'
import Urls from '../Urls'
import { Colors } from '../Constants'

export default class Headlines extends React.Component {

  state = {
    data: {},
    fetched: false,
    error: false
  }

  componentDidMount () {
    fetch(Urls[this.props.newsType.toLowerCase()])
      .then(res => res.json())
      .then(data => {
        // this.newsRelated = data.related_story_contents.map((story, index) => {
        //   return <NewsRelated
        //     key={index}
        //     data={story}
        //     backText={this.props.newsType}
        //     navigation={this.props.navigation}
        //   />
        // })
        // this.newsStories = data.stories.map((story, index) => {
        //   return (
        //     <NewsItem key={index}
        //               data={story}
        //               backText={this.props.newsType}
        //               navigation={this.props.navigation}
        //     />
        //   )
        // })
        this.setState({data, fetched: true})
      })
      .catch(err => {
        console.log(err)
        this.setState({error: true})
      })
  }

  render () {
    if (this.state.error) {
      return <Error/>
    }
    if (!this.state.fetched) {
      return <Loading/>
    }

    const featured = this.state.data.featured_stories
    console.log(featured[1].sec_name.toLowerCase())
    return (
      <ScrollView style={s.container}>
        <NewsMain
          label={this.props.newsType}
          labelColor={Colors[this.props.newsType.toLowerCase()]}
          data={this.state.data.headlines[0]}
          navigation={this.props.navigation}
        />

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, marginRight: 0}}>
            <Text
              style={{
                paddingLeft: 10,
                borderRightColor: '#3869d2',
                borderRightWidth: 1,
                fontSize: 12,
                color: '#fff',
                backgroundColor: Colors[featured[0].sec_name.toLowerCase()]
              }}>
              FEATURED
            </Text>
            <Image
              style={{width: null, height: 150}}
              source={{uri: featured[0].base_url + featured[0].base_filename}}
            />
            {!!featured[0].kicker && <Text>{featured[0].kicker}</Text>}
            <Text>{featured[0].title}</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, marginRight: 0}}>
              <Text
                style={{
                  paddingLeft: 10,
                  borderRightColor: '#3869d2',
                  borderRightWidth: 1,
                  fontSize: 12,
                  color: '#fff',
                  backgroundColor: Colors[featured[1].sec_name.toLowerCase()]
                }}>
                FEATURED
              </Text>
              <Image
                style={{width: null, height: 150}}
                source={{uri: featured[1].base_url + featured[1].base_filename}}
              />
              {!!featured[1].kicker && <Text>{featured[1].kicker}</Text>}
              <Text>{featured[1].title}</Text>
            </View>
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
    backgroundColor: '#ffffff'
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBackground: {
    width: null,
    height: IMAGE_BG_HEIGHT
  },
  kicker: {
    fontSize: 14,
    color: '#e5e7f6'
  }
})
