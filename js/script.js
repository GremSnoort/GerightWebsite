window.addEventListener("DOMContentLoaded", () => {

    // dropdown

    const dropdown = document.querySelectorAll('.reservations__dropdown').forEach(function (item) {

        const dropdownActive = item.querySelector('.reservations__dropdown-name')
        const dropdownContent = item.querySelector('.reservations__dropdown-content')
        const dropdownListItem = item.querySelectorAll('.reservations__dropdown-item')
        const dropdownActiveText = item.querySelector('.reservations__dropdown-name-text')

        dropdownActive.addEventListener('click', function (e) {

            dropdownContent.classList.toggle('reservations__dropdown-content--active')
            dropdownActive.classList.toggle('reservations__dropdown-name--active')

            if (dropdownContent.classList.contains('reservations__dropdown-content--active')) {
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'
            } else {
                dropdownContent.style.maxHeight = null
            }

        })

        dropdownListItem.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation()

                dropdownContent.classList.remove('reservations__dropdown-content--active')
                dropdownActive.classList.remove('reservations__dropdown-name--active')
                dropdownContent.style.maxHeight = null

                dropdownActiveText.innerText = e.target.innerText

            })
        })

        document.addEventListener('click', function (e) {
            if (e.target !== dropdownActive) {
                dropdownContent.classList.remove('reservations__dropdown-content--active')
                dropdownActive.classList.remove('reservations__dropdown-name--active')
                dropdownContent.style.maxHeight = null
            }
        })

    })


    // Tabs

    const tabs = document.querySelectorAll('.menu__tabs')
    const tab = document.querySelectorAll('.menu__tab')
    const tabContent = document.querySelectorAll('.menu__content')

    if(tabs){

        tab.forEach((item,i) => {
            item.addEventListener('click', () => {
                tab.forEach(items => {
                    items.classList.remove('menu__tab--active')
                })
                tab[i].classList.add('menu__tab--active')

                tabContent.forEach(tabContent => {
                    tabContent.classList.remove('menu__content--active')
                })
                tabContent[i].classList.add('menu__content--active')
            })

        })

    }


    // slider

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            1121:{
                slidesPerView: 3,
            },
            661:{
                slidesPerView: 2,
            }
        },
        navigation: {
          nextEl: '.blogs__btn-next',
          prevEl: '.blogs__btn-prev',
        }
      });


    // burger

    const burgerBtn = document.querySelector('.burger-btn')
    const burgerMenu = document.querySelector('.burger-menu')

    if(burgerBtn){
        burgerBtn.addEventListener('click', () => {
            burgerMenu.classList.toggle('burger-menu--visible')
            burgerBtn.classList.toggle('burger-btn--active')

            if(burgerMenu.classList.contains('burger-menu--visible')){
                document.querySelector('body').style.overflow = "hidden"
            }else{
                document.querySelector('body').style.overflow = "visible"
            }
        })
    }



})