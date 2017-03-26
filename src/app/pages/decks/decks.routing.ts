import { Routes, RouterModule }  from '@angular/router';

import { DecksComponent } from './decks.component';
import { MetaDecksComponent } from './components/metaDecks/metaDecks.component';
import { ArchiveDecksComponent } from './components/archiveDecks/archiveDecks.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: DecksComponent,
    children: [
      { path: 'metaDecks', component: MetaDecksComponent },
      { path: 'archiveDecks', component: ArchiveDecksComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
