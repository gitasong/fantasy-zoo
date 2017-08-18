# Fantasy Zoo

Fantasy Zoo app (with a few unbelievable creatures) that allows the user to view the current animal list, filter animals by age using a dropdown menu, add new animals, and edit existing animals.

#### By Nicole Freed

## Planning

1. Configuration/dependencies

2. Specs
  * The program will allow users (zookeepers) to log a newly-admitted animal by submitting a form with animal species, name, age, diet, location, caretakers, sex, one like, and one dislike.
  * The program will allow users to view a list of all animals that have been logged.
  * The program will allow users to sort and view the list of animals by age (< 2 years, >= 2 years, all animals).
  * The program will allow users to click on an animal to edit its name, age, or caretakers.
  * (if time) The program will allow users to click on an animal to edit any of its other characteristics.

3. Modules/Components/Integration (a = action; b = button)
  *       animal model---------------------root module----------------------age pipe (sorting)
                                                |
                                          root component
              __________________________________|__________________________________
              |                                 |                                  |
          animal-list component         new-animal component               edit-animal component
  * Components:
    * animal model: contains animal class declaration and constructor
    * root module: imports all components and additional key files (e.g. models, pipes)
    * root component: integrates all child components plus forms and pipe (sorting) display; contains minimal base template w/all other component elements; contains master animal list/seed data
    * animal-list component: contains display loop + most event and property bindings, inputs and outputs, key methods related to display loop
    * new-animal component: contains new-animal form, show/hide functionality, inputs and outputs, key methods related to form
    * edit-animal component: contains edit-animal form pre-filled with current animal data, updates animal properties in real time; contains inputs and outputs, key methods related to form
    * age pipe: contains back-end code allowing user to sort animals by age

4. UX/UI
  * Include and modify Bootstrap/SASS etc.
  * Develop custom styles

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome

6. Wish List (if time)
  * Enabel user to edit additional characteristics
  * Extend animal model with additional characteristics (e.g. health, mate, children)
  * Group/sort by species and/or diet
  * Color code by species and/or location
  * Custom styling
  * Additional features?

  ## Prerequisites

  You will need the following platforms, apps, and languages properly installed on your computer.

  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/) (with NPM)
  * [TypeScript](http://www.typescriptlang.org):
    * install via npm with `npm install typescript -g`
    * check installation with `tsc -v`; you should see a version number

  ## Installation

  * `git clone https://github.com/gitasong/fantasy-zoo`
  * `cd fantasy-zoo`
  * `npm install`

  ## Running / Development

  * `npm install`
  * `bower install`
  * `gulp build`
  * `gulp serve`
  * Visit your app at [http://localhost:3000](http://localhost:3000).

  ## Known Bugs

  No known bugs.

  ## Support and Contact Details

  You can contact me with questions or inquiries at gitasong@github.io.

  ## Technologies Used

  * HTML 5
  * CSS 3
  * Bootstrap 3
  * Google Fonts
  * TypeScript 2.4.2
  * ECMAScript (JavaScript) 5 & 6
  * Node.js 8.2.1
  * npm (Node package manager) 5.3.0
  * Bower (front-end dependency manager) 1.8.0
  * Angular.js 2

  ### License

  This project is licensed under the MIT license.

  Copyright (c) 2017 Nicole Freed. All rights reserved.
