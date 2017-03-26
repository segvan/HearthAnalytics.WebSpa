import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Deck 1',
        stats: '10'
      }, {
        color: pieColor,
        description: 'Deck 2',
        stats: '20'
      }, {
        color: pieColor,
        description: 'Deck 3',
        stats: '12'
      }, {
        color: pieColor,
        description: 'Deck 4',
        stats: '5'
      }
    ];
  }
}
