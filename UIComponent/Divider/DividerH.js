import React from 'react'
import {View, StyleSheet} from 'react-native'
//utils
import Colors from '../../../assets/css/Colors';
import { pTd } from "../../../utils/util"

const styles = StyleSheet.create({
  defaultStyle:{
    height:"100%",
    width:pTd(1),
    backgroundColor: Colors.borderColor
  }
})

/**
 * 垂直方向的分割线
 */
const DividerH = (props) => (
  <View style={[styles.defaultStyle, props.style]} />
)

DividerH.defaultProps = {
 
}




export default DividerH