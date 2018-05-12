/* main logo */
mainLogo = {
	init : function() {
    var winWidth = $(window).width();
		if(winWidth > 890){
			$('.logo img').attr('src','images/desktop-logo.png');
		}
		else {
      $('.logo img').attr('src','images/mobile-logo-old.png');
    }
	}
};

/* mainmenu function */
mainMenu = {
	init : function() {
		var winWidth = $(window).width();
		if(winWidth<890) {
			$(".main-header").addClass("mobile-view");
			$("nav").attr("style","").addClass("mobile-nav");
      		$(".nav-wrapper").attr('style',' ');
			var toggles = document.querySelectorAll("#nav-toggle");

			function toggleHandler(toggle) {
			  toggle.addEventListener( "click", function(e) {
				e.preventDefault();
				(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
			  });
			}

			for (var i = toggles.length - 1; i >= 0; i--) {
			  var toggle = toggles[i];

			  toggleHandler(toggle);

			}

		} else {
			$("nav").attr("style","").removeClass("mobile-nav");
      		$(".nav-wrapper").attr('style',' ');
			$(".main-header").removeClass("mobile-view");
		}
	},
  toggleSlider : function () {
    $("#nav-toggle").click(function() {
    //  $(".mobile-nav .nav-wrapper").toggleClass("open-nav");
			$('.mobile-nav .nav-wrapper').fadeToggle( "slow", "linear" );
			$(".main-header").toggleClass("open-mob-nav");
			$("body").toggleClass("nav-overlay");
		});
  }
};

/* banner image */
bannerImage = {
	init : function() {
    var winWidth = $(window).width();
		var mobileBackground = $('.banner img').data('mob');
		var desktopBackground = $('.banner img').data('desk');
		if(winWidth < 520){
			$('.banner img').attr('src',mobileBackground);
		}
    else {
			$('.banner img').attr('src',desktopBackground);
    }
	}
};

/* select dropdown function */
dropdown = {
	init : function () {
		var winWidth = $(window).width();
		if(winWidth < 890){
			$('.button-holder-wrapper').remove();
			dropdown.drop(".custom-dropdown");
		}
		else {
			$('.drop-holder-wrapper').remove();
			dropdown.buttons(".custom-dropdown");
		}
	},
	buttons : function(calssname) {
		$(calssname).hide();
		$('.button-holder-wrapper').remove();
		$(calssname).each(function() {
				var list     = "";
				var listHtml = "";
				var id       = "";
				$("option",this).each(function() {
						list    += "<li data-value='"+this.value+"' class='"+this.value+"'><a href='#' class='btn-common'>"+this.text+"</a></li>";
				});
				$(this).removeAttr("id");
				//var selected    = $("option:selected",this).text();
				//var selectedid  = $("option:selected",this).val();
				var id          = $(this).attr("name");
				var listHtml    = "<div class='button-holder-wrapper'><ul class='button-list' id='"+id+"'></ul></div>";
				$(this).after(listHtml);
				$("#"+id).append(list);
		});
	},
	drop : function(calssname) {
	    $(calssname).hide();
			$('.drop-holder-wrapper').remove();
	    $(calssname).each(function() {
	        var list     = "";
	        var listHtml = "";
	        var id       = "";
	        $("option",this).each(function() {
	            list    += "<li data-value='"+this.value+"' class='"+this.value+"'>"+this.text+"</li>";
	        });
	        $(this).removeAttr("id");
	        var selected    = $("option:selected",this).text();
	        var selectedid  = $("option:selected",this).val();
	        var id          = $(this).attr("name");
	        var listHtml    = "<div class='drop-holder-wrapper'><input type='hidden' class='inphid-"+id+"' value='"+selectedid+"' name='inphid-"+id+"'/><input type='text' value='"+selected+"' class='inp-"+id+" select-holder'/><div class='drop-icon icon-arrow'><div class='arrow'></div></div><ul class='dropdown-list' id='"+id+"'></ul></div>";
	        $(this).after(listHtml);
	        $("#"+id).append(list);
	    });
	    // $(".dropdown-list").hide();
	    // $(document).on("click",".select-holder, .drop-icon ",function() {
	    //     var id = $(this).parent().find(".dropdown-list").attr("id");
	    //     $(this).parent().find(".dropdown-list").stop().slideToggle("slow");
	    //     $(this).parent().find(".arrow").toggleClass("rotate-up");
	    // });
	    // $(document).on("mouseleave",".dropdown-list",function(){
	    //     $(".dropdown-list").stop().slideUp("fast");
	    //     $(".arrow").removeClass("rotate-up");
	    // });
		// $(document).on("click",".dropdown-list li",function() {
	    //     var selval = $(this).data("value");
	    //     var seltxt = $(this).text();
	    //     var dropid = $(this).parent().attr("id");
	    //     $(this).parent().stop().slideUp("fast");
	    //     $("[name='"+dropid+"']").find("option[value='"+selval+"']").prop('selected', true);
	    //     $(".inp-"+dropid).val(seltxt);
	    //     $(".inphid-"+dropid).val(selval);
	    //     $(".arrow").removeClass("rotate-up");
	    // });
	    // $(document).on("change",".custom-dropdown",function() {
	    //     var idname  = $(this).attr("name");
	    //     var textval = $("option:selected",this).text();
	    //     var val     = $("option:selected",this).val();
	    //     $(".inp-"+idname).attr("value","");
	    //     $(".inp-"+idname).val(textval);
	    //     $(".inphid-"+idname).attr("value","");
	    //     $(".inphid-"+idname).val(val);
	    //     $(".arrow").removeClass("rotate-up");
	    // });
		// $(document).mouseup(function(e) {
		// 	var dropdown = $(".wrapper .verhage-dropdown");
		// 	if(!dropdown.is(e.target) && dropdown.has(e.target).length === 0){
		// 		$('.dropdown-list').stop().slideUp();
		// 		$('.arrow').removeClass('rotate-up');
		// 	}
		// });

		// $(document).on("click",".select-holder, .drop-icon ",function() {
	    //     $(".drop-holder-wrapper .dropdown-list").toggleClass("open-dropdown close-dropdown");
	    // });
	},
	dropfunction : function () {
		$(".dropdown-list").hide();
	    $(document).on("click",".select-holder, .drop-icon ",function() {
	        var id = $(this).parent().find(".dropdown-list").attr("id");
	        $(this).parent().find(".dropdown-list").stop().slideToggle("slow");
	        $(this).parent().find(".arrow").toggleClass("rotate-up");
	    });
	    $(document).on("mouseleave",".dropdown-list",function(){
	        $(".dropdown-list").stop().slideUp("fast");
	        $(".arrow").removeClass("rotate-up");
	    });
		$(document).on("click",".dropdown-list li",function() {
	        var selval = $(this).data("value");
	        var seltxt = $(this).text();
	        var dropid = $(this).parent().attr("id");
	        $(this).parent().stop().slideUp("fast");
	        $("[name='"+dropid+"']").find("option[value='"+selval+"']").prop('selected', true);
	        $(".inp-"+dropid).val(seltxt);
	        $(".inphid-"+dropid).val(selval);
	        $(".arrow").removeClass("rotate-up");
	    });
	    $(document).on("change",".custom-dropdown",function() {
	        var idname  = $(this).attr("name");
	        var textval = $("option:selected",this).text();
	        var val     = $("option:selected",this).val();
	        $(".inp-"+idname).attr("value","");
	        $(".inp-"+idname).val(textval);
	        $(".inphid-"+idname).attr("value","");
	        $(".inphid-"+idname).val(val);
	        $(".arrow").removeClass("rotate-up");
	    });
		$(document).mouseup(function(e) {
			var dropdown = $(".custom-dropdown");
			if(!dropdown.is(e.target) && dropdown.has(e.target).length === 0){
				$('.dropdown-list').stop().slideUp();
				$('.arrow').removeClass('rotate-up');
			}
		});
	}
};













$(document).ready(function(){

	 /* start - javascript functions of home page*/
	 	if($("body").hasClass('home')) {
	      mainLogo.init();
	      mainMenu.init();
	      mainMenu.toggleSlider();
		  dropdown.init(".custom-dropdown");
		  bannerImage.init();
		  dropdown.dropfunction();
	    //  addToCartText.init();
	    }
		if($("body").hasClass('afvalbak')) {
	      mainLogo.init();
	      mainMenu.init();
	      mainMenu.toggleSlider();
		 // dropdown.init(".custom-dropdown");
		 // bannerImage.init();
		 dropdown.drop(".custom-dropdown");
		  dropdown.dropfunction();
	    //  addToCartText.init();
	    }

});

/* Window resize function */
$(window).on("resize" , function(){
  /* start - javascript functions of home page*/
   if($("body").hasClass('home')) {
     mainLogo.init();
     mainMenu.init();
		 dropdown.init(".custom-dropdown");
		 bannerImage.init();
     //addToCartText.init();
   }
   if($("body").hasClass('afvalbak')) {
     mainLogo.init();
     mainMenu.init();
     //addToCartText.init();
   }
});
