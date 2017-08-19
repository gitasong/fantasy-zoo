import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
      <div *ngIf="selectedAnimal">
        <hr>
        <h2>Edit Animal: {{selectedAnimal.name}}</h2>
        <div class="edit-animal-form">
          <div class="form-group">
            <label>New Name:</label>
            <input [(ngModel)]="selectedAnimal.name">
          </div>
          <div class="form-group">
            <label>New Species:</label>
            <input [(ngModel)]="selectedAnimal.species">
          </div>
          <div class="form-group">
            <label>New Image:</label>
            <input [(ngModel)]="selectedAnimal.image">
          </div>
          <div class="form-group">
            <label>New Age:</label>
            <input [(ngModel)]="selectedAnimal.age">
          </div>
          <div class="form-group">
            <label>New Diet:</label>
            <input [(ngModel)]="selectedAnimal.diet">
          </div>
          <div class="form-group">
            <label>New Location:</label>
            <input [(ngModel)]="selectedAnimal.location">
          </div>
          <div class="form-group">
            <label>New Caretakers:</label>
            <input [(ngModel)]="selectedAnimal.caretakers">
          </div>
          <div class="form-group">
            <label>New Sex:</label>
            <input [(ngModel)]="selectedAnimal.sex">
          </div>
          <div class="form-group">
            <label>New Likes:</label>
            <input [(ngModel)]="selectedAnimal.likes">
          </div>
          <div class="form-group">
            <label>New Dislikes:</label>
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
