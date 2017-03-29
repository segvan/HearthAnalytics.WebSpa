import {Component, OnInit} from '@angular/core';
import {Archytype} from '../../../entities';
import {ClassType} from '../../../entities';
import {ArchytypesService} from '../../../services';

@Component({
  selector: 'metaArchytypes',
 templateUrl: './metaArchytypes.html'
})
export class MetaArchytypesComponent {

  newRow: Archytype;

  private archytypes: Archytype[];

  constructor(private archytypesService: ArchytypesService) {}

  getArchytypes(): void {
    this.archytypesService.getMetaArchytypes().then(archytypes => this.archytypes = archytypes);
  }

  ngOnInit(): void {
    this.getArchytypes();
  }

  onAdd(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.newRow = new Archytype();
    this.newRow.class = new ClassType();
    this.newRow.class.classTypeEnum = 1;
    this.newRow.class.name = "Druid";
  }

  onSave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.archytypes.unshift(this.newRow);
    this.newRow = null;
  }

  onCancel(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.newRow = null;
  }
}
