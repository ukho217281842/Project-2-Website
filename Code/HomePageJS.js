//Temp data
const data = [
  {
    name: "Bursary1",
    url: "www.example.com",
    description: "Description Description Description Description Description",
    photo: "../Resources/Placeholder.png",
    tag: "IT"
  },

  {
    name: "Bursary2",
    url: "www.example.co2",
    description: "Description Description Description Description Description",
    photo: "../Resources/Placeholder.png",
    tag: "Art"
  },

  {
    name: "Bursary3",
    url: "www.example3.com",
    description: "Description Description Description Description Description",
    photo: "../Resources/Placeholder.png",
    tag: "Business"
  },

  {
    name: "Bursary4",
    url: "www.example4.com",
    description: "Description Description Description Description Description",
    photo: "../Resources/Placeholder.png",
    tag: "Music"
  },

  {
    name: "Bursary5",
    url: "www.example4.com",
    description: "Description Description Description Description Description",
    photo: "../Resources/Placeholder.png",
    tag: "Science"
  },

  {
    name: "Bursary5",
    url: "www.example4.com",
    description: "Description Description Description Description Description",
    photo: "../Resources/Placeholder.png",
    tag: "Drama"
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

   return`

   <div class="col-sm-4">
   <div class="card" style="background-image: url('../Resources/Placeholder.png');">
   <div class="card-content">
   <h3 class="card-title">${card.tag}</h3>
   <p class="card-body">${card.description}</p>
     <a href="#" class="button">Go to page</a>
   </div>
 </div>
   </div>
   `
}

//Cycles threw all the data and runs cardTemplate to create a card for each of the data objects
document.getElementById("cards").innerHTML = `
<div class="col-md-12"><h1 class="card-title">Cards (${data.length} results)</h1></div>
${data.map(cardTemplate).join("")}

<center>
<p>These ${data.length} bursarys were added recently</p>
</center>
`


//Counter effect
$('.counter').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },
    {
      duration: 2000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }
    });
});


//Changing words effect for slogan
setInterval(function () {
  const show = document.querySelector('span[data-show]')
  const next = show.nextElementSibling || document.querySelector('span:first-child')
  const up = document.querySelector('span[data-up]')
  
  if (up) {
    up.removeAttribute('data-up')
  }
  
  show.removeAttribute('data-show')
  show.setAttribute('data-up', '')
  
  next.setAttribute('data-show', '')
}, 2000)