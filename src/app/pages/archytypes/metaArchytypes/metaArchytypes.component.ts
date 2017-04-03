import { Component, OnInit } from '@angular/core';
import { Archytype } from '../../../entities';
import { ClassType } from '../../../entities';
import { ArchytypesService } from '../../../services';
import { ClassesService } from '../../../services';

@Component({
  selector: 'metaArchytypes',
 templateUrl: './metaArchytypes.html'
})
export class MetaArchytypesComponent {

  newRow: Archytype;

  private archytypes: Archytype[];
  private classes: ClassType[];

  constructor(private archytypesService: ArchytypesService, private classesService: ClassesService)
  {
  }

  getArchytypes(): void {
    this.archytypesService.getMetaArchytypes().then(archytypes => this.archytypes = archytypes);
  }

  getClasses(): void {
    this.classesService.getClassTypes().then(classes => this.classes = classes);
  }

  ngOnInit(): void {
    this.getArchytypes();
    this.getClasses();
  }

  addNew() {
    this.newRow = new Archytype();
  }

  saveNew() {
    this.archytypes.unshift(this.newRow);
    this.newRow = null;
  }

  cancelNew() {
    this.newRow = null;
  }

  remove(item: Archytype) {
    if (confirm('Delete ' + item.name + '?')) {
      let index: number = this.findIndexByArchId(item.id);
      if (index >= 0){
        this.archytypes.splice(index, 1);
      }
    }
  }

  archive(item: Archytype) {
    if (confirm('Archive ' + item.name + '?')) {
      let index: number = this.findIndexByArchId(item.id);
      if (index >= 0){
        this.archytypes.splice(index, 1);
      }
    }
  }

  private findIndexByArchId(id: number): number{
    let result = -1;
    for (let i: number = 0; i < this.archytypes.length; i++){
      if (this.archytypes[i].id === id){
        result = i;
        break;
      }
    }

    return result;
  }
}
