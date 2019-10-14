import React,{Component} from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from "react-native";

import styles from "./listCommonCss"


//跳转页面
export default class ListItemToPage extends Component{
   render(){
        const { name, pageTo }  = this.props;
        return (
            <TouchableOpacity onPress={pageTo}>
                <View style={[styles.itemStyle, styles.spaceBetween, styles.borderBottomStyle]}>
                    <Text style={styles.infoNameStyle}>{name}</Text>
                    <Image style={styles.leftIco} source={require("../images/left_ico.png")} />
                </View>
            </TouchableOpacity>
        )
   }
}

