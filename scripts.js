/*Man I really hope this isn't bad...
I trust that Spiderman will save me.

      __                                                      
     /  l                                                     
   .'   :               __.....__..._  ____                   
  /  /   \          _.-" $$SSSSSS$$SSSSSSSSSp.                
 (`-: .qqp:    .--.'  .p.S$$$$SSSSS$$$$$$$$SSSSp.             
  """yS$SSSb,.'.g._\.SSSSS^^""       `S""^^$$$SSSb.           
    :SS$S$$$$SSSSS^"""-. _.            `.   "^$$$SSb._.._     
    SSS$$S$$SSP^/       `.               \     "^$SSS$$SSb.   
    :SSSS$SP^" :          \  `-.          `-      "^TSS$$SSb  
     $$$$S'    ;          db               ."        TSSSSSS$,
     :$$P      ;$b        $ ;    (        /   .-"   .S$$$$$$$;
       ;-"     :$ ^s.    d' $           .g. .'    .SSdSSSS$P" 
      /     .-  T.  `b. 't._$ .- / __.-j$'.'   .sSSSdP^^^'    
     /  /      `,T._.dP   "":'  /-"   .'       TSSP'          
    :  :         ,\""       ; .'    .'      .-""              
   _J  ;         ; `.      /.'    _/    \.-"                  
  /  "-:        /"--.b-..-'     .'       ;                    
 /     /  ""-..'            .--'.-'/  ,  :                    
:S.   :     dS$ bug         `-i" ,',_:  _ \                   
:S$b  '._  dS$;             .'.-"; ; ; j `.l                  
 TS$b          "-._         `"  :_/ :_/                       
  `T$b             "-._                                       
    :S$p._             "-.                                    
     `TSSS$ "-.     )     `.                                  
        ""^--""^-. :        \                                 
                  ";         \                                
                  :           `._                             
                  ; /    \ `._   ""---.                       
                 / /   _      `.--.__.'                       
                : :   / ;  :".  \                             
                ; ;  :  :  ;  `. `.                           
               /  ;  :   ; :    `. `.                         
              /  /:  ;   :  ;     "-'                         
             :_.' ;  ;    ; :                                 
                 /  /     :_l         
*/

$(document).ready(function(){

$(".menuButton").click(function(){

    var target=$(this).data("target");

    $(".menuButton").removeClass("selected");
    $(this).addClass("selected");

    if($(".overlay:visible").length>0){
        $(".overlay").fadeOut(295);
        $(target).fadeIn(300);
    }

    else{
    $(".overlay").fadeOut(300);
    $(target).fadeIn(300);
    }
});

$(".name").click(function(){
    $(".overlay").fadeOut(295);
    setTimeout(location.reload.bind(location), 295);
    });

});