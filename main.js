const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const dinosaurs = [
{
  dinoType: 't-rex',
  name: 'bob'
},
{
  dinoType: 'brontosaurus',
  name: 'josh'
},
{
  dinoType: 'raptor',
  name: 'steven'
}
];

// loop over the dinosaurs
// build up a domstring
// print domstring to the DOM
let domString = '';
const buildDinosaurs = () => {
  for(let i = 0; i < dinosaurs.length; i++) {
    domString += `<div class="dinosaur">`;
    domString +=   `<h3>${dinosaurs[i].dinoType}</h3>`;
    domString +=   `<p>${dinosaurs[i].name}</p>`;
    domString += `</div>`;
  }
  printToDom('div1', domString);
  console.log(domString);
};

const init = () => {    
  buildDinosaurs();
};

init();