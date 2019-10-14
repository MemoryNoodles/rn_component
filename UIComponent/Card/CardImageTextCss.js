import { StyleSheet } from "react-native"
import { pTd } from "../../tools/tool";

 export default StyleSheet.create({
    itemStyle: {
        marginVertical:pTd(20),
        marginHorizontal:pTd(30),
        marginHorizontal: pTd(30),
        position: "relative",
        flexDirection: "row"
    },
    imgWrap:{
        marginRight: pTd(20), width: pTd(232),  height: pTd(232),  position:"relative"
    },
    imgStyle: {
        width: pTd(232),
        height: pTd(232)
    },
    itemTitle: {
        color: "#000",
        fontSize: pTd(30),
        marginBottom: pTd(8)
    },
    itemDsc: {
        color: "#000",
        fontSize: pTd(22),
        lineHeight: pTd(40)
    },
    itemInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        position: "absolute",
        bottom: pTd(5)
    },
    defaultImg:{
        position:"absolute",
        top:0, left:0,
        right:0, bottom:0,
        width: pTd(232),
        height: pTd(232)
    }
});