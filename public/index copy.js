remedies = {}
templates = {}

sortVal = "score"

var numberSub = function(i) {
	if (i === 3) {
	return "effective"
	}

	if (i === 2) {
		return "possibly effective"
	}

	if (i === 1) {
		return "unlikely to be effective"
	}

	if (i === 0) {
		return "ineffective"
	}
}

var getRemedies = function(callback) {
	$.ajax({
		url: "/remedy",
		method: "GET",
		success: function(data) {

			callback(data)
		}
	})
}

var listRemedies = function(data) {
	sortedList = []
	_.each(data.remedies, function (remedy) {
		var formattedRemedy = {
			name: remedy.name,
			description: remedy.description,
			reactions: remedy.reactions,
			score: (remedy.prevention)+(remedy.treatment),
			treatment: numberSub(remedy.treatment),
			prevention: numberSub(remedy.prevention),
			preventionScore: remedy.prevention,
			treatmentScore: remedy.treatment,
		}
		sortedList.push(formattedRemedy)

		listByScore(sortedList)

		_.each(sortedList, function(item){
		var $htmlString = templates.remedies(item)
		$(".copy-location").append($htmlString)
		})
	})

	//sortedList = _.sortBy(sortedList, "score")
	//sortedList.reverse()
	//sortedList = listByPrevention(sortedList)


}

var listBy = function(arr, str) {
	arr = _.sortBy(arr, str)
	arr.reverse()	
	console.log(arr)

}

var listByPrevention = function(array) {
	array = _.sortBy(array, "preventionScore")
	return array.reverse()	
}

var listByTreatment = function(array) {
	array = _.sortBy(array, "treatmentScore")
	return array.reverse()	
}

var listByScore = function(array) {
	array = _.sortBy(array, "score")
	return array.reverse()	
}




$(document).on("ready", function(){

//make a call for rememdies
	templates.remedies = Handlebars.compile($("#remediesTemplate").html())
	


	getRemedies(listRemedies)



//on success, place those remedies in the dom


})