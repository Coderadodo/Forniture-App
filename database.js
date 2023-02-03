// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
//.,.................................................................
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
//.............................................................
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights














/*

//.....................................................


// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels



//const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

const linksContainer = document.querySelector('.links-container')
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
  //linksContainer.classList.toggle('show-links')
  const containerHeight = linksContainer.getBoundingClientRect().height
 const linksHeight = links.getBoundingClientRect().height
if (containerHeight === 0){
  linksContainer.style.height = `${linksHeight}px`
}
else{
  linksContainer.style.height = 0
}
})

const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
//fixed navbar
window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height
  if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav')
  }
  else{
    navbar.classList.remove('fixed-nav')
  }
  if(scrollHeight > 500){
    topLink.classList.add('show-link')
  }
  else {
    topLink.classList.remove('show-link')
  }
})

const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop -  navHeight 
   if(!fixedNav){
    position = position - navHeight
   }
   if(navHeight > 82) {
    position = position + containerHeight
   }
   window.scrollTo({
    left:0, top: position,
   })
   linksContainer.style.height = 0
  })
})


//................................
*/
/*
const dataBase = [
    {
      id: 0,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "vic1.jpg",
      //img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },

    {
      id: 1,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "vic1.jpg",
      //img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 1,
      title: "diner double",
      category: "idiot",
      price: 13.99,
      img: "vic1.jpg",
      //img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 2,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "vic2.jpg",
      //img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 3,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "vic3.jpg",
      //img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 4,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "vic5.jpg",
      //img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 5,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "vic6.jpg",
      //img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 6,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "vic11.jpg",   
     // img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 7,
      title: "american classic",
      category: "lunch",
      price: 12.99,
     img: "vic12.jpg",
      //img: "vic.jpg",
      //img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "ede",
      price: "16.99",
      img: "vic9.jpg", 
   
     // img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 9,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "vic10.jpg",
      //img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 9,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "vic10.jpg",
      //img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 9,
      title: "bison steak",
      category: "idiot",
      price: 22.99,
      img: "vic10.jpg",
      //img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    
    {
      id: 11,
      title: "Egusi and pandedyam ",
      category: "idiot",
      //category: "break",
      price: 50.99,
      img: "egusi.jpg",
      
      //img: "./images/item-10.jpeg",
     // desc: `<button><h4>order<h4></button>`,
      desc: ` <button><h4>Place Order<h4></button>
                Click on the order button your meal will be available im 4minutes
        `,
      //desc: `  skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.<button>order</button>`,
    },
    
  ];
  const sectionCenter = document.querySelector('.section-center')
  //const victor= document.querySelectorAll('.filter-btn')
  const container = document.querySelector('.btn-container')
  window.addEventListener('DOMContentLoaded', function(){
 idiot(dataBase)
 displayadodo()
  })
  function idiot(dog){
    let dataBase = dog.map(function(vic){
       return `<article class="menu-item">
       <img src=${vic.img} class="photo" alt=${vic.title}  />
       <div class="item-info">
         <header>
           <h4>${vic.title}</h4>
           <h4 class="price">${vic.price}</h4>
         </header>
         <p class="item-text">${vic.desc}
         </p>
       </div>
       </article>`
      })
     dataBase = dataBase.join('')
     sectionCenter.innerHTML = dataBase 
  }
function displayadodo(){
  const category = dataBase.reduce(function(lion,newButton){
    if(!lion.includes(newButton.category)){
      lion.push(newButton.category)
    }
  return lion
  },
  ['all'])
  // console.log(category)
  const categoryBtns = category.map(function(plate){
    return  `<button type="button" class="filter-btn" data-id=${plate}>${plate}</button>`
  })
  .join('')
  container.innerHTML =categoryBtns
  const victor= document.querySelectorAll('.filter-btn')
  victor.forEach(function(button){
    button.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id
      const govt = dataBase.filter(function(dataBaseAdo){
        if(dataBaseAdo.category ===category){
          return dataBaseAdo
        }
      })
      if (category === "all"){
       idiot(dataBase)
      }
      else{
        idiot(govt)
      }
    })
  })
}

*/





