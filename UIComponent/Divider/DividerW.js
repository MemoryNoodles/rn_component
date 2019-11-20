import React from 'react'
import {View, StyleSheet} from 'react-native'
//utils
//utils
import Colors from '../../../assets/css/Colors';
import { pTd } from "../../../utils/util"

const styles = StyleSheet.create({
  defaultStyle:{
    height:pTd(1),
    backgroundColor: Colors.borderColor
  }
})


const DividerW = (props) => (
  <View style={[styles.defaultStyle, props.style]} />
)

DividerW.defaultProps = {
 
}


export default DividerW