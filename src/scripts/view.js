import { EventEmitter } from "events";

import debounce from "debounce";

import noavailable from "../img/noavailable.png";

// const card = {
//     "Title": "Guardians of the Galaxy Vol. 2",
//     "Year": "2017",
//     "Rated": "PG-13",
//     "Released": "05 May 2017",
//     "Runtime": "136 min",
//     "Genre": "Action, Adventure, Comedy, Sci-Fi",
//     "Director": "James Gunn",
//     "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
//     "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
//     "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
//     "Language": "English",
//     "Country": "USA",
//     "Awards": "Nominated for 1 Oscar. Another 12 wins & 42 nominations.",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
//     "Ratings": [
//     {
//     "Source": "Internet Movie Database",
//     "Value": "7.7/10"
//     },
//     {
//     "Source": "Rotten Tomatoes",
//     "Value": "83%"
//     },
//     {
//     "Source": "Metacritic",
//     "Value": "67/100"
//     }
//     ],
//     "Metascore": "67",
//     "imdbRating": "7.7",
//     "imdbVotes": "458,168",
//     "imdbID": "tt3896198",
//     "Type": "movie",
//     "DVD": "22 Aug 2017",
//     "BoxOffice": "$389,804,217",
//     "Production": "Walt Disney Pictures",
//     "Website": "https://marvel.com/guardians",
//     "Response": "True"
// };

export default class View extends EventEmitter {
  constructor() {
    super();

    this.app = document.querySelector("#app");
    this.startPage();
    this.mainPage();
    // this.makeFilmotekaPage();
    // this.makeCardPage(card);

    this.input = this.app.querySelector(".input");
    this.input.addEventListener(
      "input",
      debounce(this.onInput.bind(this), 300)
    );
  }

  startPage() {
    this.header(this.app);
    this.footer(this.app);
  }
  // Очистка содержимого
  clearStarMaintPage() {
    this.app.innerHTML = "";
  }
  container(root) {
    const container = document.createElement("div");
    container.classList.add("container");
    root.append(container);
    return container;
  }

  cardList(root) {
    const cardList = document.createElement("div");
    cardList.classList.add("card-list");
    root.append(cardList);
    return cardList;
  }

  header(root) {
    const header = document.createElement("header");
    const logo = document.createElement("a");
    const logoSpanFirst = document.createElement("span");
    const i = document.createElement("i");
    const logoSpanSec = document.createElement("span");
    const menu = document.createElement("ul");
    const menuItemOne = document.createElement("li");
    const menuItemTwo = document.createElement("li");
    const mainPage = document.createElement("a");
    const myFilmoteka = document.createElement("a");

    // start routing
    myFilmoteka.addEventListener("click", e => {
      if (e.target.tagName !== "A") return;
      const state = {
        page: e.target.getAttribute("href")
      };
      const container = document.querySelector(".container");
      container.innerHTML = "";
      const myFils = this.makeFilmotekaPage();
      container.appendChild(myFils);
      history.pushState(state, "", state.page);
      e.preventDefault();
    });

    mainPage.addEventListener("click", e => {
      if (e.target.tagName !== "A") return;
      this.clearStarMaintPage();
      this.startPage();
      this.mainPage();
      history.pushState({}, "", "/");
      e.preventDefault();

    });
    // window.addEventListener("popstate", e => {
    //   e.preventDefault();
    //   if (document.location.pathname === "/myFilmoteka") {
    //     console.log(document.location.pathname);
    //     this.clearStarMaintPage();
    //     this.startPage();
    //     this.mainPage();
    //     history.replaceState(state, "", "");
    //   }
    // });

    // end routing

    header.classList.add("header");
    logo.classList.add("logo");
    i.classList.add("logo-icon");
    menu.classList.add("menu");
    menuItemOne.classList.add("menu-item");
    menuItemTwo.classList.add("menu-item");
    mainPage.classList.add("menu-link");
    myFilmoteka.classList.add("menu-link");

    mainPage.setAttribute("href", "/");
    myFilmoteka.setAttribute("href", "library.html");
    logo.setAttribute("href", "/");

    logoSpanFirst.textContent = "film";
    logoSpanSec.textContent = "teka";
    mainPage.textContent = "Главная страница";
    myFilmoteka.textContent = "Моя фильмотека";

    root.append(header);
    header.append(logo);
    logo.append(logoSpanFirst);
    logo.append(i);
    logo.append(logoSpanSec);
    header.append(menu);
    menu.append(menuItemOne);
    menuItemOne.append(mainPage);
    menu.append(menuItemTwo);
    menuItemTwo.append(myFilmoteka);
  }

