import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
      <div *ngIf="selectedAnimal">
        <hr>
        <h3>Edit Animal: {{selectedAnimal.name}}</h3>
        <div class="edit-animal-form">
          <div class="form-group">
            <label>Enter New Name:</label>
            <input [(ngModel)]="selectedAnimal.name">
          </div>
          <div class="form-group">
            <label>Enter New Species:</label>
            <input [(ngModel)]="selectedAnimal.species">
          </div>
          <div class="form-group">
            <label>Enter New Image:</label>
            <input [(ngModel)]="selectedAnimal.image">
          </div>
          <div class="form-group">
            <label>Enter New Age:</label>
            <input [(ngModel)]="selectedAnimal.age">
          </div>
          <div class="form-group">
            <label>Enter New Diet:</label>
            <input [(ngModel)]="selectedAnimal.diet">
          </div>
          <div class="form-group">
            <label>Enter New Location:</label>
            <input [(ngModel)]="selectedAnimal.location">
          </div>
          <div class="form-group">
            <label>Enter New Caretakers:</label>
            <input [(ngModel)]="selectedAnimal.caretakers">
          </div>
          <div class="form-group">
            <label>Enter New Sex:</label>
            <input [(ngModel)]="selectedAnimal.sex">
          </div>
          <div class="form-group">
            <label>Enter New Likes:</label>
            <input [(ngModel)]="selectedAnimal.likes">
          </div>
          <div class="form-group">
            <label>Enter New Dislikes:</label>
            <input [(ngModel)]="selectedAnimal.dislikes">
          </div>
        </div>
        <button (click)="doneClick()">Done</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() selectedAnimal: Animal;
  @Output() doneClickSender = new EventEmitter();

  doneClick() {
    this.doneClickSender.emit();
  }
}
