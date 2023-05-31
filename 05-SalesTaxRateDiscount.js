 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

function getSalesDiscount(price, tax, discount) {
    if (isNaN(price) && isNaN(tax) && isNaN(discount)) {
        return 'Price, Tax & Discount harus dalam angka'
    }else if (isNaN(tax)) {
        return 'Pajak harus dalam angka';
    } else if (isNaN(price)) {
        return 'Price harus dalam angka';
    }

    const discountCash = discount * price / 100;
    const priceAfterDiscount = price - discountCash;
    const taxCash = tax * priceAfterDiscount / 100;
    total = priceAfterDiscount + taxCash;
    return `Total Sales 	: Rp.${price}\nDiscount (${discount}%) 	: Rp.${discountCash}\nPriceAfterDiscount 	: Rp.${priceAfterDiscount}\nPajak (${tax}%) 	: Rp.${taxCash}\n----------------------------------\nTotalPayment 	: Rp.${total}`;
 }

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
    Total Sales 	: Rp.4500
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */
