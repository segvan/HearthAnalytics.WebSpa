import { Routes, RouterModule }  from '@angular/router';
import { MatchesComponent } from './matches.component';

const routes: Routes = [
  {
    path: '',
    component: MatchesComponent
  }
];

export const routing = RouterModule.forChild(routes);