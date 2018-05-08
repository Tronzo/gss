$(".allcheck .option").on("tap",function(e){
	setTimeout(function(){
		var flag = $("#allcheck").prop("checked");
		if(flag){
			$(".xuan").find("input[name='checkod']").prop("checked",true);
		}else{
			$(".xuan").find("input[name='checkod']").prop("checked",false);
		}
	},200)
	
})