  footer(root) {
    const footer = document.createElement("footer");
    const copy = document.createElement("span");
    const copyFirst = document.createElement("span");
    const copySec = document.createElement("span");
    const i = document.createElement("i");
    const team = document.createElement("a");

    footer.classList.add("footer");
    copy.classList.add("copy");
    team.classList.add("team");
    i.classList.add("heart-icon");

    copyFirst.textContent = "Made with ";
    copySec.textContent = " by ";
    team.textContent = "team one";

    team.setAttribute("href", "#");

    root.append(footer);
    footer.append(copy);
    copy.append(copyFirst);
    copy.append(i);
    copy.append(copySec);
    copy.append(team);
  }

  form(root) {
    const input = document.createElement("input");

    input.classList.add("input");
    // adding event listener to input when it was created (fixed a bug)
    input.addEventListener("input", debounce(this.onInput.bind(this), 300));

    root.append(input);
  }

  title(root) {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Персональная фильмотека";
    root.append(title);
  }

  mainPage() {
    const container = this.container(this.app);
    this.title(container);
    this.form(container);
    const cardList = this.cardList(container);
    // this.makeCard(a, cardList);
    // this.makeCard(a, cardList);
    // this.makeCard(a, cardList);
    // this.makeCard(a, cardList);
    // this.makeCard(a, cardList);
    // this.makeCard(a, cardList);
  }

  makeCard(card) {
    // console.log("inside makeCard");
    // console.log("card=", card);

    const item = document.createElement("div");
    const title = document.createElement("p");
    const img = document.createElement("img");
    const link = document.createElement("a");

    // item.setAttribute('id', card.imdbID);

    item.classList.add("item");
    title.classList.add("card-title");
    img.classList.add("image");
    link.classList.add("card-link");

    link.addEventListener("click", this.getFilmID.bind(this));
    link.setAttribute("id", card.imdbID);
    // start routing for card==============================================
    link.addEventListener("click", e => {
      e.preventDefault();
      const idTarget = e.target.closest("a");
      const idT = idTarget.getAttribute("id");
      console.log(idT);
      const state = {
        page: idTarget.getAttribute("id")
      };
      console.log(state.page);
      history.pushState(state, "", "movie.html?imdbID=" + state.page);
      window.addEventListener("popstate", e => {
        e.preventDefault();
        if (document.location.pathname === "/") {
          this.clearStarMaintPage();
          this.startPage();
          this.mainPage();
          history.replaceState(state, "", "");
        } else if (document.location.pathname === "/movie.html") {
          this.emit("onFilmID", idT);
          history.replaceState(state, "", "movie.html?imdbID=" + state.page);
        }
      });
    });

    // end routing for card===================================================
    let imgSrc;
    card.Poster === "N/A" ? (imgSrc = noavailable) : (imgSrc = card.Poster);

    img.setAttribute("src", imgSrc);

    link.setAttribute("href", "");

    title.textContent = card.Title;

    item.append(link);
    link.append(title);

    link.append(img);
    // root.append(item);
    return item;
  }

  makeCardPage(card, id) {
    // console.log('inside makeCard');
    const container = this.container(this.app);

    const shownProp = {
      Awards: card.Awards,
      Rating: `${card.Ratings[0].Value}  (${card.imdbVotes} votes)`,
      Actors: card.Actors,
      Country: card.Country,
      Genre: card.Genre,
      Runtime: card.Runtime
    };

    const cardPage = document.createElement("div");
    const cardImage = document.createElement("div");
    const img = document.createElement("img");
    const cardInfo = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const description = document.createElement("p");
    const cardYear = document.createElement("span");
    const cardList = document.createElement("ul");
    const buttons = document.createElement("div");

    cardPage.classList.add("card-page");
    cardImage.classList.add("image-wrapper");
    cardTitle.classList.add("cardPage-title");
    description.classList.add("desc");
    cardYear.classList.add("card-year");
    img.classList.add("card-image");
    cardInfo.classList.add("card-info");
    cardList.classList.add("card-info__list");
    buttons.classList.add("buttons");

    let imgSrc;
    card.Poster === "N/A" ? (imgSrc = noavailable) : (imgSrc = card.Poster);

    img.setAttribute("src", imgSrc);

    description.textContent = card.Plot;
    cardTitle.textContent = card.Title;
    cardYear.textContent = card.Year;

    container.append(cardPage);
    cardPage.append(cardImage);
    cardImage.append(img);

    cardPage.append(cardInfo);
    cardInfo.append(cardTitle);
    cardInfo.append(description);
    cardTitle.append(cardYear);
    cardInfo.append(cardList);
    cardInfo.append(buttons);

    // this.makeButton("Удалить из просмотренных", buttons);
    // this.makeButton("Запланировать просмотр", buttons);
    // this.makeButton("Добавить в избранное", buttons);
    this.createFilmPageButtons(id, buttons);

    for (const prop in shownProp) {
      if (shownProp.hasOwnProperty(prop)) {
        const infoKey = document.createElement("li");
        const keyValue = document.createElement("span");

        infoKey.textContent = `${prop}: `;
        keyValue.textContent = shownProp[prop];

        infoKey.classList.add("info-key");
        keyValue.classList.add("key-value");

        cardList.append(infoKey);
        infoKey.append(keyValue);
      }
    }
  }

