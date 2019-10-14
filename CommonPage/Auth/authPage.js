import React from "react";
import {
    ActivityIndicator,
    StatusBar,
    View,

} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import SplashScreen from "react-native-splash-screen";
import Storage from "../../tools/storage";


/* 
   待完善。。。
*/
export default class AuthScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    checkVersion() {
        setTimeout(() => {
            SplashScreen.hide();
            this._bootstrapAsync();
        }, 1000);
    }
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem(Storage.userToken);
        this.props.navigation.navigate(
            userToken ? "HomeScreen" : "LoginScreen"
        );
    };

    render() {
        return (
            <View>
                <StatusBar  />
                <ActivityIndicator />
            </View>
        );
    }
}
