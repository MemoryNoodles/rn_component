import React, {Component} from 'react'
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import RootSiblings from 'react-native-root-siblings'
// const width = Dimensions.get('window').width
// const height = Dimensions.get('window').height

let MaskView = undefined

export default {

    show: (callback) => {
        MaskView = new RootSiblings(
            <TouchableOpacity
                onPress={() => this.hidden(callback)}
                style={ [StyleSheet.absoluteFill, {backgroundColor: "rgba(0,0,0,0.5)"}] }
            />
        )
    },

    hide: (callback)=> {
        if (MaskView instanceof RootSiblings) {
            MaskView.destroy()
            callback && callback()
        }
    }

}
