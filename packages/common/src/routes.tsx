import React from "react";
import { CurrentWorkout } from './modules/CurrentWorkout';
import { WorkoutHistory } from './modules/WorkoutHistory';
import { Route, Router, Switch } from './router/index';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={WorkoutHistory}></Route>
                <Route exact path="/current-workout" component={CurrentWorkout}></Route>
            </Switch>
        </Router>
    )

   // return rootStore.routerStore.screen == "WorkoutHistory" ? <WorkoutHistory /> : <CurrentWorkout />
}