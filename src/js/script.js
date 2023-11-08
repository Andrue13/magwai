window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })

    // Modal  

})

$(document).ready(function () {
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation').fadeOut('slow')
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите min. {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

});


// Fetch get jsonplaceholder
let card = 0;
let counter = 1;
const btnLauding = document.getElementById('lauding')
btnLauding.addEventListener('click', () => {
    if (counter > 4) {
        console.log('больше нельзя');
        return;
    }

    for (let i = 0; i < 5; i++) {
        card += 1;
        getcards(card);
        console.log(card);
    }

    counter += 1;
    // console.log(counter)
    
});


async function getcards(card) {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + card);
        let post = await response.json();
        const catalog = document.getElementById('catalogCard')
        catalog.insertAdjacentHTML("beforeend", `<div class="catalog-item">
      <img src="img/${card}.jpeg" alt="coins">
      <h2 class="catalog-item__title">bridge</h2>
      <h3 class="catalog-item__descr">${post.title}</h3>
      <div class="catalog-item__text">${post.body}</div>
      <div class="catalog-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</div>
      <button class="catalog-item__button">Continue reading</button>
  </div>`)
        // await delay()

        //   console.log(post);
    } catch (error) {
        alert(error);
    }
    // console.log(card)
}


