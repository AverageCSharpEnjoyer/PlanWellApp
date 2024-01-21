import { TimeRange } from "./timeRange";


export function calculatePosition (date: Date, timeRange: TimeRange, year: string) {
    const [startDate, endDate] = calculateDateRanges(timeRange, year);
    const milestoneDate = new Date(date);

    const totalMilliseconds = endDate.getTime() - startDate.getTime();
    const milestoneMilliseconds = milestoneDate.getTime() - startDate.getTime();

    return (milestoneMilliseconds / totalMilliseconds) * 100;
};

export function calculateDateRanges(timeRange: TimeRange, year: string): [Date, Date] {
    switch (timeRange) {
        case TimeRange.FY:
            return [new Date(`${year}-01-01`), new Date(`${year}-12-31`)];
        case TimeRange.H1:
            return [new Date(`${year}-01-01`), new Date(`${year}-06-30`)];
        case TimeRange.H2:
            return [new Date(`${year}-07-01`), new Date(`${year}-12-31`)];
        case TimeRange.Q1:
            return [new Date(`${year}-01-01`), new Date(`${year}-03-31`)];
        case TimeRange.Q2:
            return [new Date(`${year}-04-01`), new Date(`${year}-06-30`)];
        case TimeRange.Q3:
            return [new Date(`${year}-07-01`), new Date(`${year}-09-30`)];
        case TimeRange.Q4:
            return [new Date(`${year}-10-01`), new Date(`${year}-12-31`)];
    }
}


