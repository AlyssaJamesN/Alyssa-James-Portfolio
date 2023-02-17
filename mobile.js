$(document).ready(function(){

    $(".accordion-button").click(function(){
    
        //var target=$(this).data("target");
    
        //$(".accordion-button").toggleClass("active");
        //$(this).addClass("active");
    
        if($(this).hasClass("active")){
            $(this).removeClass("active")}
        
    
        else{
        $(this).addClass("active")
        }
    });

    $(".prev, .next").click(function(){

        var slideshowContainer = $(this).parent();
        var isNext = $(this).hasClass("next");
        var activeSlide=0, newActiveSlide, newSlidePosition;

        slideshowContainer.find(".slide").each(function(index){
            if($(this).hasClass("active")){
                activeSlide = index;
                $(this).removeClass("active");
            }
        });

        if(isNext){
            newActiveSlide = (activeSlide + 1) % 3;
        }else{
            newActiveSlide = (activeSlide - 1 + 3) % 3;
        }

        slideshowContainer.find(".slide").each(function(index){
            if(index == newActiveSlide){
                $(this).addClass("active");
            }
        });
        newSlidePosition = -600 * newActiveSlide;
        slideshowContainer.animate({"margin-left":newSlidePosition},200);
    });
});



/*$('.accordion-button').on('click', function{
    $('.accordion-button').removeClass('active')
    $(this).addClass('active');
})


const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(accordionButton => {
    accordionButton.addEventListener("click", event => {
        accordionButton.classList.toggle("active");
    });
});


document.getElementsByClassName("accordion-button").addEventListener("click", function()
{
    if(this.classList.contains("active"))
    
        {this.classList.remove("active");}

    else this.classList.add("active");
}
);*/