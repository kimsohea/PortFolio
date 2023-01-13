
$(document).ready(function(){
    let moswitch = false;
    let dviWidth = window.innerWidth;
    $(window).scroll(()=>{
        // console.log(window.scrollY);
        let scrollScore = window.scrollY;
        if(scrollScore > 300){
            $(`header`).css(`position`,`fixed`).css(`z-index`,`5`).css(`top`,`0`);
        } else {
            $(`header`).css(`position`,`relative`);
        }
    });
    if(dviWidth < 768){
        $(".banner").addClass("mobile");
        $(".banner li").each(function(){
            moswitch = rePlaceImg(this);
        });
        $(".depthlist2m").parent('li').addClass("selected");
        menuClick($(`.depthlist1m>li.selected`));
        toggleBar($(`.toggleBar`));
        btnListfunc($('.btnList.thirdBtn>dt'),dviWidth);
    } else {
        headerBg($('.gnb'));
	    menuEnter($('.gnb>li'));
	    menuEnter($('.depthlist1>li'));
	    menuEnter($('.depthlist2>li'));
	    menuLeave($('.depthlist1'));
	    menuLeave($('.gnb>li'));
    }
    $(window).resize(function(){
        let deviceWidth = window.innerWidth;
        if(deviceWidth<=768){
            if(moswitch==false){
                $(".banner").addClass("mobile");
                $(".banner li").each(function(){
                    moswitch = rePlaceImg(this);
                });
            }
            $(".depthlist2m").parent('li').addClass("selected");
            menuClick($(`.depthlist1m>li.selected`));
            toggleBar($(`.toggleBar`));
	        btnMargin($('.btnList.top>dt'));
            btnMargin($('.btnList.bottom>dt'));
            btnMargin($('.btnList.inBook>dt'));
            btnMargin($('.btnList.outBook>dt'));
            btnMargin($('.btnList.firstBtn>dt'));
            btnMargin($('.btnList.secondBtn>dt'));
            btnMargin($('.btnList.fourthBtn>dt'));
        } else {
            if(moswitch == true){
                $(".banner").removeClass("mobile");
                $(".banner li").each(function(){
                    moswitch = reTurnImg(this);
                });
            }
            headerBg($('.gnb'));
	        menuEnter($('.gnb>li'));
	        menuEnter($('.depthlist1>li'));
	        menuEnter($('.depthlist2>li'));
	        menuLeave($('.depthlist1'));
	        menuLeave($('.gnb>li'));
	        btnListfunc($('.btnList.top>dt'));
	        btnListfunc($('.btnList.bottom>dt'));
	        btnListfunc($('.btnList.inBook>dt'));
	        btnListfunc($('.btnList.outBook>dt'));
	        btnListfunc($('.btnList.firstBtn>dt'));
	        btnListfunc($('.btnList.secondBtn>dt'));
	        btnListfunc($('.btnList.fourthBtn>dt'));
        }
    });
});

