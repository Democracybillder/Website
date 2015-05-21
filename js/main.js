$(".maintranslation").click(function(){
            $(".lastAction").slideToggle();
            $( ".test" ).appendTo( ".col-md-8" );
    });

$(".form-control").change(function() {
			alert("Input value: " + $(".form-control").val());
});