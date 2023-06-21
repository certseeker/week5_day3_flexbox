let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
let mainTitle = document.getElementById('main-title');

//no html tags needed for innerHTML
mainTitle.innerHTML = 'Lets Get Comfortable';
// mainTitle.appendChild("main-T");

  // Part 2
//dont use get element by tag name. it returns a html collection 
//instead of a node list, use queryselector instead
let mainBody = document.querySelector('body');

mainBody.style.backgroundColor = "light-blue";

  // Part 3
const favThings = document.getElementById("favorite-things");
favThings.removeChild(favThings.lastElementChild);
  // Part 4
  //because its query selector all (selects by css tag, and its an array) and bc its a class
let specTitle = document.querySelectorAll('.special-titles')
//must change font size to 2rem next

//dom 
for (i = 0 ; i < specTitle.length ; i ++ ){
 specTitle[i].fontSize = "2rem"; 
}

  // Part 5
let pastRaces = document.getElementById("past-races");
pastRaces.removeChild(pastRaces.lastElementChild);

  // Part 6
//iniitially just had line 46 and 48, no effect on site
  // let li = document.createElement("li");

  // li.innerHTML = '<li>Washington, DC</li>';

function insertElement(string){
  let li = document.createElement("li");
  li.textContent = string;
  return li;
}
//I had appendChild, first, did not work
pastRaces.append(insertElement("Washington, DC"));


  // Part 7
  // function divClass(){
  //I had the div named as div2 initially, wanted to see if there was any
  //differnce between the 2 through naming convention
let div = document.createElement("div");
div.classList.add("blog-post");
div.textContent = ("Where's Next");
pastRaces.appendChild(div); 



//I did this one first, but did the other one above bc something was missing
// let morePost = document.createElement("more-post"
// );
// morePost.innerHTML("<h2> Where's Next</h2>");



  // Part 8

  // document.addEventListener("DOMContentLoaded", function(event) {
  //   // Random quote of the day generator
  //   const randomQuote = function() {
  //     document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  //   };
  //   randomQuote();


  
const quoteTitle = document.querySelector("#quote-title");

// every time you click on quoteTitile, random quote ia activated
quoteTitle.addEventListener('click', randomQuote)

const blogPost = document.querySelectorAll(".blog-post")


//apply 2 event handlers to each node
for (i = 0 ; i < blogPost.length ; i ++ ){
  blogPost[i].addEventListener('mouseout', (event) => {
    event.target.classList.toggle("purple")
  })
  blogPost[i].addEventListener('mouseenter', (event) => {
    event.target.classList.toggle("red")
  })
  // Part 9

}


//this is the end of the event listener
})
