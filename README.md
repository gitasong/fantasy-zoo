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
