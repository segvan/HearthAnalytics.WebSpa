import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { MatchesComponent } from './matches.component';
import { routing } from './matches.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    MatchesComponent
  ]
})
export class MatchesModule {}