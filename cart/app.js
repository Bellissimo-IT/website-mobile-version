let nav = document.getElementById('nav-block'), burger = document.getElementById('burger'), burgerCancel = document.getElementById('burger-cancel');
let fixedCart = document.querySelector('.fixed-cart-container'), body = document.querySelector('body');
burger.onclick = function(e) {
    nav.classList.add('active');
    body.style.overflow = "hidden";
}

burgerCancel.onclick = function() {
    nav.classList.remove('active');
    body.style.overflow = "inherit";
}

function cancel() {
    document.location.replace('/index.html');
}

let locationActivator = document.getElementById('location-list-activator'), locationList = document.getElementById('location-list');

locationActivator.onclick = function() {
    locationList.classList.toggle('active');
}

let language = document.querySelectorAll('.language');

language.onclick = function() {
    this.classList.add('active');
}

function scroll() {
    console.log(window.scrollY)
    let scrolling = window.scrollY, pizza = document.querySelector('.pizza-menu-link'), garnir = document.querySelector('.garnir-menu-link'), salad = document.querySelector('.salad-menu-link'), drinks = document.querySelector('.drinks-menu-link'), deserts = document.querySelector('.deserts-menu-link'), souce = document.querySelector('.souce-menu-link');
    if(scrolling < 49) {
        fixedCart.style.display = "none";
    }
    else {
        fixedCart.style.display = 'flex';
    }
    if (scrolling > 50 && scrolling < 2150) {
        pizza.style.color = "#EA2E2E";
    }
    else {
        pizza.style.color = "black";
    }
    if (scrolling > 2152 && scrolling <2900) {
        garnir.style.color = "#EA2E2E";
    }
    else {
        garnir.style.color = "black";
    }
    if (scrolling > 2901 && scrolling < 3600) {
        salad.style.color = "#EA2E2E";
    }
    else {
        salad.style.color = "black";
    }
    if (scrolling > 3601 && scrolling < 5420) {
        drinks.style.color = "#EA2E2E";
    }
    else {
        drinks.style.color = "black";
    }
    if (scrolling > 5421 && scrolling < 6400) {
        deserts.style.color = "#EA2E2E";
    }
    else {
        deserts.style.color = "black";
    }
    if (scrolling > 6401) {
        souce.style.color = "#EA2E2E";
    }
    else {
        souce.style.color = "black";
    }
}

let floatBlockBg = document.getElementById('float-block-bg'), floatBlockCon = document.getElementById('float-block-container'), cancelBtn = document.getElementById('cancel-btn');

function activeFloat() {
    floatBlockBg.classList.add('active'),
    floatBlockCon.classList.add('active');
}

floatBlockBg.onclick = function() {
    floatBlockBg.classList.remove('active'),
    floatBlockCon.classList.remove('active');
}

cancelBtn.onclick = function() {
    floatBlockBg.classList.remove('active'),
    floatBlockCon.classList.remove('active');
}

// let timeBlock1 = document.querySelector('.time-variant-block-one'), timeBlock2 = document.querySelector('.time-variant-block-two'), timeChooseCon = document.querySelector('.time-choose-container');

// timeBlock1.onclick = function() {
//     timeBlock1.classList.add('active');
//     timeBlock2.classList.remove('active'); 
//     timeChooseCon.classList.remove('active');
// }

// timeBlock2.onclick = function() {
//     timeBlock1.classList.remove('active');
//     timeBlock2.classList.add('active'); 
//     timeChooseCon.classList.add('active');
// }