document.addEventListener('DOMContentLoaded', (event) => {
    $('.product').mouseenter(function(){
        var img = $(this).find('img');
        var src = img.attr('src');
        var alt = img.attr('alt');
        img.attr('src', alt);
        img.attr('alt', src);
    });

    $('.product').mouseleave(function(){
        var img = $(this).find('img');
        var src = img.attr('src');
        var alt = img.attr('alt');
        img.attr('src', alt);
        img.attr('alt', src);
    });
});