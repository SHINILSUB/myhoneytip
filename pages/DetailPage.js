import React, { useState, useEffect } from 'react';
import * as Linking from 'expo-linking';
import { Share } from "react-native";
import Constants from 'expo-constants';
import {firebase_db} from "../firebaseConfig"
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function DetailPage({ navigation, route }) {
    let user_idx = Constants.installationId
    console.log(user_idx)

    const [tip, setTip] = useState({
        "idx": 9,
        "category": "재테크",
        "title": "렌탈 서비스 금액 비교해보기",
        "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
        "desc": "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        "date": "2020.09.09"
    })
    useEffect(() => {
        console.log(route)

        //Card.js에서 navigation.navigate 함수 두번째 인자content
        //route.params = content
        navigation.setOptions({
            title: route.params.title,
            //StackNavigator에서 작성했던 옵션을 다시 수정가능
            headerStyle: {
                backgroundColor: '#000',
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        })
        //Get
        const { idx } = route.params;
        firebase_db.ref('/tip/' + idx).once('value').then((snapshot) => {
            let tip = snapshot.val();
            setTip(tip)
        })
    }, [])

    const like = () => {
        // like Post
        const user_id = Constants.installationId;
        firebase_db.ref('/like/' + user_id + '/' + tip.idx)
        .set(tip, function (error) {
            console.log(error)
            Alert.alert("찜")
        });
    }
    const share = () => {
        Share.share({
            message: `${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
        });
    }
    const link = () => {
        Linking.openURL("https://www.notion.so/React-Native-df81d2ba5ae04295b47de2a97183779c")
    }
    return (
        // ScrollView에서 flex 숫자는 의미가 없음
        //height 값과 margin,padding 설정 주의
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: tip.image }} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tip.title}</Text>
                <Text style={styles.desc}>{tip.desc}</Text>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button} onPress={like}><Text style={styles.buttonText}>팁 찜하기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={share}><Text style={styles.buttonText}>팁 공유하기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={link}><Text style={styles.buttonText}>외부링크</Text></TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"
    },
    image: {
        height: 400,
        margin: 10,
        marginTop: 40,
        borderRadius: 20
    },
    textContainer: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: "#eee"
    },
    desc: {
        marginTop: 10,
        color: "#eee"
    },
    buttonGroup: {
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'deeppink',
        borderRadius: 7
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
})