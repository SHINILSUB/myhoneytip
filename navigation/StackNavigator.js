import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DetailPage from '../pages/DetailPage';
import Mainpage from '../pages/Mainpage';
import AboutPage from '../pages/AboutPage';
import LikePage from '../pages/LikePage';

//스택 네비게이션 라이브러리가 제공하는 기능의 객체 사용가능.
//항상 상단에 선언하고 시작하는게 규칙
const Stack = createStackNavigator();


const StackNavigator = () => {
    return (

        //컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터 태그를 선언
        //위에서 선언한 const Stack = createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내 사용
        //Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할 수 있는 다양한 옵션
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                    height: 100
                },
                headerTitleAlign: 'left',
                headerTintColor: "#000",
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen name="Mainpage" component={Mainpage} />
            <Stack.Screen name="DetailPage" component={DetailPage} />
            <Stack.Screen name="AboutPage" component={AboutPage} />
            <Stack.Screen name="LikePage" component={LikePage} />
        </Stack.Navigator>
    )
}

export default StackNavigator;