const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

// USED FOR TESTING ONLY
// const dinosaurs = [
// {
//   dinoType: 't-rex',
//   name: 'bob'
// },
// {
//   dinoType: 'brontosaurus',
//   name: 'josh'
// },
// {
//   dinoType: 'raptor',
//   name: 'steven'
// }
// ];

// // loop over the dinosaurs
// // build up a domstring
// // print domstring to the DOM
// const buildDinosaurs = () => {
//   let domString = '';
//   for(let i = 0; i < dinosaurs.length; i++) {
//     domString += `<div class="dinosaur">`;
//     domString +=   `<h3>${dinosaurs[i].dinoType}</h3>`;
//     domString +=   `<p>${dinosaurs[i].name}</p>`;
//     domString += `</div>`;
//   }
//   printToDom('div1', domString);
//   console.log(domString);
// };

const assignments = [
  {
    title: 'product cards',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
    assignmentUrl: 'https://www.google.com'
  },
  {
    title: 'project 2',
    dueDate: '03/09/2019',
    topic: 'Github',
    notes: 'Learn how to use Github',
    assignmentUrl: 'https://www.google.com'
  },
  {
    title: 'project 3',
    dueDate: '03/16/2019',
    topic: 'JS',
    notes: 'Use Javascript like a boss',
    assignmentUrl: 'https://www.google.com'
  },
  {
    title: 'project 4',
    dueDate: '03/23/2019',
    topic: 'Git for Teams',
    notes: 'Learn how to not fight with a team',
    assignmentUrl: 'https://www.google.com'
  },
  {
    title: 'project 5',
    dueDate: '03/30/2019',
    topic: 'Group Project',
    notes: 'Work with a team with minimal conflict',
    assignmentUrl: 'https://www.google.com'
  }
];

// total of 5 assignments
// make a function called buildAssignmentCards - loop over assignments and make a domString
// reuse the printToDom function to display the domString
// each card should have a title displayed, with border bottom, light gray
// dueDate: bold
// get the assignment HERE (linked)

const buildAssignmentCards = () => {
  let domString = '';
  for(let i = 0; i < assignments.length; i++) {
    domString += `<div class="cards">`;
    domString +=   `<h4>${assignments[i].title}</h4>`;
    domString +=   `<p class="dueDate">Due Date: ${assignments[i].dueDate}</p>`;
    domString +=   `<p>Get the Assignment <a href="${assignments[i].assignmentUrl}">HERE</a>.</p>`;
    domString +=   `<p>Topic: ${assignments[i].topic}</p>`;
    domString +=   `<p>Notes: ${assignments[i].notes}</p>`;
    domString += `</div>`;
  }
  printToDom('div1', domString);
};

const init = () => {    
  // USED FOR TESTING ONLY
  // buildDinosaurs();  
  buildAssignmentCards();
};

init();