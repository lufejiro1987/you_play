// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('h1').style.color = 'red';
// })

$(document).on('ready turbolinks:load', function(){
    
    $('h1').click(function(){
        $('#chart-1, #chart-2, #chart-3').fadeToggle('slow');
    });

    $('h1').mouseenter(function(){
        $(this).css('color', 'blue');
    });

    $('h1').mouseleave(function(){
        $(this).css('color', 'black');
    });

    // $('#q').keyup(function(){
    //     console.log($(this).val())
    // });


    // console.log($('h1').text('listado de ventas'))
    // console.log($('h1').html('<p>hola</p>'))
    // console.log($('[name=q]').val('busca algo'));
    // $('#q').attr('name'); // obtiene el atributo name
    // $('#q').attr('class', 'form-input'); // añade o reemplaza el atributo class con el valor form-input
    // $('#q).data() //acceder al dataset

})