import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Fantasy Zoo</h1>
  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  <edit-animal [selectedAnimal]="selectedAnimal" (doneClickSender)="finishedEditing()"></edit-animal>
  <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  `
})

export class AppComponent {
  selectedAnimal: null;

  masterAnimalList: Animal[] = [
  new Animal("arctic fox", "Moon", 2, "carnivore", "Northern Trail", 5, "female", "cool shade", "loud noises"),
  new Animal("ocelot", "Prince", 4, "carnivore", "Tropical Rain Forest", 6, "male", "lying in the sunshine", "toys that are not rope-based"),
  new Animal("northwest black-tailed deer", "Tinkerbell", 8, "herbivore", "Northern Trail", 2, "female", "delicate roots and leaves", "loud noises"),
  new Animal("gorilla", "Kokko", 7, "herbivore", "Primate House", 5, "male", "bananas", "gnats"),
  new Animal("unicorn", "Luna", 217, "lightarian", "Fantasy Realms", 12, "female", "moonlight", "impure maidens")
  ];

  addAnimal(newAnimal: Animal) {
    this.masterAnimalList.push(newAnimal);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}
