
import { StyleSheet } from "react-native"
import pTd from "../../../tools/tool"


export default StyleSheet.create({
    spaceBetween:{
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center"
    },
    borderBottomStyle:{
        borderBottomColor:"#D8D8D8",
        borderBottomWidth:pTd(1)
    },
    leftIco:{
        width:pTd(16), height:pTd(24)
    },
    leftIcoDis:{
        width: pTd(12), marginLeft: pTd(12), height: pTd(19)
    },
    itemStyle: {
        minHeight: pTd(110),
        paddingHorizontal: pTd(30),
       
    },
    DetailItemStyle:{
        minHeight: pTd(110),
         paddingHorizontal: pTd(30),
        display:"flex",
    },
    detailValStyle:{
        fontSize: pTd(32),
        color: "#000",
        textAlign: "right",
        flex:4
    },
    detailNameStyle:{
        fontSize: pTd(26),
        color: "#000"
    },
    nameStyle: {
        fontSize: pTd(26),
        color: "#000"
    },
    valStyle: {
        fontSize: pTd(32),
        color: "#000",
        textAlign: "right",
        maxWidth:pTd(450),
    },
    textAreaStyle:{
        width:pTd(400),
        fontSize: pTd(32),
        color: "#000",textAlign:"right"
    },
    infoStyle: {
        marginLeft: pTd(30),
        paddingVertical:pTd(32),
        alignItems:"flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
        display:"flex"
    },
    infoNameStyle: {
        fontSize: pTd(32),
        color: "#959595",
        marginRight: pTd(10),
    },
    infoValStyle: {
        fontSize: pTd(32),
        color: "#000",
        lineHeight: pTd(48),
        flex:7
    },
    placeholderStyle: {
        fontSize: pTd(32),
        color: "#868686"
    }
});