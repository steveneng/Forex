function base(units) {
    $.getJSON("https://api.fixer.io/latest?base=" + units, function(result) {
        for (var key in result.rates) {
            if (result.rates.hasOwnProperty(key)) {
                $('.money').append("<div class='col-6 currency'>" + key + "</div>" + "<div class='currency col-6'>" + result.rates[key] + "</div>")
            }
        }
        $('.money').css('display','none');
        $('.money').fadeIn('slow');
    });

};

$(function() {
    $(".units")
        .keyup(function() {
            $('.money').empty();
            base($('.units').val().toUpperCase());
            $('.cur').text($('.units').val().toUpperCase())
        }).keyup();

    $('select').on('change', function() {
        $('.money').empty();
        var currency = this.value.length;
        base(this.value.substring(currency - 3));
        console.log(this.value.substring(currency - 3));
        $('.cur').text(this.value.substring(currency - 3));
    });
});