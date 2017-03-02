

$(document).ready( function() {


function grabGifs(elem){

        // console.log("elem: " + elem);
        $("#test").empty();
        console.log("this: " + this);
        // var miscText = elem.value;
        var miscText = $(this).text();
        console.log(miscText);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+escape(miscText)+"&api_key=dc6zaTOxFJmzC&limit=10&offset=0"
        console.log("queryURL:" + queryURL);

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {


                console.log(response);
                // console.log(response.data[0].images.original.url);
                console.log("Image of Enter Ajax is:" + response.data["0"].images.original.url);

                for(var i =0; i < response.data.length; i++){
                    var gifDiv = $("<div class='item'>");

                var imageTest = $("<img>");
                imageTest.attr("src", response.data[i].images.original.url);
                imageTest.attr("alt", "NoImage");
                imageTest.attr("width", "200px");
                imageTest.attr("height", "200px");

                var rating = response.data[i].rating;

                var p = $('<p>').text("Rating: " + rating);

                gifDiv.prepend(p);
                gifDiv.prepend(imageTest);


                $("#test").append(gifDiv);
                
                }
            });

            
    }

	 var globalArray = [];



    /////////////////////////////

    $("#gifTextInput").keyup(function(e) {
        var code = e.which; 
        if (code == 13) {
            clickFunction();
        }
    });
    /////////////////////////////

    $("#submitGif").on("click", function() {
        clickFunction();

    });
    //Populating Buttons
    var populateButtons = function(){

    	var topic = ["Casablanca", "Psycho","The Godfather", "Star Wars", "Pulp Fiction", "Reservoir Dogs", "Rocky", "Up"];
    	for(i = 0; i < topic.length; i++){

    		$("#addButtons").append('<button class="dynamicButtons">'+topic[i]+'</button>');

    	}
    }

    populateButtons();


    var clickFunction = function() {
    		
        $("#test").empty();
            var gettingInput = $("#gifTextInput").val();

            console.log("gettingInput: " + gettingInput);

            // gettingInput=gettingInput.replace(" ", "+");

            // escape(gettingInput)

            // var queryURL = "http://api.giphy.com/v1/gifs/limit=10&random?&api_key=dc6zaTOxFJmzC&limit=2&tag=" + escape(gettingInput);
            var queryURL = "http://api.giphy.com/v1/gifs/search?q="+escape(gettingInput)+"&api_key=dc6zaTOxFJmzC&limit=10&offset=0"

            // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gettingInput.replace(" ", "+") + "&random?&api_key=dc6zaTOxFJmzC";


            console.log(queryURL);




            $.ajax({
                url: queryURL,
                method: "GET"
            })



            .done(function(response) {
            	


                console.log(response);
                // console.log(response.data[0].images.original.url);
                console.log("Image of Enter Ajax is:" + response.data["0"].images.original.url);

                for(var i =0; i < response.data.length; i++){
                    var gifDiv = $("<div class='item'>");

                var imageTest = $("<img>");
                imageTest.attr("src", response.data[i].images.original.url);
                imageTest.attr("alt", "NoImage");
                imageTest.attr("width", "200px");
                imageTest.attr("height", "200px");

                var rating = response.data[i].rating;

                var p = $('<p>').text("Rating: " + rating);

                gifDiv.prepend(p);
                gifDiv.prepend(imageTest);


                $("#test").append(gifDiv);
                

                

                
                }

                if (globalArray[gettingInput] == null) {
                	
                    // $("#addButtons").append("<button id='B" + Math.floor(Math.random()) + "' onClick=dynamicGifCall(this)>" + gettingInput + "</button>");
                    var newButton = $("<button class='dynamicButtons' >" + gettingInput + "</button>");
                    newButton.on("click", grabGifs);
                    $("#addButtons").append(newButton);

                } else {
                    globalArray.push(gettingInput);
                }
                
                $("#gifTextInput").val("");
            });
         }//closing function of submit button...


         // $('.dynamicButtons').on("click", function(){
         //    var buttonId = $(this).attr('class');
         //    console.log("buttonId: " + buttonId)
         //    console.log("this: " + $(this).attr('id');

         // })


    // var dynamicGifCall = function(elem) {
    $(".dynamicButtons").on("click", grabGifs);	
});
