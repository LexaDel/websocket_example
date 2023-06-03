import { worktimeReducerPath } from "./worktime.reducer";


const selector = (state) => state[worktimeReducerPath];

export const getStatus = (state) => selector(state)?.status;
export const getIntervals = (state) => selector(state)?.intervals;
