$( "#calculate_xd" ).click(function() {
    var price, sellmoney, taxmoney, feemoney, temp;
    if ($.isNumeric($("#y_price").val()) && $.isNumeric($("#cash").val()) && $.isNumeric($("#divd").val())) {
        $("#warning").html("");
        price = ($("#y_price").val() - $("#cash").val()) / (1 + ( $("#divd").val() / 10));
        $("#price").html(price);
    } else {
        $("#y_price").html("");
        $("#cash").html("");
        $("#divd").html("");
        $("#price").html("");
        $("#warning").html("<span style='color:red'>請檢查輸入內容!!</span>");
    }
});

$( "#cash" ).click(function() {
    $("#cash").val("");
});

$( "#divd" ).click(function() {
    $("#divd").val("");
});