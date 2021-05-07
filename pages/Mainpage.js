
import React, { useEffect, useState } from 'react';
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Card from '../components/Card';
import Loading from '../components/Loading';
import * as Location from "expo-location";
import axios from "axios"
import { firebase_db } from "../firebaseConfig"


export default function MainPage({ navigation }) {
  console.disableYellowBox = true;

  const [state, setState] = useState([])
  const [cateState, setCateState] = useState([])
  const [ready, setReady] = useState(true)//기본값이 true
  const [weather, setWeather] = useState({
    temp: 0,
    condition: ''
  })

  //useEffect를 거쳐야 useState에 저장
  useEffect(() => {
      //헤더의 타이틀 변경
      navigation.setOptions({
        title: '나만의 꿀팁'
      })
      firebase_db.ref('/tip').once('value').then((snapshot) => {
        console.log("this is fire base!")
        let tip = snapshot.val();
        setState(tip)
        setCateState(tip)
        getLocation()
        setReady(false)
      })
  }, [])

  const getLocation = async () => {
    try {
      await Location.requestBackgroundPermissionsAsync();
      const locationData = await Location.getCurrentPositionAsync()
      console.log(locationData['coords']['latitude'])
      console.log(locationData['coords']['longitude'])
      
      const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      console.log(result)
      const temp = result.data.main.temp;
      const condition = result.data.weather[0].main
      console.log(temp)
      setWeather({
        temp, condition
      })

    } catch (error) {
      Alert.alert('위치를 찾을 수 없습니다.', '앱 껏다 켜봐요')
    }
  }

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
      <Text style={styles.weather}>오늘의 날씨: {weather.temp + '°C   ' + weather.condition} </Text>
      <Image style={styles.mainImage} source={main} />
      {/* horizental scroll*/}
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.middleButtonAll} onPress={() => { category('전체보기') }}><Text style={styles.middleButtonTextAll}>전체보기</Text></TouchableOpacity>
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
  weather: {
    alignSelf: "flex-end",
    paddingRight: 20
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
    color: "#fff",
    fontWeight: "700",
    textAlign: "center"
  },
  middleButtonText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center"
  },
  cardContainer: {
    marginTop: 10,
    marginLeft: 10
  }
});
