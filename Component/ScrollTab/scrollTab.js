import React from "react"
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import { pTd } from "../../tools/tool"

const dimen = Dimensions.get('window');
const deviceWidth = dimen.width;

/**
 * tab组件头部
 * props    data    tab列表
 * props    style   样式
 * props    index   默认选中的序号
 * props    onChange    选中
 */
export default class TabBar extends React.Component {

    static defaultProps = {
        data: [], //data:[{value:"1",label:"tab_1"}]
        defaultIndex: -1,
        index: -1,
        onChange: () => { },
    }

    scroll = null;
    laout_list = []
    scrollW = 0;
    shouldUpdate = true;

    constructor(props) {
        super(props);
        this.state = {
            index: this.props.defaultIndex,//当前选中tab的value值
        }
        this.scroll = null;
        this.laout_list = []
        this.scrollW = 0;
    }
    componentWillReceiveProps(nextProps) {
        // if (nextProps.index != this.props.index) {
        //     this.setState({ index: nextProps.index })
        //     setTimeout(() => {
        //         this.setIndex(nextProps.index, false);
        //     }, 200);
        // }
        this.setState({
            index: nextProps.defaultIndex,
        })
        if (nextProps.data != this.props.data) {
            this.setState({ data: nextProps.data })
        }
    }
    // shouldComponentUpdate() {
    //     if (!this.shouldUpdate) return false;
    //     return !(this.shouldUpdate = false);
    // }
    //当加载或者布局改变的时候被调用
    setLaout(layout, index) {
        //初始化tabList对应的tab,用于x方向滚动条定位
        this.laout_list[index] = layout;
        this.scrollW += layout.width;
    }

    //切换选中tab (bl：是否点击tab切换)
    setIndex(index, bl = true) {
        this.setState({ index })
        if (!this.scroll) return;
        let layout = this.laout_list["tab_"+index];
        let rx = deviceWidth / 2;
        let sx = layout.x - rx + layout.width / 2;
        if (sx < 0) sx = 0;
        sx < this.scrollW - deviceWidth && this.scroll.scrollTo({ x: sx, animated: bl });
        sx >= this.scrollW - deviceWidth && this.scroll.scrollToEnd({ animated: bl });
        this.props.onChange && this.props.onChange(index);
        this.shouldUpdate = true;
    }

    render() {

        return <View style={[tabBarStyle.tab, this.props.style]}>
            <ScrollView ref={e => this.scroll = e}
                        horizontal directionalLockEnabled
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment="center">
                {this.props.data.map( item =>
                    <TouchableOpacity onPress={() => this.setIndex(item.value)}//切换选中tab
                                      onLayout={e => this.setLaout(e.nativeEvent.layout, "tab_"+item.value)}//当加载或者布局改变的时候被调用
                                      key={item.value}
                                      style={tabBarStyle.itemBtn}>
                        <Text style={[tabBarStyle.item, this.state.index === item.value ? tabBarStyle.active : null]} > {item.label}</Text>
                        <View style={[tabBarStyle.line, this.state.index === item.value ? tabBarStyle.activeLine : null]}></View>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    }
}
const tabBarStyle = StyleSheet.create({
    tab: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: '#efefef',
        borderBottomWidth: pTd(1),
        height: 40
    },
    itemBtn: {
        paddingHorizontal: 12,
        paddingTop: 2,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        fontSize: pTd(28),
        color: "#858385",
    },
    active: { //选中tab文字
        color: "#000",
        fontSize:pTd(36),
        fontWeight:"bold",
    },
    line: {
        width: 20,
        height: 2,
        backgroundColor: "#fbfafc",
        marginTop: 5,
        marginBottom: 2,
    },
    activeLine: { //选中tab滚动条
        backgroundColor: "#000"
    },
    sortimg: {
        width: 55,
        height: 40,
    }
});