/* Your JS code goes here! */
$(document).on("ready", function () {


	//Lists the available cold remedies in the system 
	//(requested via AJAX). 
	var template = Handlebars.compile($("#rem").html() );

	$.ajax({
	      url:  "http://localhost:3000/remedy",
	      method: "GET",
	      data: {},
	      success: function(data){
	        console.log(data.remedies)	

	       _.each(data , function(id){
	       	  _.each(id, function(remedy){

	       	  	var remedyObj = {
	       	  		name: remedy.name,
	       	  		treatment: remedy.treatment,
	       	  		prevention: remedy.prevention,
	       	  		description: remedy.description,
	       	  		reactions: remedy.reactions
	       	  	}

	       	  	if(remedyObj.treatment === 0){
			  	remedyObj.treatment = "ineffective" 
			  }

			   if(remedyObj.treatment === 1){
			  	remedyObj.treatment = "unlikely to be effective"
			  }

			   if(remedyObj.treatment === 2){
			  	remedyObj.treatment = "possibly effective"
			  }

			   if(remedyObj.treatment === 3){
			  	remedyObj.treatment = "probably effective"
			  }
			   
			  if(remedyObj.prevention === 0){
			  	remedyObj.prevention = "ineffective"
			  }

			  if(remedyObj.prevention === 1){
			  	remedyObj.prevention = "unlikely to be effective"
			  }

			  if(remedyObj.prevention === 2){
			  	remedyObj.prevention = "possibly effective"
			  }
			  if(remedyObj.prevention === 3){
			  	remedyObj.prevention = "probably effective"
			  }

	       	  	 var htmlString = template(remedyObj)
	        	$("#main-content").append(htmlString)



	       	  })
				 
	      	}) 	
			   $(".all").on("click", function (){
		    		$(this).find(".other").slideToggle(".hidden")
		    	})

			  

		}
	       

	   })
	   
	   

 
	//Displays the name of the remedy 
	//and some visual indicator of its effectiveness at 
	//treatment and prevention-- not the numbers 0-3 but some wording and/or color indicator.

 

  })