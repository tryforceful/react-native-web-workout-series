"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'column',
        padding: 10,
        marginBottom: 10
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    topRowText: {
        fontSize: 16
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    circle: {
        borderRadius: 25,
        backgroundColor: '#3f3ff3',
        height: 50,
        width: 50,
    },
    circleText: {
        color: '#fff',
        margin: "auto",
        fontSize: 16
    },
    gray: {
        backgroundColor: '#aaa'
    }
});
exports.WorkoutCard = mobx_react_lite_1.observer(function (_a) {
    var exercise = _a.exercise, repsAndWeight = _a.repsAndWeight, sets = _a.sets, onSetPress = _a.onSetPress;
    return (React.createElement(react_native_1.View, { style: styles.card },
        React.createElement(react_native_1.View, { style: styles.topRow },
            React.createElement(react_native_1.Text, { style: styles.topRowText }, exercise),
            React.createElement(react_native_1.Text, { style: styles.topRowText }, repsAndWeight)),
        React.createElement(react_native_1.View, { style: styles.bottomRow }, sets.map(function (set, index) {
            if (set === 'X')
                return (React.createElement(react_native_1.View, { style: [styles.circle, styles.gray], key: set + index },
                    React.createElement(react_native_1.Text, { style: styles.circleText }, "X")));
            if (set === '')
                return (React.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: [styles.circle, styles.gray], key: set + index }));
            return (React.createElement(react_native_1.TouchableOpacity, { onPress: function () { return onSetPress(index); }, style: styles.circle, key: set + index },
                React.createElement(react_native_1.Text, { style: styles.circleText }, set)));
        }))));
});
