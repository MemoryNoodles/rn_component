import Picker from "react-native-picker";
import MaskView from "../MaskView/MaskView"
import area from "./area";
/* 
   picker 选择器

   data：         array 可选数据 
   selectedValue: array 默认选项
   callback:      function 
   type:          string 选项的key
*/
React.Component.prototype.pickerInit = function(data, selectedValue, callback, type) {
    Picker.init({
        pickerData: data,
        selectedValue: selectedValue,
        pickerTitleText: "",
        pickerConfirmBtnText: "确定",
        pickerCancelBtnText: "取消",
        pickerConfirmBtnColor: [0, 0, 0, 1],
        pickerCancelBtnColor: [0, 0, 0, 1],
        pickerTitleColor: [255, 255, 255, 1],
        pickerToolBarBg: [233, 233, 233, 1],
        pickerBg: [255, 255, 255, 1],
        //确定
        onPickerConfirm: (pickedValue, pickedIndex) => {
            callback(type, pickedValue);
            MaskView.hide()
        },
        //取消
        onPickerCancel: data => {
            Picker.hide();
            MaskView.hide()
        },
        //选择
        onPickerSelect: data => {}
    });
    //遮罩显示
    MaskView.show(Picker.hide)
    //下拉选项显示
    Picker.show();
};

//创建可选年月日
React.Component.prototype.createYMD = function() {
    let date = [];
    for (let i = 1970; i < 2020; i++) {
        let month = [];
        for (let j = 1; j < 13; j++) {
            let day = [];
            if (j === 2) {
                for (let k = 1; k < 29; k++) {
                    day.push(k);
                }
                //Leap day for years that are divisible by 4, such as 2000, 2004
                if (i % 4 === 0) {
                    day.push(29);
                }
            } else if (j in { 1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1 }) {
                for (let k = 1; k < 32; k++) {
                    day.push(k);
                }
            } else {
                for (let k = 1; k < 31; k++) {
                    day.push(k);
                }
            }
            let _month = {};
            _month[j] = day;
            month.push(_month);
        }
        let _date = {};
        _date[i] = month;
        date.push(_date);
    }
    return date;
};
//创建可选地址
React.Component.prototype.createAreaData = function() {
    let data = [];
    let len = area.length;
    for (let i = 0; i < len; i++) {
        let city = [];
        for (let j = 0, cityLen = area[i]["city"].length; j < cityLen; j++) {
            let _city = {};
            _city[area[i]["city"][j]["name"]] = area[i]["city"][j]["area"];
            city.push(_city);
        }

        let _data = {};
        _data[area[i]["name"]] = city;
        data.push(_data);
    }
    return data;
};
