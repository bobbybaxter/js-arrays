# JS Arrays
One-page locally hosted site to practice using Javascript arrays.

### Under the hood
- `const printToDom` assigns our selected text to our selected DOM element 
- `const buildAssignmentCards` is a function that loops over our assignments array, builds cards in HTML syntax using **template literals** and **embedded expressions** to interpolate the information from each array item, then displays the elements to the DOM using `printToDom()`

### Result
- `const init` initializes our page by building and displaying our 5 cards with `buildAssignmentCards()`

## Screenshots
![image of javascript array methods website](https://raw.githubusercontent.com/bobbybaxter/js-arrays/master/img/js-arrays-screenshot.png)

## Getting Started
Clone the repo:
```
$git clone https://github.com/bobbybaxter/js-arrays
```

### Prerequisites
Download HTTP Server, to be able to serve the site locally in your browser:
```
$npm install -g http-server
```

## Running
Browse to the js-arrays/ directory and run HTTP Server by typing the following command into the terminal:
```
$ hs -p 5000
```

In your web browser, copy and paste this:

 `localhost:5000`