/** Display year is kabisat and display month */

function getDays(month, year) {
    var kabisat = false;
    var days;
    if (isNaN(month) && isNaN(year)) {
        return 'inputan bulan & tahun harus dalam integer'
    } else if (isNaN(month)) {
        return 'inputan bulan harus dalam integer'
    } else if (isNaN(year)) {
        return 'inputan tahun harus dalam integer'
    }

    if (year % 400 != 0 && year % 100 != 0 && year % 4 == 0) {
        kabisat = true;
    } else if (year % 400 == 0) {
        kabisat = true;
    }
    if (month == 1) {
        days = 31
    } else if (month == 2 && kabisat == true) {
        days = 29
    } else if (month == 2 ) {
        days = 28
    } else if (month == 3) {
        days = 31
    } else if (month == 4) {
        days = 30
    } else if (month == 5) {
        days = 31
    } else if (month == 6) {
        days = 30
    } else if (month == 7) {
        days = 31
    } else if (month == 8) {
        days = 31
    } else if (month == 9) {
        days = 30
    } else if (month == 10) {
        days = 31
    } else if (month == 11) {
        days = 30
    } else if (month == 12) {
        days = 31
    }

    if (kabisat == true) {
        return `This month has ${days} days, ${year} adalah tahun kabisat`
    } else {
        return `This month has ${days} days`
    }
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari
