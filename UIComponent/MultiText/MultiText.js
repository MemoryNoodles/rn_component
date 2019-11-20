import React from 'react'
import { Text } from 'react-native'
import { pTd } from "../../../utils/util"

const MultiText = (props) => {
    return (
       <Text style={{lineHeight: props.lineHeight, ...props.style}}>{props.children || props.defaultValue}</Text>
    )
}
MultiText.defaultProps = {
    lineHeight: pTd(40),
    defaultValue:"未知"
}

export default MultiText
