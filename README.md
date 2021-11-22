# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

### Build navbar by Javascript
    - Query the all sections and store the list in variable.
    - Use forEach on the list Variable.
    - Create variable of li by extracting section id.
    - Use insertAdjacentHTML to concat list.

### Smooth scroll between sections
    - use scroll-behavior in css.

### Heighlight and go to active section
    - Use forEach() method on the sections list inside it.
    - Use the getBoundingClientRect on the element parameter.
    - IT will return some properties related to viewport and the section.
    - Use if statement to get the Active link.
    - Use classList.add method to add the active class to the active section.

### Scroll to top button
    - Use toggle function to Show back to top button when scroll down and hide it when scroll up.
    - Add event listener on scroll to scroll to top of the page.

### Responsive navbar by adding burger menu in small screens
    - Add icon library to show a hamburger menu.
    - Add link in navbar contains icon in small screens.
    - Create responsive class.
    - Create function to add and remove responsive class.