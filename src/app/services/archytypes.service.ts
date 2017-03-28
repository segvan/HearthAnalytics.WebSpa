import {Injectable} from '@angular/core';
import {Archytype} from '../entities';

@Injectable()
export class ArchytypesService {

  private archytypes: Archytype[] = [
      {
       classId: 1,
       name: "Jade Druid",
       description: "Jade midrange.",
       created: new Date(),
       modified: new Date(),
       isActive: true,
       id: 0
      },
      {
       classId: 2,
       name: "Secret hunt",
       description: "Midrange on secrets.",
       created: new Date(),
       modified: new Date(),
       isActive: true,
       id: 0
      },
      {
       classId: 3,
       name: "Tempo mage",
       description: "Agro burn mage.",
       created: new Date(),
       modified: new Date(),
       isActive: true,
       id: 0
      },
      {
       classId: 8,
       name: "Zoolock",
       description: "Agro zoo.",
       created: new Date(),
       modified: new Date(),
       isActive: true,
       id: 0
      },
      {
       classId: 9,
       name: "Pirate warrior",
       description: "Agro pirates.",
       created: new Date(),
       modified: new Date(),
       isActive: true,
       id: 0,
      }
  ];

  getMetaArchytypes(): Promise<Archytype[]> {    
    return Promise.resolve(this.archytypes);
  }
}
