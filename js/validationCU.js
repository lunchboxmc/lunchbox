  $(function() {

	$("#for_entry_15985828").hide();
	$("#for_entry_1797089596").hide();
	$("#for_entry_470986411").hide();

	//on seclection of interested to subscribe for
	$("input[name='entry.253105773']").change(function() {

		document.getElementById("for_entry_15985828").className="served_errorbox-good";
		document.getElementById("for_entry_1797089596").className="served_errorbox-good";
		document.getElementById("for_entry_470986411").className="served_errorbox-good";
		$("#entry_15985828").val("");
		$("#entry_1797089596").val("");
		$("#entry_470986411").val("");


			if(($("input[name='entry.253105773']:checked").val())&&
	  				($("input[name='entry.253105773']:checked").val()=="child")){

					$("#for_entry_15985828").show();
					$("#for_entry_1797089596").show();
					$("#for_entry_470986411").hide();

			}else if(($("input[name='entry.253105773']:checked").val())&&
			  				($("input[name='entry.253105773']:checked").val()=="both")){

					$("#for_entry_15985828").show();
					$("#for_entry_1797089596").show();
					$("#for_entry_470986411").show();

			}else if(($("input[name='entry.253105773']:checked").val())&&
			  				($("input[name='entry.253105773']:checked").val()=="adult")){

					$("#for_entry_15985828").hide();
					$("#for_entry_1797089596").hide();
					$("#for_entry_470986411").show();

			}else{
					$("#for_entry_15985828").hide();
					$("#for_entry_1797089596").hide();
					$("#for_entry_location").hide();
				}
		});





  	  // on page submit -- validate the data
    $("#ss-form").submit(function(){

	$('input[type="submit"]').attr('disabled','disabled');
		var submitForm=true;
		if(!requiredCheck()){
		submitForm=false;
		}
		if(! validateData()){
		submitForm=false;
		}
		if(!submitForm){
					$('input[type="submit"]').removeAttr('disabled');
		}
	return submitForm;
	});






	//Function to check for required fields
	function requiredCheck(){

		$("div").removeClass("ss-form-question served_errorbox-bad");

		 var isComplete=true;
		 	 //check for entry_1295086016 -- childs age
			if( ($("#entry_1725186333").val())==""){
				document.getElementById("for_entry_1725186333").className="served_errorbox-bad";
					isComplete=false;
			}else{
				  document.getElementById("for_entry_1725186333").className="served_errorbox-good";
			}
			if( ($("#entry_219321799").val())==""){
				document.getElementById("for_entry_219321799").className="served_errorbox-bad";
					isComplete=false;
			}else{
				  document.getElementById("for_entry_219321799").className="served_errorbox-good";
			}
			if( ($("#entry_1560364053").val())==""){
				document.getElementById("for_entry_1560364053").className="served_errorbox-bad";
					isComplete=false;
			}else{
				  document.getElementById("for_entry_1560364053").className="served_errorbox-good";
			}
			if(!($("input[name='entry.253105773']:checked").val())){
			        document.getElementById("for_entry_253105773").className="served_errorbox-bad";
					isComplete=false;

			}
			else{


				document.getElementById("for_entry_253105773").className="served_errorbox-good";
				document.getElementById("for_entry_15985828").className="served_errorbox-good";
				document.getElementById("for_entry_1797089596").className="served_errorbox-good";
				document.getElementById("for_entry_470986411").className="served_errorbox-good";

				if((($("input[name='entry.253105773']:checked").val()=="child") ||
								 ($("input[name='entry.253105773']:checked").val()=="both"))&& $("#entry_15985828").val()==""){
									$("#for_entry_15985828").addClass("errorbox-bad");
													isComplete=false;
								}
								if((($("input[name='entry.253105773']:checked").val()=="child") ||
												 ($("input[name='entry.253105773']:checked").val()=="both"))&& $("#entry_1797089596").val()==""){
													$("#for_entry_1797089596").addClass("errorbox-bad");
																	isComplete=false;

								}
								if((($("input[name='entry.253105773']:checked").val()=="adult") ||
																 ($("input[name='entry.253105773']:checked").val()=="both"))&& $("#entry_470986411").val()==""){
																	$("#for_entry_470986411").addClass("errorbox-bad");
																					isComplete=false;
				}
			}



			if(!isComplete){
				document.getElementById("errorMsg").style.visibility="visible";
			}else{
				document.getElementById("errorMsg").style.visibility="hidden";
			}
			return isComplete;

	}

	//validate the ph no and email

	function validateData() {

		var validData=true;
		//for email
		 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	//validating email
		if( ($("#entry_219321799").val())!=""){
			var email=$("#entry_219321799").val();
			if (!filter.test(email)) {
		   				validData=false;
		   				document.getElementById("inproperDataMsg1").style.visibility="visible";
															document.getElementById("for_entry_219321799").className="served_errorbox-bad";
			}else{
				  document.getElementById("inproperDataMsg1").style.visibility="hidden";
				  document.getElementById("for_entry_219321799").className="served_errorbox-good";

			}
		}else{
						  document.getElementById("inproperDataMsg1").style.visibility="hidden";
		}

		//validating ph no
		filter = /^[0-9]+$/;
		if( ($("#entry_1560364053").val())!=""){

			var phNo=$("#entry_1560364053").val();

			if (!filter.test(phNo)) {
			   	  validData=false;
				document.getElementById("inproperDataMsg2").style.visibility="visible";
				document.getElementById("for_entry_1560364053").className="served_errorbox-bad";
 		 	}
			else{

			document.getElementById("inproperDataMsg2").style.visibility="hidden";
			document.getElementById("for_entry_1560364053").className="served_errorbox-good";

			}
		 }else{

			 document.getElementById("inproperDataMsg2").style.visibility="hidden";

		 }
		return validData;


	}
  });


