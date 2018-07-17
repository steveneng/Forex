function base(units,quantity) {
    $.getJSON("http://data.fixer.io/api/latest?access_key=e6ef5b09bb4e1cad42f2a013b0e2c0a6&format=1&" + units, function(result) {
        for (var key in result.rates) {
            if (result.rates.hasOwnProperty(key)) {
                $('.money').append("<div class='col-6 currency'>" + key + "</div>" + "<div class='currency col-6 conversion'>" + parseFloat(quantity*result.rates[key]).toFixed(2) + "</div>" + "<hr>")
            }
        }
        $('.money').css('display','none');
        $('.money').fadeIn('slow');
    });

};

$(function() {
    $('select').on('change', function() {
        $('.money').empty(); // empties the values so it wont appear on the bottom of the screen 
        var currency = this.value.length;
        base(this.value.substring(currency - 3),$(".amount").val()); // sets the parameters of the type of curreny and amount of it
        $('.cur').text(this.value.substring(currency - 3)); // replaces the HTML with the type of currency
    });

    $(".amount")
    .keyup(function() {
        $('.money').empty();
        var currency = $("select").val().length;
        base($("select").val().substr(currency-3),$(".amount").val());
        $('.quant').text($('.amount').val()); // the number of quanity would be put into HTML 
    }).keyup();
});