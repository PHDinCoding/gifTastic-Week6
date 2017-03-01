

$(document).ready( function() {

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
    		

            var gettingInput = $("#gifTextInput").val();

            console.log("gettingInput: " + gettingInput);

            // gettingInput=gettingInput.replace(" ", "+");

            // escape(gettingInput)

            var queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=dc6zaTOxFJmzC&tag=" + escape(gettingInput);

            // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gettingInput.replace(" ", "+") + "&random?&api_key=dc6zaTOxFJmzC";


            console.log(queryURL);




            $.ajax({
                url: queryURL,
                method: "GET"
            })



            .done(function(response) {
            	

                console.log(response);
                // console.log(response.data[0].images.original.url);
                console.log(response.data.image_original_url);

                var imageTest = $("<img>");
                imageTest.attr("src", response.data.image_original_url);
                imageTest.attr("alt", "NoImage");

                var p = $("<p>");
                $("#test").append(imageTest);

                if (globalArray[gettingInput] == null) {
                	
                    // $("#addButtons").append("<button id='B" + Math.floor(Math.random()) + "' onClick=dynamicGifCall(this)>" + gettingInput + "</button>");
                    $("#addButtons").append("<button id='B" + Math.floor(Math.random() * 1000)+ "' class='dynamicButtons'>" + gettingInput + "</button>");

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

         $(document).click('.dynamicButtons', function() {
            var buttonId = $(this).attr('class');
            console.log("buttonId: " + buttonId)
            console.log("this: " + $(this).attr('id'));            
         })

    // var dynamicGifCall = function(elem) {
    	$("#addButtons").on("click", function(elem){


    		
        var miscText = elem.value;
        console.log(miscText);
        var queryURL = "http://api.giphy.com/v1/gifs/random?&api_key=dc6zaTOxFJmzC&tag=" + escape(miscText);

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {

                console.log(response);
                // console.log(response.data[0].images.original.url);
                console.log(response.data.image_original_url)

                var imageTest = $("<img>");

                imageTest.attr("src", response.data.image_original_url);

                imageTest.attr("alt", "NoImage");

                var p = $("<p>");
                $("#test").append(imageTest);
            });
    })


	
})