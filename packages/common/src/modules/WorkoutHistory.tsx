
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Button, Text, View } from "react-native";
import { RouteComponentProps } from 'react-router';
import { RootStoreContext } from '../stores/RootStore';

interface Props extends RouteComponentProps {}

export const WorkoutHistory: React.FC<Props> = observer(({history}) => {
    const rootStore = React.useContext(RootStoreContext)
    
    return (
        <View>
            <Text>Workout History Page</Text>
            <Button title="Create Workout" onPress={() => {
                rootStore.workoutStore.currentExercises.push({
                    exercise: 'Squat',
                    numSets: 3,
                    reps: 5,
                    weight: 260,
                    sets: ["","","","",""]
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
            }} />
        </View>
    );
})