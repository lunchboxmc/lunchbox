$(document).ready(function() {

var yourId=window.location.search.substring(1);

//alert(jQuery.base64Decode(yourId);
if(yourId==""){
	alert("Unathourized access!!");
	window.location.href = "http://www.lunchboxmc.com";
}

$("#entry_1308022506").val(yourId);

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
		var errMsg1="Oops! The Alternate Phone Number provided is invalid.";
		var errMsg2="Oops! The pincode provided is invalid.";
		var errMsg3="Oops! The Alternate Phone Number and the Pincode provided are invalid.";
		
		

		if(!($("input[name='entry.1297246542']:checked").val())){

				$("#for_entry_1297246542").addClass("errorbox-bad");
 				 document.getElementsByName("entry.1297246542")[0].focus();
				isComplete=false;
		}
		
		//pincode
		if($("#entry_1102779739").val()==""){
			$("#for_entry_1102779739").addClass("errorbox-bad");
 			document.getElementById("entry_1102779739").focus();
			isComplete=false;
		}else if(!validateNumber($("#entry_1102779739").val())){
			$("#for_entry_1102779739").addClass("errorbox-bad");
			 document.getElementById("entry_1102779739").focus();
			validPincode=false;
		}
		

		if($("#entry_1317759937").val()!="" && !validateNumber($("#entry_1317759937").val())){
			validPhone=false;
			$("#for_entry_1317759937").addClass("errorbox-bad");
 			document.getElementById("entry_1317759937").focus();
		}

		//check for resi add
		if($("#entry_144183355").val()==""){
			$("#for_entry_144183355").addClass("errorbox-bad");
 				document.getElementById("entry_144183355").focus();
			isComplete=false;
		}

		//check for age
		if($("#entry_1764709210 option:selected").text()==""){
			$("#for_entry_1764709210").addClass("errorbox-bad");
 			document.getElementById("entry_1764709210").focus();
			isComplete=false;
		}

		//check for name
		if($("#entry_217194599").val()==""){
			$("#for_entry_217194599").addClass("errorbox-bad");
			 document.getElementById("entry_217194599").focus();
			isComplete=false;
		}

		if(!isComplete){
			$('#errorMsg').css("visibility","visible");
		}

		if(!validPhone && !validPincode){
			$("#errorMsg1").html(errMsg3);
			$('#errorMsg1').css("visibility","visible");
		}
		else if(!validPincode){
			$("#errorMsg1").html(errMsg2);
			$('#errorMsg1').css("visibility","visible");
		}
		else if(!validPhone){
			$("#errorMsg1").html(errMsg1);
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



});


