import React from "react";
import {
    StyleSheet,
    ScrollView,
    TextInput,
    View,
    Text
} from "react-native";
import TextArea from "../../UI_Component/TextArea/textArea";
import TipText from "../../UI_Component/TipText/tipText";

import CommonHead from "../../UI_Component/CommonHead/commonHeader";
import { pTd } from "../../../utils/util";

export default class WriteTextPage extends React.Component {
    constructor() {
        super();
        this.state = {
            textInfo: {},
            tipMsg:""
        };
    }
    componentDidMount() {
        let textInfo = this.props.navigation.getParam("textInfo");
        let tipMsg = this.props.navigation.getParam("tipMsg");
      
        this.setState({
            textInfo,
            tipMsg
        });
    }
    /* 表单可控 */
    changeText(text) {
        let { textInfo } = this.state;
        textInfo.value = text;
        this.setState({
            textInfo
        });
    }    
    /* 根据key返回html */
    returnHtmlByKey(textInfo, tipMsg) {
        let { textType, value, placeholder, name } = textInfo;
        switch (textType) {
            case "text":
                return (
                    <View>
                        <TextInput
                            value={value}
                            underlineColorAndroid={"transparent"}
                            style={styles.textInput}
                            onChangeText={text => this.changeText(text)}
                            placeholder={placeholder}
                        />
                    </View>
                );
            case "textArea":
                return (
                    <View>
                        <Text style={styles.textAreaTitle}>{name}</Text>
                        <TextArea
                            maxLength={5000}
                            value={value}
                            height={pTd(180)}
                            changeText={this.changeText.bind(this)}
                        />

                        { tipMsg && <TipText tipText={tipMsg} /> }
                    </View>
                );
        }
    }
    save() {
        let { textInfo } = this.state;
        let saveCallBack = this.props.navigation.getParam("saveCallBack");
        //出发回调
        saveCallBack(textInfo.value, textInfo.key);
        this.props.navigation.goBack();
    }
    render() {
        let { textInfo, tipMsg  } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <CommonHead
                    title={textInfo.title || "淘职馆"}
                    goBack={this.props.navigation.goBack}
                    save={this.save.bind(this)}
                />
                {/* 给ScrollView是因为有时文本框下面的文字特别多 */}
                <ScrollView
                    style={styles.textWrap}
                    showsVerticalScrollIndicator={false}
                >
                    {this.returnHtmlByKey(textInfo, tipMsg)}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textWrap: {
        paddingLeft: pTd(30),
        paddingRight: pTd(30)
    },
    textInput: {
        borderBottomColor: "#d8d8d8",
        borderBottomWidth: pTd(1),
        height:pTd(100)
    },

    textAreaTitle: {
        fontSize: pTd(50),
        color: "#333",
        fontWeight: "600",
        marginBottom: pTd(20),
        marginTop: pTd(40)
    },
});
