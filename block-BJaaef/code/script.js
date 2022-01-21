console.log(got);

let parentElm  = document.querySelector(".mainbox");

let allpeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

 let cardHTML = allpeople.map((person) => {
  return `<li class="card">
    <div class="info">
    <img 
      src = ${person.image}
      alt = ${person.name}
    />
    <h2>${person.name}</h2>
    <div>
    <p>
      ${person.description}
    </p>
    <a href =${person.wikilink}> Learn More!</a>
    </li>`;
});

parentElm.innerHTML = cardHTML;

console.log(allpeople);
console.log(cardHTML);