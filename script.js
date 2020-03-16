//navigation activation

let navButtons = document.querySelectorAll('.navigation__link');
let btnHome = document.querySelectorAll('.navigation__link')[0];
let btnServises = document.querySelectorAll('.navigation__link')[1];
let btnPortfolio = document.querySelectorAll('.navigation__link')[2];
let btnAbout = document.querySelectorAll('.navigation__link')[3];
let btnContact = document.querySelectorAll('.navigation__link')[4];

function activator(event) {
    navButtons.forEach(el =>
        el.classList.remove("navigation__link_active")
    );
    event.target.classList.add("navigation__link_active");
}

btnHome.addEventListener("click", activator);
btnServises.addEventListener("click", activator);
btnPortfolio.addEventListener("click", activator);
btnAbout.addEventListener("click", activator);
btnContact.addEventListener("click", activator);


// slider

let btnLeftOne = document.querySelectorAll('.slider-chev')[0];
let btnRigthOne = document.querySelectorAll('.slider-chev')[1];

let btnLeftTwo = document.querySelectorAll('.slider-chev')[2];
let btnRigthTwo = document.querySelectorAll('.slider-chev')[3];

let slideOne = document.getElementById('slide1');
let slideTwo = document.getElementById('slide2');

btnLeftOne.addEventListener("click", () => {
    if(slideTwo.classList.contains("hide")) {
        slideOne.style.animation =
        "hideRight 0.4s linear";
        slideTwo.style.animation =
        "showRight 0.4s linear";
      setTimeout(function() {
        slideTwo.classList.remove("hide");
        slideOne.classList.add("hide");
      }, 300);        
    }
}); 

btnLeftTwo.addEventListener("click", () => {
    if(slideOne.classList.contains("hide")) {
        slideTwo.style.animation =
        "hideRight 0.4s ease";
        slideOne.style.animation =
        "showRight 0.4s ease";
      setTimeout(function() {
        slideOne.classList.remove("hide");
        slideTwo.classList.add("hide");
      }, 300);
    } 
}); 

btnRigthOne.addEventListener("click", () => {
    if(slideTwo.classList.contains("hide")) {
        slideOne.style.animation = "hideLeft 0.4s ease";
        slideTwo.style.animation = "showLeft 0.4s ease";
      setTimeout(function() {
        slideTwo.classList.remove("hide");
        slideOne.classList.add("hide");
      }, 300);        
    }
});

btnRigthTwo.addEventListener("click", () => {
    if(slideOne.classList.contains("hide")) {
        slideTwo.style.animation = "hideLeft 0.4s ease";
        slideOne.style.animation = "showLeft 0.4s ease";
      setTimeout(function() {
        slideOne.classList.remove("hide");
        slideTwo.classList.add("hide");
      }, 300);
    } 
}); 


// iphones off/on
  
let iphoneY = document.querySelectorAll('.iphone')[0];
let iphoneX = document.querySelectorAll('.iphone')[1];

let iphoneYOn = document.querySelector('.iphone-vertical__img');
let iphoneXOn = document.querySelector('.iphone-horizontal__img');
let iphoneFront = document.querySelector('.iphone-front');
let iphoneFrontOff = document.querySelector('.iphone-front-off');

let iphoneYOff = document.querySelector('.iphone-vertical-off');
let iphoneXOff = document.querySelector('.iphone-horizontal-off');



document.querySelector('.iphone-vertical__btn').addEventListener("click", () => {
    if(iphoneYOn.classList.contains("hide")){
        iphoneYOff.classList.add("hide");
        iphoneYOn.classList.remove("hide");
    } else {
        iphoneYOn.classList.add("hide");
        iphoneYOff.classList.remove("hide");
    }
});

document.querySelector('.iphone-horizontal__btn').addEventListener("click", () => {
    if(iphoneXOn.classList.contains("hide")){
        iphoneXOff.classList.add("hide");
        iphoneXOn.classList.remove("hide");
    } else {
        iphoneXOn.classList.add("hide");
        iphoneXOff.classList.remove("hide");
    }
});

document.querySelector('.iphone-front__btn').addEventListener("click", () => {
    if(iphoneFront.classList.contains("hide")){
        iphoneFrontOff.classList.add("hide");
        iphoneFront.classList.remove("hide");
    } else {
        iphoneFront.classList.add("hide");
        iphoneFrontOff.classList.remove("hide");
    }
});


//image activation

