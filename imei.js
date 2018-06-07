/**
 * @providesModule react-native-imei
 */

var ReactNative = require('react-native');

if (ReactNative.Platform.OS === "android") {
    module.exports = {
        getImei: function () {
            return ReactNative.NativeModules.IMEI.imei;
        },
        getImsi: function () {
            return ReactNative.NativeModules.IMEI.imsi;
        }
    };
} else {
    module.exports = {
        getImei: function () {
            throw new Error("Not implemented");
        },
        getImsi: function () {
            throw new Error("Not implemented");
        }
    }
}
