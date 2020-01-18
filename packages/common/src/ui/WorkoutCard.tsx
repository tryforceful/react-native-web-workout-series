import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    exercise: string;
    repsAndWeight: string;
    sets: string[];
    onSetPress: (index: number) => void;
}

const styles = StyleSheet.create({
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
})

export const WorkoutCard: React.FC<Props> = observer(({ exercise, repsAndWeight, sets, onSetPress}) => {
    return  (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <Text style={styles.topRowText}>{exercise}</Text>
                <Text style={styles.topRowText}>{repsAndWeight}</Text>
            </View>
            <View style={styles.bottomRow}>
                {sets.map((set, index) => {
                    if (set === 'X')
                        return (
                            <View style={[styles.circle, styles.gray]} key={set + index}>
                                <Text style={styles.circleText}>X</Text>
                            </View>
                        )
                    
                    if (set === '')
                        return (
                            <TouchableOpacity onPress={() => onSetPress(index)}  style={[styles.circle, styles.gray]} key={set + index}></TouchableOpacity>
                        )

                    return (
                        <TouchableOpacity onPress={() => onSetPress(index)} style={styles.circle} key={set + index}>
                            <Text style={styles.circleText}>{set}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    );
})