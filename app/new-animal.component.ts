import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h2>Log New Animal</h2>
  <div class="new-animal-form">
    <div class="form-group">
      <label>Name: </label>
      <input #newName>
    </div>
    <div class="form-group">
      <label>Species: </label>
      <input #newSpecies>
    </div>
    <div class="form-group">
      <label>Age: </label>
      <input #newImage>
    </div>
    <div class="form-group">
      <label>Image: </label>
      <input #newAge>
    </div>
    <div class="form-group">
      <label>Diet: </label>
      <input #newDiet>
    </div>
    <div class="form-group">
      <label>Location: </label>
      <input #newLocation>
    </div>
    <div class="form-group">
      <label>\# Caretakers: </label>
      <input #newCaretakers>
    </div>
    <div class="form-group">
      <label>Sex: </label>
      <input #newSex>
    </div>
    <div class="form-group">
      <label>Likes: </label>
      <input #newLikes>
    </div>
    <div class="form-group">
      <label>Dislikes: </label>
      <input #newDislikes>
    </div>
    <button (click)="submitForm(newName.value, newSpecies.value, newImage.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newImage.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, image: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, name, image, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