  createFilmPageButtons(id, root) {
    const viewed = document.createElement("button");
    viewed.classList.add("button");
    viewed.addEventListener("click", this.viewedChange.bind(this, this.e, id));
    if (this.viewedCheck(id)) {
      viewed.textContent = "Добавить в просмотренные";
    } else {
      viewed.textContent = "Удалить из просмотренных";
    }
    root.append(viewed);

    // const planed = document.createElement('button');
    // planed.classList.add('button');
    // // planed.addEventListener('click', this.planedChange.bind(this));
    // // planed.textContent = ;
    // if (this.planedCheck(id)) { planed.textContent = 'Добавить в запланированные'; } else { planed.textContent = 'Удалить из запланированных'; }
    // root.append(planed);

    // const favourites = document.createElement('button');
    // favourites.classList.add('button');
    // // favourites.addEventListener('click', this.favouritesChange.bind(this));
    // // favourites.textContent = this.favouritesCheck(id);
    // if (this.favouritesCheck(id)) { favourites.textContent = 'Добавить в избранное'; } else { favourites.textContent = 'Удалить из избранного'; }
    // root.append(favourites);
  }

  viewedChange(e, id) {
    let data = JSON.parse(localStorage.getItem("filmoteka"));
    if (!data.viewedFilms.includes(id)) {
      data.viewedFilms.push(id);
    } else {
      data.viewedFilms = data.viewedFilms.filter(function(ele) {
        return ele !== id;
      });
    }
    localStorage.setItem("filmoteka", JSON.stringify(data));
    if (this.viewedCheck(id)) {
      e.target.textContent = "Добавить в просмотренные";
    } else {
      e.target.textContent = "Удалить из просмотренных";
    }
  }
  viewedCheck(id) {
    let data = JSON.parse(localStorage.getItem("filmoteka"));
    if (!data.viewedFilms.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  // planedChange(event) {

  //   // return;
  // }
  planedCheck(id) {
    let data = JSON.parse(localStorage.getItem("filmoteka"));
    if (!data.viewLaterFilms.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  // favouritesChange(event) {

  //   // return;
  // }
  favouritesCheck(id) {
    let data = JSON.parse(localStorage.getItem("filmoteka"));
    if (!data.favoriteFilms.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  makeButton(text, root) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = text;
    root.append(button);
  }

  //handle search methods
  clearInput(event) {
    return (event.target.value = "");
  }
  onInput(event) {
    let inputText = event.target.value;
    if (inputText === "") {
      this.clearCardsList();
    }
    this.emit("onInputFilmName", inputText);
  }
  //clear search results
  clearCardsList() {
    const cardList = document.querySelector(".card-list");
    cardList.innerHTML = "";
    // cardList.removeEventListener('click', this.openFilmPage.bind(this));
  }
  //render search results
  updateCardsList(model) {
    // console.log('model in view', model);
    // console.log("model.queryFilmList=", model.queryFilmList);
    // console.log('lastQueryTotal=', lastQueryTotal);
    // console.log('model.queryFilmList=', model.queryFilmList);
    // const cardList = this.cardList(container);
    // console.log("model.queryFilmList=", model.queryFilmList);

    const cardList = document.querySelector(".card-list");

    // cardList.addEventListener('click', this.openFilmPage.bind(this));

    this.clearCardsList();
    // model.queryFilmList;
    // console.log("model.queryFilmList=", model.queryFilmList);
    let items = [];
    model.queryFilmList.forEach(item => {
      // console.log("item=", item);
      let newCard = this.makeCard(item);
      // console.log("newCard=", newCard);
      items.push(newCard);
      cardList.append(newCard);
    });

    // Работа с страницами поиска

    // console.log("items=", items);
    // console.log('items num = ', localStorage.getItem('num'));
    // console.log('num pages = ', Math.ceil(localStorage.getItem('num') / 10))
    // if (localStorage.getItem('numPages') > 1) {
    // this.makeButton('Prev', cardList);

    const currPage = model.lastPage;
    const numPages = Math.ceil(model.lastQueryTotal / 10);

    // console.log("currPage=", currPage);
    // console.log("model.lastQueryTotal=", model.lastQueryTotal);
    // console.log("numPages=", numPages);

    // const prev = document.createElement("button");
    // prev.classList.add("button");
    // prev.textContent = "Prev";
    // prev.disabled = true;
    // cardList.append(prev);

    // const button = document.createElement("button");
    // button.classList.add("button");
    // button.textContent =
    //   localStorage.getItem("currPage") +
    //   " / " +
    //   localStorage.getItem("numPages");
    // cardList.append(button);

    // const next = document.createElement("button");
    // next.classList.add("button");
    // next.textContent = "Next";
    // cardList.append(next);

    const prev = this.createPaginationButton("Prev", currPage, numPages);
    cardList.append(prev);
    const pages = this.createPaginationButton("Pages", currPage, numPages);
    cardList.append(pages);
    const next = this.createPaginationButton("Next", currPage, numPages);
    cardList.append(next);
    // this.makeButton('Prev', cardList);

    // this.makeButton('Next', cardList);

    // cardList.append(items);
    // console.log("items=", items);

    //added pagination handler
    // console.log("prev=", prev);
    // console.log("button=", pages);
    // console.log("next=", next);

    // next.addEventListener(
    //   "click",
    //   this.handlePagination("next", currPage, numPages).bind(this)
    // );
    // prev.addEventListener(
    //   "click",
    //   this.handlePagination("prev", currPage, numPages).bind(this)
    // );
  }
  handlePagination(event) {
    if (event.target.nodeName !== "BUTTON") return;
    let btnType = event.target.attributes.btnname.value;
    let currPage = event.target.attributes.currPage.value;
    let numPages = event.target.attributes.numpages.value;
    // console.log("event=",event);
    // console.log("btnType=",btnType);
    // console.log("currPage=", currPage);
    // console.log("numPages=", numPages);
    // console.log("this=", this);
    return this.emit("onPagination", btnType, currPage, numPages);
  }
  createPaginationButton(btnName, currPage, numPages) {
    // console.log('object');
    // console.log("btnName=", btnName);
    //notactiveBtn
    const btn = document.createElement("button");
    btn.classList.add("button");
    btn.setAttribute("btnName", btnName);
    btn.setAttribute("currPage", currPage);
    btn.setAttribute("numPages", numPages);
    if (btnName === "Next" || btnName === "Prev") {
      btn.textContent = btnName;
      // console.log('this=',this);
      if (currPage === 1 && btnName === "Prev") {
        btn.disabled = true;
        btn.classList.add("notactiveBtn");
      }
      if (currPage == numPages && btnName === "Next") {
        btn.disabled = true;
        btn.classList.add("notactiveBtn");
      }
      btn.addEventListener("click", this.handlePagination.bind(this));
    }
    if (btnName === "Pages") {
      btn.textContent = currPage + " / " + numPages;
      btn.disabled = true;
      btn.classList.add("notactiveBtn");
    }
    // console.log("btn in createPaginationButton=", btn);
    return btn;
  }

  makeButton1(text, root) {
    const button = document.createElement("button");
    button.classList.add("button");
    // for my filmoteka
    button.classList.add("btn-filmoteka");
    //button.classList.add("activ-btn");
    button.textContent = text;
    button.addEventListener("click", this.switchBtn.bind(this));
    root.append(button);
  }

  makeFilmotekaPage() {
    const line = document.createElement("div");
    // const container = document.querySelector('.container');

    this.makeButton1("Очередь просмотра", line);
    this.makeButton1("Избранные", line);
    this.makeButton1("Просмотренные", line);
    line.firstElementChild.classList.add("activ-btn");
    line.classList.add("line");

    return line;
  }
  //switch marked buttons
  switchBtn(event) {
    //console.log('event', event);
    if (event.target.nodeName !== "BUTTON") return;
    const parentNode = event.target.parentNode;
    //console.log('parentNode=', parentNode);
    parentNode.childNodes.forEach(node => node.classList.remove("activ-btn"));
    event.target.classList.add("activ-btn");
  }

  //create film page
  getFilmID(event) {
    // console.log("event=", event);
    // let parenDiv=event.target.closest('div');
    // console.log("parenDiv=", parenDiv);
    let target = event.target.closest("a");
    // console.log("target=", target);
    let id = target.getAttribute("id");
    return this.emit("onFilmID", id);
    // console.log("id=", id);
  }
  //show film page
  createFilmPage(data, id) {
    // console.log('data in view=', data);
    this.clearStarMaintPage();
    this.startPage();
    this.makeCardPage(data, id);
  }
  //   activBtn(){

  //   }
}
