import { Alert } from "react-native"
import AsyncStorage from "@react-native-community/async-storage";
import Storage from "../../tools/storage";


/* 
   退出登录
*/
let loginOutConfirm = async function(callback) {
    await AsyncStorage.multiRemove([`${Storage.userToken}`, `${Storage.memberId}`]);
    callback()
}
React.Component.prototype.loginOut = function(callback){
    Alert.alert(
        "退出登录",
        "您确定要退出吗？",
        [
            {
                text: "取消",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "确定", onPress: () => loginOutConfirm(callback) }
        ],
        { cancelable: false }
    );
}
