import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Error, Loading, NewsMain, NewsRelated } from '../components'
import Urls from '../Urls'
import { Colors } from '../Constants'
import NewsItem from '../components/NewsItem'
import { fetchData } from '../Utils'

export default class NewsList extends React.Component {
  state = {
    data: {},
    fetched: false,
    error: false,
  }

  async componentDidMount() {
    let url = Urls[this.props.newsType.toLowerCase()]
    try {
      let data = await fetchData(url, this.props.newsType)
      this.newsRelated = data.related_story_contents.map((story, index) => {
        return (
          <View style={s.newsRelated} key={index}>
            <NewsRelated
              data={story}
              backText={this.props.newsType}
              navigation={this.props.navigation}
            />
          </View>
        )
      })
      this.newsStories = data.stories.map((story, index) => {
        return (
          <View style={s.newsItem} key={index}>
            <NewsItem
              data={story}
              backText={this.props.newsType}
              navigation={this.props.navigation}
            />
          </View>
        )
      })
      this.setState({ data, fetched: true })
    } catch (err) {
      this.setState({ error: true })
    }
  }

  render() {
    if (this.state.error) {
      return <Error />
    }
    if (!this.state.fetched) {
      return <Loading />
    }
    return (
      <ScrollView>
        <NewsMain
          label={this.props.newsType}
          labelColor={Colors[this.props.newsType.toLowerCase()]}
          data={this.state.data.main[0]}
          navigation={this.props.navigation}
        />
        {this.newsRelated}
        {this.newsStories}
      </ScrollView>
    )
  }
}

const s = StyleSheet.create({
  newsRelated: {
    paddingVertical: 2,
  },
})
