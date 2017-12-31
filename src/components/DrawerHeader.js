import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Swiper from 'react-native-swiper'

const CircleView = (props) => (
  <View style={s.circleView}>
    <Text style={s.circleText}>{props.value}</Text>
  </View>
)

const Lotto = (props) => (
  <View style={s.lottoContainer}>
    <Text style={s.lottoText}>LOTTO RESULT</Text>
    <View style={s.lottoResultContainer}>
      <Text style={s.lottoType}>{props.lotto.type.toUpperCase()}</Text>
      <Text style={s.lottoDate}>{props.lotto.post_date}</Text>
      <View style={s.lottoResults}>
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

const Unavailable = () => (
  <View style={s.unavailable}>
    <Text>LOTTO RESULT UNAVAILABLE</Text>
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
        style={s.swiper}
        index={0}
        showsButtons
        autoplay
        autoplayTimeout={6}
        showsPagination={false}
        loop={true}
        nextButton={<FontAwesome name="arrow-right" size={16} color="#AAA" />}
        prevButton={<FontAwesome name="arrow-left" size={16} color="#AAA" />}
      >
        <View style={s.forexContainer}>
          <Text style={s.forexTitle}>FOREX</Text>
          <Text style={s.forexUsd}>{data.forex.usd}</Text>
          <Text style={s.forexOneUsd}>1 USD</Text>
          <Text style={s.forexMore}>More...</Text>
        </View>
        {data.lotto[0] ? <Lotto lotto={data.lotto[0]} /> : <Unavailable />}
        {data.lotto[1] ? <Lotto lotto={data.lotto[1]} /> : <Unavailable />}
        {false}
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
  circleView: {
    backgroundColor: '#9c9310',
    marginHorizontal: 2,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 16,
    color: '#fff',
  },
  lottoContainer: {
    paddingLeft: 4,
    flex: 1,
  },
  lottoText: {
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  lottoResultContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  lottoType: {
    fontSize: 16,
  },
  lottoDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lottoResults: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  swiper: {
    flex: 1,
    height: 130,
    backgroundColor: '#dce6ee',
    marginBottom: 4,
  },
  forexTitle: {
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  forexUsd: {
    fontSize: 40,
    alignSelf: 'center',
  },
  forexOneUsd: {
    fontSize: 20,
    alignSelf: 'center',
  },
  forexMore: {
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  forexContainer: {
    paddingLeft: 4,
    flex: 1,
  },
  unavailable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
