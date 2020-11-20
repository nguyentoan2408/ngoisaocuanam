/**SCROLL TO TOP**/
$(window).scroll(function() {
    if($(window).scrollTop() >= 300)
    {
        $('#to_top').fadeIn(350);
    }
    else
    {
        $('#to_top').fadeOut(350);
    }
});
$("#to_top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

/**OPEN MAIN MENU **/
$(".all-menu").click(function(){
    if($(".wrap-main-nav").hasClass("sticky")){
        $("html").css("overflow", "hidden");
    } 
    $(".wrap-main-nav").toggleClass("show-all-menu");
    if(!$(".wrap-main-nav").hasClass("show-all-menu")){
        $("html").css("overflow", "");
    } 
});
$(".close-menu").click(function(){
    $(".wrap-main-nav").removeClass("show-all-menu");
    $(".all-menu").removeClass("close-menu-tablet");
    $("html").css("overflow", "");
});


/**SCROLLBAR**/
/*Query(document).ready(function(){
    jQuery('.scrollbar-macosx').scrollbar();
    jQuery('.scrollbar-inner').scrollbar();
});*/

var els = document.querySelectorAll('.scrollbar-macosx,.scrollbar-inner');
$.each(els, function(k){
    SimpleScrollbar.initEl(els[k]);
});


/**SLIDE SECTION PHOTO**/
var swiper_slide_photo = new Swiper('#js_slider_photo', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next-photo',
        prevEl: '.swiper-button-prev-photo',
    },
});

/**SLIDE BOX TOPIC**/
var swiper_slide_topic = new Swiper('#js_slider_topic', {
    slidesPerView: 'auto',
    spaceBetween: 0,

    navigation: {
        nextEl: '.swiper-button-next-topic',
        prevEl: '.swiper-button-prev-topic',
    },
});

/**SLIDE BOX EBANK**/
var swiper_slide_ebank = new Swiper('#js_slider_ebank', {
    slidesPerView: 1,
    slidesPerColumn: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next-ebank',
        prevEl: '.swiper-button-prev-ebank',
    },
});

/**SLIDE BOX QUA TANG**/
var swiper_slide_quatang = new Swiper('#js_slider_quatang', {
    slidesPerView: 1,
    slidesPerColumn: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next-qt',
        prevEl: '.swiper-button-prev-qt',
    },
});

/**SLIDE BOX THONG TIN DOANH NGHIEP**/
var swiper_slide_company = new Swiper('#js_slider_company', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next-dn',
        prevEl: '.swiper-button-prev-dn',
    },
});

/**SLIDE BOX SHOP VNE**/
var swiper_slide_shop = new Swiper('#js_slider_shop', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next-shop',
        prevEl: '.swiper-button-prev-shop',
    },
    breakpoints: {
        1024: {
          slidesPerView: 4,

        },
        768: {
          slidesPerView: 3,

        },


      }
});

/**SLIDE BOX SHOP VNE VERTICAL**/
var swiper_slide_shop_vertical = new Swiper('#js_slider_shop_vertical', {
    slidesPerView: 1,
    slidesPerColumn: 4,
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-button-next-shop-vertical',
        prevEl: '.swiper-button-prev-shop-vertical',
    },
});

/**SLIDE BOX FSELL**/
var swiper_slide_fsell = new Swiper('#js_slider_fsell', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next-fsell',
        prevEl: '.swiper-button-prev-fsell',
    },
    breakpoints: {
        1024: {
          slidesPerView: 4,

        },
        768: {
          slidesPerView: 3,

        },


      }
});

/**SLIDE BOX FSELL**/
var swiper_slide_henho = new Swiper('.wrap-slide-henho', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-henho',
        prevEl: '.swiper-button-prev-henho',
    },
    breakpoints: {
        1024: {
          slidesPerView: 3,

        },
        768: {
          slidesPerView: 2,

        },
        600: {
          slidesPerView: 1,

        },


      }
});