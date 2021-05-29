//Temp data
const data = [
  {
    name: "Bursary1",
    url: "www.example.com",
    description: "ergafshgresfgsdgedgdsg",
    photo: "../Resources/Placeholder.png",
    tag: "IT"
  },

  {
    name: "Bursary2",
    url: "www.example.co2",
    description: "ergafshgresfgsdgedgdsg2",
    photo: "../Resources/Placeholder.png",
    tag: "art"
  },

  {
    name: "Bursary3",
    url: "www.example3.com",
    description: "ergafshgresfgsdgedgdsg3",
    photo: "../Resources/Placeholder.png",
    tag: "business"
  },

  {
    name: "Bursary4",
    url: "www.example4.com",
    description: "ergafshgresfgsdgedgdsg4",
    photo: "../Resources/Placeholder.png",
    tag: "music"
  },

  {
    name: "Bursary5",
    url: "www.example4.com",
    description: "ergafshgresfgsdgedgdsg4",
    photo: "../Resources/Placeholder.png",
    tag: "science"
  },

  {
    name: "Bursary5",
    url: "www.example4.com",
    description: "ergafshgresfgsdgedgdsg4",
    photo: "../Resources/Placeholder.png",
    tag: "drama"
  }

];

//Search bar keyup function that uses jquery
$("#SearchBar").keyup(function() {

  var filter = $(this).val(),
    count = 0;

  $('#cards div').each(function() {
    if ($(this).text().search(new RegExp(filter, "i")) < 0) {
      $(this).animate( { "opacity": "hide", top:"100"} , 500 );  
    } else {
      $(this).animate( { "opacity": "show", top:"100"} , 500 ); 
      count++;
    }
  });
});

//Creation of card divs function
function cardTemplate(card){
  return `

  <div class="col-sm-4" id="card-style">
  <center>
  <a href="something.html">
  <img src="${card.photo}" class="card-photo"><br>
  </a>
  <p>${card.tag}</p>
  </center>
  </div>
  `
}

//Cycles threw all the data and runs cardTemplate to create a card for each of the data objects
document.getElementById("cards").innerHTML = `
<h1 class="card-title">Cards (${data.length} results)</h1>
${data.map(cardTemplate).join("")}

<center>
<p>These ${data.length} bursarys were added recently</p>
</center>
`


