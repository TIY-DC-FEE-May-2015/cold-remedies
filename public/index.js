

var remedyList = function(callback){
	
	$.ajax({
		url: "/remedy",
		method:"GET",
		success: function(data){
		callback(data)
		}

	})

}

 var strength = function(i){
 	if (i === 3){
 		return "Probably effective"
 	}
 	
 	if (i === 2){
 		return "Possibly effective"
 	}

 	if (i === 1){
		return "Unlikely to be effective"
	}

	if (i === 0){
		return "Ineffective"
	}

 }


var remedyStuff= function(data){

	_.each(data.remedies, function(remedy){

		var newRemedy = {
			name: remedy.name,
			prevention: strength(remedy.prevention),
			treatment: strength(remedy.treatment),
			description: remedy.description,
			reaction: remedy.reaction
		}


		var htmlLeft = templateLeft(newRemedy)
			$("#left-spot").append(htmlLeft)
		})	

		$(".leftNames").on("click", function(){
			$(this).find(".description").toggleClass("active")
			$(".description").css("color", "red")

			console.log(this)
		})




}


	$(document).on("ready", function(){
		templateLeft = Handlebars.compile( $("#left-side").html() );


		remedyList(remedyStuff)


	})