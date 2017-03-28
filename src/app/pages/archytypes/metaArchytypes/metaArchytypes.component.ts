import {Component, OnInit} from '@angular/core';
import {Archytype} from '../../../entities';
import {ArchytypesService} from '../../../services'

@Component({
  selector: 'metaArchytypes',
 templateUrl: './metaArchytypes.html'
})
export class MetaArchytypesComponent {

  private archytypes: Archytype[];

  constructor(private archytypesService: ArchytypesService) {}

  getArchytypes(): void {
    this.archytypesService.getMetaArchytypes().then(archytypes => this.archytypes = archytypes);
  }
  ngOnInit(): void {
    this.getArchytypes();
  }
}