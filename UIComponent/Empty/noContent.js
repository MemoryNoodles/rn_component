import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { WH, pTd } from "../../tools/tool";

export default function NoContent(props){
    const { img, text } = props;
    return (
        <View style={styels.noContentWrap}>
            
            <Image style={{ width: pTd(376), height: pTd(299) }} source={img} />
            <Text style={styels.noContentText}>{text || "暂无数据"}</Text>
        </View>
    );
}

const styels = StyleSheet.create({
    noContentWrap: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: -pTd(100),
        height: WH.height
    },
    noContentText: {
        fontSize: pTd(30),
        color: "#000",
        marginTop: pTd(40)
    }
});
