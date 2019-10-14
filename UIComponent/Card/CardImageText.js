import React from "react";
import {
    View,
    Image,
    Text,
    TouchableWithoutFeedback
} from "react-native";

import styles from "./CardImageTextCss"


/* 
   组件ui样式
   *******   **
   *******   ***
   *******   *   *   *
*/
export function CardListImgText(props) {
    return (
        <TouchableWithoutFeedback onPress={() => props._onPress()}>
            <View style={styles.itemStyle}>{props.children}</View>
        </TouchableWithoutFeedback>
    );
}

/* 
   图片未加载时显示默认图片
*/
export class ImgLoading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgLoad: false
        };
    }
    _onload() {
        this.setState({
            imgLoad: true
        })
    }
    _onLoadStart(){
        this.setState({
            imgLoad: false
        })
    }
    render() {
        const { url, defaultImg, style } = this.props;
        let { imgLoad } = this.state;
        let index = "";
        let ext = "";
        //截取图片格式
        if (url && url !== "") {
            index = url.lastIndexOf(".");
            ext = url.substr(index + 1);
        }
        //react native支持图片类型，其他类型的支持要配置
        let itemUrl = "";
        if (ext == "png" || ext == "jpg" || ext == "jpeg") {
            itemUrl = url;
        } else {
            itemUrl = "";
        }

        return (
            /* 在外面包裹一层是因为， 没有传图片的时候两张图片会影响排版 */
            <View style={styles.imgWrap}>
                {/* 如果没有图片则显示默认图片，和下面不冲突 */}
                {itemUrl == "" ? (
                    <Image
                        resizeMode={"cover"}
                        style={[styles.imgStyle, style]}
                        source={defaultImg}
                    />
                ) :<Image
                        resizeMode={"cover"}
                        onLoad={() => this._onload()}
                        onLoadStart={()=>this._onLoadStart()}
                        style={[styles.imgStyle, style]}
                        source={{ uri: itemUrl }}
                    />}
                {/* 图片加载中时的提示图片 */}
                {
                    !imgLoad && (
                        <Image
                            resizeMode={"cover"}
                            style={[styles.defaultImg, style]}
                            source={defaultImg}
                        />
                    )
                }
            </View>
        );
    }
}

/* 
   文字
*/
export function ItemText(props) {
    const { title, des1, des2 } = props;
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemDsc} numberOfLines={1}>
                {des1}
            </Text>
            <Text style={styles.itemDsc} numberOfLines={1}>
                {des2}
            </Text>
            <View style={styles.itemInfo}>{props.children}</View>
        </View>
    );
}


