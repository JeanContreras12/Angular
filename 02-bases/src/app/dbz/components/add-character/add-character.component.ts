import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }
  addPersonaje(): void {
    if (this.character.name.length == 0) return;
    console.log("hey");
    console.log(this.character);
    this.onNewCharacter.emit(this.character);
    this.character.name = '';
    this.character.power = 0;

  }
}
