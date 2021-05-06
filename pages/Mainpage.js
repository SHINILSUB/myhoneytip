
import React, { useEffect, useState } from 'react';
import main from '../assets/main.png';
import data from '../data.json';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Card from '../components/Card';
import Loading from '../components/Loading';

export default function MainPage({ navigation }) {
  console.disableYellowBox = true;

  const [state, setState] = useState([])
  const [cateState, setCateState] = useState([])
  const [ready, setReady] = useState(true)//기본값이 true

  //useEffect를 거쳐야 useState에 저장
  useEffect(() => {

    //뒤의 1000 숫자는 1초를 뜻함
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    setTimeout(() => {
      //헤더의 타이틀 변경
      navigation.setOptions({
        title: '나만의 꿀팁'
      })
      //꿀팁 데이터로 모두 초기화 준비
      let tip = data.tip;
      setState(tip)
      setCateState(tip)
      setReady(false)
    }, 1000)
  }, [])

  const category = (cate) => {
    if (cate == "전체보기") {
      //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
      setCateState(state)
    } else {
      setCateState(state.filter((d) => {
        return d.category == cate
      }))
    }
  }

  return ready ? <Loading /> : (
    <ScrollView style={styles.container}>
      <Image style={styles.mainImage} source={main} />
      {/* horizental scroll*/}
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
      <TouchableOpacity style={styles.middleButtonAll} onPress={() => {category('전체보기')}}><Text style={styles.middleButtonTextAll}>전체보기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton01} onPress={() => { category('생활') }} ><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02} onPress={() => { category('재테크') }} ><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03} onPress={() => { category('반려견') }} ><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04} onPress={() => { category('꿀팁 찜') }} ><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>

      {/*  카드 영역 Components */}
      <View style={styles.cardContainer}>
        {
          cateState.map((content, i) => (<Card content={content} key={i} navigation={navigation} />)
          )
        }

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 50,
    marginLeft: 20
  },
  mainImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center"
  },
  middleContainer: {
    marginTop: 20,
    marginLeft: 10,
    height: 60
  },
  middleButtonAll: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#20b2aa",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7
  },
  middleButton01: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fdc453",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7
  },
  middleButton02: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fe8d6f",
    borderRadius: 15,
    margin: 7
  },
  middleButton03: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#9adbc5",
    borderRadius: 15,
    margin: 7
  },
  middleButton04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#f886a8",
    borderRadius: 15,
    margin: 7
  },
  middleButtonTextAll: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center"
  },
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center"
  },
  cardContainer: {
    marginTop: 10,
    marginLeft: 10
  }
});
