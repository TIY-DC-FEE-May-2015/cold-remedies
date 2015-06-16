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
						remedyObj.prevention = "Probably Effective"
					}

					if (remedyObj.prevention === 2) {
						remedyObj.prevention = "Possibly Effective"
					}

					if (remedyObj.prevention === 1) {
						remedyObj.prevention = "Unlikely to be Effective"
					}

					if (remedyObj.prevention === 0) {
						remedyObj.prevention = "Ineffective"
					}
// Treatment value changes to text
					if (remedyObj.treatment === 3) {
						remedyObj.treatment = "Probably Effective"
					}

					if (remedyObj.treatment === 2) {
						remedyObj.treatment = "Possibly Effective"
					}

					if (remedyObj.treatment === 1) {
						remedyObj.treatment = "Unlikely to be Effective"
					}

					if (remedyObj.treatment === 0) {
						remedyObj.treatment = "Ineffective"
					}

// Append to Template
					var htmlString = coldRemedyFunction(remedyObj)

					$(".listOfRemedies").append(htmlString)

				})
				

			})
			
			$(".name").on("click", function() {
				$(".info").toggleClass("hidden")
			})
		}
	
	})

})
