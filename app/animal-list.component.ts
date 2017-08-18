import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h2>Animals Currently In Zoo</h2>
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
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

}
