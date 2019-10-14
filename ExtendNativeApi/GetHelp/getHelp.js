
/* 
   客户咨询
*/
React.Component.prototype.getHelp = function() {
    let tel = `tel:${Config.tel}`; // 目标电话
    Alert.alert("请拨打客服电话", Config.tel, [
        {
            text: "取消",
            onPress: () => {
                console.log("取消");
            }
        },
        {
            text: "确定",
            onPress: () => {
                Linking.canOpenURL(tel)
                    .then(supported => {
                        if (!supported) {
                            console.log("Can not handle tel:" + tel);
                        } else {
                            return Linking.openURL(tel);
                        }
                    })
                    .catch(error => console.log("tel error", error));
            }
        }
    ]);
};