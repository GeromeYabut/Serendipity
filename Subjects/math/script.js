$(document).ready(function()
{
    $( 'li>a[id$="Scontainer"]' ).click(function(event) 
    {
    	//alert("haha");
        event.preventDefault();
        var href = $(this).attr('href');
        //alert("Loading " + href);
        //$('#MyContainer').hide('fast',loadContent);
        $('#MyContainer').load(href);
        return false;
    });
});