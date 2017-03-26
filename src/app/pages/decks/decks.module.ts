import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './decks.routing';
import { DecksComponent } from './decks.component';
import { MetaDecksComponent } from './components/metaDecks/metaDecks.component';
import { ArchiveDecksComponent } from './components/archiveDecks/archiveDecks.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    DecksComponent,
    ArchiveDecksComponent,
    MetaDecksComponent
  ],
  providers: []
})
export class DecksModule {
}
