!function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],d=0,m=[];d<s.length;d++)o=s[d],n[o]&&m.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(u&&u(e);m.length;)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={0:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([81,1]),a()}({30:function(t,e,a){t.exports=a.p+"src/img/noavailable.png"},63:function(t,e,a){},80:function(t,e){},81:function(t,e,a){"use strict";a.r(e);a(49),a(56),a(58),a(61),a(63),a(64),a(68);var i="https://www.omdbapi.com/?s=",n="&apikey=4095ed63",r="&page=";function o(t,e){return fetch(i+t+r+e+n).then(function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))}).catch(function(t){console.error(t)})}var s="https://www.omdbapi.com/?i=",l="&apikey=4095ed63";function c(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.queryFilmList=[],this.viewedFilms=[],this.viewLaterFilms=[],this.favoriteFilms=[],this.lastPage=1,this.lastQueryTotal=1,this.lastFilm={},this.lastQuery="",this.filmoteka={queryFilmList:this.queryFilmList,viewLaterFilms:this.viewLaterFilms,viewedFilms:this.viewedFilms,favoriteFilms:this.favoriteFilms,lastQuery:this.lastQuery,lastPage:this.lastPage,totalPages:this.lastQueryTotal}}var e,a,i;return e=t,(a=[{key:"localStorageAvailable",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localStorage";try{var e=window[t],a="__storage_test__";return e.setItem(a,a),e.removeItem(a),!0}catch(t){return!1}}},{key:"localStorageWrite",value:function(t){if(this.localStorageAvailable)try{localStorage.setItem("filmoteka",JSON.stringify(this.filmoteka))}catch(t){return console.log("Error during writing from local storage"),null}}},{key:"localStorageRead",value:function(){if(this.localStorageAvailable)try{var t=JSON.parse(localStorage.getItem("filmoteka"));return void(null!==t&&(this.filmoteka=t))}catch(t){return void console.log("Local Storage is empty")}}},{key:"getFavoriteFilmsFromLS",value:function(){return this.localStorageRead(),this.filmoteka.favoriteFilms}},{key:"getViewedFilmsFromLS",value:function(){return this.localStorageRead(),this.filmoteka.viewedFilms}},{key:"getViewLaterFilmsFromLS",value:function(){return this.localStorageRead(),this.filmoteka.viewLaterFilms}},{key:"addFilmToList",value:function(t,e){return this[t].push(e),this[t].reverse()}},{key:"deleteFilmFromList",value:function(t,e){return this[t]=this[t].filter(function(t){return e.imdbID!==t.imdbID})}},{key:"handleSearchQuery",value:function(t){var e=this;arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.localStorageRead(),this.lastQuery=t,this.filmoteka.lastQuery=this.lastQuery;var a=o(t.replace(/(^\s*)|(\s*)$/g,""),1);return a.then(function(t){t.Response&&(e.queryFilmList=t.Search,e.lastQueryTotal=t.totalResults,e.lastPage=1,e.filmoteka.totalPages=Math.ceil(e.lastQueryTotal/10),e.filmoteka.queryFilmList=e.queryFilmList,e.localStorageWrite(e.filmoteka),localStorage.setItem("numPages",Math.ceil(e.lastQueryTotal/10)),localStorage.setItem("currPage",1))}),a}},{key:"takeFilmInfo",value:function(t){var e,a=this;return(e=t,fetch(s+e+l).then(function(t){if(t.ok)return t.json();throw new Error("Error while fetching: ".concat(t.statusText))})).then(function(t){return a.lastFilm=t,a.localStorageRead(),a.filmoteka.totalPages=Math.ceil(a.lastQueryTotal/10),a.filmoteka.lastFilm=a.lastFilm,a.localStorageWrite(a.filmoteka),a.lastFilm})}},{key:"resolvePages",value:function(t,e,a){var i=this;"Prev"===t&&1!=+e?this.lastPage=+e-1:this.lastPage,"Next"===t&&+e<+a&&(this.lastPage=+e+1);var n=o(this.lastQuery.replace(/(^\s*)|(\s*)$/g,""),this.lastPage);return n.then(function(t){t.Response&&(i.queryFilmList=t.Search,i.lastQueryTotal=t.totalResults,i.filmoteka.totalPages=Math.ceil(i.lastQueryTotal/10),i.filmoteka.lastPage=i.lastPage,i.filmoteka.queryFilmList=i.queryFilmList,i.localStorageWrite(i.filmoteka))}),n}},{key:"handleListWithAction",value:function(t){var e=t.libraryListName,a=t.action;if("add"===a){if(this.isFilmInList(e,this.lastFilm.imdbID))return;this.addFilmToList(e,this.lastFilm)}if("remove"===a){if(!this.isFilmInList(e,this.lastFilm.imdbID))return;this.deleteFilmFromList(e,this.lastFilm)}this.filmoteka[e]=this[e],this.localStorageWrite(this.filmoteka)}},{key:"isFilmInList",value:function(t,e){return 0!==this[t].length&&this[t].find(function(t){return t.imdbID===e})}},{key:"takeFilmInfoFromLocalStorage",value:function(t){var e={viewLaterFilms:null,viewedFilms:null,favoriteFilms:null};return this.localStorageAvailable("localStorage")?(this.localStorageRead(),this.filmoteka?(this.viewLaterFilms=this.filmoteka.viewLaterFilms,this.viewedFilms=this.filmoteka.viewedFilms,this.favoriteFilms=this.filmoteka.favoriteFilms,e={viewLaterFilms:this.isFilmInList("viewLaterFilms",t),viewedFilms:this.isFilmInList("viewedFilms",t),favoriteFilms:this.isFilmInList("favoriteFilms",t)}):e):e}}])&&c(e.prototype,a),i&&c(e,i),t}(),d=(a(69),a(70),a(78),a(48)),m=a(29),h=a.n(m),v=a(30),f=a.n(v);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var F=function(t){function e(){var t,a,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,(t=!(i=y(e).call(this))||"object"!==p(i)&&"function"!=typeof i?b(a):i).app=document.querySelector("#app"),t.startPage(),t.mainPage(),t.input=t.app.querySelector(".input"),t.input.addEventListener("input",h()(t.onInput.bind(b(t)),300)),t.dataAboutFilmFromLocalStorage=null,t.filmPageBtnText={viewedFilms:{add:"Отметить как просмотренный",remove:"Удалить из просмотренных"},viewLaterFilms:{add:"Запланировать просмотр",remove:"Отменить просмотр"},favoriteFilms:{add:"Добавить в избранное",remove:"Удалить из избранного"}},t.app.addEventListener("click",t.setListener.bind(b(t))),t}var a,i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(e,d["EventEmitter"]),a=e,(i=[{key:"setListener",value:function(t){"Очередь просмотра"===t.target.textContent&&this.emit("onViewLaterFilmsBtn"),"Избранные"===t.target.textContent&&this.emit("onFavotitesBtn"),"Просмотренные"===t.target.textContent&&this.emit("onViewedFilmsBtn")}},{key:"startPage",value:function(){this.header(this.app),this.footer(this.app)}},{key:"clearStarMaintPage",value:function(){this.app.innerHTML=""}},{key:"container",value:function(t){var e=document.createElement("div");return e.classList.add("container"),t.append(e),e}},{key:"cardList",value:function(t){var e=document.createElement("div");return e.classList.add("card-list"),t.append(e),e}},{key:"header",value:function(t){var e=this,a=document.createElement("header"),i=document.createElement("a"),n=document.createElement("span"),r=document.createElement("i"),o=document.createElement("span"),s=document.createElement("ul"),l=document.createElement("li"),c=document.createElement("li"),u=document.createElement("a"),d=document.createElement("a");d.addEventListener("click",function(t){if("A"===t.target.tagName){var a={page:t.target.getAttribute("href")};return e.makeFilmotekaPage(),history.pushState(a,"",a.page),t.preventDefault(),e.emit("onViewLaterFilmsBtn")}}),window.addEventListener("popstate",function(t){t.preventDefault(),"/"===document.location.pathname&&(e.clearStarMaintPage(),e.startPage(),e.mainPage(),e.emit("onBackToSearchResults"),history.replaceState({},"",""))}),u.addEventListener("click",function(t){t.preventDefault(),"A"===t.target.tagName&&(e.clearStarMaintPage(),e.startPage(),e.mainPage(),history.pushState({},"","/"))}),i.addEventListener("click",function(t){t.preventDefault(),e.clearStarMaintPage(),e.startPage(),e.mainPage(),history.pushState({},"","/")}),window.addEventListener("popstate",function(t){t.preventDefault(),"/library.html"===document.location.pathname&&(e.clearStartMainPage(),e.makeFilmotekaPage(),e.emit("onViewLaterFilmsBtn"),history.replaceState({},"","library.html"))}),a.classList.add("header"),i.classList.add("logo"),r.classList.add("logo-icon"),s.classList.add("menu"),l.classList.add("menu-item"),c.classList.add("menu-item"),u.classList.add("menu-link"),d.classList.add("menu-link"),u.setAttribute("href","/"),d.setAttribute("href","library.html"),i.setAttribute("href","/"),n.textContent="film",o.textContent="teka",u.textContent="Главная страница",d.textContent="Моя фильмотека",t.append(a),a.append(i),i.append(n),i.append(r),i.append(o),a.append(s),s.append(l),l.append(u),s.append(c),c.append(d)}},{key:"footer",value:function(t){var e=document.createElement("footer"),a=document.createElement("span"),i=document.createElement("span"),n=document.createElement("span"),r=document.createElement("i"),o=document.createElement("a");e.classList.add("footer"),a.classList.add("copy"),o.classList.add("team"),r.classList.add("heart-icon"),i.textContent="Made with ",n.textContent=" by ",o.textContent="team one",o.setAttribute("href","#"),t.append(e),e.append(a),a.append(i),a.append(r),a.append(n),a.append(o)}},{key:"form",value:function(t){var e=document.createElement("input");e.classList.add("input"),e.addEventListener("input",h()(this.onInput.bind(this),300)),t.append(e)}},{key:"title",value:function(t){var e=document.createElement("h1");e.classList.add("title"),e.textContent="Персональная фильмотека",t.append(e)}},{key:"mainPage",value:function(){var t=this.container(this.app);this.title(t),this.form(t),this.cardList(t)}},{key:"makeCard",value:function(t){var e,a=this,i=document.querySelector(".card-list"),n=document.createElement("div"),r=document.createElement("p"),o=document.createElement("img"),s=document.createElement("a");return n.classList.add("item"),r.classList.add("card-title"),o.classList.add("image"),s.classList.add("card-link"),s.addEventListener("click",this.getFilmID.bind(this)),s.setAttribute("id",t.imdbID),s.addEventListener("click",function(t){t.preventDefault();var e=t.target.closest("a"),i=e.getAttribute("id"),n={page:e.getAttribute("id")};history.pushState(n,"","movie.html?imdbID="+n.page),window.addEventListener("popstate",function(t){t.preventDefault(),"/"===document.location.pathname?(a.clearStarMaintPage(),a.startPage(),a.mainPage(),history.replaceState(n,"","")):"/movie.html"===document.location.pathname&&(a.emit("onFilmID",i),history.replaceState(n,"","movie.html?imdbID="+n.page))})}),e="N/A"===t.Poster?f.a:t.Poster,o.setAttribute("src",e),s.setAttribute("href",""),r.textContent=t.Title,n.append(s),s.append(r),s.append(o),i.append(n),n}},{key:"makeCardPage",value:function(t,e){var a,i=this.container(this.app),n=0!==t.Ratings.length?"".concat(t.Ratings[0].Value,"  (").concat(t.imdbVotes," votes)"):null,r={Awards:t.Awards,Rating:n,Actors:t.Actors,Country:t.Country,Genre:t.Genre,Runtime:t.Runtime},o=document.createElement("div"),s=document.createElement("div"),l=document.createElement("img"),c=document.createElement("div"),u=document.createElement("h2"),d=document.createElement("p"),m=document.createElement("span"),h=document.createElement("ul"),v=document.createElement("div");for(var p in o.classList.add("card-page"),s.classList.add("image-wrapper"),u.classList.add("cardPage-title"),d.classList.add("desc"),m.classList.add("card-year"),l.classList.add("card-image"),c.classList.add("card-info"),h.classList.add("card-info__list"),v.classList.add("buttons"),a="N/A"===t.Poster?f.a:t.Poster,l.setAttribute("src",a),d.textContent=t.Plot,u.textContent=t.Title,m.textContent=t.Year,i.append(o),o.append(s),s.append(l),o.append(c),c.append(u),c.append(d),u.append(m),c.append(h),c.append(v),this.createFilmPageButtons(e,v),r)if(r.hasOwnProperty(p)){var g=document.createElement("li"),y=document.createElement("span");g.textContent="".concat(p,": "),y.textContent=r[p],g.classList.add("info-key"),y.classList.add("key-value"),h.append(g),g.append(y)}}},{key:"addAttribute",value:function(t,e){return t.setAttribute("library-list",e)}},{key:"addActionAtrribute",value:function(t,e){return t.setAttribute("action",e)}},{key:"takeListNameAndAction",value:function(t){var e={libraryListName:t.target.getAttribute("library-list"),action:t.target.getAttribute("action")};return this.emit("onHandleList",e)}},{key:"getDataAboutFilmFromLocalStorage",value:function(t){this.emit("onCreateFilmPage",t)}},{key:"createFilmPageButtons",value:function(t,e){this.getDataAboutFilmFromLocalStorage(t);var a=document.createElement("button");this.addAttribute(a,"viewedFilms"),a.classList.add("button"),this.dataAboutFilmFromLocalStorage.viewedFilms?(this.addActionAtrribute(a,"remove"),a.textContent=this.filmPageBtnText.viewedFilms.remove):(this.addActionAtrribute(a,"add"),a.textContent=this.filmPageBtnText.viewedFilms.add),a.addEventListener("click",this.takeListNameAndAction.bind(this)),a.addEventListener("click",this.changeActionAndLabel.bind(this)),e.append(a);var i=document.createElement("button");i.classList.add("button"),this.addAttribute(i,"viewLaterFilms"),this.dataAboutFilmFromLocalStorage.viewLaterFilms?(this.addActionAtrribute(i,"remove"),i.textContent=this.filmPageBtnText.viewLaterFilms.remove):(this.addActionAtrribute(i,"add"),i.textContent=this.filmPageBtnText.viewLaterFilms.add),i.addEventListener("click",this.takeListNameAndAction.bind(this)),i.addEventListener("click",this.changeActionAndLabel.bind(this)),e.append(i);var n=document.createElement("button");n.classList.add("button"),this.addAttribute(n,"favoriteFilms"),this.dataAboutFilmFromLocalStorage.favoriteFilms?(this.addActionAtrribute(n,"remove"),n.textContent=this.filmPageBtnText.favoriteFilms.remove):(this.addActionAtrribute(n,"add"),n.textContent=this.filmPageBtnText.favoriteFilms.add),n.addEventListener("click",this.takeListNameAndAction.bind(this)),n.addEventListener("click",this.changeActionAndLabel.bind(this)),e.append(n)}},{key:"changeActionAndLabel",value:function(t){if("BUTTON"===t.target.nodeName){var e=t.target.getAttribute("action"),a=t.target.getAttribute("library-list"),i="";"add"===e?(e="remove",i=this.filmPageBtnText[a].remove):(e="add",i=this.filmPageBtnText[a].add),this.addActionAtrribute(t.target,e),t.target.textContent=i}}},{key:"makeButton",value:function(t,e){var a=document.createElement("button");a.classList.add("button"),a.textContent=t,e.append(a)}},{key:"clearInput",value:function(t){return t.target.value=""}},{key:"onInput",value:function(t){var e=t.target.value;""===e&&this.clearCardsList(),this.emit("onInputFilmName",e)}},{key:"clearCardsList",value:function(){document.querySelector(".card-list").innerHTML=""}},{key:"updateCardsList",value:function(t){var e=this,a=document.querySelector(".card-list");this.clearCardsList();var i=[];t.queryFilmList.forEach(function(t){var n=e.makeCard(t);i.push(n),a.append(n)});var n=t.lastPage,r=Math.ceil(t.lastQueryTotal/10),o=document.createElement("div");o.classList.add("controls");var s=this.createPaginationButton("Prev",n,r);o.append(s);var l=this.createPaginationButton("Pages",n,r);o.append(l);var c=this.createPaginationButton("Next",n,r);o.append(c),0!==t.queryFilmList.length&&a.append(o)}},{key:"handlePagination",value:function(t){if("BUTTON"===t.target.nodeName){var e=t.target.attributes.btnname.value,a=t.target.attributes.currPage.value,i=t.target.attributes.numpages.value;return this.emit("onPagination",e,a,i)}}},{key:"createPaginationButton",value:function(t,e,a){var i=document.createElement("button");return i.classList.add("button"),i.setAttribute("btnName",t),i.setAttribute("currPage",e),i.setAttribute("numPages",a),"Next"!==t&&"Prev"!==t||(i.textContent=t,1===e&&"Prev"===t&&(i.disabled=!0,i.classList.add("notactiveBtn")),e==a&&"Next"===t&&(i.disabled=!0,i.classList.add("notactiveBtn")),i.addEventListener("click",this.handlePagination.bind(this))),"Pages"===t&&(i.textContent=e+" / "+a,i.disabled=!0,i.classList.add("notactiveBtn")),i}},{key:"clearStartMainPage",value:function(){document.querySelector(".container").innerHTML=""}},{key:"makeLibraryButton",value:function(t,e){var a=document.createElement("button");a.classList.add("button"),a.classList.add("btn-filmoteka"),a.textContent=t,a.addEventListener("click",this.switchBtn),e.append(a)}},{key:"switchBtn",value:function(t){"BUTTON"===t.target.nodeName&&(t.target.parentNode.childNodes.forEach(function(t){return t.classList.remove("activ-btn")}),t.target.classList.add("activ-btn"))}},{key:"makeFilmotekaPage",value:function(){var t=document.querySelector(".container");t.innerHTML="";var e=document.createElement("div");e.classList.add("filmoteka-buttons"),this.makeLibraryButton("Очередь просмотра",e),this.makeLibraryButton("Избранные",e),this.makeLibraryButton("Просмотренные",e),t.append(e),this.cardList(t),e.querySelector("button").classList.add("activ-btn")}},{key:"deleteAutofocus",value:function(){document.querySelector("button").autofocus=!1}},{key:"ifNothingToRender",value:function(){var t=document.querySelector(".card-list"),e=document.createElement("p");e.classList.add("message"),e.textContent="Нет данных для отображения",t.append(e)}},{key:"cardsRender",value:function(t){var e=this;t.forEach(function(t){e.makeCard(t)})}},{key:"getFilmID",value:function(t){var e=t.target.closest("a").getAttribute("id");return this.emit("onFilmID",e)}},{key:"createFilmPage",value:function(t,e){this.clearStarMaintPage(),this.startPage(),this.makeCardPage(t,e)}}])&&g(a.prototype,i),n&&g(a,n),e}();function k(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var w=function(){function t(e,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.model=e,this.view=a,a.on("onInputFilmName",this.handleSearch.bind(this)),a.on("onFilmID",this.handleFilmID.bind(this)),a.on("onPagination",this.handlePaginationEvent.bind(this)),a.on("onCreateFilmPage",this.handleCreateFilmPage.bind(this)),a.on("onHandleList",this.handleList.bind(this)),a.on("onBackToSearchResults",this.handleBackToSearchResults.bind(this)),a.on("onViewLaterFilmsBtn",this.handleViewLaterFilms.bind(this)),a.on("onFavotitesBtn",this.handleFavorites.bind(this)),a.on("onViewedFilmsBtn",this.handleViewedFilms.bind(this))}var e,a,i;return e=t,(a=[{key:"handleBackToSearchResults",value:function(){return this.view.updateCardsList(this.model)}},{key:"handleSearch",value:function(t,e){var a=this;this.model.handleSearchQuery(t,e).then(function(){return a.view.updateCardsList(a.model)})}},{key:"handleNextPageSearch",value:function(t,e){var a=this;this.model.handleSearchQuery(t,e).then(function(t,e){return a.view.updateCardsList(a.model)})}},{key:"handleFilmID",value:function(t){var e=this;this.model.takeFilmInfo(t).then(function(a){e.view.createFilmPage(a,t)})}},{key:"handlePaginationEvent",value:function(t,e,a){var i=this;this.model.resolvePages(t,e,a).then(function(t,e){return i.view.updateCardsList(i.model)})}},{key:"handleCreateFilmPage",value:function(t){var e=this.model.takeFilmInfoFromLocalStorage(t);return this.view.dataAboutFilmFromLocalStorage=e}},{key:"handleList",value:function(t){var e=t.libraryListName,a=t.action;this.model.handleListWithAction({libraryListName:e,action:a})}},{key:"handleViewLaterFilms",value:function(){var t=this.model.getViewLaterFilmsFromLS();0===t.length?(this.view.clearCardsList(),this.view.ifNothingToRender()):(this.view.clearCardsList(),this.view.cardsRender(t))}},{key:"handleFavorites",value:function(){var t=this.model.getFavoriteFilmsFromLS();0===t.length?(this.view.clearCardsList(),this.view.deleteAutofocus(),this.view.ifNothingToRender()):(this.view.clearCardsList(),this.view.deleteAutofocus(),this.view.cardsRender(t))}},{key:"handleViewedFilms",value:function(){var t=this.model.getViewedFilmsFromLS();0===t.length?(this.view.clearCardsList(),this.view.deleteAutofocus(),this.view.ifNothingToRender()):(this.view.clearCardsList(),this.view.deleteAutofocus(),this.view.cardsRender(t))}}])&&k(e.prototype,a),i&&k(e,i),t}(),P=(a(80),new F);new w(new u,P),function(t){if(t.length&&t.split("?")[1].split("&").includes("redirected=true")){var e=t.split("?")[1].split("&").filter(function(t){return t.includes("page")})[0].split("=")[1];if("movie"===e){var a=t.split("mdbID=")[1];P.emit("onFilmID",a),history.replaceState({},"","/movie.html?imdbID="+a)}"library"===e&&(P.clearStartMainPage(),P.makeFilmotekaPage(),P.emit("onViewLaterFilmsBtn"),history.replaceState({},"","library.html"))}}(window.location.search)}});
//# sourceMappingURL=app.a71e9cb0.js.map