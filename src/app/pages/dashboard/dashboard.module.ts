import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { LargeButtons } from './largeButtons';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { PieChartService } from './pieChart/pieChart.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    LargeButtons,
    PieChart,
    TrafficChart,   
    Dashboard
  ],
  providers: [
    PieChartService,
    TrafficChartService,
  ]
})
export class DashboardModule {}
