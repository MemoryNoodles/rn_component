import ImagePicker from "react-native-image-crop-picker"
import {
    View,
    Text,
    Animated,
    TouchableOpacity
} from "react-native";
import pTd from "../../tools/tool"

/* 
  上传图片
*/
React.Component.prototype.state.showChooseImgWay = false;
React.Component.prototype.state.choosePicTipH = new Animated.Value(0);
/* 选择上传图片方式 */
React.Component.prototype.chooseImgWay = function() {
    this.setState({
        showChooseImgWay: "true"
    });
    Animated.timing(this.state.choosePicTipH, {
        toValue: pTd(320),
        duration: 500
    }).start();
};
/* 隐藏选择 */
React.Component.prototype.hideChooseImgWay = function() {
    Animated.timing(this.state.choosePicTipH, {
        toValue: 0,
        duration: 0
    }).start(() => {
        this.setState({ showChooseImgWay: false });
    });
};
/* 使用相机 */
React.Component.prototype.openCamera = function(upLoadImgApi) {
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true
    }).then(images => {
        var formData = new FormData();
        var arr = images.path.split("/");
        var name = arr[arr.length - 1];
        var file = {
            uri: images.path,
            name: name,
            type: images.mime
        };
        formData.append("file", file);
        //使用外面传递进来的上传接口, 并把参数传递回去
        upLoadImgApi(formData);
    });
};
/* 使用相册 */
React.Component.prototype.openAlbum = function(upLoadImgApi, isMultiple=true) {
    ImagePicker.openPicker({
        multiple: isMultiple
    }).then(images => {
        var formData = new FormData();
        if(isMultiple){
            images.forEach((element, index) => {
                var arr = element.path.split("/");
                var name = arr[arr.length - 1];
                var file = {
                    uri: element.path,
                    name: name,
                    type: element.mime
                };
                formData.append("file", file);
            });
        }
        else {
            var arr = images.path.split("/");
            var name = arr[arr.length - 1];
            var file = {
                uri: images.path,
                name: name,
                type: images.mime
            };
            formData.append("file", file);
        }
       
        //使用外面传递进来的上传接口, 并把参数传递回去
        upLoadImgApi(formData);
    });
};
/* 显示上传图片方式 */
React.Component.prototype.choosePicTip = function(upLoadImgApi) {
    return [
        this.state.showChooseImgWay ? (
            <TouchableOpacity
                onPress={() => this.hideChooseImgWay()}
                style={{
                    position: "absolute",
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)"
                }}
            />
        ) : null,
        <Animated.View
            style={{
                height: choosePicTipH,
                bottom: 0,
                width: "100%",
                zIndex: 2,
                backgroundColor: "#ececec",
                position: "absolute"
            }}
        >
            <View
                style={{
                    backgroundColor: "#ececec"
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={{
                        height: pTd(100),
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottomColor: "#d8d8d8",
                        borderBottomWidth: pTd(1)
                    }}
                    onPress={() => this.openCamera(upLoadImgApi)}
                >
                    <Text>拍照</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: pTd(100),
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: pTd(20)
                    }}
                    onPress={() => this.openAlbum(upLoadImgApi)}
                >
                    <Text>从手机相册选择</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: pTd(100),
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    onPress={() => this.hideChooseImgWay()}
                >
                    <Text>取消</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    ];

    //
};
