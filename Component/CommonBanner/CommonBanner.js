import React from "react"
import { View, Image,TouchableWithoutFeedback, StyleSheet,Linking } from "react-native"
import Swiper from "react-native-swiper"
import { pTd } from "../../tools/tool";



export default class CommonBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    //点击轮播图片
    onClickImg=(item,index)=>{

        if(item.link){
            let re = /http/g;
            if(!item.link ||  !re.test(item.link)){
                return 
            }
            Linking.openURL(item.link).catch(
                err =>
                    console.error(
                        "An error occurred  2222",
                        err
                    )
            );
        } else {
            const {onPress}=this.props
            onPress&&onPress(item,index)
        }
    }

    render() {
        const {
            bannerListData=[
                {url:'',source:require('../../assets/img/store/bg1.png')},
            ],
            autoplay=true,//自动切换
            autoplayTimeout=3,//每隔3秒切换
            showsButtons=false,//为false时不显示左右箭头
            containerStyle={},
            paginationStyle={bottom: pTd(21)},//小圆点的位置
            swiperDotStyle={},//未选中的圆点样式
            swiperActiveDotStyle={},//选中的圆点样式
            swiperImgStyle={},
        } = this.props

        return (
            <View style={[styles.swiperWrap]} >
                <Swiper
                     height={pTd(260)}
                     key={bannerListData.length}
                    horizontal={true}
                    autoplay={true} //自动切换
                    loop={true}
                    autoplayTimeout={autoplayTimeout} //每隔3秒切换
                    showsButtons={showsButtons} //为false时不显示左右箭头
                    paginationStyle={paginationStyle} //小圆点的位置
                    dot={<View style={[styles.swiperDot,swiperDotStyle]}/>} //未选中的圆点样式
                    activeDot={<View style={[styles.swiperActiveDot,swiperActiveDotStyle]}/>} //选中的圆点样式
                >
                    {
                        bannerListData.length>0&&bannerListData.map((item,index)=>{
                            return <TouchableWithoutFeedback onPress={()=>this.onClickImg(item,index)}>
                                <Image
                                    source={item.url?{uri:item.url}:item.source?item.source:''}
                                    style={[styles.swiperImg,swiperImgStyle]}
                                />
                            </TouchableWithoutFeedback>
                        })
                    }
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /*banner轮播*/
    swiperWrap: {
        width:'100%',
        
        height:pTd(260),
        overflow:'hidden',
    },
    swiperDot:{
        backgroundColor: 'rgba(255,255,255,.3)',
        width: pTd(10),
        height: pTd(8),
        borderRadius: pTd(4),
        marginLeft: pTd(10),
        marginRight: pTd(10),
    },
    swiperActiveDot:{
        backgroundColor: '#fff',
        width: pTd(32),
        height: pTd(8),
        borderRadius: pTd(4),
        marginLeft: pTd(10),
        marginRight: pTd(10),
    },
    swiperImg: {       
        height: pTd(260),
        backgroundColor: 'white',
        alignItems: 'center',
    },
})