$('.show-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

$('.nav-links-li').on('click', function(e){
	$('.nav-links-li').removeClass('li-active');
	$(this).addClass('li-active');
});

$(function () {
    $('#myTab li:first-child a').tab('show');
    $('.nav-item').on("click", function(e){
    	$('.nav-item').removeClass('active');
    	$(this).addClass('active');
    });
});


document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new Mmenu( "#my-menu", {
                "extensions": [
                    "position-back",
                    "position-right"
                ],
            }
            );
        const api = menu.API;

        document.querySelector( ".mburger" )
            .addEventListener(
                "click", ( evnt ) => {
                    evnt.preventDefault();
                    $('.mburger').addClass('is-active');
                    api.open();
                }
            );

        $( window ).resize(function() {
            api.close();
        });
    }
);
