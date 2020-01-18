import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps<{
    year?: string;
    month?: string;
    day?: string;
}> {
}
export declare const CurrentWorkout: React.FC<Props>;
export {};
