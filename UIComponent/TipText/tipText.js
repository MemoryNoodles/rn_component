import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { pTd } from "../../../utils/util";

export default class TipText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collpaseStatus: false
        };
    }
    changeCollpaseState(){
        this.setState(prevState=>({
            collpaseStatus : !prevState.collpaseStatus
        }))
    }
    render() {
        let { collpaseStatus } = this.state;
        let { tipText } = this.props;
        return (
            <View style={{ marginTop: pTd(29) }}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={styles.tipTextTitle}>示例</Text>
                    <TouchableOpacity onPress={()=>this.changeCollpaseState()}>
                        <Text style={styles.collpaseStyle}>{collpaseStatus ? "收起" : "展开"}</Text>
                    </TouchableOpacity>
                </View>
                {
                    collpaseStatus ? <Text style={styles.tipText}>{tipText}</Text> : null
                }
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tipTextTitle: {
        fontSize: pTd(28),
        color: "#666",
        fontWeight: "600",
        marginBottom: pTd(40)
    },
    collpaseStyle: {
        color: "#3381ED",
        fontSize: pTd(28)
    },
    tipText: {
        fontSize: pTd(28),
        color: "#999",
        lineHeight: pTd(40),
        backgroundColor: "#FAFAFA",
        padding: pTd(28)
    }
});
