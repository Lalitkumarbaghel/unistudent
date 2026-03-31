// start header fixed
let header = document.querySelector('.main-header')
window.addEventListener("scroll", function () {
  if (window.scrollY > 110) {
    header.classList.add("stickry-header");
  } else {
    header.classList.remove("stickry-header");
  }
});

// end header fixed

$('.banner-slider').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots:true,
  autoplay: false,
  autoplayTimeout: 2200,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
$('.study-destination').owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  navText: ['<i class="fa-light fa-chevron-left"></i>', '<i class="fa-light fa-chevron-right"></i>'],
  dots: true,
  autoplay: false,
  autoplayTimeout: 2200,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false
    },
    500: {
      items: 2,
      margin: 10,
      nav: true,
      dots: false
    },
    992: {
      items: 3,
      nav: true,
      dots: false
    },
    1200: {
      items: 4
    }
  }
});
$('.feature').owlCarousel({
  loop: true,
  margin: 13,
  nav: false,
  navText: ['<i class="fa-light fa-chevron-left"></i>', '<i class="fa-light fa-chevron-right"></i>'],
  dots: true,
  autoplay: true,
  autoplayTimeout: 2200,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false
    },
    450: {
      items: 2,
      nav: true,
      dots: false
    },
    768: {
      items: 3,
      nav: true,
      dots: false
    },
    992: {
      items: 5
    },
    1200: {
      items: 5
    }
  }
});
$('.partner').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2200,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
});
$('.services-slider').owlCarousel({
  loop: true,
  margin: 13,
  nav: false,
  navText: ['<i class="fa-light fa-chevron-left"></i>', '<i class="fa-light fa-chevron-right"></i>'],
  dots: true,
  autoplay: true,
  autoplayTimeout: 2200,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false
    },
    600: {
      items: 1,
      nav: true,
      dots: false
    },
    992: {
      items: 1
    }
  }
});

$('.testimonials-slider').owlCarousel({
  loop: true,
  margin: 13,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2200,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false
    },
    600: {
      items: 1,
      nav: true,
      dots: false
    },
    768: {
      items: 2,
      nav: true,
      dots: false
    },
    992: {
      items: 2
    },
     1200: {
      items: 3
    }
  }
});

$('.popular-study').owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  navText: ['<i class="fa-light fa-chevron-left"></i>', '<i class="fa-light fa-chevron-right"></i>'],
  dots: true,
  autoplay: false,
  autoplayTimeout: 2200,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      dots: false
    },
    500: {
      items: 2,
      margin: 10,
      nav: true,
      dots: false
    },
    992: {
      items: 3,
      nav: true,
      dots: false
    },
    1200: {
      items: 4
    }
  }
});

var counted2 = 0;
$(window).scroll(function () {
  if ($('#counter2').length == 0) {
    return;
  }
  var oTop2 = $('#counter2').offset().top - window.innerHeight;
  if (counted2 == 0 && $(window).scrollTop() > oTop2) {
    $('.count2').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted2 = 1;
  }

});

let mblmen = document.querySelector('.mn_btn');
let menus = document.querySelector('.menu');
let overly = document.querySelector('.mdl_bgclr');
let menuHide = document.querySelector('.cls-btn');


mblmen.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  document.body.style.overflowY = 'hidden';
  menus.classList.toggle('active');
  overly.classList.add('active');
});

menuHide.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  document.body.style.overflowY = 'scroll';
  menus.classList.remove('active');
  overly.classList.remove('active');
});

document.addEventListener('click', function () {
  menus.classList.remove('active');
  overly.classList.remove('active');
  document.body.style.overflowY = 'scroll';
});

menus.addEventListener('click', function (e) {
  e.stopPropagation();
});

const arw = document.querySelectorAll('.arw-icn');
const submenu2 = document.querySelectorAll('.submenu');

arw.forEach((itm) => {
  itm.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (window.innerWidth < 1200) {
      let parentLi = itm.closest('li');
      let currentSubmenu = parentLi.querySelector('.submenu');
      let isOpen = currentSubmenu.classList.contains('active');
      submenu2.forEach((submenu) => {
        submenu.classList.remove('active');
      });
      if (!isOpen) {
        currentSubmenu.classList.add('active');
      }
    }
  });
});


let currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.menuS > ul > li').forEach((menuItem) => {
  let parentLink = menuItem.querySelector('.mn-anchr');
  let subLinks = menuItem.querySelectorAll('.submenu a');
  if (parentLink && parentLink.getAttribute('href') === currentPage) {
    parentLink.classList.add('active');
  }
  subLinks.forEach((subLink) => {
    let subHref = subLink.getAttribute('href');
    if (subHref === currentPage) {
      parentLink?.classList.add('active');
      menuItem.classList.add('submenu-open'); 
    }
  });
});

