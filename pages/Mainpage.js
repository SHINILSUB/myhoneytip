 
import React, { useEffect, useState } from 'react';
import main from './assets/main.png';
import data from './data.json';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Card from '../components/Card';

export default function MainPage() {
  console.disableYellowBox = true;
  let tip = state.tip;
  const [state, setState] = useState([])

  useEffect(() => setState(data), [])
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의꿀팁</Text>
      <Image style={styles.mainImage} source={main} />
      {/* horizental scroll*/}
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"black"}>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>

      <View style={styles.cardContainer}>
         {/*  카드 영역 Components */}
         {
          tip.map((content,i) => (<Card content={content} key={i}/>)
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
