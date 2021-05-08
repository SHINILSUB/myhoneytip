import React,{useState, useEffect} from 'react';
import { StyleSheet, ScrollView, } from 'react-native';
import LikeCard from '../components/LikeCard';
import Constants from 'expo-constants';
import {firebase_db} from "../firebaseConfig"

export default function LikePage({navigation}){
    
    const [tip, setTip] = useState([{
            "idx":3,
            "category":"재테크",
            "title":"잠자는 내 돈을 찾아라",
            "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmoney1.png?alt=media&token=491096e7-0b57-40a3-991b-b984193f8018",
            "desc":"‘새는 돈’에는 미처 몰랐던 카드 포인트, 휴면예금이나 환급금도 포함됩니다. 확실히 파악하지 못한 잠자는 돈을 찾아보고 자투리 돈들을 모으는 것도 중요합니다. 케이블방송, 위성방송 서비스를 이용하면서 중복 납부한 요금, 셋톱박스 보증금 등 돌려받지 않은 돈이 있는지 확인 해보세요. 또, 카드 포인트 통합 조회 서비스를 이용해 여러 개의 카드 포인트가 모두 얼마인지 체크해두는 것이 좋습니다. 보험해약 환급금, 휴면 보험금이나 휴면 예금을 찾아보고 돌려받는 일도 요즘에는 어렵지 않습니다.",
            "date":"2020.09.09"
        },])

    useEffect(()=>{
        navigation.setOptions({
            title:'꿀팁 찜'
        })
        const user_id = Constants.installationId;
        firebase_db.ref('/like/'+user_id).once('value')
        .then((snapshot) => {
            console.log("this is firebase")
            let tip = snapshot.val();
            setTip(tip)
        })
    })

    return (
        //LIkecard import
        <ScrollView style={styles.container}>
           {
               tip.map((content,i)=>{
                   return(<LikeCard key={i} content={content} navigation={navigation}/>)
               })
           }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    }
})