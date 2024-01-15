import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characteres: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9999
  }
  ];

  AddCharacter(caracter: Character): void {
    const newCharacter: Character = {
      id: uuid(), ...caracter
    }
    this.characteres.push(newCharacter);

  }
  onDeleteByID(id: string) {
    this.characteres = this.characteres.filter(caracter => caracter.id !== id);
  }

}
