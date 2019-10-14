import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { pTd } from "../../utils/util";
import { rduisFn } from "../../assets/css/styleFn";

export default function SwithBtn(props) {
  //   1:男        2：女
  //   true:已婚   false:未婚
  let { txtArr,  click} = props
  return (
    <View style={styles.btnWrap}>
      <TouchableWithoutFeedback
        onPress={() =>
          click(
            props.item.id,
            typeof props.item.val === "boolean" ? true : 1
          )
        }
      >
        <View
          style={[
            styles.btnRadiusL,
            props.item.val === 1 || props.item.val === true
              ? styles.activeBtn
              : ""
          ]}
        >
          <Text style={[styles.txt, (props.item.val === 1 || props.item.val === true)
              ? styles.activeBtn
              : ""]}>{txtArr[0]}</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() =>
          click(
            props.item.id,
            typeof props.item.val === "boolean" ? false : 2
          )
        }
      >
        <View
          style={[
            styles.btnRadiusR,
            props.item.val === 2 || props.item.val === false
              ? styles.activeBtn
              : ""
          ]}
        >
          <Text style={[styles.txt, (props.item.val === 2 || props.item.val === false)
              ? styles.activeBtn
              : ""]}>{txtArr[1]}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  btnWrap: {
    display: "flex",
    flexDirection: "row"
  },
  btnRadiusL: {
    height: pTd(60),
    width: pTd(105),
    backgroundColor: "#FFFFFF",
    color: "#333333",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    ...rduisFn([20, 0, 0, 20]),
    borderTopWidth:1,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderColor:"#D8D8D8" 
  },
  btnRadiusR: {
    height: pTd(60),
    width: pTd(105),
    color: "#333333",
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    ...rduisFn([0, 20, 20, 0]),
    borderTopWidth:1,
    borderBottomWidth:1,
    borderRightWidth:1,
    borderColor:"#D8D8D8"
  },
  txt:{
      fontSize:pTd(30)
  },
  activeBtn: {
    backgroundColor: "#4CA2F1", 
    color: "#FFFFFF",
    borderTopWidth:1,
    borderBottomWidth:1,
    borderRightWidth:1,
    borderColor:"#4CA2F1"
  }
});
