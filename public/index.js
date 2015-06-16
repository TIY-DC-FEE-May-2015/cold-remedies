/* Your JS code goes here! */

var remedyArray = []

$(document).on("ready", function() {

	var coldRemedyFunction = Handlebars.compile( $("#coldRemediesTemplate").html() )

	$.ajax({

		url: "/remedy",
		method: "GET",
		data: {},
		success: function(data) {

			_.each(data, function(id) {

				_.each(id, function(remedy) {

					var remedyObj = {
						name: remedy.name,
						treatment: remedy.treatment,
						prevention: remedy.prevention,
						description: remedy.description,
						reactions: remedy.reactions
					}

// Prevention value changes to text
					if (remedyObj.prevention === 3) {
						remedyObj.prevention = "😄"
					}

					if (remedyObj.prevention === 2) {
						remedyObj.prevention = "😐"
					}

					if (remedyObj.prevention === 1) {
						remedyObj.prevention = "😕"
					}

					if (remedyObj.prevention === 0) {
						remedyObj.prevention = "😞"
					}
// Treatment value changes to text
					if (remedyObj.treatment === 3) {
						remedyObj.treatment = "😄"
					}

					if (remedyObj.treatment === 2) {
						remedyObj.treatment = "😐"
					}

					if (remedyObj.treatment === 1) {
						remedyObj.treatment = "😕"
					}

					if (remedyObj.treatment === 0) {
						remedyObj.treatment = "😞"
					}

// Append to Template
					var htmlString = coldRemedyFunction(remedyObj)

					$(".listOfRemedies").append(htmlString)

				})
				
			})
			
			$(".name").on("click", function() {
				$(this).find(".info").toggleClass("hidden")
			})
		}
	
	})

})
