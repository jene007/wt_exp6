$(document).ready(function () {

    $("#placeOrder").click(function () {

        let rainbow = parseInt($("#rainbow").val()) || 0;
        let choco = parseInt($("#choco").val()) || 0;
        let red = parseInt($("#redvelvet").val()) || 0;
        let blue = parseInt($("#blueberry").val()) || 0;

        let total =
            rainbow * 300 +
            choco * 200 +
            red * 250 +
            blue * 350;

        $("#bill").show();
        $("#totalPrice").text("Total Price: Rs. " + total);
    });

});
