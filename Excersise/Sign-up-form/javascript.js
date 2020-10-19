document.querySelector("#signup_pwd1").addEventListener("keyup",function(){
	var pwds1 = document.querySelector("#signup_pwd1").value;
	var pwdLengths = pwds1.length;
	
	if (pwdLengths<8){
		document.querySelector("#pwdErrors").innerHTML="The password is short"
		}else if(pwdLengths>8){
		document.querySelector("#pwdErrors").innerHTML="The password is long"
		}else{	
	    document.querySelector("#pwdErrors").innerHTML=""
	}
	
});
document.querySelector("#signup_pwd2").addEventListener("keyup",function(){
	var pwds1 = document.querySelector("#signup_pwd1").value;
	var pwds2 = document.querySelector("#signup_pwd2").value;
	
	if (pwds2!=pwds1){
		document.querySelector("#pwdErrors").innerHTML="The password not matched"
		document.querySelector("#pwdErrors").setAttribute("style","color:white;background: red; position:absolute;left: 201px;top: 280px;")
		}else{	
	    document.querySelector("#pwdErrors").innerHTML="The password matched"
		document.querySelector("#pwdErrors").setAttribute("style","color:white;background: green; position:absolute;left: 201px;top: 280px;")
	}
	
});



document.querySelector("#login_form").addEventListener("submit",function(){
	
	var pwd = document.querySelector("#login_pwd").value;
	var pwdLength = pwd.length;
	if (pwdLength<8){
		document.querySelector("#pwdError").innerHTML="The password is short"
		}else if(pwdLength>8){
		document.querySelector("#pwdError").innerHTML="The password is long"
		}else{	
	    document.querySelector("#pwdError").setAttribute("style","opacity:0;")
	}
	
});