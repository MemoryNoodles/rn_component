import React,{Component} from "react";
import {
    View,
    Text,
    TextInput
} from "react-native";

import styles from "./listCommonCss"


/* 
   list item 填写信息
*/
export default class ListItemInput extends Component {
  render() {
    
    const { name, placeholder, value, changeText } = props;
    return (
      name && (
        <View
          style={[
            styles.spaceBetween,
            styles.borderBottomStyle,
            styles.itemStyle
          ]}
        >
          <Text style={styles.nameStyle}>{name}</Text>
          {value != "" ? (
            <TextInput
              style={styles.valStyle}
              placeholder={placeholder}
              onChangeText={text => changeText(text)}
              placeholderTextColor="#868686"
              value={value}
              multiline={true}
            />
          ) : (
            <TextInput
              style={styles.placeholderStyle}
              placeholder={placeholder}
              onChangeText={text => changeText(text)}
              placeholderTextColor="#868686"
              value={value}
              multiline={true}
            />
          )}
        </View>
      )
    );
  }
}
