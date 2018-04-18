
$(document).ready(function() {              
    $('i.glyphicon-thumbs-up, i.glyphicon-thumbs-down').click(function(){    
        var $this = $(this),
        c = $this.data('count');    
        if (!c) c = 0;
        c++;
        $this.data('count',c);
        $('#'+this.id+'-bs3').html(c);
    });      
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });                                        
}); 

//Funcion para hacer desplazamiento fluido de click con id

$(function(){

    $('a[href*=#]').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({scrollTop: targetOffset}, 1000);

                return false;

           }

      }

  });

});
//Funcion para boton que lleva al top de la pagina.

$('.boton-top').click(function(){
    $('body,html').animate({scrollTop : 0}, 500);
    return false;
});


var boton = document.getElementById("myBtn");

function menuDesplegable (menu){
    document.getElementById("myDropdown").classList.toggle("show"); 
}
boton.addEventListener("click",menuDesplegable);

