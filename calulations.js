window.onload = function(){
    var calcButton = document.querySelector("button[name='calculate-discount']");
    
    var discountedPriceSpan = document.querySelector("#discount-price");

    calcButton.addEventListener("click", calculateDiscount);

    function calculateDiscount(){
      var originPrice = document.getElementById('orignal-price').value;
       var discountAmount = document.getElementById('discount-amount').value;
       
       var discountPrice = (originPrice) - (originPrice * (discountAmount / 100));

       discountedPriceSpan.innerHTML = discountPrice.toFixed(2);

    }
};