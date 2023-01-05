$(document).ready(function(){
	$("#btn").click(function(){
		
		
		var d = $("#div1").html();
		//(d == "hello") ? $("#div1").append(" india") : $("#div1").html("i love my india");
		if(d == "hello"){
			$("#div1").append(" india");
		}
		else{
			$("#div1").html("i love my india");
		}
		
		
	});
});