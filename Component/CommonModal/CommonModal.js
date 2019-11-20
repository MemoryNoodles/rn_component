import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Modal,
    StatusBar
} from "react-native";
// import Modal from "react-native-modal";
import pTd from "../../utils/unit";

const CommonModal = props => {
    const { visible, changeModalStatus, title, content } = props;
    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {}}
        >
            <View style={styles.modal_wrap}>
                <TouchableOpacity
                    onPress={() => changeModalStatus()}
                    style={styles.modal_mask}
                ></TouchableOpacity>
                <View style={styles.modal_contanier}>
                    <Text style={styles.modal_title}>{title}</Text>
                    {content ? <ScrollView>{content}</ScrollView> : <View><Text>内容</Text></View>}
                    <TouchableOpacity onPress={() => changeModalStatus()}>
                        <Text style={styles.modal_title}>关闭</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    );
};

CommonModal.defaultProps = {
    title: "标题",
    content: "",
    changeModalStatus: () => {},
    visible: true
};

export default CommonModal;

const styles = StyleSheet.create({
    modal_wrap: {
        justifyContent: "center",
        alignItems: "center",
        flex:1,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top:0,
    },
    modal_mask: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        flex:1,
        width: "100%",
        height: "100%",

        backgroundColor: "rgba(0,0,0,0.5)", 
    },
    modal_contanier: {
        backgroundColor: "#fff",
        borderRadius: pTd(28),
        width: pTd(600),
        maxHeight: pTd(1000),
        paddingHorizontal: pTd(20)
    },
    modal_title: {
        fontSize: pTd(30),
        textAlign: "center",
        height: pTd(80),
        lineHeight: pTd(80),
        borderBottomColor: "#d8d8d8",
        borderBottomWidth: pTd(1)
    }
});
