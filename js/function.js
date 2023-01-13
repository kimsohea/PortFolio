function btnListfunc(btn){
	btn.click(function(){
		btn.removeClass('active');
		btn.siblings().removeClass('active');
		$(this).addClass('active');
		$(this).next().addClass('active');
		if( $(this).parent().hasClass('btnList')){
			let height = $(this).height()+$(this).next().height()+20;
			$(this).parent().css(`margin-bottom`,height);
		}
	});
}
function headerBg(background) {
	background.mouseenter(function(){
		background.parents('header').addClass('active');
	}).parents('header').mouseleave(function(){
		background.parents('header').removeClass('active');
		background.children('li').removeClass('active');
	});
}
function menuEnter(menu){
	menu.mouseenter(function(){
		menu.children().removeClass('active');
		$(this).children().addClass('active');
	});
}
function menuLeave(menu){
	menu.mouseleave(function(){
		menu.removeClass('active');
		menu.children().removeClass('active');
	});
}

function ebookBtnList(btn){
	btn.siblings('dd').find('div').addClass('swiper');
	btn.siblings('dd').find('div').addClass('ebookBanner');
	btn.siblings('dd').find('ol').addClass('swiper-wrapper');
	btn.siblings('dd').find('ul').addClass('swiper-wrapper');
	btn.siblings('dd').find('li').addClass('swiper-slide');
}
function btnPage(btnpage){
	// console.log(location.href.split('=')[1])
	let src = location.href.split('=')[1];
	btnpage.removeClass('active');
	btnpage.next().removeClass('active');
	btnpage.eq(src).addClass('active');
	btnpage.eq(src).next().addClass('active');
}
function btnMargin(btn){
	let height = btn.height()+btn.next().height()+20;
	btn.parent().css(`margin-bottom`,height);
}	

function rePlaceImg(obj){
    let imgSrc = $(obj).find("img").attr("src").replace('./img','./img/mobile');
    $(obj).find("img").attr("src",imgSrc);
    return true;
}
function reTurnImg(obj){
    let imgSrc = $(obj).find("img").attr("src").replace('./img/mobile','./img');
    $(obj).find("img").attr("src",imgSrc);
    return false;
}
function menuClick(menu) {
    menu.on(`click`, e =>{
        if($(e.target).hasClass(`active`)){
            $(e.target).removeClass(`active`);
            $(e.target).children().removeClass(`active`);
            return false;
        }
        menu.removeClass('active');
        menu.children().removeClass('active');
        $(e.target).toggleClass('active');
        $(e.target).children().toggleClass('active');
    });
}
function toggleBar(tgb) {
    tgb.click(()=>{
        tgb.prev().toggleClass('active');
        tgb.toggleClass('active');
        tgb.parents(`header`).siblings().toggleClass(`active`);
    });
}