import React,{Component} from "react";
import {
    View,
    Text
} from "react-native";

import styles from "./listCommonCss"



/* 
   list item 左右展示信息(少文字类型)
*/
export default class ListItemInfo extends Component {
    render(){
        const { name, value="暂无" } = this.props;
        return name && value ? (
            <View
                style={[
                    styles.spaceBetween,
                    styles.borderBottomStyle,
                    styles.DetailItemStyle
                ]}
            >
                {name && <Text style={styles.detailNameStyle}>{name}</Text>}
                {value && <Text style={styles.detailValStyle}>{value}</Text>}
            </View>
        ) : null;
    }
}