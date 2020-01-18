import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    onXPress: ()=>void;
    percent: string;
    currentTime: string;
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 50,
        width: '100%',
        backgroundColor: '#486550',
    },
    row: {
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    x: {
        color: '#B2A1A1',
        fontSize: 30,
    },
    timeText: {
        color: 'white',
        fontSize: 18
    },
    line: { 
        height: 3,
        backgroundColor: '#655252'
    }
})

export const WorkoutTimer: React.FC<Props> = ({onXPress, currentTime, percent}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.line, {width: percent}]}></View>
            <View style={styles.row}>
                <Text style={styles.timeText}>{currentTime}</Text>
                <TouchableOpacity onPress={()=>onXPress()}>
                    <Text style={styles.x}>x</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}