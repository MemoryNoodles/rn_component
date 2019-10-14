import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "./listCommonCss";



export default class ListItemSelect extends Component {
  render() {
    /* 
       
    */  
    const { name, placeholder, value, changeValue } = props;
    return (
      name && (
        <TouchableWithoutFeedback onPress={changeValue}>
          <View
            style={[
              styles.spaceBetween,
              styles.borderBottomStyle,
              styles.itemStyle
            ]}
          >
            <Text style={styles.nameStyle}>{name}</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {value ? (
                <Text style={styles.valStyle}>{value}</Text>
              ) : (
                <Text style={styles.placeholderStyle}>{placeholder}</Text>
              )}
              <Image
                style={styles.leftIcoDis}
                source={require("../images/left_ico.png")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      )
    );
  }
}
