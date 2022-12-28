import { createAction } from "@reduxjs/toolkit";

export default function createAsyncActions(baseAction) {
    return {
        triggerAC: createAction(`TRIGGER_${baseAction}`),
        startAC: createAction(`${baseAction}_START`),
        successAC: createAction(`${baseAction}_SUCCESS`),
        failAC: createAction(`${baseAction}_FAIL`),
    }
}
