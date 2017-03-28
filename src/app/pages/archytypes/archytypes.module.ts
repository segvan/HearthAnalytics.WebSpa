import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { NgaModule } from '../../theme/nga.module';
import { routing }       from './archytypes.routing';
import { ArchytypesComponent } from './archytypes.component';
import { MetaArchytypesComponent } from './metaArchytypes/metaArchytypes.component';
import { ArchiveArchytypesComponent } from './archiveArchytypes/archiveArchytypes.component';
import { ArchytypesService } from '../../services';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule
  ],
  declarations: [
    ArchytypesComponent,
    MetaArchytypesComponent,
    ArchiveArchytypesComponent
  ],
  providers: [
    ArchytypesService
  ]
})
export class ArchytypesModule {
}