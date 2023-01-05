$(document).ready(function(){
	$("#btn").click(function(){
		var user = $("#username").val();
		var pass = $("#password").val();
		var msg = validation(user, pass);
		$(".message").html("<p>" + msg + "</p>");
	});
	
	function validation(u, p){
		if(u == "kapil" && p == "123"){
			return "you are login successfully";
		}
		else{
			return "please enter valid username or password";
		}
	}
});