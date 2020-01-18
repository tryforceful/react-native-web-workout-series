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
var RootStore_1 = require("../stores/RootStore");
exports.WorkoutHistory = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history;
    var rootStore = React.useContext(RootStore_1.RootStoreContext);
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Text, null, "Workout History Page"),
        React.createElement(react_native_1.Button, { title: "Create Workout", onPress: function () {
                rootStore.workoutStore.currentExercises.push({
                    exercise: 'Squat',
                    numSets: 3,
                    reps: 5,
                    weight: 260,
                    sets: ["", "", "", "", ""]
                }, {
                    exercise: 'Bench Press',
                    numSets: 5,
                    reps: 5,
                    weight: 200,
                    sets: ["", "", "", "", ""]
                }, {
                    exercise: 'Deadlift',
                    numSets: 1,
                    reps: 5,
                    weight: 260,
                    sets: ["", "X", "X", "X", "X"]
                });
                history.push('/current-workout');
            } })));
});
