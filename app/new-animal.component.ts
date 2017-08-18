import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h2>Log New Animal</h2>
  <div>
    <label>Name: </label>
    <input #newName>
    <label>Species: </label>
    <input #newSpecies>
    <label>Age: </label>
    <input #newAge>
    <label>Diet: </label>
    <input #newDiet>
    <label>Location: </label>
    <input #newLocation>
    <label>Number of Caretakers: </label>
    <input #newCaretakers>
    <label>Sex: </label>
    <input #newSex>
    <label>Likes: </label>
    <input #newLikes>
    <label>Dislikes: </label>
    <input #newDislikes>
    <button (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
