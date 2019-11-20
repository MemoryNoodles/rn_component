import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    blankContanier:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})


const BlankPage = (props) => {
    const { message } = props;
    return (
        <View style={styles.blankContanier}>
            <Text>{message || "空空如也~"}</Text>
        </View>
    )
}

export default BlankPage
