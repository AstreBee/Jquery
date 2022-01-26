

$(window).on('load', function(){

        //Cacher l'élément
    $('#btn1').dblclick(function(){
        $('h1').hide();
    });

        //Montrer l'élément

    $('#btn2').dblclick(function(){
        $('h1').show();
    });

        //Afficher une couleur au titre

    $('h1').css({"color": "red"});


        /*Au double-clic sur un bouton, Afficher une alerte (pop-up) indiquant
         pour btn1 le contenu de la balise h1 au format texte
         puis pour btn2 afficher le contenue de la balise h1 au format html*/

    
    $('#btn1').dblclick(function(){
    alert('Text: ' + $('h1').text());
    });
    $('#btn2').dblclick(function(){
    alert('HTML: ' + $('h1').html());
    });


    $('p:first-Child').before('<h2>Les éléments du DOM</h2>');
    
 
    $('li:first-Child').before('<h2>Les éléments du DOM</h2>');
    

    $('p:last').after('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ex, adipisci quam ea soluta ad perferendis, quos repellendus animi provident voluptatum quod dolore excepturi dolorum nam veritatis, dolores labore!</p>');
    

    $('p:first').replaceWith($('p:last'));
    

    $('li:last').replaceWith($('li:first'));
    
});