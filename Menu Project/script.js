const menu = [
    {
        id: 1,
        title: "Hamburger",
        category: 'lunch',
        price: 15.99,
        img: "./images/hamburger.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 2,
        title: "Bread",
        category: 'breakfast',
        price: 13.99,
        img: "./images/bread.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 3,
        title: "Beef",
        category: "lunch",
        price: 10.45,
        img: "./images/beef.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 4,
        title: "Pasta",
        category: 'lunch',
        price: 8.55,
        img: "./images/pasta.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 5,
        title: "mushrooms",
        category: 'dinner',
        price: 11.33,
        img: "./images/mushrooms.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 6,
        title: "Coffee",
        category: 'breakfast',
        price: 5.47,
        img: "./images/coffee.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 7,
        title: "Duck Fry",
        category: 'lunch',
        price: 20.99,
        img: "./images/duck.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 8,
        title: "Board",
        category: 'breakfast',
        price: 5.25,
        img: "./images/board.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 9,
        title: "Cereal",
        category: 'lunch',
        price: 12.49,
        img: "./images/cereal.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 10,
        title: "Curry",
        category: 'lunch',
        price: 10.15,
        img: "./images/curry.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 11,
        title: "Strawberry Shake",
        category: 'shakes',
        price: 7.4,
        img: "./images/image-1.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 11,
        title: "Cream Shake",
        category: 'shakes',
        price: 5,
        img: "./images/image-2.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 13,
        title: "Pink Shake",
        category: 'shakes',
        price: 6,
        img: "./images/image-3.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    {
        id: 13,
        title: "Milk Shake",
        category: 'shakes',
        price: 4,
        img: "./images/image-4.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero vel nihil neque sed enim ab.",
    },
    
]








// ....................load items start............../

const container = document.querySelector('.container');

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
      return  `<div class="items">

      <img class="image" src=${item.img} alt="">
      <div class="text-content">
          <div class="top_area">
              <h4 class="item-name">${item.title} </h4>
              <p class="price">${item.price} $</p>
          </div>
          <p class="discription">${item.desc}</p>
      </div>
      
  </div>`
    });
    displayMenu = displayMenu.join('')
    container.innerHTML = displayMenu;
}

    

// .......................load items end......................../




// ............................filter items......................

const filter_btn = document.querySelectorAll('.filter_btn');

filter_btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const category =  e.currentTarget.dataset.id;
       const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category){
            return menuItem;
        }
       });
       if(category == 'all'){
        displayMenuItems(menu);
       } else {
        displayMenuItems(menuCategory)
       }
    });
})

// ............................filter items end...............