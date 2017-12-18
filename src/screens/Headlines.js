import React from 'react'
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { Error, Loading, NewsMain } from '../components'
import Urls from '../Urls'
import { Colors } from '../Constants'
import { fetchData } from '../Utils'

const Featured = ({ data, backText, navigation }) => {
  if (!data) {
    return <View />
  }
  return (
    <View style={{ flex: 1, marginRight: 0 }}>
      <TouchableOpacity onPress={() => navigation.navigate('NewsView', { main: data, backText })}>
        <Text
          style={{
            paddingLeft: 10,
            borderRightColor: '#3869d2',
            borderRightWidth: 1,
            fontSize: 12,
            color: '#fff',
            backgroundColor: Colors[data.sec_name.toLowerCase()],
          }}
        >
          FEATURED
        </Text>
        <Image
          style={{ width: null, height: 150 }}
          source={{ uri: data.base_url + data.base_filename }}
        />
        {!!data.kicker && <Text>{data.kicker}</Text>}
        <Text>{data.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default class Headlines extends React.Component {
  state = {
    data: {},
    fetched: false,
    error: false,
  }

  async componentDidMount() {
    let url = Urls[this.props.newsType.toLowerCase()]
    try {
      let data = await fetchData(url, this.props.newsType)
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

    const featured = this.state.data.featured_stories

    return (
      <ScrollView style={s.container}>
        <NewsMain
          label={this.props.newsType}
          labelColor={Colors[this.props.newsType.toLowerCase()]}
          data={this.state.data.headlines[0]}
          navigation={this.props.navigation}
        />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Featured
            data={featured[0]}
            backText={this.props.newsType}
            navigation={this.props.navigation}
          />
          <Featured
            data={featured[1]}
            backText={this.props.newsType}
            navigation={this.props.navigation}
          />
        </View>
      </ScrollView>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: null,
    height: 220,
  },
  kicker: {
    fontSize: 14,
    color: '#e5e7f6',
  },
})
