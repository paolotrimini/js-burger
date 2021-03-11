//console.log('hello world!');

// selezionare/deselezionare ingredienti

var lis = document.getElementsByTagName('li');

for (var i=0; i<lis.length; i++) {

    var li = lis[i];

    li.addEventListener('click', function() {

        var clickedLi = this;
        var clickedLiChildrens = clickedLi.children;
        var clickedCheckbox = clickedLiChildrens[1];

        clickedCheckbox.checked = !clickedCheckbox.checked;
    });

}

// calcolo prezzo del panino

var priceBtn = document.getElementById('calculate');
priceBtn.addEventListener('click', function() {

    var burgerName = document.getElementById('burger-name').value;

    if(burgerName.length < 1) {
        alert('Inserire nome panino');

    } else {

        var finalPrice = 10;
        var checkboxs = document.getElementsByClassName('ingred');

        for (var i=0; i<checkboxs.length; i++) {

            var checkbox = checkboxs[i];
            var isChecked = checkbox.checked;
            var price = parseInt(checkbox.dataset.price);

            if (isChecked) {

                finalPrice += price;
            }
        }

        // applicazione dei codici sconto (sconto 20%)

        var coupons = [
            '123ABC', // 0
            '456DEF', // 1
            '789GHI']; // 2

        // APPLICO CODICE SCONTO con ".includes()"

        //var burgerCoupon = document.getElementById('burger-coupon').value;
        //if (coupons.includes(burgerCoupon)) {
        //    finalPrice -= finalPrice * 0.2;
        //}

        // APPLICO CODICE SCONTO con ciclo FOR

        var finded = false;
        var burgerCoupon = document.getElementById('burger-coupon').value;
        for (var i=0; i<coupons.length; i++) {

            var coupon = coupons[i];
            if (coupon == burgerCoupon) {

                finded = true;
            }
        }
        if (finded) {
            finalPrice -= finalPrice * 0.2;
        }
        var spanPrice = document.getElementById('price');
        spanPrice.innerHTML = finalPrice;
    }

});