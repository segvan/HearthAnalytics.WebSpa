import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './archytypes.routing';
import { ArchytypesComponent } from './archytypes.component';
import { MetaArchytypesComponent } from './components/metaArchytypes/metaArchytypes.component';
import { ArchiveArchytypesComponent } from './components/archiveArchytypes/archiveArchytypes.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    ArchytypesComponent,
    MetaArchytypesComponent,
    ArchiveArchytypesComponent
  ],
  providers: []
})
export class ArchytypesModule {
}