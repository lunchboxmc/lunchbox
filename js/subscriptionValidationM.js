$(document).ready(function() {


  	  // on page submit -- validate the data
    $("#ss-form").submit(function(){
		clearError();
		$('input[type="submit"]').attr('disabled','disabled');
		var submitForm=true;
		if(!requiredCheck()){
			submitForm=false;
		}
		if(!submitForm){
			$('input[type="submit"]').removeAttr('disabled');
		}

	return submitForm;
	});

	function clearError(){

		$(".errorbox-bad").removeClass("errorbox-bad");
		$('#errorMsg').css("visibility","hidden");
	}


	//Function to check for required fields
	function requiredCheck(){


		var setFocusTo="";
		var isComplete=true;
		var validPhone=true;
		var validPincode=true;
		var validEmail=true;
		var errMsg1="Oops! The Phone Number provided is invalid.";
		var errMsg2="Oops! The pincode provided is invalid.";
		var errMsg3="Oops! The Phone Number and the Pincode provided are invalid.";
		var errMsg4="Oops! Email Address provided is invalid.";
		var errMsg5="Oops! The Email Address, Phone Number and the Pincode provided are invalid.";
		var errMsg6="Oops! The Email Address and the Pincode provided are invalid.";
		var errMsg7="Oops! The Email Address and Phone Number provided are invalid.";

		if(!($("input[name='entry.1297246542']:checked").val())){

				$("#for_entry_1297246542").addClass("errorbox-bad");
				isComplete=false;

		}


		//pincode
				if($("#entry_1102779739").val()==""){
					$("#for_entry_1102779739").addClass("errorbox-bad");
					isComplete=false;
					$('#entry_1102779739').focus();
				}else if(!validateNumber($("#entry_1102779739").val())){
					$("#for_entry_1102779739").addClass("errorbox-bad");
					validPincode=false;
					$('#entry_1102779739').focus();
		}

		//check for resi add
				if($("#entry_144183355").val()==""){
					$("#for_entry_144183355").addClass("errorbox-bad");
					isComplete=false;
					$('#entry_144183355').focus();
				}


		//phone number
		if($("#entry_1317759937").val()=="")
		{
				isComplete=false;
				$("#for_entry_1317759937").addClass("errorbox-bad");
				$('#entry_1317759937').focus();
		}else if($("#entry_1317759937").val()!="" && !validateNumber($("#entry_1317759937").val())){
					validPhone=false;
					$('#entry_1317759937').focus();
					$("#for_entry_1317759937").addClass("errorbox-bad");
		}

		//email
				if($("#entry_1308022506").val()==""){
					$("#for_entry_1308022506").addClass("errorbox-bad");
					isComplete=false;
					$('#entry_1308022506').focus();
				}else if(!validateEmail($("#entry_1308022506").val())){
					$("#for_entry_1308022506").addClass("errorbox-bad");
					validEmail=false;
					$('#entry_1308022506').focus();
		}

		//check for school add
				if($("#entry_330032508").val()==""){
					$("#for_entry_330032508").addClass("errorbox-bad");
					isComplete=false;
					$('#entry_330032508').focus();
		}

		//check for school name
				if($("#entry_2027040487").val()==""){
					$("#for_entry_2027040487").addClass("errorbox-bad");
					isComplete=false;
					$('#entry_2027040487').focus();
		}



		//check for age
		if($("#entry_1764709210 option:selected").text()==""){
			$("#for_entry_1764709210").addClass("errorbox-bad");
			isComplete=false;
			$('#entry_1764709210').focus();
		}


		//check for name
		if($("#entry_217194599").val()==""){
					$("#for_entry_217194599").addClass("errorbox-bad");
					isComplete=false;
					$('#entry_217194599').focus();

		}






		if(!isComplete){
			$('#errorMsg').css("visibility","visible");
		}



		if(!validPhone && !validPincode  && !validEmail){
			$("#errorMsg1").html(errMsg5);
			$('#errorMsg1').css("visibility","visible");
		}else if(!validPhone &&  !validEmail){
			$("#errorMsg1").html(errMsg7);
			$('#errorMsg1').css("visibility","visible");
		}else if(!validEmail &&  !validPincode){
			$("#errorMsg1").html(errMsg6);
			$('#errorMsg1').css("visibility","visible");
		}else if(!validPhone &&  !validPincode){
			$("#errorMsg1").html(errMsg3);
			$('#errorMsg1').css("visibility","visible");
		}else if(!validPincode){
			$("#errorMsg1").html(errMsg2);
			$('#errorMsg1').css("visibility","visible");
		}else if(!validPhone){
			$("#errorMsg1").html(errMsg1);
			$('#errorMsg1').css("visibility","visible");
		}else if(!validEmail){
			$("#errorMsg1").html(errMsg4);
			$('#errorMsg1').css("visibility","visible");
		}else{
			$('#errorMsg1').css("visibility","hidden");
		}

		return isComplete;

	}

	function validateNumber(data){

		//validating ph no
		var filter = /^[0-9]+$/;
		if (!filter.test(data)) {
			return false;
		 }
		else{
			return true;
		}
		return true;
	}

	function validateEmail(data){

		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(data)) {
					return false;
				 }
				else{
					return true;
				}
		return true;
	}



});


