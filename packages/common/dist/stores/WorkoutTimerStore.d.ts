import dayjs from 'dayjs';
export declare class WorkoutTimerStore {
    startTime: dayjs.Dayjs;
    isRunning: boolean;
    seconds: number;
    startTimer(): void;
    measure(): void;
    endTimer(): void;
    readonly display: string;
    readonly percent: string;
}
