export const getExcludedTime = (includeTimeRange) => {
    const excludeTimes = [];
    for (let hour = 0; hour < 24; hour++) {
        if (hour < includeTimeRange[0] || hour > includeTimeRange[1]) {
            excludeTimes.push(hour);
        }
    }

    return excludeTimes;
};
