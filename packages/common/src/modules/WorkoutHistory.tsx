import { observer } from "mobx-react-lite";
import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";
import { CurrentExercise } from "../stores/WorkoutStore";
import { FAB } from "../ui/FAB";
import { HistoryCard } from "../ui/HistoryCard";

interface Props extends RouteComponentProps {}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  cardContainer: {
    padding: 10,
    flex: 1
  },
  container: {
    flex: 1
  }
});

export const WorkoutHistory: React.FC<Props> = observer(({ history }) => {
  const rootStore = React.useContext(RootStoreContext);

  const rows: Array<Array<{
    date: string;
    exercises: CurrentExercise[];
  }>> = [];

  Object.entries(rootStore.workoutStore.history).forEach(
    ([date, exercises], i) => {
      // const hc = <View key={dt} style={styles.cardContainer}>
      //     <HistoryCard key={dt} header={dt} currentExercises={v} />
      // </View>

      if (i % 3 === 0) {
        rows.push([{ date, exercises }]);
      } else {
        rows[rows.length - 1].push({ date, exercises });
      }
    }
  );
  console.log(rows);

  return (
    <View style={styles.container}>
      <Text>Workout History Page</Text>

      <FlatList
        renderItem={({ item }) => (
          <View style={styles.row}>
            {item.map(({ date, exercises }) => (
              <View key={date} style={styles.cardContainer}>
                <HistoryCard
                  onPress={() => {
                    const parts = date.split("-");
                    history.push(
                      `/workout/${parts[0]}/${parts[1]}/${parts[2]}`
                    );
                  }}
                  header={date}
                  currentExercises={exercises}
                />
              </View>
            ))}
            {item.length < 3 ? <View style={styles.cardContainer} /> : null}
            {item.length < 2 ? <View style={styles.cardContainer} /> : null}
          </View>
        )}
        data={rows}
        keyExtractor={item => item.reduce((pv, cv) => pv + " " + cv.date, "")}
      />
      {/* 
        {rows.map( 
            (r,i) => <View style={styles.row} key={i}>
                {r}
                {r.length < 3 ? <View style={styles.cardContainer}/> : null }
                {r.length < 2 ? <View style={styles.cardContainer}/> : null }
            </View> 
        )} */}

      <FAB
        onPress={() => {
          if (!rootStore.workoutStore.hasCurrentWorkout) {
            const {
              currentBarbellRow,
              currentBenchPress,
              currentDeadlift,
              currentSquat,
              currentOverheadPress
            } = rootStore.workoutStore;
            const emptySets = ["", "", "", "", ""];

            if (rootStore.workoutStore.lastWorkoutType === "b") {
              rootStore.workoutStore.currentExercises.push(
                {
                  exercise: "Squat",
                  numSets: 3,
                  reps: 5,
                  weight: currentSquat,
                  sets: [...emptySets]
                },
                {
                  exercise: "Bench Press",
                  numSets: 5,
                  reps: 5,
                  weight: currentBenchPress,
                  sets: [...emptySets]
                },
                {
                  exercise: "Deadlift",
                  numSets: 1,
                  reps: 5,
                  weight: currentDeadlift,
                  sets: ["", "X", "X", "X", "X"]
                }
              );

              rootStore.workoutStore.currentBenchPress += 5;
              rootStore.workoutStore.currentDeadlift += 5;
              rootStore.workoutStore.currentSquat += 5;
            } else {
              rootStore.workoutStore.currentExercises.push(
                {
                  exercise: "Squat",
                  numSets: 3,
                  reps: 5,
                  weight: currentSquat,
                  sets: [...emptySets]
                },
                {
                  exercise: "Overhead Press",
                  numSets: 5,
                  reps: 5,
                  weight: currentOverheadPress,
                  sets: [...emptySets]
                },
                {
                  exercise: "Barbell Row",
                  numSets: 1,
                  reps: 5,
                  weight: currentBarbellRow,
                  sets: [...emptySets]
                }
              );

              rootStore.workoutStore.currentOverheadPress += 5;
              rootStore.workoutStore.currentBarbellRow += 5;
              rootStore.workoutStore.currentSquat += 5;
            }

            rootStore.workoutStore.lastWorkoutType =
              rootStore.workoutStore.lastWorkoutType === "a" ? "b" : "a";
          }

          history.push("/current-workout");
        }}
      />
    </View>
  );
});
