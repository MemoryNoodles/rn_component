import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import navigationService from "../../utils/navigationService"
import pTd from ".././../utils/unit";
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    headerWrap: {
        height: pTd(100),
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        backgroundColor:"#fff",
        // borderBottomWidth:pTd(1),
        // borderColor:"rgba(0,0,0,.4)",
    },
    backWrapStyle: {
        width:pTd(100),
    },
    backContainer:{
        backgroundColor:"red",
        width: pTd(100),
        height: pTd(100),
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: pTd(36),
        color: "#000"
    },
    rightBtn: {
        minWidth: pTd(100),
        justifyContent: "center",
        alignItems: "center"
    },
    rightBtnText: {
        fontSize: pTd(28),
        color: "#2990EF"
    }
});

const CommonHeader = props => {
    const { canBack, title,subTitle, goBack, rightElement, headerStyle, titleStyle } = props;
    return (
        <View style={[styles.headerWrap, headerStyle]}>
            <View style={styles.backWrapStyle}>
                {canBack ? (
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => navigationService.goBack()}
                    >
                        <Icon name="left" size={18} color="#de1e30" />
                    </TouchableOpacity>
                ) : null}
            </View>

            <View style={{alignItems:"center"}}>
                <Text style={[styles.title, titleStyle]}>{title || "详情"}</Text>
                {  subTitle &&  <Text style={{color:"#fff"}}>比赛时间：{subTitle || "副标题"}</Text>}
            </View>

            <View style={styles.rightBtn}>
                {rightElement !== null ? rightElement : null}
            </View>
        </View>
    );
};
CommonHeader.defaultProps = {
    rightElement: null
};

export default CommonHeader;
