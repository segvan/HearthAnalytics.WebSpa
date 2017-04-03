import { Injectable } from '@angular/core';
import { ClassType } from '../entities';

@Injectable()
export class ClassesService {

  private classes: ClassType[] = [
    {
      name: 'Druid',
      classTypeEnum: 1,
      id: 1
    },
    {
      name: 'Hunter',
      classTypeEnum: 2,
      id: 2
    },
    {
      name: 'Mage',
      classTypeEnum: 3,
      id: 3
    },
    {
      name: 'Paladin',
      classTypeEnum: 4,
      id: 4
    },
    {
      name: 'Priest',
      classTypeEnum: 5,
      id: 5
    },
    {
      name: 'Rogue',
      classTypeEnum: 6,
      id: 6
    },
    {
      name: 'Shaman',
      classTypeEnum: 7,
      id: 7
    },
    {
      name: 'Warlock',
      classTypeEnum: 8,
      id: 8
    },
    {
      name: 'Warrior',
      classTypeEnum: 9,
      id: 9
    }
  ];

  getClassTypes(): Promise<ClassType[]> {
    return Promise.resolve(this.classes);
  }
}
