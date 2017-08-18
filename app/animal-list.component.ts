import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h2>Animals Currently In Zoo</h2>

  <label>Filter By Age: </label>
  <select>
    <option value="all" selected="selected">All Animals</option>
    <option value="young">Young Animals (under 2 years)</option>
    <option value="mature">Mature Animals (2 years and older)</option>
  </select>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
      <h3><strong>Name: </strong> {{currentAnimal.name}}</h3>
      <h4><strong>Species: </strong> <em>{{currentAnimal.species}}</em></h4>
      <p><strong>Age: </strong> {{currentAnimal.age}}</p>
      <p><strong>Diet: </strong> {{currentAnimal.diet}}</p>
      <p><strong>Location: </strong> {{currentAnimal.location}}</p>
      <p><strong>Number of Caretakers: </strong> {{currentAnimal.caretakers}}</p>
      <p><strong>Sex: </strong> {{currentAnimal.sex}}</p>
      <p><strong>Likes: </strong> {{currentAnimal.likes}}</p>
      <p><strong>Dislikes: </strong> {{currentAnimal.dislikes}}</p>
      <button (click)="editClick(currentAnimal)">Edit!</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "all";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editClick(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
