export class MinutePerMileRun {

    runId: String;
    dateOfRun: String;
    averagePace: number;

    constructor(runId: String, dateOfRun: String, averagePace: number) {
        this.runId = runId;
        this.dateOfRun = dateOfRun;
        this.averagePace = averagePace;
    }

}
