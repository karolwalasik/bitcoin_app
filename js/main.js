$(document).ready(function () {




    //poczatek funkcji v
    function v() {
        var currentBuyPrice = parseFloat($("#buy").text());
        var currentSellPrice = parseFloat($("#sell").text());
        console.log(currentBuyPrice);
        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            console.log(data)
            $('#buy').text(data.PLN.buy);
            $('#sell').text(data.PLN.buy);
            //        warunki dla strzalek
            if (currentBuyPrice > data.PLN.buy) {
                $('#buy-arrow').removeAttr('class').addClass('fas fa-arrow-down').css('color', 'red');
            } else if (currentBuyPrice < data.PLN.buy) {
                $('#buy-arrow').removeAttr('class').addClass('fas fa-arrow-down').css('color', 'green');

            } else {
                $('#buy-arrow').removeAttr('class').addClass('fas fa-minus-square').css('color', 'blue');
            }

            if (currentSellPrice > data.PLN.sell) {
                $('#sell-arrow').removeAttr('class').addClass('fas fa-arrow-down').css('color', 'red');
            } else if (currentSellPrice < data.PLN.sell) {
                $('#sell-arrow').removeAttr('class').addClass('fas fa-arrow-down').css('color', 'green');

            } else {
                $('#sell-arrow').removeAttr('class').addClass('fas fa-minus-square').css('color', 'blue');
            }

        });
    };

    //koniec v

    //wywolanie v
    v();

    var interval = setInterval(v, 5000);

    function changeInterval() {
        $('.control-button').click(function () {
            clearInterval(interval);
            interval = setInterval(v, $(this).val());
            $('#refresh-frequency').text($(this).val() / 1000 + ' sekund');
        });
    };




    changeInterval();


});
