
$(document).ready(function(){
	btnMargin($('.btnList.top>dt'));
	btnMargin($('.btnList.bottom>dt'));
	btnMargin($('.btnList.inBook>dt'));
	btnMargin($('.btnList.outBook>dt'));
	btnMargin($('.btnList.firstBtn>dt'));
	btnMargin($('.btnList.secondBtn>dt'));
	btnMargin($('.btnList.fourthBtn>dt'));
	
	btnListfunc($('.btnList.top>dt'));
	btnListfunc($('.btnList.bottom>dt'));
	btnListfunc($('.btnList.inBook>dt'));
	btnListfunc($('.btnList.outBook>dt'));
	btnListfunc($('.btnList.firstBtn>dt'));
	btnListfunc($('.btnList.secondBtn>dt'));
	btnListfunc($('.btnList.thirdBtn>dt'));
	btnListfunc($('.btnList.fourthBtn>dt'));
	ebookBtnList($('.eBook.top>dt'));
	ebookBtnList($('.eBook.bottom>dt'));
	
	btnListfunc($('.category>dt'));
	let swipe = new Swiper(`.banner`,{
		loop:true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		autoplay:{
			delay:3500,
			disableOnInteraction:false
		}
	});
	let eventSwipe = new Swiper(`.eventBanner`,{
		slidesPerView: 5,
        autoplay: {
          delay: 2500,
		  disableOnInteraction:false
        },
		breakpoints: {
			320: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 5
			}
		}
	});
	let eBookSwipe = new Swiper(`.ebookBanner`,{
		slidesPerView: 1,
		spaceBetween: 10,
		autoplay: {
			delay: 2500,
			disableOnInteraction:false
		},
		breakpoints: {
            320: {
                slidesPerView: 2,
				spaceBetween: 15
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 15
			}
		}
	});
	let subBanner = new Swiper(`.subBanner`,{
		effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
		autoplay: {
			delay: 2500,
			disableOnInteraction:false
		  }
	});
	let maniaList = new Swiper(`.maniaListWrap`,{
		slidesPerView: 8,
		spaceBetween: 0,
		autoplay: {
			delay: 2500,
			disableOnInteraction:false
		},
		breakpoints: {
            320: {
                slidesPerView: 3,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10
			}
		}
	});

	if(location.href.split('=')[1]){
		console.log(location.href.split('=')[0].split('?')[1]);
		if(location.href.split('=')[0].split('?')[1] == 'bookSub'){
			btnPage($('.category.bookSubpage>dt'));
		} else {
			btnPage($('.category.mnb>dt'));
		}
	}
});