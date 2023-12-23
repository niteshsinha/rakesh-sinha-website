
function getDynamicHeader(activePage) {
  $("#header").empty();

  $("#header").append(`
    <div class="container d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
          <!-- <img src="assets/img/logo.png" alt=""> -->
          <!-- <i class="bi bi-camera"></i>
          <h1>Rakesh Sinha</h1> -->

          <img class="w-100" src="/assets/img/logo.png" alt="logo">
      </a>

      <nav id="navbar" class="navbar">
          <ul>
              <li><a href="index.html" class="${activePage == "home" ? "active" : ''}">Home</a></li>
              <li><a href="gallery-home.html" class="${activePage == "gallery" ? "active" : ''}">Gallery</a></li>
              <li><a href="exhibitions.html" class="${activePage == "exhibitions" ? "active" : ''}">Exhibitions</a></li>
              <li><a href="news-room.html" class="${activePage == "news" ? "active" : ''}">News Room</a></li>
              <li><a href="about.html" class="${activePage == "about" ? "active" : ''}">About</a></li>
          </ul>
      </nav>
      <!-- .navbar -->

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>

    <div class="social_icons"> <!-- html for social media -->
      <a href="https://www.facebook.com" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i><span>Facebook</span></a>
      <a href="https://www.youtube.com" target="_blank" class="youtube"><i class="fab fa-youtube"></i><span>Youtube</span></a>
      <a href="#" target="_blank" class="twitter d-none"><i class="fab fa-twitter"></i><span>Twitter</span></a>
      <a href="https://instagram.com" target="_blank" class="insta"><i class="fab fa-instagram"></i><span>instagram</span></a>
    </div> <!-- html for social media till here -->
  `)
}

$("#footer").empty();

// $("#footer").append(`<div class="container d-flex gap-3 flex-column flex-sm-row justify-content-center justify-content-sm-between">
//     <div class="d-none d-md-block" style="min-width: 112px;">

//     </div>
//     <div class="copyright">
//         &copy; Copyright <strong><span> Rakesh Sinha</span></strong>. All Rights Reserved
//     </div>

//     <div class="header-social-links d-flex align-items-center justify-content-center gap-3">
//         <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
//         <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
//         <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
//         <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
//     </div>
//   </div>`)

$("#footer").append(`<div class="container d-flex justify-content-center">
    <div class="copyright">
        &copy; Copyright <strong><span> Rakesh Sinha</span></strong>. All Rights Reserved
    </div>
  </div>`)

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /*--- Mobile nav toggle ----*/
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');

  }

  setTimeout(() => {
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        mobileNavToogle();

        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
      })
    });
  }, 500);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /*----Initiate glightbox----*/
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.no_loop_slider', {
    speed: 600,
    loop: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });
});