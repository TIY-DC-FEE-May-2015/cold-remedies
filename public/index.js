/* Your JS code goes here! */

$(document).on("ready", function() {

	var coldRemedyFunction = Handlebars.compile( $("#coldRemediesTemplate").html() )

	$.ajax({

		url: "/remedy",
		method: "GET",
		data: {},
		success: function(data) {

			_.each(data, function(id) {

				_.each(id, function(remedy) {
					var htmlString = coldRemedyFunction(remedy)

					console.log(htmlString)

					$(".listOfRemedies").append(htmlString)
				})
				

			})

				
		}

	})

})
