import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
      <div>
        <h3>{{selectedAnimal.name}}</h3>
        <hr>
        <h3>Edit Animal</h3>
        <label>Enter New Name:</label>
        <input [(ngModel)]="selectedAnimal.name">
        <label>Enter New Species:</label>
        <input [(ngModel)]="selectedAnimal.species">
        <label>Enter New Age:</label>
        <input [(ngModel)]="selectedAnimal.age">
        <label>Enter New Diet:</label>
        <input [(ngModel)]="selectedAnimal.diet">
        <label>Enter New Location:</label>
        <input [(ngModel)]="selectedAnimal.location">
        <label>Enter New Caretakers:</label>
        <input [(ngModel)]="selectedAnimal.caretakers">
        <label>Enter New Sex:</label>
        <input [(ngModel)]="selectedAnimal.sex">
        <label>Enter New Likes:</label>
        <input [(ngModel)]="selectedAnimal.likes">
        <label>Enter New Dislikes:</label>
        <input [(ngModel)]="selectedAnimal.dislikes">
        <button (click)="doneClick()">Done</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {

}
