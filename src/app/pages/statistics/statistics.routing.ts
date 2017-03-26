import { Routes, RouterModule }  from '@angular/router';

import { StatisticsComponent } from './statistics.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent
  }
];

export const routing = RouterModule.forChild(routes);