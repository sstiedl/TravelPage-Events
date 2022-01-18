"use strict";
//Parent declaration
let sorting = false;
class Locations {
    constructor(locName, locAdress, image, created) {
        this.locName = locName;
        this.locAdress = locAdress;
        this.image = image;
        this.created = created;
    }
    display() {
        return ` <div class="col-lg-3 col-md-6 col-sm-12 mt-3 mb-2  d-flex justify-content-center"> 
                <div class="card myBg text-light  " style="width: 18rem;">
                <img src="${this.image}" class="card-img-top" alt="...">
                    <div class="card-body ">
                <p class="card-text "><b>${this.locName.toLocaleUpperCase()}</b></p>
                <p class="card-text">${this.locAdress}</p><br><br>
                <p class="card-text text-end"><span class="myDate">Created: ${this.created.toLocaleString([], { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</span></p>
                </div>
             </div>
            </div>`;
    }
}
//Child declaration
class Restaurants extends Locations {
    constructor(locName, locAdress, image, cuisineGenre, website, phoneNumber, created) {
        super(locName, locAdress, image, created);
        this.cuisineGenre = cuisineGenre;
        this.website = website;
        this.phoneNumber = phoneNumber;
    }
    display() {
        return ` <div class="col-lg-3 col-md-6 col-sm-12 mt-3 mb-2 d-flex justify-content-center"> 
                     <div class="card myBg text-light " style="width: 18rem;">
                     <a href="${this.website}"><img src="${this.image}" class="card-img-top" alt="..."></a>
                    <div class="card-body ">
                     <p class="card-text"><b>${this.locName.toLocaleUpperCase()}</b></p>
                     <p class="card-text fst-italic">${this.cuisineGenre}</p>
                     <p class="card-text"><a class="linkDisp text-light" href="${this.website}">${this.website}</a></p>
                     <p class="card-text">${this.locAdress}</p>
                      <p class="card-text"><a class="linkDisp text-light" href="${this.phoneNumber}">${this.phoneNumber}</a></p><br><br>
                     <p class="card-text text-end"><span class="myDate">Created: ${this.created.toLocaleString([], { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</span></p>
                     </div>
                  </div>
                 </div>`;
    }
}
//Child declaration
class Events extends Restaurants {
    constructor(locName, locAdress, image, cuisineGenre, website, phoneNumber, date, price, created) {
        super(locName, locAdress, image, cuisineGenre, website, phoneNumber, created);
        this.date = date;
        this.price = price;
    }
    display() {
        return ` <div class="col-lg-3 col-md-6 col-sm-12 mt-3 mb-2  lh-1 myCenter d-flex justify-content-center"> 
                 <div class="card  myBg text-light " style="width: 18rem;">
                 <a href="${this.website}"><img src="${this.image}" class="card-img-top" alt="..."></a>
                     <div class="card-body">
                 <p class="card-text"><b>${this.locName.toLocaleUpperCase()}</b></p>
                 <p class="card-text fst-italic">${this.cuisineGenre}</p>
                 <p class="card-text"><a class="linkDisp text-light" href="${this.website}">${this.website}</a></p>
                 <p class="card-text">${this.date}</p>
                 <p class="card-text">${this.locAdress}</p>
                 <p class="card-text"><a class="linkDisp text-light" href="${this.phoneNumber}">${this.phoneNumber}</a></p><br><br>
                 <p class="card-text"><b>${this.price} kr</b></p>
                 <p class="card-text text-end fs-6"><span class="myDate">Created: ${this.created.toLocaleString([], { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</span></p>
                 </div>
              </div>
             </div>`;
    }
}
//delcaring locations, restaurants, events
let place1 = new Locations(" Oslo Rådhuset", "Rådhusplassen 1, 0037 Oslo", "../img/radhuset.png", "2015-03-07 19:58");
let place2 = new Locations(" Frammuseet", "Bygdøy Peninsula, Oslo", "../img/frammuseet.png", "2021-08-25 13:12");
let place3 = new Locations(" Holmenkollen", "Kongeveien 5, 0787 Oslo", "../img/holmenkollen.png", "2021-08-17 17:41");
let place4 = new Locations(" Oslo Opera House", "Kirsten Flagstads Plass 1, 0150 Oslo", "../img/opera.png", "2013-08-17 15:22");
let places = [place1, place2, place3, place4];
for (let val of places) {
    val.created = new Date(val.created);
}
let rest1 = new Restaurants("Fiskeriet Youngstorgett", "Youngstorget 2b, 0181 Oslo", "../img/fiskeriet.png", "Seafood / European", "https://www.fiskeriet.net/", "+47 22 42 45 40", "2021-08-21 09:56");
let rest2 = new Restaurants("Hos Thea", "Gabels gate 11, 0272 Oslo", "../img/hosthea.png", " Scandinavian / Norwegian", "https://www.hosthea.no/", "+47 22 44 68 74", "2021-08-18 18:36");
let rests = [rest1, rest2];
for (let val of rests) {
    val.created = new Date(val.created);
}
let event1 = new Events("Godspeed You! Black Emperor", "Rockefeller - Badstugata 2, 0183 Oslo", "../img/godspeed.png", "Post-Rock", "https://cstrecords.com", "+47 22 20 32 32", "Fr. 13.04.2018 - 21:00", 350, "2017-01-08 16:11");
let event2 = new Events("Bellwitch", "Blå - Brenneriveien 9C, 0182 Oslo", "../img/bellwitch.png", "Doom-Metal", "https://www.bellwitchdoom.net/", "+47 23 21 32 32", "Fr. 10.12.2018 - 22:00", 220, "2017-08-15 09:16");
let event3 = new Events("Alcest", "Vulkan Arena- Vulkan 26, 0175 Oslo", "../img/alcest.png", "Blackgaze", "http://www.alcest-music.com/", "+47 902 35 086", "Mon. 21.02.2022 - 21:00", 380, "2021-03-24 12:45");
let events = [event1, event2, event3];
for (let val of events) {
    val.created = new Date(val.created);
}
let allLocations = [place1, place2, place3, place4, rest1, rest2, event1, event2, event3];
for (let val of allLocations) {
    val.created = new Date(val.created);
}
//Creating Layout
const createLayout = () => {
    document.getElementById("myContainer").innerHTML = "";
    document.getElementById("myContainer").innerHTML += `<div class="row  m-0 mt-2 p-0 " id="locRow"><div class="fs-5 text-light myBg p-2">Places</div>`;
    for (let val of places) {
        document.getElementById("locRow").innerHTML += val.display();
    }
    document.getElementById("myContainer").innerHTML += `<div class="row m-0 mt-2 p-0 " id="restRow"><div class="fs-5 text-light myBg p-2">Restaurants</div>`;
    for (let val of rests) {
        document.getElementById("restRow").innerHTML += val.display();
    }
    document.getElementById("myContainer").innerHTML += `<div class="row m-0 mt-2 p-0  " id="evRow"><div class="fs-5 text-light myBg p-2">Events</div>`;
    for (let val of events) {
        document.getElementById("evRow").innerHTML += val.display();
    }
};
createLayout();
//Sort by Date
const sortOnClick = () => {
    document.getElementById("myContainer").innerHTML = "";
    if (sorting == false) {
        allLocations.sort(function (a, b) {
            let dateA = new Date(a.created);
            let dateB = new Date(b.created);
            return +dateB - +dateA;
        });
        sorting = true;
        document.getElementById("date-btn").innerHTML = `Date <b>&#10515;</b>&#8593;`;
        document.getElementById("myContainer").innerHTML += `<div class="row m-0 mt-2 p-0" id="myRow"></div>`;
        for (let val of allLocations) {
            document.getElementById("myRow").innerHTML += val.display();
        }
    }
    else {
        allLocations.sort(function (a, b) {
            let dateA = new Date(a.created);
            let dateB = new Date(b.created);
            return dateA - dateB;
        });
        sorting = false;
        document.getElementById("date-btn").innerHTML = `Date &#8595;<b>&#10514;</b>`;
        document.getElementById("myContainer").innerHTML += `<div class="row m-0 mt-2 p-0" id="myRow"></div>`;
        for (let val of allLocations) {
            document.getElementById("myRow").innerHTML += val.display();
        }
    }
};
//Declaring buttons for sorting
document.getElementById("cat-btn").addEventListener("click", createLayout);
document.getElementById("date-btn").addEventListener("click", sortOnClick);
