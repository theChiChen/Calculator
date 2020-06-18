$( "#calculate_buysell" ).click(function() {
	var buymoney, sellmoney, taxmoney, feemoney, temp;
	if ($.isNumeric($("#price").val()) && $.isNumeric($("#shares").val()) && $.isNumeric($("#tax").val()) && $.isNumeric($("#fee").val())) {
		$("#warning").html("");
		temp = $("#price").val() * $("#shares").val();
		taxmoney = Math.round(temp * $("#tax").val());
		$("#taxmoney").html(taxmoney);
		feemoney = Math.round(temp *  $("#fee").val() *  $("#discounts").val());
		if (feemoney < 20) {feemoney = 20;}
		$("#feemoney").html(feemoney);
		buymoney = temp + feemoney;
		$("#buymoney").html(buymoney);
		sellmoney = temp - taxmoney - feemoney;
		$("#sellmoney").html(sellmoney);
	} else {
		$("#taxmoney").html("");
		$("#feemoney").html("");
		$("#buymoney").html("");
		$("#sellmoney").html("");
		$("#warning").html("<span style='color:red'>請檢查輸入內容!!</span>");
	}
});

$( "#price" ).click(function() {
	$("#price").val("");
});

$( "#shares" ).click(function() {
	$("#shares").val("");
});
