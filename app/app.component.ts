import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <header class="jumbotron">
      <h1><span class="">F</span><span class="">a</span><span class="">n</span><span class="">t</span><span class="">a</span><span class="">s</span><span class="">y</span> <span class="">Z</span><span class="">o</span><span class="">o</span></h1>
      <h4>A haven for magical and non-magical beasts</h4>
    </header>
    <div class="container main">
      <div class="animal-list">
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      </div>
      <div class="edit-animal">
        <edit-animal [selectedAnimal]="selectedAnimal" (doneClickSender)="finishedEditing()"></edit-animal>
      </div>
      <div class="new-animal">
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>
    </div>
    <div class="footer"></div>
  </div>
  `
})

export class AppComponent {
  selectedAnimal: null;

  masterAnimalList: Animal[] = [
  new Animal("arctic fox", "Moon", "http://3.bp.blogspot.com/-X17BueaHM9o/UMn4aoWKhNI/AAAAAAAAPDk/4zlyQyy2SjE/s1600/Arctic+Fox+Wallpapers+02.jpg", 2, "carnivore", "Northern Trail", 5, "female", "cool shade", "loud noises"),
  new Animal("ocelot", "Prince", "http://4.bp.blogspot.com/-WvxNTcmeWvk/Tu7MaVfkkII/AAAAAAAAAoE/iwGOf7Co0bo/s1600/Ocelot1.jpg", 4, "carnivore", "Tropical Rain Forest", 6, "male", "lying in the sun", "non-rope toys"),
  new Animal("northwest black-tailed deer", "Tinkerbell", "https://c1.staticflickr.com/3/2432/3784955372_7da8a22a15_z.jpg?zz=1", 8, "herbivore", "Northern Trail", 2, "female", "delicate roots and leaves", "loud noises"),
  new Animal("gorilla", "Kokko", "http://3.bp.blogspot.com/-S6TgICXh-tc/TZglHS8bT9I/AAAAAAAACIg/KWfvlykdZcQ/s1600/Candid+Western+Lowland+Gorilla.jpg", 1, "herbivore", "Primate House", 5, "male", "bananas", "gnats"),
  new Animal("unicorn", "Luna", "http://www.wallpaperhi.com/thumbnails/detail/20111124/moonlight_magic-sharlene-lindskog.jpg", 0, "lightarian", "Fantasy Realms", 12, "female", "moonlight", "impure maidens"),
  new Animal("copper-nosed rattlesnake", "Simbi", "https://classconnection.s3.amazonaws.com/929/flashcards/716929/png/800px-crotalus_horridus_cdc1333743467116.png", 1.5, "omnivore", "African Savannah", 3, "female", "prey", "confined spaces"),
  new Animal("gryphon", "Griffindor", "http://img05.deviantart.net/3393/i/2012/275/d/c/gryphon_ii_by_hagge-d5gmg8t.jpg", -257, "omnivore", "Fantasy Realms", 17, "unisex", "sharpening claws", "gargoyles"),
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
