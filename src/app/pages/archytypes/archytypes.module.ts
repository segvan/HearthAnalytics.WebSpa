import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';
import { routing }       from './archytypes.routing';
import { ArchytypesComponent } from './archytypes.component';
import { MetaArchytypesComponent } from './metaArchytypes/metaArchytypes.component';
import { ArchiveArchytypesComponent } from './archiveArchytypes/archiveArchytypes.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgaModule
  ],
  declarations: [
    ArchytypesComponent,
    MetaArchytypesComponent,
    ArchiveArchytypesComponent
  ]
})
export class ArchytypesModule {
}