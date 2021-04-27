 
import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
export default function MainPage() {
  console.disableYellowBox = true;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의꿀팁</Text>
      {/* tipimage */}
      <Image style={styles.mainImage} source={main} />
      {/* horizental scroll*/}
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"black"}>
        <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>

      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        {tip.map(
          (content, i) =>
          <View style={styles.card} key={i}>
            <Image style={styles.cardImage} source={{ uri: content.image }} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
              <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
              <Text style={styles.cardDate}>{content.date}</Text>
            </View>
          </View>)
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
  }
 

});
