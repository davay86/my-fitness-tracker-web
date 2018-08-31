import {AllTotals} from "./all-totals";
export class StravaStats {

  public all_run_totals: AllTotals;
  public all_ride_totals: AllTotals;

  constructor(allRunTotals: AllTotals, allRideTotals: AllTotals){
    this.all_run_totals = allRunTotals;
    this.all_ride_totals = allRideTotals;
  }


}
