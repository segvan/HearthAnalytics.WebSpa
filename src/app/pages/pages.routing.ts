import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'matches', loadChildren: 'app/pages/matches/matches.module#MatchesModule' },
      { path: 'decks', loadChildren: 'app/pages/decks/decks.module#DecksModule' },
      { path: 'archytypes', loadChildren: 'app/pages/archytypes/archytypes.module#ArchytypesModule' },
      { path: 'statistics', loadChildren: 'app/pages/statistics/statistics.module#StatisticsModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
