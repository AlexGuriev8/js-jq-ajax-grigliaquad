/* Generare una griglia 6x6(36 boxes), ad ogni 
click parte una richiesta AJAX che prende un numero 
random da 1 a 9(scegliere API opportuna).
Se è <= 5 il quadrato diventa giallo, se è > di 5 
il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato. */


$(document).ready(function(){
    for (var i = 0; i < 36; i++) {
        $('.wrapper').append('<div class="square"></div>');
    }

    $('.wrapper').on('click', '.square', function () {
        var square = $(this);

    $.ajax(
        {
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function (risposta) {
               var number = risposta.response;
               square.text(number);
               if( number <= 5 ){
                   square.addClass('yellow');
               }else {
                   square.addClass('green');
               }
            },
            error: function () {
                alert("E' avvenuto un errore. " + errore);
            }
        }
    );

    });

});