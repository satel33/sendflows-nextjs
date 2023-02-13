/* =================================================================


  Template Name : Findeas – Saas & Software Landing Page Template
  Version       : 1.0.0
  Author        : Qoorasa
  Author URI    : https://themeforest.net/user/qoorasa
  License       : https://themeforest.net/licenses/standard
  
  Table of Content:
  01. AJAX
  02. Preloader / Window Load
  03. Plugins
  04. Navbar
  05. Input

  
==================================================================== */

'use strict'

/* =================================================================
    01. AJAX
==================================================================== */

// Newsletter (Mailchimp)
$('#newsletter').on('submit', function (e) {
  e.preventDefault()

  var mailchimpform = $(this)
  $.ajax({
    type: 'POST',
    url: mailchimpform.attr('action'),
    data: mailchimpform.serialize(),
    beforeSend: function () {
      $('#newsletterBtnSubmit').addClass('d-none')
      $('#newsletterBtnSending').removeClass('d-none')
      $('#newsletterAlertSuccess').addClass('d-none')
      $('#newsletterAlertError').addClass('d-none')
    },
    success: function () {
      $('#newsletterBtnSending').addClass('d-none')
      $('#newsletterBtnSubmit').removeClass('d-none')
      $('#newsletterAlertSuccess').removeClass('d-none')
    },
    error: function () {
      $('#newsletterBtnSending').addClass('d-none')
      $('#newsletterBtnSubmit').removeClass('d-none')
      $('#newsletterAlertError').removeClass('d-none')
    },
  })
})

// SMTP Contact
$('#contact').on('submit', function (e) {
  e.preventDefault()

  $.ajax({
    type: 'post',
    url: 'php/smtp.php',
    data: $('#contact').serialize(),
    beforeSend: function () {
      $('#contactBtnSubmit').addClass('d-none')
      $('#contactBtnSending').removeClass('d-none')
      $('#contactAlertSuccess').addClass('d-none')
      $('#contactAlertError').addClass('d-none')
    },
    success: function () {
      $('#contactBtnSending').addClass('d-none')
      $('#contactBtnSubmit').removeClass('d-none')
      $('#contactAlertSuccess').removeClass('d-none')
      $('#contact')[0].reset()
    },
    error: function () {
      $('#contactBtnSending').addClass('d-none')
      $('#contactBtnSubmit').removeClass('d-none')
      $('#contactAlertError').removeClass('d-none')
    },
  })
})

/* =================================================================
    02. Preloader / Window Load
==================================================================== */
$(window).on('load', function () {
  // Fadeout Preloader
  $('#preloader').fadeOut()

  // Enable Scrollbar
  $('body').css({
    overflow: 'auto',
    height: 'auto',
  })

  // AOS
  AOS.init({
    once: true,
  })
})

$(function () {
  /* =================================================================
      03. Plugins
  ==================================================================== */

  // SVG Inject
  SVGInject(document.querySelectorAll('[data-svg-inject]'))

  // Medium Zoom
  mediumZoom('[data-zoomable]')

  // Plyr Video Player
  if ($('div').hasClass('plyr')) {
    var player = new Plyr('.plyr', {
      hideControls: false,
      captions: {
        active: true,
      },
    })
    player.toggleControls(false)
    player.on('play', function () {
      player.toggleControls(true)
    })
  }

  // Swiper Slide
  if ($('div').hasClass('swiper-container')) {
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

  // Counterup
  $('.counter').counterUp()

  // Prism
  if ($('code').hasClass('prism')) {
    Prism.plugins.NormalizeWhitespace.setDefaults({
      'remove-trailing': true,
      'remove-indent': true,
      'left-trim': true,
      'right-trim': true,
      'tabs-to-spaces': 2,
      'spaces-to-tabs': 2,
    })
  }

  /* =================================================================
      04. Navbar
  ==================================================================== */
  var navbarHeight = $('.navbar-scroll-autohide').outerHeight()
  var lastScrollTop = 0

  // Auto Hide Navbar When Scrolling
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop()
    if (scrollTop > lastScrollTop && scrollTop > navbarHeight * 2) {
      $('.navbar-scroll-autohide').css('top', `-${navbarHeight}px`)
      $('.navbar-scroll-autohide .dropdown-menu').removeClass('show')
      $('.navbar-scroll-autohide .navbar-collapse').removeClass('show')
    } else {
      $('.navbar-scroll-autohide').css('top', '0')
    }
    lastScrollTop = scrollTop
  })

  // Navbar Dropdown Submenu
  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
      $(this)
        .parents('.dropdown-menu')
        .first()
        .find('.show')
        .removeClass('show')
    }
    var $subMenu = $(this).next('.dropdown-menu')
    $subMenu.toggleClass('show')

    $(this)
      .parents('li.nav-item.dropdown.show')
      .on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass('show')
      })
    return false
  })

  /* =================================================================
      05. Input
  ==================================================================== */

  // The Name of The File Appear on Select
  $('.custom-file-input').on('change', function () {
    var fileName = $(this).val().split('\\').pop()
    $(this).siblings('.custom-file-label').addClass('selected').html(fileName)
  })
})
