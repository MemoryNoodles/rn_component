import React, { Component } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import BlankPage from "../../CommonPages/BlankPage/BlankPage";
import pTd from "../../utils/unit"

export default class CommonFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: props.listData || [],
            method: props.method || "GET",
            loadingRefreshing: false,
            extraParams:props.extraParams || {},
            pageNo: 1,
            totalPages: 10,
            showFoot: 0 // 加载的页脚
        };
    }
    componentDidMount() {
        this._requestFirstPage();
    }

    componentWillUnmount() {}
    /**
     * 首页数据
     */
    _requestFirstPage() {
        const { pageNo, method } = this.state;
        let params = {
            pageNo,
            pageSize: 10
        };
        console.log(21212)
        this.getData(params, method, res => {
            console.log(res, "res")
            this.setState({
                totalPages: res.datas.page.totalPage, //待确认
                listData: res.datas.page.entities,
                loadingRefreshing: false
            });
        });
    }
    /**
     * next page
     *
     */
    _requestNextPage() {
        const { pageNo, method, listData } = this.state;
        let params = {
            pageNo,
            pageSize: 10
        };
        
        this.getData(params, method, res => {
              
            this.setState({
                totalPages: res.datas.page.totalPage, //待确认
 
                pageNo: res.datas.page.pageNo, //待确认
                listData: listData.concat(res.datas.page.entities)
            });
        });
    }
    /**
     * 获取数据
     */
    getData(params, method, successCallback) {
        const { requestFunc } = this.props;
        const { extraParams } = this.state;
       
        requestFunc({...params, ...extraParams}, method).then(res => {
            
            successCallback(res);
        });
    }
    /**
     * list 头部
     */
    _renderHeader() {
        const { renderHeader } = this.props;
        if (this.isEmpty(renderHeader)) {
            return null;
        }
        return renderHeader();
    }
    /**
     * list item
     */
    _renderCommonListItemView(item, index) {
        if (this.props.renderItem) {
            return this.props.renderItem(item, index);
        }
        return <Text>{index}</Text>;
    }
    /**
     * item 分割线
     */
    _renderItemDivider() {
        const { isItemSeparatorShow } = this.props;
        if (!isItemSeparatorShow) return null;
        return <Divider bgColor="#efefef" height={10} />;
    }
    /**
     * 上拉页脚显示
     */
    _renderFooter() {
        const { showFoot } = this.state;
        switch (showFoot) {
            case 1:
                return (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginVertical: pTd(20)
                        }}
                    >
                        <Text style={{ fontSize: pTd(24), color: "#666" }}>
                            ---我已经到底了哦---
                        </Text>
                    </View>
                );
            case 2:
                return (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginVertical: pTd(20)
                        }}
                    >
                        <ActivityIndicator />
                        <Text style={{ fontSize: pTd(24), color: "#666" }}>
                            正在加载更多数据...
                        </Text>
                    </View>
                );
            case 0:
                return null
        }
    }
    /**
     * 上拉刷新
     */
    _onEndReached() {
        let { showFoot, totalPages, pageNo } = this.state;
        if (pageNo >= totalPages) {
            this.setState({ showFoot: 1 });
            return;
        } else {
            this.setState(
                prevState => ({
                    pageNo: prevState.pageNo + 1,
                    showFoot: 2
                }),
                () => {
                    this._requestNextPage();
                }
            );
        }
    }
    /**
     * 下拉
     */
    _onRefreshToRequestFirstPageData() {
        this.setState(
          {
            loadingRefreshing: true
          },
          () => {
            this._requestFirstPage()
          }
        )
      }
    _renderFlatList() {
        const { listData, loadingRefreshing } = this.state;
     
        return (
            <FlatList
                data={listData}
                keyExtractor={(item, index) => item.id || `${index}key`}
                ListHeaderComponent={() => this._renderHeader()}
                renderItem={({ item, index }) =>
                    this._renderCommonListItemView(item, index)
                }
                onEndReachedThreshold={0.2} //距离底部多少时触发
                ItemSeparatorComponent={() => this._renderItemDivider()}
                ListFooterComponent={this._renderFooter.bind(this)}
                //上拉
                onEndReached={this._onEndReached.bind(this)} //
                //下拉 内置下拉动画， 需要其他的要手动配置
                refreshing={loadingRefreshing}
                onRefresh={this._onRefreshToRequestFirstPageData.bind(this)}
            />
        );
    }
    render() {
        const { containStyle } = this.props;
        const { listData } = this.state;
        return (
            <View style={[{ flex: 1, position: "relative" }, containStyle]}>
                {this.isEmpty(listData) ? (
                    <BlankPage />
                ) : (
                    this._renderFlatList()
                )}
            </View>
        );
    }
}
