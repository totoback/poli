const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./img/1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./img/2.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./img/3.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./img/1.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./img/2.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./img/3.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
];

console.log(menu)

const filterBtn = document.querySelectorAll(".btn-container button")
const innerItem = document.querySelector('.section-center')



const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function () {
  // 페이지가 로드되었을 때 실행되는 이벤트 리스너
  // displayMenuItems 함수를 호출하여 초기 메뉴 항목들을 표시
  displayMenuItems(menu);
});

// filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.target.dataset.name;
    console.log(category)
    const menuCategory = menu.filter(function (menuItem) {
      if (category === "all") {
        return true; // 모든 항목을 반환
      } else if (menuItem.category === category) {
        return menuItem;
      }
    });

    displayMenuItems(menuCategory);//화면 표시
  });
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
  });

  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}