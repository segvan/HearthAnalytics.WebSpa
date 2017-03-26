import { Routes, RouterModule }  from '@angular/router';

import { ArchytypesComponent } from './archytypes.component';
import { MetaArchytypesComponent } from './components/metaArchytypes/metaArchytypes.component';
import { ArchiveArchytypesComponent } from './components/archiveArchytypes/archiveArchytypes.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ArchytypesComponent,
    children: [
      { path: 'metaArchytypes', component: MetaArchytypesComponent },
      { path: 'archiveArchytypes', component: ArchiveArchytypesComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
