import React from 'react';

export default function card() {
  return (
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

  )
}
const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 10,
        marginLeft: 10
      },
      card: {
        flex: 1,
        //컨텐츠들을 가로로 나열
        //세로로 나열은 column <- 디폴트 값임 
        flexDirection: "row",
        margin: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#eee",
        paddingBottom: 10
    
      },
      cardImage: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 10,
      },
      cardText: {
        flex: 2,
        flexDirection: "column",
        marginLeft: 10,
      },
      cardTitle: {
        fontSize: 20,
        fontWeight: "700"
      },
      cardDesc: {
        fontSize: 15
      },
      cardDate: {
        fontSize: 10,
        color: "#A6A6A6",
      }

})