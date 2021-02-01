$(document).ready(function(){
	

	$('.single-item').slick({
		// autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		arrows: false
	});

	$('.courses__slider').slick({
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  variableWidth: true,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.reviews-text').slick();
	$('.reviews-video').slick();


	$('.slide-partners').slick({
	  autoplay: true,
	  autoplaySpeed: 3000,
	  arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.galery__img').slick({
		  autoplay: true,
	  	  autoplaySpeed: 3000,
		  dots: true,
		  arrows: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});
});

let zone = document.getElementById('toggleZone');
zone.onclick = function(){
	let elem = document.getElementById('toggle');
	elem.classList.toggle('show-zone');
	toggleZone.classList.toggle('_arrow');
}

document.documentElement.addEventListener("click", function(e){
	if(!e.target.closest('#toggleZone')){
		let elem = document.getElementById('toggle');
		elem.classList.remove('show-zone');
		toggleZone.classList.remove('_arrow');
	}
});


$(document).ready(function(){
	$('.anchorsTimetable').on("click", function(e){
		e.preventDefault();
		let top = $('#timetable').offset().top;
		$("html, body").animate({
			scrollTop: top - 100
		},600);
	});

	$('.anchorsContacts').on("click", function(e){
		e.preventDefault();
		let top = $('#contacts').offset().top;
		$("html, body").animate({
			scrollTop: top - 150
		},600);
	});
});

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});


$(document).ready(function(){
	$('.changeOdessa').on("click", function(e){
		e.preventDefault();
		$('#toggleZone').html('Одесса');
		$('.timetable__online').hide();
		$('.timetable__kyiv').hide();
		$('.timetable__vinnitsya').hide();
		$('.timetable__odessa').show();
	});
	$('.changeOnline').on("click", function(e){
		e.preventDefault();
		$('#toggleZone').html('Online');
		$('.timetable__online').show();
		$('.timetable__kyiv').hide();
		$('.timetable__vinnitsya').hide();
		$('.timetable__odessa').hide();
	});
	$('.changeKyiv').on("click", function(e){
		e.preventDefault();
		$('#toggleZone').html('Киев');
		$('.timetable__online').hide();
		$('.timetable__kyiv').show();
		$('.timetable__vinnitsya').hide();
		$('.timetable__odessa').hide();
	});
	$('.changeVinnitsya').on("click", function(e){
		e.preventDefault();
		$('#toggleZone').html('Винница');
		$('.timetable__online').hide();
		$('.timetable__kyiv').hide();
		$('.timetable__vinnitsya').show();
		$('.timetable__odessa').hide();
	});


	$('.contacts__odessa').click(function(){
		$('.contacts__city').each(function(){
			$('.contacts__city').addClass('fade-city').removeClass('show-city');
		});
		$('.contacts__odessa').removeClass('fade-city').addClass('show-city');
		$('.right-bar__city').each(function(){
			$('.right-bar__city').addClass('_fade').removeClass('_active');
		});
		$('.right-bar__city.odessa').addClass('_active').removeClass('_fade');
	});


	$('.contacts__kyiv').click(function(){
		$('.contacts__city').each(function(){
			$('.contacts__city').addClass('fade-city').removeClass('show-city');
		});
		$('.contacts__kyiv').removeClass('fade-city').addClass('show-city');
		$('.right-bar__city').each(function(){
			$('.right-bar__city').addClass('_fade').removeClass('_active');
		});
		$('.right-bar__city.kyiv').addClass('_active').removeClass('_fade');
	});


	$('.contacts__lviv').click(function(){
		$('.contacts__city').each(function(){
			$('.contacts__city').addClass('fade-city').removeClass('show-city');
		});
		$('.contacts__lviv').removeClass('fade-city').addClass('show-city');
		$('.right-bar__city').each(function(){
			$('.right-bar__city').addClass('_fade').removeClass('_active');
		});
		$('.right-bar__city.lviv').addClass('_active').removeClass('_fade');
	});


	$('.contacts__online').click(function(){
		$('.contacts__city').each(function(){
			$('.contacts__city').addClass('fade-city').removeClass('show-city');
		});
		$('.contacts__online').removeClass('fade-city').addClass('show-city');
		$('.right-bar__city').each(function(){
			$('.right-bar__city').addClass('_fade').removeClass('_active');
		});
		$('.right-bar__city.online').addClass('_active').removeClass('_fade');
	});


	$('.navigation__burger-menu').click(function(e){
		$('.navigation__burger, .navigation__bar').toggleClass('active');
	});



	$('.nav-list').click(function(){
		$('.navigation__bar').removeClass('active');
	})



	$('.exit').click(function(){
		$('.__hide').fadeOut();
	});

	$('.career-callback__btn').click(function(){
		$('.__hide').fadeIn('fast');
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.__hide').fadeOut();
		}
	});

	$('.__hide').click(function(e) {
		if ($(e.target).closest('.callback-form').length == 0) {
			$(this).fadeOut();					
		}
	});


});

AOS.init();