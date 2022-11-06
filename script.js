const getData = async () => {
    const result = await fetch("https://swapi.dev/api/people");
    const data = await result.json();
    data.results.forEach(item => createPerson(item));
    };

getData();

const createPerson = (person) => {
    console.log(person);
    const card = document.createElement("div");
    card.innerHTML =
    `
    <h3 class="karta">${person.name}</h3>
    <p>${person.birth_year}</p>
    <p>${person.gender}</p>
    <p>${person.height}</p>
    <p>${person.mass}</p>
    `
    document.body.appendChild(card)


}



// const users = ["Anna", "Jan", "Beata", "Alicja"]
// const nums = new Array(3,4,5,6);
// console.log(users);

// const persons = [
//     {
//         name:"Jan",
//         city:"Katowice"
//     },
//     {
//         name:"John",
//         city: "York"
//     },
//     {
//         name: "Beata",
//         city: "Sosnowiec"

//     }
// ]
// console.log(persons[1].name);
// const wrapper = document.getElementById("Products");

// const createUser = (item) => {
//     console.log(item.name);
//     const card = document.createElement("div");
//     const title = document.createElement("h3");
//     title.textContent = item.name;
//     card.appendChild(title);

//     const city = document.createElement("p");
//     city.textContent = item.city;
//     card.appendChild(city);

//     wrapper.appendChild(card);
// }

// persons.forEach((user) =>createUser(user));






// const person = {
//     firstname: "Jan",
//     lastname: "Nowak",
//     city: "warszawa",
//     age: 20,
//     info (){
//         console.log("To są informacje o użytkowniku")
//     }
// }
// console.log(person)

// person.info();


// const btn = document.getElementById("Btn");

// const showInfo = () => {
//     console.log("Kliknięto przycisk");
// }
// btn.addEventListener("click", showInfo);


// document.body.addEventListener("mouseenter", showInfo);
// document.body.addEventListener("mouseleave", showInfo);

// const field = document.getElementById("Field");
// // const showInput = () => console.log("wartość inputa");

// // field.addEventListener("change", showInput);

// const showInput = () => console.log(field.value)
// field.addEventListener("input", showInput);







// console.log("Hello World!"); - sprawdzamy, czy jest podpięte
// alert("Uwaga"); - wbudowane w przeglądarkę
// var,const,let - zmienne w js 
// hoisting - dlatego nie używa się już varu, bo podlega hoistingowi- przez to nie wyrzuca błędu

// var nazwa_zmiennej = "wartość zmiennej";
// var first_name = "Jan";
// var last_name = "Kowalski";

// console.log (nazwa_zmiennej)

// let age = 25;
// console.log (age);

// const first_name = "Jan";
// console.log(first_name);
// Używamy const jeśli wiemy, że wartośc się nie zmienia / let - kiedy wiemy, że wartość sie będzie zmienmiać
// cudzysłów lub apostrofy używamy, gdy chcemy wpisać jakiś tekst, bo inaczej js będzie szukać funkcji / części kodu
// // Są różne typy danych: prymitywne/proste(przetrzymują tylko jedną wartośc danych) i złożone
// // Typy proste: string, number, boolean (prawda/fałsz), undefined, NaN, null
// // Zmienna const o typie danych string oraz zmienna let o typie danych string:
// const first_name = "Jan";
// let city = "Rzeszów";
// // Zmienna const o typie danych number:
// const num = 19;
// const second_num = 5;
// console.log(city.replace("e","w"));
// // konkatenacja np. dodawanie słów
// const result = `To jest ${first_name} i mieszka w ${city}`;
// console.log(result);
// // Słabo i dynamicznie typowany język. JS jest dynamicznie typowany - może sam zastępować typy danych.

// Pobieranie element ów z DOM (Document Object Model)
// const title = document.getElementById("Title");
// title.textContent = "Hello World!";
// title.style.color = "red";
// // title.classList.add("testowa");
// title.setAttribute("class","btn btn-danger");
// console.log(title);
// // query selector
// const desc = document.querySelector(".desc");
// console.log(desc);

// // Do pobrania wielu elementów:
// const items = document.querySelectorAll(".item");
// console.log(items);
// const name = document.getElementById("Name");
// console.log(name)
// const city = document.getElementById("City");
// const color = document.getElementById("Color");
// const animal = document.getElementById("Animal");
// console.log(city)
// console.log(color)
// console.log(animal)
// color.textContent = "Zielony"
// color.style.color = "green"

// const btn = document.createElement("button");
// btn.textContent = "Kup teraz!";
// btn.classList.add("przycisk");
// document.body.appendChild(btn);
// const wrapper = document.getElementById("Products");
// console.log(wrapper);



// function createCard(shoes,price) {
//     const card = document.createElement("div");

// const cardTitle = document.createElement("h2");
// cardTitle.classList.add("klasa1");
// cardTitle.textContent = shoes;
// card.appendChild(cardTitle);

// const card_price = document.createElement("p");
// card_price.classList.add("price");
// card_price.textContent = `${price} zł`;
// card.appendChild(card_price);

// const price_button = document.createElement("button");
// price_button.classList.add("przycisk_zakupu");
// price_button.textContent = "Kup teraz";
// card.appendChild(price_button);


// wrapper.appendChild(card);

// }
// createCard("Kozaki", 299);
// createCard("Półbuty", 79,95);
// createCard("Buty sportowe", 129)

// // card.innerHTML = 
// // `   
// // <h2 class="klasa1">Buty zimowe</h2>
// // <p class="price">Cena: 199,99zł</p>
// // <button class="przycisk">Kup teraz</button>    

// // `;
// // wrapper.appendChild(card);
// // console.log(card);
// // function showUser(username,age){
// //     console.log("To jest " + username)
// //     console.log(`Ma ${age} lata`);
// // }
// // showUser("Anna", 22);
// // showUser("Jan", 32);

// // function pole_trójkąta (a,h){
// //     console.log(a * h /2)
// // }
// // pole_trójkąta(4, 6);
// // pole_trójkąta(2, 8);

// function get_items(pobierany_element,nazwa_klasy,tekst){
//     const element = document.getElementById(pobierany_element)
//     element.classList.add(nazwa_klasy)
//     element.textContent = tekst
    
// }
// get_items("items","new_items", "Lorem ipsum");
// console.log(get_items);
// get_items("category", "category_type", "ABC");
// console.log(get_items);


// // function getElement (id,className,msg){
//     const element = document.getElementById(id);
//     element.classList.add(className);
//     element.textContent = msg;
// }
// getElement("Title", "text-primary", "Hello World")
