/* Your JS code goes here! */

var objRem

	

$(document).on("ready", function () {
	$.ajax({
		  url: "http://localhost:3000/remedy",
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

				 objRem = remedyObj;
		         console.log(objRem) 
				 var template = Handlebars.compile($("#rem").html() );

				 if(objRem.treatment === 0){
				  	objRem.treatment = "ineffective"
				  }

				if(objRem.treatment === 1){
				  	objRem.treatment = "unlikely to be effective"
				  	
				  }

				   if(objRem.treatment === 2){
				  objRem.treatment = "possibly effective"
				  }

				   if(objRem.treatment === 3){
				  	objRem.treatment = "probably effective"
				  }
				   
				  if(objRem.prevention === 0){
				  	objRem.prevention = "ineffective"
				  }

				  if(objRem.prevention === 1){
				  	objRem.prevention = "unlikely to be effective"
				  }

				  if(objRem.prevention === 2){
				  	objRem.prevention = "possibly effective"
				  }
				  if(objRem.prevention === 3){
				  	objRem.prevention = "probably effective"
				  } 

				 var htmlString = template(objRem)
				 $("#main-content").append(htmlString)       
				})
			  })

		    $(".all").on("click", function (){
    		$(this).find(".other").slideToggle(".hidden")
    	})

			}

		})
   
	  
	


	
	

	

	
  })