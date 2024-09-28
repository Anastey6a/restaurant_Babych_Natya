const menu = [
    { id: 1, title: "Салат з креветками та горгонзолою", category: "закуски", price: "170 грн", description: "Цей свіжий та вишуканий салат поєднує в собі соковиті персики, ніжний сир горгонзола та хрусткий салат. ",img: "./images/3.jpg" },
    { id: 2, title: "Брускетта", category: "закуски", price: "230 грн", description: "Підсмажений хліб, натертий часником і покритий нарізаними помідорами, свіжим базиліком та моцарелою.",img: "https://i.pinimg.com/736x/38/b9/a6/38b9a6ed07015474337892974d12235b.jpg" },
    { id: 3, title: "Американський сніданок", category: "основне", price: "245 грн", description: "Американський сніданок зазвичай включає яйця, бекон або ковбаски, хашбрауни, тости ",img: "./images/americ.jpg" },
    { id: 4, title: "Хінкалі", category: "основне", price: "45 грн", description: "Хінкалі — це грузинські м'ясні пельмені з баранини, приправлені спеціями та зеленню. Тісто зібране у формі мішечка, який подають з міцним бульйоном всередині" , img: "./images/chinkali.jpg"},
    { id: 5, title: "Шоколадний фодан", category: "десерт", price: "145 грн", description: "Теплий шоколадний торт з рідкою шоколадною серцевиною, подається з ванільним морозивом." , img: "./images/fondan.jpg"},
    { id: 6, title: "Штрудель", category: "десерт", price: "99 грн", description: "Класичний яблучний пиріг з ніжною скоринкою, подається зі збитими вершками.", img: "./images/25.jpg"},
    { id: 7, title: "Бургер Супер Чіз", category: "основна страва", price: "355 грн", description: "Соковита яловича котлета, подвійний шар розплавленого сиру чеддер, карамелізована цибуля, мариновані огірки та соус у пухкій булочці бріош.","img": "./images/burger.jpg" },
    { id: 8, title: "Вареники ", category: "основне", price: "215 грн", description: "Традиційні вареники з ніжною начинкою з картоплі та смаженої цибулі, подаються з вершковим маслом або сметаною.", img: "./images/varenyk.jpg" },
    { id: 9, title: "Піца Діябло", category: "основне", price: "$14", description: "Піца з гострим салямі, червоним перцем чилі, моцарелою та томатним соусом. Ідеальний вибір для поціновувачів пікантних страв.", img: "./images/pizza.jpg" },
    { id: 10, title: "Млинець", category: "десерт", price: "75 грн", description: "Тонкий млинець, приготований за традиційним рецептом, може подаватися з різноманітними начинками на вибір: мед, згущене молоко, фрукти або сметана.", img: "./images/pancak.jpg" },
    { id: 11, title: "Raf", category: "напої", price: "65 грн", description: "Кава яка заряджає енергією на цілий день", img: "./images/coffee.jpg" },
    { id: 13, title: "Green Tea", category: "напої", price: "$3", description: "Традиційний китайський чай заспокійливий та антиоксидантний", img: "./images/tea.jpg" },
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
    
    function renderMenuItem(item) {
      return `<div class="menu-item col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
          <p class="card-text">${item.description}</p>
          <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
        </div>
      </div>
    </div>
    `;
  }

  
  function filterMenu(category) {
      const filteredMenu = category === 'all' ? menu : menu.filter(item => item.category === category);
      const menuContainer = document.getElementById('menu-items');
      menuContainer.innerHTML = filteredMenu.map(renderMenuItem).join('');
  }


  filterMenu('all');

  const filterButtons = document.querySelectorAll('.nav-link');
  filterButtons.forEach(button => {
      button.addEventListener('click', function () {
          const category = this.getAttribute('data-filter');
          filterMenu(category);
      });
  });


  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
      const filteredMenu = menu.filter(item => item.title.toLowerCase().includes(searchTerm));
      filterMenu('all'); // Reset to display all items
      const menuContainer = document.getElementById('menu-items');
      menuContainer.innerHTML = filteredMenu.map(renderMenuItem).join('');
  });
});
  
  
  
  