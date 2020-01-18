
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { RootStoreContext } from '../stores/RootStore';
import { WorkoutCard } from '../ui/WorkoutCard';
import { WorkoutTimer } from '../ui/WorkoutTimer';

interface Props {}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        flex: 1,
        padding: 10
    }
})

export const CurrentWorkout: React.FC<Props> = observer(() => {
    const rootStore = React.useContext(RootStoreContext);
    React.useEffect(() => {
        return () => {
            rootStore.workoutTimerStore.endTimer();
        }
    }, [])

    return (
        <View style={styles.container}>
        {rootStore.workoutStore.currentExercises.map(e => {
            return (
                <WorkoutCard 
                    onSetPress={setIndex => {
                        rootStore.workoutTimerStore.startTimer();
                        const v = e.sets[setIndex];
                        
                        let newValue: string;

                        if(v === '') {
                            newValue = ""+e.reps
                        } else if (v === '0') {
                            rootStore.workoutTimerStore.endTimer();
                            newValue = ''
                        } else {
                            newValue = `${parseInt(v) - 1}`
                        }

                        e.sets[setIndex] = newValue;
                    }}
                    key={e.exercise}
                    sets={e.sets} 
                    exercise={e.exercise}
                    repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`} />
            )
        })}
        
        {rootStore.workoutTimerStore.isRunning ? (
            <WorkoutTimer 
            percent={rootStore.workoutTimerStore.percent}
            currentTime={rootStore.workoutTimerStore.display} 
            onXPress={()=>{rootStore.workoutTimerStore.endTimer()}} />
        ) : null }
        </View>
    );
})