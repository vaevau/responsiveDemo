(function(){
var oCollectionBtn = $('.menu-list li:nth-child(2)');
var oIndexBtn = $('.menu-list li:first-child');
oCollectionBtn.click(function(){
	var searchPic = '/home/vaevau/vaevau/WebDemo/Google+/imgs/icon/search-icos.gif';
	$('.news-contents').css({'padding-bottom': '400px'});
	$('.active a').css('color','#4d4d4d');
	$('#nav').css('background','#03a9f4');	
	$('.search-input').css('background','#29b6f6');
	$('.index').css('border-color','#35baf6').text('收藏集');
	$('.search-icon').css('background','url(/home/vaevau/vaevau/WebDemo/Google+/imgs/icon/search-icos.gif)');
	var con = '';
	for(var i=0; i<3;i++){	
	/*nav + = "<div></div>"*/	
	con += "<div class='collection_s'>"+
			"<ul>"+
				"<li>"+					
					"<div>"+
						"<a class='collection_bg' href='#'><img src='imgs/pics/structure.jpg' alt='' /></a>"+
						"<a class='collection_avatar' href='#'><img src='imgs/pics/structure_avatar.jpg' alt='' /></a>"+
					"</div>"+
					"<div class='collection_info info_1'>"+
						"<a href='#'>建筑物</a>"+
						"<a href='#'>Jason Zou</a>"+
						"<a href='#'>关注</a>"+
					"</div>"+
				"</li>"+
				"<li>"+					
					"<div>"+
						"<a href='#'><img src='imgs/pics/photography.jpg' alt='' /></a>"+
						"<a href='#'><img src='imgs/pics/photography_avatar.jpg' alt='' /></a>"+
					"</div>"+
					"<div class='collection_info info_2'>"+
						"<a href='#'>摄影</a>"+
						"<a href='#'>shi Liu</a>"+
						"<a href='#'>关注</a>"+
					"</div>"+
				"</li>"+
				"<li>"+					
					"<div>"+
						"<a href='#'><img src='imgs/pics/nature.jpg' alt='' /></a>"+
						"<a href='#'><img src='imgs/pics/nature_avatar.jpg' alt='' /></a>"+
					"</div>"+
					"<div class='collection_info info_3'>"+
						"<a href='#'>Nature </a>"+
						"<a href='#'>Kitty.s.Corner</a>"+
						"<a href='#'>关注</a>"+
					"</div>"+
				"</li>"+
				"<li>"+					
					"<div>"+
						"<a href='#'><img src='imgs/pics/animals.jpg' alt='' /></a>"+
						"<a href='#'><img src='imgs/pics/animals_avatar.jpg' alt='' /></a>"+
					"</div>"+
					"<div class='collection_info info_4'>"+
						"<a href='#'>Animals</a>"+
						"<a href='#'>Brent M</a>"+
						"<a href='#'>关注</a>"+
					"</div>"+
				"</li>"+					
			"</ul>"+
		"</div>"				
	};
	$('.news-container').html(con).animate({			
		marginTop: "-232px"
	}, 600);

	
	$(window).scroll(function(){
		if($(document).scrollTop() >= $(document).height() - $(window).height()){
			$('.news-container').append(con);
		 }
	})
});

oIndexBtn.click(function(){
	location.reload();
});


	
})();

 