function imageActivator(event){
    document.querySelector(".layout-4-column").querySelectorAll(".layout-4-column > img").forEach(el =>
      el.classList.remove("image_active")
    );
    event.target.classList.add("image_active");
}
document.querySelector(".layout-4-column").addEventListener("click", imageActivator);


// images sort 

let allTags = document.querySelectorAll('.tag-btn');
let tagAll = document.querySelectorAll('.tag-btn')[0];
let tagWebDisign = document.querySelectorAll('.tag-btn')[1];
let tagGraficDesign = document.querySelectorAll('.tag-btn')[2];
let tagArtwork = document.querySelectorAll('.tag-btn')[3];

function webDesignSorted() {
    let webDesign = document.createElement('div');
    webDesign.className = "layout-4-column";
    webDesign.id = "web-design"
    webDesign.insertAdjacentHTML('afterbegin', '<img src="./assets/img/part2/hares.png" alt="hares" width = "220px" height = "187px" id = "hares"><img src="./assets/img/part2/abstract.png" alt="abstract" width = "220px" height = "187px"><img src="./assets/img/part2/telepuziki.png" alt="telepuziki" width = "220px" height = "187px"><img src="./assets/img/part2/sdk.png" alt="sdk" width = "220px" height = "187px"><img src="./assets/img/part2/chiks.png" alt="chicks" width = "220px" height = "187px"><img src="./assets/img/part2/words.png" alt="words" width = "220px" height = "187px"><img src="./assets/img/part2/envelope.png" alt="envelope" width = "220px" height = "187px"><img src="./assets/img/part2/boat.png" alt="boat" width = "220px" height = "187px"><img src="./assets/img/part2/goodsmile.png" alt="good smile" width = "220px" height = "187px"><img src="./assets/img/part2/ironman.png" alt="ironman" width = "220px" height = "187px"><img src="./assets/img/part2/greenmonstr.png" alt="green monster" width = "220px" height = "187px"><img src="./assets/img/part2/scarysmile.png" alt="scary smile" width = "220px" height = "187px">');
    document.querySelector('.layout-4-column').replaceWith(webDesign);
    document.querySelector(".layout-4-column").addEventListener("click", imageActivator);
}

function graficDesignSorted() {
    let graficDesign = document.createElement('div');
    graficDesign.className = "layout-4-column";
    graficDesign.insertAdjacentHTML('afterbegin', '<img src="./assets/img/part2/sdk.png" alt="sdk" width = "220px" height = "187px"><img src="./assets/img/part2/envelope.png" alt="envelope" width = "220px" height = "187px"><img src="./assets/img/part2/telepuziki.png" alt="telepuziki" width = "220px" height = "187px"><img src="./assets/img/part2/words.png" alt="words" width = "220px" height = "187px"><img src="./assets/img/part2/hares.png" alt="hares" width = "220px" height = "187px"><img src="./assets/img/part2/abstract.png" alt="abstract" width = "220px" height = "187px"><img src="./assets/img/part2/chiks.png" alt="chicks" width = "220px" height = "187px"><img src="./assets/img/part2/boat.png" alt="boat" width = "220px" height = "187px"><img src="./assets/img/part2/goodsmile.png" alt="good smile" width = "220px" height = "187px"><img src="./assets/img/part2/ironman.png" alt="ironman" width = "220px" height = "187px"><img src="./assets/img/part2/greenmonstr.png" alt="green monster" width = "220px" height = "187px"><img src="./assets/img/part2/scarysmile.png" alt="scary smile" width = "220px" height = "187px">');
    document.querySelector('.layout-4-column').replaceWith(graficDesign);
    document.querySelector(".layout-4-column").addEventListener("click", imageActivator);
}

function artworkSorted() {
    let artwork = document.createElement('div');
    artwork.className = "layout-4-column";
    artwork.insertAdjacentHTML('afterbegin', '<img src="./assets/img/part2/scarysmile.png" alt="scary smile" width = "220px" height = "187px"><img src="./assets/img/part2/ironman.png" alt="ironman" width = "220px" height = "187px"><img src="./assets/img/part2/boat.png" alt="boat" width = "220px" height = "187px"><img src="./assets/img/part2/greenmonstr.png" alt="green monster" width = "220px" height = "187px"><img src="./assets/img/part2/goodsmile.png" alt="good smile" width = "220px" height = "187px"><img src="./assets/img/part2/telepuziki.png" alt="telepuziki" width = "220px" height = "187px"><img src="./assets/img/part2/hares.png" alt="hares" width = "220px" height = "187px"><img src="./assets/img/part2/chiks.png" alt="chicks" width = "220px" height = "187px"><img src="./assets/img/part2/envelope.png" alt="envelope" width = "220px" height = "187px"><img src="./assets/img/part2/words.png" alt="words" width = "220px" height = "187px"><img src="./assets/img/part2/abstract.png" alt="abstract" width = "220px" height = "187px"><img src="./assets/img/part2/sdk.png" alt="sdk" width = "220px" height = "187px">');
    document.querySelector('.layout-4-column').replaceWith(artwork);
    document.querySelector(".layout-4-column").addEventListener("click", imageActivator);
}

