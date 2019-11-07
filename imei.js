/**
 * @providesModule react-native-imei
 */

var ReactNative = require('react-native');

if (ReactNative.Platform.OS === "android") {
    module.exports = {
        getImei: function () {
            return ReactNative.NativeModules.IMEI.getImei();
        },
        getImsi: function () {
            return ReactNative.NativeModules.IMEI.getImsi();
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
