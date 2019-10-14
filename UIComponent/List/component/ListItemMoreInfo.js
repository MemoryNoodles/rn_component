import React,{Component} from "react";
import { View, Text } from "react-native";

import styles from "./listCommonCss";

/* 
   list item 展示更多的信息
*/
export default class ListItemMoreInfo extends Component {
  render() {
    const { name, value } = this.props;
    return (
      name && value ? (
        <View style={[styles.infoStyle, styles.borderBottomStyle]}>
          <Text style={styles.infoNameStyle}>{name}：</Text>
          <Text style={styles.infoValStyle}>{value}</Text>
        </View>
      ) : null
    ) 
  }
}
