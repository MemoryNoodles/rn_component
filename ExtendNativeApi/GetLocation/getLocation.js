import Geolocation from "@react-native-community/geolocation";
import config from "../../constants/config";   


function getGDCoordsUrl(locationInfo){
    return `https://restapi.amap.com/v3/assistant/coordinate/convert?locations=${
        locationInfo.coords.longitude
    },${
        locationInfo.coords.latitude
    }&coordsys=gps&output=json&key=${config.GaoDeKey.key}`
}

function getAddressUrl(newVar){
  return `http://restapi.amap.com/v3/geocode/regeo?key=${config.GaoDeKey.key}&location=${newVar[0]},${newVar[1]}&radius=1000&extensions=all&batch=false&roadlevel=0`
}

React.Component.prototype.getLocation = function() {

    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            locationInfo => {
                //转换定位
                fetch(getGDCoordsUrl(locationInfo), { method: "GET" })
                    .then(response => response.json())
                    .then(jsonDa => {
                        let newVar = jsonDa.locations.split(",");
                        //访问网络开始
                        fetch(getAddressUrl(newVar),{
                                method: "POST",
                                headers: {
                                    "Content-Type":"application/x-www-form-urlencoded"
                                },
                                body: ``
                            }
                        )
                            .then(response => response.json())
                            .then(jsonData => {
                                try {
                       
                                    //所有的结果展示：真机上是以字符串暂时，模拟器上是数组
                                    resolve({
                                        city:
                                            jsonData.regeocode.addressComponent
                                                .city,
                                        province:
                                            jsonData.regeocode.addressComponent
                                                .province,
                                        address:
                                            jsonData.regeocode.formatted_address
                                    })
                                } catch (e) {}
                            })
                            .catch(error => {
                     
                                console.error(error);
                            });
                    })
                    .catch(error => {
                       
                        console.log(error, "error");
                        //reject(error);
                    });
            },
            error => {console.log("Error, 6666", JSON.stringify(error)) },
           // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }   这个是最大时间，最好注释掉网络不好的时候很容易崩了
        );
    });
}
