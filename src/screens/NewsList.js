import React from 'react'
import { ScrollView } from 'react-native'
import { Error, Loading, NewsMain, NewsRelated } from '../components'
import Urls from '../Urls'
import { Colors } from '../Constants'
import NewsItem from '../components/NewsItem'

export default class NewsList extends React.Component {

  state = {
    data: {},
    fetched: false,
    error: false
  }
  componentDidMount () {
    fetch(Urls[this.props.newsType.toLowerCase()])
      .then(res => res.json())
      .then(data => {
        this.newsRelated = data.related_story_contents.map((story, index) => {
          return <NewsRelated
              key={index}
              data={story}
              backText={this.props.newsType}
              navigation={this.props.navigation}
          />
        })
        this.newsStories = data.stories.map((story, index) => {
          return (
            <NewsItem key={index}
                      data={story}
                      backText={this.props.newsType}
                      navigation={this.props.navigation}
            />
          )
        })
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
