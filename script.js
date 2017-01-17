$(document).ready(function()
{
    $( 'a[id$="Scontainer"]' ).click(function(event) 
    {
    	//alert("haha");
        event.preventDefault();
        var href = $(this).attr('href');

        $('#MyContainer').load(href);
        return false;
    });
});