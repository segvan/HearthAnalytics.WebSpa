import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { StatisticsComponent } from './statistics.component';
import { routing } from './statistics.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    StatisticsComponent
  ]
})
export class StatisticsModule {}