function updateProductCost(isIncreasing) {
    const memInput = document.getElementById('memory-total');
    let memCost = parseInt(memInput.innerText);
    if (isIncreasing) {
        memCost = 180;
    }
    else {
        memCost = 0;
    }
    memInput.innerText = memCost;
    // update total memory
    const total = document.getElementById('total-price');
    total.innerText = memCost + 1299;
    updateTotal();
}
function updateStorage(stoUpdate) {
    const stoInput = document.getElementById('storage-total');
    let stoCost = parseInt(stoInput.innerText);
    if (stoUpdate == 0) {
        stoCost = 0;
    }
    if (stoUpdate == 100) {
        stoCost = 100;
    }
    if (stoUpdate == 180) {
        stoCost = 180;
    }
    stoInput.innerText = stoCost;
    // update total storage
    const totalStorage = document.getElementById('total-price');
    totalStorage.innerText = stoCost + 1299;
    updateTotal();
}
function updateDelivery(delUpdate) {
    const delInput = document.getElementById('charge-total');
    let delCost = parseInt(delInput.innerText);
    if (delUpdate) {
        delCost = 20;
    }
    else {
        delCost = 0;
    }
    delInput.innerText = delCost;
    // update total delivery charge
    const totalCharge = document.getElementById('total-price');
    totalCharge.innerText = delCost + 1299;
    updateTotal();
}
// memory increase and decrease event -------------
document.getElementById('memory-plus').addEventListener('click', function () {
    updateProductCost(true);
});
document.getElementById('memory-minus').addEventListener('click', function () {
    updateProductCost(false);
});
// storage increase and decrease event ------------
document.getElementById('default-storage').addEventListener('click', function () {
    updateStorage(0);
});
document.getElementById('storage-plus').addEventListener('click', function () {
    updateStorage(100);
});
document.getElementById('storage-plus-new').addEventListener('click', function () {
    updateStorage(180);
});
// delivery charge increase and decrease ------------
document.getElementById('free-cost').addEventListener('click', function () {
    updateDelivery(false);
});
document.getElementById('delivery-charge').addEventListener('click', function () {
    updateDelivery(true);
});
// total and grand total -------------
function updateTotal() {
    const memoryQuantityInput = document.getElementById('memory-total');
    const storageQuantityInput = document.getElementById('storage-total');
    const deliveryCost = document.getElementById('charge-total');
    let memoryQuantity = parseInt(memoryQuantityInput.innerText);
    let storageQuantity = parseInt(storageQuantityInput.innerText);
    let delivery = parseInt(deliveryCost.innerText);
    let totalPrice = memoryQuantity + storageQuantity + delivery;
    document.getElementById('total-price').innerText = totalPrice + 1299;
    document.getElementById('total').innerText = totalPrice + 1299;
    promoCode();
}
// promo code 
function promoCode() {
    const couponField = document.getElementById('promo-code');
    let userCode = couponField.value;
    if (userCode == 'stevekaku') {
        couponField.value = '';
    }  
}
// ------------------------ js end ------------------------