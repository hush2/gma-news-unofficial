import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Swiper from 'react-native-swiper'

const CircleView = (props) => (
  <View
    style={{
      backgroundColor: '#9c9310',
      marginHorizontal: 2,
      width: 30,
      height: 30,
      borderRadius: 30 / 2,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{ fontSize: 16, color: '#fff' }}>{props.value}</Text>
  </View>
)

const Lotto = (props) => (
  <View style={{ paddingLeft: 4, flex: 1 }}>
    <Text
      style={{
        fontSize: 18,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
      }}
    >
      LOTTO RESULT
    </Text>
    <View style={{ alignItems: 'center', marginTop: 10 }}>
      <Text style={{ fontSize: 16 }}>{props.lotto.type.toUpperCase()}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
        {props.lotto.post_date}
      </Text>
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <CircleView value={props.lotto.results[0]} />
        <CircleView value={props.lotto.results[1]} />
        <CircleView value={props.lotto.results[2]} />
        <CircleView value={props.lotto.results[3]} />
        <CircleView value={props.lotto.results[4]} />
        <CircleView value={props.lotto.results[5]} />
      </View>
    </View>
  </View>
)

export default class DrawerHeader extends React.Component {
  render() {
    if (!this.props.data.forex) {
      return <View />
    }
    const data = this.props.data
    return (
      <Swiper
        style={{
          flex: 1,
          height: 130,
          backgroundColor: '#dce6ee',
          marginBottom: 4,
        }}
        index={0}
        showsButtons
        autoplay
        autoplayTimeout={6}
        showsPagination={false}
        loop={true}
        nextButton={<FontAwesome name="arrow-right" size={16} color="#AAA" />}
        prevButton={<FontAwesome name="arrow-left" size={16} color="#AAA" />}
      >
        <View style={{ paddingLeft: 4, flex: 1 }}>
          <Text
            style={{
              fontSize: 18,
              alignSelf: 'flex-start',
              fontWeight: 'bold',
            }}
          >
            FOREX
          </Text>
          <Text style={{ fontSize: 40, alignSelf: 'center' }}>
            {data.forex.usd}
          </Text>
          <Text style={{ fontSize: 20, alignSelf: 'center' }}>1 USD</Text>
          <Text style={{ fontSize: 14, alignSelf: 'flex-start' }}>More...</Text>
        </View>
        {data.lotto[0] && <Lotto lotto={data.lotto[0]} />}
        {data.lotto[1] && <Lotto lotto={data.lotto[1]} />}
      </Swiper>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItem: {
    textAlign: 'center',
    marginVertical: 5,
    paddingVertical: 10,
    color: '#fff',
    fontSize: 22,
  },
})
