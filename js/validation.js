  $(function() {


  //function invoked on change on option for trail subscription (sure)
  $("input[name='entry.1038248262']").change(function() {

		if(($("input[name='entry.1038248262']:checked").val())&&
  				($("input[name='entry.1038248262']:checked").val()=="Sure") ||
				($("input[name='entry.1430564754']:checked").val())&&
  				($("input[name='entry.1430564754']:checked").val()=="Yes")){
				// making mobile number manadatory
				document.getElementById("emailReq").style.visibility="visible";
				document.getElementById("mobileNumberReq").style.visibility="visible";
				document.getElementById("schoolNmReq").style.visibility="visible";
				document.getElementById("schoolAddReq").style.visibility="visible";
			}else if(($("input[name='entry.1038248262']:checked").val()!="Sure")&&
  				($("input[name='entry.1430564754']:checked").val()!="Yes")){
				// making mobile number manadatory
				document.getElementById("emailReq").style.visibility="hidden";
				document.getElementById("mobileNumberReq").style.visibility="hidden";
				document.getElementById("schoolNmReq").style.visibility="hidden";
				document.getElementById("schoolAddReq").style.visibility="hidden";
				}
	});

    //function invoked on change on option for  subscription (Yes)
$("input[name='entry.1430564754']").change(function() {

		if(($("input[name='entry.1038248262']:checked").val())&&
  				($("input[name='entry.1038248262']:checked").val()=="Sure") ||
				($("input[name='entry.1430564754']:checked").val())&&
  				($("input[name='entry.1430564754']:checked").val()=="Yes")){
				// making mobile number manadatory
				document.getElementById("emailReq").style.visibility="visible";
				document.getElementById("mobileNumberReq").style.visibility="visible";
				document.getElementById("schoolNmReq").style.visibility="visible";
				document.getElementById("schoolAddReq").style.visibility="visible"
			}else if(($("input[name='entry.1038248262']:checked").val()!="Sure")&&
  				($("input[name='entry.1430564754']:checked").val()!="Yes")){
				// making mobile number manadatory
				document.getElementById("emailReq").style.visibility="hidden";
				document.getElementById("mobileNumberReq").style.visibility="hidden";
				document.getElementById("schoolNmReq").style.visibility="hidden";
				document.getElementById("schoolAddReq").style.visibility="hidden";
				}
	});


	//function invoked on change on option for  subscription (Yes)
  $("input[name='entry.882174347']").change(function() {

		if( $("input[name='entry.882174347']:checked").val() &&
		$("input[name='entry.882174347']:checked").val()=="Others"){
						// making mobile number manadatory

						$("#entry_1143131781").removeAttr("disabled");
						$('#entry_1143131781').focus();
						$('#entry_1143131781').val("");
				}else{
					$("#entry_1143131781").attr("disabled", "disabled");
					$('#entry_1143131781').val("");
				}
	});
  	  // on page submit -- validate the data
    $("#ss-form").submit(function(){

 		 $('input[type="submit"]').attr('disabled','disabled');
		var submitForm=true;
		if(!requiredCheck()){
		submitForm=false;
		}
		if(! validateData(submitForm)){
		submitForm=false;
		}
		if(!submitForm){
			$('input[type="submit"]').removeAttr('disabled');
		}
		return submitForm;
	});

	function clearError(){
	document.getElementById("errorMsg").style.visibility="hidden";
	$(".errorbox-bad").removeClass("errorbox-bad");
	}


	//Function to check for required fields
	function requiredCheck(){

		clearError();
		var setFocusTo="";
		 var isComplete=true;
		 	 //check for entry_1295086016 -- childs age


			// school  name
			if((($("input[name='entry.1038248262']:checked").val())&&
			  				($("input[name='entry.1038248262']:checked").val()=="Sure") ||(($("input[name='entry.1430564754']:checked").val())&&
			  				($("input[name='entry.1430564754']:checked").val()=="Yes"))) &&  ($("#entry_70774497").val())==""  ){
							// making mobile number manadatory

								document.getElementById("for_entry_70774497").className="errorbox-bad";
									isComplete=false;
													setFocusTo="entry_70774497";
			}

			//school address
			if((($("input[name='entry.1038248262']:checked").val())&&
			  				($("input[name='entry.1038248262']:checked").val()=="Sure") ||(($("input[name='entry.1430564754']:checked").val())&&
			  				($("input[name='entry.1430564754']:checked").val()=="Yes"))) &&  ($("#entry_824501589").val())==""  ){
							// making mobile number manadatory

								document.getElementById("for_entry_824501589").className="errorbox-bad";
									isComplete=false;
													setFocusTo="entry_824501589";
			}

			if((($("input[name='entry.1038248262']:checked").val())&&
  				($("input[name='entry.1038248262']:checked").val()=="Sure") ||(($("input[name='entry.1430564754']:checked").val())&&
  				($("input[name='entry.1430564754']:checked").val()=="Yes"))) &&  ($("#entry_866938509").val())==""  ){
				// making mobile number manadatory

					document.getElementById("for_entry_866938509").className="errorbox-bad";
						isComplete=false;
										setFocusTo="entry_866938509";
			}

			//check for 2068028543 -- email
			if((($("input[name='entry.1038248262']:checked").val())&&
  				($("input[name='entry.1038248262']:checked").val()=="Sure")|| (($("input[name='entry.1430564754']:checked").val())&&
  				($("input[name='entry.1430564754']:checked").val()=="Yes"))) &&  ($("#entry_985510312").val())==""  ){

					document.getElementById("for_entry_985510312").className="errorbox-bad";
					isComplete=false;
									setFocusTo="entry_985510312";
			}
			if( ($("#entry_631175369").val())==""){
				document.getElementById("for_entry_631175369").className="errorbox-bad";
				setFocusTo="entry_631175369";
					isComplete=false;
			}
			//check for 1931244881-- free trail
			if(!($("input[name='entry.1038248262']:checked").val())){
			        document.getElementById("for_entry_1038248262").className="errorbox-bad";
					isComplete=false;
									setFocusTo="entry.1038248262";
			}
			//check for 2098710746-- range of product
			if(($("input[name='entry.1430564754']:checked").val())&&
  				($("input[name='entry.1430564754']:checked").val()=="Yes") &&
				!($("input[name='entry.551567336']:checked").val())){
			        document.getElementById("for_entry_551567336").className="errorbox-bad";
									setFocusTo="entry.551567336";
					isComplete=false;
			}
			//check for 91300698-- willingness to subscribe
			if(!($("input[name='entry.1430564754']:checked").val())){
			       document.getElementById("for_entry_1430564754").className="errorbox-bad";
				   	setFocusTo="entry.1430564754";
					isComplete=false;
			}

			if(!isComplete){
				document.getElementById("errorMsg").style.visibility="visible";
				if(setFocusTo== "entry.1430564754" || setFocusTo== "entry.1038248262" || setFocusTo== "entry.551567336" ){
					  document.getElementsByName(setFocusTo)[0].focus();
				}else{
					  document.getElementById(setFocusTo).focus();

				}
			}
			return isComplete;

	}

	//validate the ph no and email

	function validateData(submitForm) {

		var validData=true;

		//validating ph no
		var filter = /^[0-9]+$/;
		if( ($("#entry_866938509").val())!=""){

			var phNo=$("#entry_866938509").val();

			if (!filter.test(phNo)) {
			   	  validData=false;
				document.getElementById("inproperDataMsg2").style.visibility="visible";
				document.getElementById("for_entry_866938509").className="ss-form-question errorbox-bad";
											if(submitForm){
										document.getElementById("entry_866938509").focus();}
 		 	}
			else{

			document.getElementById("inproperDataMsg2").style.visibility="hidden";
			document.getElementById("for_entry_866938509").className="ss-form-question errorbox-good";

			}
		 }else if(($("input[name='entry.1038248262']:checked").val())&&
  				($("input[name='entry.1038248262']:checked").val()=="Sure") &&  ($("#entry_866938509").val())==""  ){

						 document.getElementById("inproperDataMsg2").style.visibility="hidden";
				}
		else{
		 document.getElementById("inproperDataMsg2").style.visibility="hidden";
		// document.getElementById("for_entry_866938509").className="ss-form-question errorbox-good";

		 }

		 //for email
		 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	//validating email
		if( ($("#entry_985510312").val())!=""){
			var email=$("#entry_985510312").val();
			if (!filter.test(email)) {
		   				validData=false;
		   				document.getElementById("inproperDataMsg1").style.visibility="visible";
						document.getElementById("for_entry_985510312").className="errorbox-bad";
						if(submitForm)
						{document.getElementById("entry_985510312").focus();}

			}else{
				  document.getElementById("inproperDataMsg1").style.visibility="hidden";
				  document.getElementById("for_entry_985510312").className="errorbox-good";

			}
		}
		else if(($("input[name='entry.1038248262']:checked").val())&&
  				($("input[name='entry.1038248262']:checked").val()=="Sure") &&  ($("#entry_985510312").val())==""  ){
				document.getElementById("inproperDataMsg1").style.visibility="hidden";
			}
		else{
			  document.getElementById("inproperDataMsg1").style.visibility="hidden";


		}

		return validData;


	}



  });


	function choosePage(){

		var radiosTrail = document.getElementsByName("entry.1038248262");
		var radiosSub = document.getElementsByName("entry.1430564754");
		var selectedValueTrail="";
		var selectedValueSub="";
		//For each radio button if it is checked get the value and break.
		   for (var i = 0; i < radiosTrail.length; i++){

		      if (radiosTrail[i].checked){
					selectedValueTrail=(radiosTrail[i].value);
		         break;
		      }
   			}

			for (var i = 0; i < radiosSub.length; i++){

		      if (radiosSub[i].checked){
					selectedValueSub=(radiosSub[i].value);
		         break;
		      }
   			}


		if(selectedValueTrail=="Sure" || selectedValueSub=="Yes"){
			window.location='ConfirmationPageForSure.html';
		}else{
			window.location='ConfirmationPageForSurvey.html';
		}

	}