// $('.select2').select2();
// start country code
$(document).ready(function() {
  $(".mobile").each(function() {
    const input = this;
    const fieldName = input.name;
    const iti = window.intlTelInput(input, {
      initialCountry: "in",
      nationalMode: false,
      separateDialCode: false,
      autoPlaceholder: "aggressive",
      formatOnDisplay: false,
      dropdownContainer: document.body,
      utilsScript: "assets/intl-tel-input/utils.js"
    });
    input.intlTelInputInstance = iti;
    function cleanAndValidate() {
      if (window.intlTelInputUtils) {
        input.value = iti.getNumber(intlTelInputUtils.numberFormat.E164);
      } else {
        input.value = (iti.getNumber() || '').replace(/\s+/g, '');
      }
      const $form = $(input).closest('form');
      const bv = $form.data('bootstrapValidator');
      if (bv && fieldName) {
        bv.updateStatus(fieldName, 'NOT_VALIDATED', null);
        bv.revalidateField(fieldName);
      }
    }
    input.addEventListener("input", cleanAndValidate);
    input.addEventListener("countrychange", cleanAndValidate);
    cleanAndValidate();

  });
});
$(document).on('click focus', '.iti__flag-container', function() {
  const input = $(this).closest('.iti').find('input');
  setTimeout(() => {
    const dropdown = document.querySelector('.iti--container .iti__country-list');
    if (!dropdown) return;
    const rect = input[0].getBoundingClientRect();
    dropdown.parentElement.style.position = 'absolute';
    dropdown.parentElement.style.top = rect.bottom + window.scrollY + 'px';
    dropdown.parentElement.style.left = rect.left + window.scrollX + 'px';
    dropdown.parentElement.style.width = rect.width + 'px';
    dropdown.parentElement.style.zIndex = '99999';
    if (!dropdown.querySelector('.cntrycodesrchbx')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'cntrycodesrchbx';
      wrapper.style.cssText = `
        width: 100%;
        position: sticky;
        top: 0;
        background-color: #fff;
        z-index: 10000;
        padding: 6px 0;
        border-bottom: 1px solid #ddd;
      `;
      const inputSearch = document.createElement('input');
      inputSearch.type = 'text';
      inputSearch.placeholder = 'Search country...';
      inputSearch.className = 'countrySearchInput';
      inputSearch.style.cssText = `
        width: 92%;
        padding: 8px 10px;
        margin: 0 auto;
        display: block;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 13px;
        background-color: #fff;
        outline:none;
      `;

      ['mousedown', 'click', 'keydown', 'keyup', 'touchstart'].forEach(evt =>
        inputSearch.addEventListener(evt, e => e.stopPropagation())
      );

      inputSearch.addEventListener('input', function() {
        const val = this.value.toLowerCase();
        dropdown.scrollTop = 0;
        dropdown.querySelectorAll('.iti__country').forEach(item => {
          const text = item.innerText.toLowerCase();
          item.style.display = text.includes(val) ? 'block' : 'none';
        });
      });

      wrapper.appendChild(inputSearch);
      dropdown.insertBefore(wrapper, dropdown.firstChild);
      inputSearch.focus();
    }
  }, 250);
});
$(document).on('input', '.mobile',
  function() {
    this.value = this.value.replace(/[^0-9+]/g, '');
  }); 
// end country code
// start captch
let changetext = document.querySelector('.captch-text p');
let changecatpchBtn = document.querySelector('.changeCpch');
  function catpchFun() {
    let rendumval = Math.floor(Math.random() * 9) + 1;
    changetext.innerText = `1 + ${rendumval} =`; 
  }
  if (changecatpchBtn) {
    changecatpchBtn.addEventListener('click', function() {
      catpchFun();
    });
  }
  catpchFun();
let videos = document.querySelectorAll('.blog-video video');
let videoplaybtn = document.querySelector('.play-btn button');
let playBtnContainer = document.querySelector('.play-btn');

videoplaybtn.addEventListener('click', function(e) {
    if (videos[0].paused) {
        videos[0].play();
        this.innerHTML = '<i class="fa-regular fa-pause"></i>';
        setTimeout(() => {
            playBtnContainer.style.opacity = '0';
            playBtnContainer.style.transition = 'opacity 0.3s linear';
        }, 500);
    } else {
        videos[0].pause();
        this.innerHTML = '<i class="fa-solid fa-play"></i>';
        playBtnContainer.style.opacity = '1';
        playBtnContainer.style.transition = 'opacity 0.3s linear';
    }
});
videos[0].addEventListener('ended', function() {
    playBtnContainer.style.transition = 'opacity 0.3s linear';
    playBtnContainer.style.opacity = '1'; 
    videoplaybtn.innerHTML = '<i class="fa-solid fa-play"></i>'; 
});
playBtnContainer.addEventListener('mouseover', function() {
    playBtnContainer.style.opacity = '1';
    playBtnContainer.style.transition = 'opacity 0.3s linear';
});
playBtnContainer.addEventListener('mouseleave', function() {
    if (videos[0].paused) {
        playBtnContainer.style.opacity = '1';
        playBtnContainer.style.transition = 'opacity 0.3s linear';
    } else {
        playBtnContainer.style.opacity = '0';
        playBtnContainer.style.transition = 'opacity 0.3s linear';
    }
});

