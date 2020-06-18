var year = 0;

$( "#calculate_year" ).click(function() {
    var sellmoney, taxmoney, feemoney, temp;
    if ($.isNumeric($("#cost").val()) && $.isNumeric($("#cash").val()) && $.isNumeric($("#divd").val()) &&  ($("#cash").val() > 0) ) {
        $("#warning").html("");
        year = 0;
        calculate($("#cost").val());
        $("#year").html(year);
    } else {
        $("#cost").html("");
        $("#cash").html("");
        $("#divd").html("");
        $("#year").html("");
        if ($("#cash").val() <= 0) {
            $("#warning").html("<span style='color:red'>現金股利必須大於 0</span>");
        } else {
            $("#warning").html("<span style='color:red'>請檢查輸入內容!!</span>");
        }
    }
});

$( "#cash" ).click(function() {
    $("#cash").val("");
});

$( "#divd" ).click(function() {
    $("#divd").val("");
});

function calculate(cost) {

    if(cost >0) {
        year = year + 1;
        result = (cost- $("#cash").val()) / (1 + ( $("#divd").val() / 10));
        calculate(result);
    }


}