function allSorted() {
    let all = document.createElement('div');
    all.className = "layout-4-column";
    all.insertAdjacentHTML('afterbegin', '<img src="./assets/img/part2/chiks.png" alt="chicks" width = "220px" height = "187px"><img src="./assets/img/part2/abstract.png" alt="abstract" width = "220px" height = "187px"><img src="./assets/img/part2/scarysmile.png" alt="scary smile" width = "220px" height = "187px"><img src="./assets/img/part2/boat.png" alt="boat" width = "220px" height = "187px"><img src="./assets/img/part2/goodsmile.png" alt="good smile" width = "220px" height = "187px"><img src="./assets/img/part2/telepuziki.png" alt="telepuziki" width = "220px" height = "187px"><img src="./assets/img/part2/hares.png" alt="hares" width = "220px" height = "187px"><img src="./assets/img/part2/greenmonstr.png" alt="green monster" width = "220px" height = "187px"><img src="./assets/img/part2/ironman.png" alt="ironman" width = "220px" height = "187px"><img src="./assets/img/part2/envelope.png" alt="envelope" width = "220px" height = "187px"><img src="./assets/img/part2/words.png" alt="words" width = "220px" height = "187px"><img src="./assets/img/part2/sdk.png" alt="sdk" width = "220px" height = "187px">');
    document.querySelector('.layout-4-column').replaceWith(all);
    document.querySelector(".layout-4-column").addEventListener("click", imageActivator);
}


function tagActivator(event) {
    allTags.forEach(el =>
        el.classList.remove("tag-btn_active")
    );
    event.target.classList.add("tag-btn_active");
}

tagAll.addEventListener("click", () => {
    tagActivator(event);
    allSorted();
});

tagWebDisign.addEventListener("click", () => {
    tagActivator(event);
    webDesignSorted();
});

tagGraficDesign.addEventListener("click", () => {
    tagActivator(event);
    graficDesignSorted();
});

tagArtwork.addEventListener("click", () => {
    tagActivator(event);
    artworkSorted();
});


//modal

let quoteForm = document.forms.quote__form;
let btnCloseModal = document.querySelector('.modal__btn');
let btnForm = document.querySelector('.form__button');
let msgInput = document.querySelector('.message');
let themeInput = document.querySelector('.theme');
let descrInput = document.querySelector('.descr');
let username = quoteForm.elements.username;
let email = quoteForm.elements.email;
let subject = quoteForm.elements.subject;
let desribe = quoteForm.elements.describe;
let modalWindow = document.querySelector('.modal-window');
let modalWindowContent = document.querySelector('.modal-window__content');



function showModalBlur() {
    let modalBlur = document.createElement('div');
    modalBlur.id = 'modal-blur';
    document.body.style.overflowY = 'hidden';
    document.body.append(modalBlur);
}

function hideModal() {
    document.body.style.overflowY = '';
    modalWindow.style.display = "none";
    document.querySelector("#modal-blur").remove();
}

function showModalWindow() {
    showModalBlur();
    modalWindow.style.position = "fixed";
    modalWindow.style.height = "100%"
    modalWindow.style.top = "15%";
    modalWindow.style.display = "flex";
    modalWindowContent.style.display = "flex";
    if(subject.value != ""){themeInput.replaceWith(subject.value);}
    if(desribe.value != ""){descrInput.replaceWith(desribe.value);}
}

btnForm.addEventListener("click", (event) => {
    if(username.value.length != 0 && email.value.length > 5 && email.value.includes('@') && email.value.includes('.')) {
        event.stopPropagation()
        event.preventDefault();
        showModalWindow()
    } else {btnForm.setAttribute('disabled');}
})

btnCloseModal.addEventListener("click", () =>{
    hideModal();
})